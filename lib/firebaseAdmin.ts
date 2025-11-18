// import { cert, getApps, initializeApp } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";

// const projectId = process.env.FIREBASE_PROJECT_ID!;
// const clientEmail = process.env.FIREBASE_CLIENT_EMAIL!;
// let privateKey = process.env.FIREBASE_PRIVATE_KEY!;
// privateKey = privateKey.replace(/\\n/g, "\n");

// if (!getApps().length) {
//   initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
// }

// export const db = getFirestore();

// lib/firebaseAdmin.ts
// import admin from "firebase-admin";
// import { cert, ServiceAccount } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";

// function parseServiceAccountFromEnv(): ServiceAccount | null {
//   // 1) preferred: full JSON string in FIREBASE_SERVICE_ACCOUNT
//   const saJson = process.env.FIREBASE_SERVICE_ACCOUNT;
//   if (saJson) {
//     try {
//       const parsed = JSON.parse(saJson);
//       return {
//         projectId: parsed.project_id || parsed.projectId,
//         clientEmail: parsed.client_email || parsed.clientEmail,
//         privateKey: parsed.private_key || parsed.privateKey,
//       } as ServiceAccount;
//     } catch (e) {
//       // fallthrough to try the split env vars
//       // eslint-disable-next-line no-console
//       console.warn(
//         "FIREBASE_SERVICE_ACCOUNT exists but failed to parse JSON:",
//         (e as Error).message
//       );
//     }
//   }

//   // 2) fallback: split env vars (what you currently have)
//   const projectId = process.env.FIREBASE_PROJECT_ID;
//   const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
//   let privateKey = process.env.FIREBASE_PRIVATE_KEY;

//   if (projectId && clientEmail && privateKey) {
//     // Replace literal \n sequences with newlines (common when storing in env)
//     privateKey = privateKey.replace(/\\n/g, "\n");
//     return { projectId, clientEmail, privateKey } as ServiceAccount;
//   }

//   return null;
// }

// const serviceAccount = parseServiceAccountFromEnv();

// if (!admin.apps.length) {
//   if (!serviceAccount) {
//     if (process.env.NODE_ENV !== "production") {
//       // helpful when developing locally
//       // eslint-disable-next-line no-console
//       console.warn(
//         "Firebase Admin SDK not initialized — service account not found in env. " +
//           "Set FIREBASE_SERVICE_ACCOUNT JSON or FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY."
//       );
//     }
//   } else {
//     try {
//       admin.initializeApp({
//         credential: cert(serviceAccount),
//       });
//       // eslint-disable-next-line no-console
//       console.log("Firebase Admin initialized");
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.error(
//         "Failed to initialize Firebase Admin:",
//         (e as Error).message
//       );
//     }
//   }
// }

// export const db = getFirestore();
// export { admin };

// lib/firebaseAdmin.ts
import admin from "firebase-admin";
import { cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

/**
 * Try parsing the service account from either:
 *  - FIREBASE_SERVICE_ACCOUNT JSON string (preferred)
 *  - split env vars FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY
 */
function parseServiceAccountFromEnv(): ServiceAccount | null {
  const saJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (saJson) {
    try {
      const parsed = JSON.parse(saJson);
      return {
        projectId: parsed.project_id || parsed.projectId,
        clientEmail: parsed.client_email || parsed.clientEmail,
        privateKey: parsed.private_key || parsed.privateKey,
      } as ServiceAccount;
    } catch (e) {
      // fallthrough to split vars
      // eslint-disable-next-line no-console
      console.warn(
        "FIREBASE_SERVICE_ACCOUNT exists but failed to parse JSON:",
        (e as Error).message
      );
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (projectId && clientEmail && privateKey) {
    // Common issue: private key saved with literal \n sequences
    privateKey = privateKey.replace(/\\n/g, "\n");
    return { projectId, clientEmail, privateKey } as ServiceAccount;
  }

  return null;
}

const serviceAccount = parseServiceAccountFromEnv();

if (!admin.apps.length) {
  if (!serviceAccount) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        "Firebase Admin SDK not initialized — service account not found in env. " +
          "Set FIREBASE_SERVICE_ACCOUNT JSON or FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY."
      );
    }
  } else {
    try {
      admin.initializeApp({
        credential: cert(serviceAccount),
      });
      // eslint-disable-next-line no-console
      console.log("Firebase Admin initialized");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(
        "Failed to initialize Firebase Admin:",
        (e as Error).message
      );
    }
  }
}

/**
 * Export `admin` namespace and `db`.
 * db will be undefined when the Admin SDK wasn't initialized (helps avoid runtime throws).
 * Consumers should check for db and handle gracefully (we already added these checks in routes).
 */
export { admin };
// `db` can be undefined if admin wasn't initialized (helps avoid throws at import time)
export const db: FirebaseFirestore.Firestore | undefined = admin.apps.length
  ? getFirestore()
  : undefined;

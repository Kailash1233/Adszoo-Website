import admin from "firebase-admin";
import { cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

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
    privateKey = privateKey.replace(/\\n/g, "\n");
    return { projectId, clientEmail, privateKey } as ServiceAccount;
  }

  return null;
}

const serviceAccount = parseServiceAccountFromEnv();

if (!admin.apps.length) {
  if (!serviceAccount) {
    if (process.env.NODE_ENV !== "production") {
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
      console.log("Firebase Admin initialized");
    } catch (e) {
      console.error(
        "Failed to initialize Firebase Admin:",
        (e as Error).message
      );
    }
  }
}

export { admin };
export const db: FirebaseFirestore.Firestore | undefined = admin.apps.length
  ? getFirestore()
  : undefined;

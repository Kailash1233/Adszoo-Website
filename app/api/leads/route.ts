// // app/api/leads/route.ts
// import { NextRequest, NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

// const ALLOWED_ORIGINS = [
//   "http://localhost:8080",
//   "http://localhost:3000",
//   "https://adszoo.in",
// ];

// function corsHeaders(origin?: string) {
//   const allowOrigin =
//     origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
//   return {
//     "Access-Control-Allow-Origin": allowOrigin,
//     "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
//     "Access-Control-Allow-Headers": "Content-Type",
//   };
// }

// // quick preflight handler
// export async function OPTIONS(req: NextRequest) {
//   const origin = req.headers.get("origin") || undefined;
//   return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
// }

// // GET: list recent leads (public read for dev)
// export async function GET(req: NextRequest) {
//   const origin = req.headers.get("origin") || undefined;
//   const headers = corsHeaders(origin);

//   try {
//     // lazy import so OPTIONS stays fast and safe
//     const { db } = await import("@/lib/firebaseAdmin");
//     if (!db)
//       return NextResponse.json(
//         { ok: false, error: "db_missing" },
//         { status: 500, headers }
//       );

//     const url = new URL(req.url);
//     const limit = Math.min(Number(url.searchParams.get("limit") || 100), 500);
//     // read from canonical collection
//     const snapshot = await db
//       .collection("adszoo_leads")
//       .orderBy("created_at", "desc")
//       .limit(limit)
//       .get();
//     const leads = snapshot.docs.map((doc: any) => {
//       const data = doc.data() || {};
//       const toISO = (v: any) =>
//         v?.toDate ? v.toDate().toISOString() : v || null;
//       return {
//         id: doc.id,
//         ...data,
//         created_at: toISO(data.created_at),
//         contacted_at: toISO(data.contacted_at),
//         closed_at: toISO(data.closed_at),
//       };
//     });
//     return NextResponse.json({ ok: true, leads }, { headers });
//   } catch (err) {
//     console.error("public GET /api/leads error:", err);
//     return NextResponse.json(
//       { ok: false, error: "server_error" },
//       { status: 500, headers: corsHeaders() }
//     );
//   }
// }

// // POST: accept new lead
// export async function POST(req: NextRequest) {
//   const origin = req.headers.get("origin") || undefined;
//   const headers = corsHeaders(origin);

//   const text = await req.text();
//   if (!text || !text.trim())
//     return NextResponse.json(
//       { ok: false, error: "empty_body" },
//       { status: 400, headers }
//     );

//   let payload;
//   try {
//     payload = JSON.parse(text);
//   } catch (e) {
//     return NextResponse.json(
//       { ok: false, error: "invalid_json" },
//       { status: 400, headers }
//     );
//   }

//   const { name, email, phone } = payload || {};
//   if (!name && !email && !phone) {
//     return NextResponse.json(
//       { ok: false, error: "missing_contact" },
//       { status: 400, headers }
//     );
//   }

//   try {
//     const { db, admin } = await import("@/lib/firebaseAdmin");
//     if (!db)
//       return NextResponse.json(
//         { ok: false, error: "db_missing" },
//         { status: 500, headers }
//       );

//     const lead = {
//       name: name || null,
//       email: email || null,
//       phone: phone || null,
//       source: payload.source || "website",
//       utm_source: payload.utm_source || null,
//       utm_medium: payload.utm_medium || null,
//       utm_campaign: payload.utm_campaign || null,
//       landing_page: payload.landing_page || null,
//       metadata: payload.metadata || {},
//       status: "new",
//       notes: [],
//       assigned_to: null,
//       value_estimate: null,
//       created_at: admin?.firestore?.FieldValue?.serverTimestamp
//         ? admin.firestore.FieldValue.serverTimestamp()
//         : new Date(),
//       contacted_at: null,
//       closed_at: null,
//       referrer: req.headers.get("referer") || null,
//     };

//     const COLLECTION = "adszoo_leads";
//     const docRef = await db.collection(COLLECTION).add(lead);
//     return NextResponse.json(
//       { ok: true, id: docRef.id },
//       { status: 201, headers }
//     );
//   } catch (err) {
//     console.error("public POST /api/leads error:", err);
//     return NextResponse.json(
//       { ok: false, error: "server_error" },
//       { status: 500, headers }
//     );
//   }
// }

// app/api/leads/route.ts
// app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "http://localhost:8080", // Vite dev
  "http://localhost:3000", // Next dev
  "https://adszoo.in",
];

function corsHeaders(origin?: string) {
  const allowOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,x-admin-key",
  };
}

function isAdmin(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  return key && key === process.env.ADMIN_API_KEY;
}

// OPTIONS (preflight)
export async function OPTIONS(req: NextRequest) {
  console.log(
    "OPTIONS /api/admin/leads headers:",
    Object.fromEntries(req.headers.entries())
  );
  const origin = req.headers.get("origin") || undefined;
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

// GET - public list (or single if ?id=)
export async function GET(req: NextRequest) {
  console.log(
    "GET /api/admin/leads headers:",
    Object.fromEntries(req.headers.entries())
  );
  const origin = req.headers.get("origin") || undefined;
  const headers = corsHeaders(origin);

  try {
    const { db } = await import("@/lib/firebaseAdmin");
    if (!db) {
      console.error("GET /api/leads: db not initialized");
      return NextResponse.json(
        { ok: false, error: "db_missing" },
        { status: 500, headers }
      );
    }

    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const limit = Math.min(Number(url.searchParams.get("limit") || 100), 500);

    if (id) {
      // single
      const doc = await db.collection("adszoo_leads").doc(id).get();
      if (!doc.exists)
        return NextResponse.json(
          { ok: false, error: "not_found" },
          { status: 404, headers }
        );
      const data = doc.data() || {};
      const toISO = (v: any) =>
        v?.toDate ? v.toDate().toISOString() : v || null;
      return NextResponse.json(
        {
          ok: true,
          lead: {
            id: doc.id,
            ...data,
            created_at: toISO(data.created_at),
            contacted_at: toISO(data.contacted_at),
            closed_at: toISO(data.closed_at),
          },
        },
        { headers }
      );
    }

    // list
    const snapshot = await db
      .collection("adszoo_leads")
      .orderBy("created_at", "desc")
      .limit(limit)
      .get();
    const leads = snapshot.docs.map((doc) => {
      const data = doc.data() || {};
      const toISO = (v: any) =>
        v?.toDate ? v.toDate().toISOString() : v || null;
      return {
        id: doc.id,
        ...data,
        created_at: toISO(data.created_at),
        contacted_at: toISO(data.contacted_at),
        closed_at: toISO(data.closed_at),
      };
    });

    return NextResponse.json({ ok: true, leads }, { headers });
  } catch (err) {
    console.error("public GET /api/leads error:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// POST - public (accept leads from website/forms)
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || undefined;
  const headers = corsHeaders(origin);

  const text = await req.text();
  if (!text || !text.trim())
    return NextResponse.json(
      { ok: false, error: "empty_body" },
      { status: 400, headers }
    );
  let payload;
  try {
    payload = JSON.parse(text);
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400, headers }
    );
  }

  const { name, email, phone } = payload || {};
  if (!name && !email && !phone)
    return NextResponse.json(
      { ok: false, error: "missing_contact" },
      { status: 400, headers }
    );

  try {
    const { db, admin } = await import("@/lib/firebaseAdmin");
    if (!db)
      return NextResponse.json(
        { ok: false, error: "db_missing" },
        { status: 500, headers }
      );

    const lead = {
      name: name || null,
      email: email || null,
      phone: phone || null,
      source: payload.source || "website",
      utm_source: payload.utm_source || null,
      utm_medium: payload.utm_medium || null,
      utm_campaign: payload.utm_campaign || null,
      landing_page: payload.landing_page || null,
      metadata: payload.metadata || {},
      status: "new",
      notes: [],
      assigned_to: null,
      value_estimate: null,
      created_at: admin?.firestore?.FieldValue?.serverTimestamp
        ? admin.firestore.FieldValue.serverTimestamp()
        : new Date(),
      contacted_at: null,
      closed_at: null,
      referrer: req.headers.get("referer") || null,
    };

    const docRef = await db.collection("adszoo_leads").add(lead);
    return NextResponse.json(
      { ok: true, id: docRef.id },
      { status: 201, headers }
    );
  } catch (err) {
    console.error("public POST /api/leads error:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500, headers }
    );
  }
}

// PATCH - admin only (requires x-admin-key)
export async function PATCH(req: NextRequest) {
  const origin = req.headers.get("origin") || undefined;
  const headers = corsHeaders(origin);

  if (!isAdmin(req))
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers }
    );

  const text = await req.text();
  if (!text || !text.trim())
    return NextResponse.json(
      { ok: false, error: "empty_body" },
      { status: 400, headers }
    );
  let payload;
  try {
    payload = JSON.parse(text);
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400, headers }
    );
  }

  const { id, status, note, assigned_to, name, email, phone, value_estimate } =
    payload || {};
  if (!id)
    return NextResponse.json(
      { ok: false, error: "missing_id" },
      { status: 400, headers }
    );

  try {
    const { db, admin } = await import("@/lib/firebaseAdmin");
    if (!db)
      return NextResponse.json(
        { ok: false, error: "db_missing" },
        { status: 500, headers }
      );

    const docRef = db.collection("adszoo_leads").doc(id);
    const doc = await docRef.get();
    if (!doc.exists)
      return NextResponse.json(
        { ok: false, error: "not_found" },
        { status: 404, headers }
      );

    const updates: any = {};

    // top-level timestamps can use FieldValue.serverTimestamp() safely
    if (status) {
      updates.status = status;
      if (status === "contacted")
        updates.contacted_at = admin.firestore.FieldValue.serverTimestamp();
      if (status === "closed_won" || status === "closed_lost")
        updates.closed_at = admin.firestore.FieldValue.serverTimestamp();
    }

    // For notes, avoid using FieldValue.serverTimestamp() inside arrayUnion.
    // Use a concrete timestamp instead (admin.firestore.Timestamp.now() gives a concrete Timestamp).
    if (note) {
      const noteObj = {
        id: String(Date.now()),
        text: note,
        // use a concrete timestamp object rather than a sentinel
        created_at:
          admin.firestore.Timestamp && admin.firestore.Timestamp.now
            ? admin.firestore.Timestamp.now()
            : new Date().toISOString(),
      };
      updates.notes = admin.firestore.FieldValue.arrayUnion(noteObj);
    }

    if (assigned_to !== undefined) updates.assigned_to = assigned_to;
    if (name !== undefined) updates.name = name;
    if (email !== undefined) updates.email = email;
    if (phone !== undefined) updates.phone = phone;
    if (value_estimate !== undefined) updates.value_estimate = value_estimate;

    await docRef.update(updates);
    const refreshed = await docRef.get();
    const data = refreshed.data() || {};
    const toISO = (v: any) =>
      v?.toDate ? v.toDate().toISOString() : v || null;

    return NextResponse.json(
      {
        ok: true,
        lead: {
          id: refreshed.id,
          ...data,
          created_at: toISO(data.created_at),
          contacted_at: toISO(data.contacted_at),
          closed_at: toISO(data.closed_at),
        },
      },
      { headers }
    );
  } catch (err) {
    console.error("admin PATCH error:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500, headers }
    );
  }
}

// DELETE - admin only
export async function DELETE(req: NextRequest) {
  const origin = req.headers.get("origin") || undefined;
  const headers = corsHeaders(origin);

  if (!isAdmin(req))
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401, headers }
    );

  const text = await req.text();
  let payload;
  try {
    payload = text ? JSON.parse(text) : {};
  } catch (e) {
    payload = {};
  }

  try {
    const { db } = await import("@/lib/firebaseAdmin");
    if (!db)
      return NextResponse.json(
        { ok: false, error: "db_missing" },
        { status: 500, headers }
      );

    const { id } = payload || {};
    if (!id)
      return NextResponse.json(
        { ok: false, error: "missing_id" },
        { status: 400, headers }
      );

    await db.collection("adszoo_leads").doc(id).delete();
    return NextResponse.json({ ok: true }, { headers });
  } catch (err) {
    console.error("admin DELETE error:", err);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500, headers }
    );
  }
}

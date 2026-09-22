const limits = { name: 100, phone: 40, email: 254, city: 100, interest: 100, squareFootage: 30, timeline: 80, message: 4000 } as const;

type ContactPayload = { name: string; phone: string; email: string; city: string; interest: string; squareFootage?: string; timeline?: string; message: string };

function text(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;
  const payload = { name: text(body.name, limits.name), phone: text(body.phone, limits.phone), email: text(body.email, limits.email), city: text(body.city, limits.city), interest: text(body.interest, limits.interest), squareFootage: text(body.squareFootage, limits.squareFootage), timeline: text(body.timeline, limits.timeline), message: text(body.message, limits.message) };
  if (!payload.name || payload.name.length > limits.name || payload.phone.replace(/\D/g, "").length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || !payload.city || !payload.interest || !payload.message) return null;
  if (payload.squareFootage && !/^\d{1,7}(?:\.\d{1,2})?$/.test(payload.squareFootage)) return null;
  return payload;
}

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request body." }, { status: 400 }); }
  const payload = parsePayload(body);
  if (!payload) return Response.json({ error: "Please provide valid contact details and project information." }, { status: 400 });
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return Response.json({ error: "Contact service is not configured." }, { status: 503 });
  try {
    const upstream = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: accessKey, subject: "New flooring estimate request — US Flooring Website", from_name: "US Flooring Website", replyto: payload.email, name: payload.name, email: payload.email, phone: payload.phone, project_city: payload.city, flooring_interest: payload.interest, square_footage: payload.squareFootage || "Not provided", timeline: payload.timeline || "Not provided", message: payload.message }), cache: "no-store" });
    if (!upstream.ok) return Response.json({ error: "Contact service is temporarily unavailable." }, { status: 502 });
    const result = await upstream.json().catch(() => null) as { success?: boolean } | null;
    if (!result?.success) return Response.json({ error: "Contact service is temporarily unavailable." }, { status: 502 });
    return Response.json({ ok: true }, { status: 200 });
  } catch { return Response.json({ error: "Contact service is temporarily unavailable." }, { status: 502 }); }
}

export function GET() { return Response.json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } }); }

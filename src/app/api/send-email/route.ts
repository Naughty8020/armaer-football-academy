import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("API HIT /api/send-email"); // 確認
    const body = await req.json();
    console.log("Request body:", body);

    const { firstName, lastName, email, phone, message } = body;

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          phone,
          message,
        },
      }),
    });

    const text = await res.text();
    console.log("EmailJS response:", res.status, text);

    if (!res.ok) throw new Error("EmailJS送信エラー");

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API Error:", err.message);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const email = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  await email.sendMail({
    from: `Contact Me Form <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_TO,
    subject: `[CMF] ${body.subject}`,
    html: `
<p>Email: ${body.email}</p>
<p>Name: ${body.name}</p>
<p>Subject: ${body.subject}</p>
<br />
<p>${body.message}</p>
    `,
  });

  return NextResponse.json({ message: "success" });
}
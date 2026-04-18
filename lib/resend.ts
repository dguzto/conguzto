import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "placeholder");
}

export async function sendContactEmail({ name, email, intent, message }: {
  name: string; email: string; intent: string; message: string;
}) {
  const contactEmail = process.env.CONTACT_EMAIL || "diego@conguzto.com";
  return getResend().emails.send({
    from: "Con Guzto <noreply@conguzto.com>",
    to: contactEmail,
    replyTo: email,
    subject: `[conguzto.com] ${intent} — ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nIntención: ${intent}\n\nMensaje:\n${message}`,
  });
}

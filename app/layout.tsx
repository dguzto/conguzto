import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Con Guzto",
  description: "Marketing que puedes aplicar a tu negocio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

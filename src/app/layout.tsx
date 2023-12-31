import type { Metadata } from "next";
import "./globals.css";
import { DebugLinks } from "@/components/DebugLinks";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-sky-100">
        <main>{children}</main>
        <DebugLinks />
      </body>
    </html>
  );
}

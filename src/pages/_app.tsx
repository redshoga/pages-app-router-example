import type { AppProps } from "next/app";
import "./globals.css";
import { DebugLinks } from "@/components/DebugLinks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-pink-100 h-screen">
      <Component {...pageProps} />
      <DebugLinks />
    </main>
  );
}

export default MyApp;

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainGuard – Search Domains Without Registrars Stealing Them",
  description: "Anonymously check domain availability through rotating proxies and multiple WHOIS APIs to prevent registrar front-running."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="22dcf299-9d6b-48b2-a0b2-7ec7c876a287"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

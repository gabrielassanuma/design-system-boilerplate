import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System Starter",
  description: "Design system foundation with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

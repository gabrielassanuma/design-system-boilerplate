import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System Starter",
  description: "Base de design system com Next.js e shadcn/ui",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

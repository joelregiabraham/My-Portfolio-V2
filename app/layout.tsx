import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joel Regi Abraham - Computer Science Honours Student",
  description:
    "Portfolio of Joel Regi Abraham, Computer Science Honours student specializing in full-stack development, IT support, and modern web technologies.",
  keywords: "Joel Regi Abraham, Computer Science, Full Stack Developer, React, Node.js, Python, Java",
  authors: [{ name: "Joel Regi Abraham" }],
  openGraph: {
    title: "Joel Regi Abraham - Computer Science Honours Student",
    description: "Portfolio showcasing projects and experience in full-stack development and IT support.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

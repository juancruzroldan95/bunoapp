import "./globals.css"
import type { Metadata } from "next"
import { lusitana } from "@/app/ui/fonts"
import PageHeader from "@/components/page-header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Buno",
  description: "Encontrá a tu abogado de confianza",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${lusitana.className} antialiased`}>
        <PageHeader />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

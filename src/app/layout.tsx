import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buno',
  // description: "Encontrá a tu abogado de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}

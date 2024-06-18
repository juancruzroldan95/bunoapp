import type { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import './globals.css';
import PageHeader from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Buno',
  // description: "Encontrá a tu abogado de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}

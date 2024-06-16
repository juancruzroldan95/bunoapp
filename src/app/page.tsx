import Image from 'next/image';
import { inter, lusitana } from './ui/fonts';

export default function HomePage() {
  return (
    <main>
      <p
        className={`${inter.className} text-xl text-center text-slate-800 md:text-3xl md:leading-normal`}
      >
        <strong>Bienvenido a Buno.</strong> Encontrá a tu abogado de confianza
      </p>
    </main>
  );
}

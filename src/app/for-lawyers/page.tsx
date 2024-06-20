import React from 'react';
import { inter } from '../ui/fonts';
import { Button } from '@/components/ui/button';

export default function ForLawyersPage() {
  return (
    <main className="mx-auto">
      <section
        id="hero-for-lawyers"
        className="py-12 bg-slate-100 flex flex-col justify-center items-center"
      >
        <div className="lg:w-1/2 px-4">
          <h2
            className={`${inter.className} text-4xl font-bold text-center text-slate-800`}
          >
            <strong>Crecé profesionalmente</strong>
          </h2>
          <p className="text-2xl mt-4 text-center text-slate-800">
            Unite a la mejor comunidad de abogados de Buenos Aires, aumentá tu
            cartera de clientes y generá más ingresos.
          </p>
          <div className="mt-4 flex justify-center">
            <Button size="lg" className="text-xl font-bold">
              Aplicá como abogado
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

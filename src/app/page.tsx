import Image from 'next/image';
import { inter, lusitana } from './ui/fonts';
import { Button } from '@/components/ui/button';

const legalCategories = [
  { name: 'Familia', icon: '👪' },
  { name: 'Penal', icon: '⚖️' },
  { name: 'Corporativo', icon: '🏢' },
  { name: 'Propiedad intelectual', icon: '💡' },
  { name: 'Migraciones', icon: '🛂' },
  { name: 'Trabajo', icon: '💼' },
  { name: 'Desalojo', icon: '🏡' },
  { name: 'Patria potestad', icon: '🌳' },
];

export default function HomePage() {
  return (
    <main className="mx-auto">
      <section
        id="hero"
        className="py-12 bg-slate-800 flex flex-col justify-center items-center"
      >
        <div className="lg:w-1/2 px-4">
          <h2
            className={`${inter.className} text-4xl font-bold text-center text-slate-100`}
          >
            <strong>Bienvenido a Buno</strong>
          </h2>
          <p className="text-2xl mt-4 text-center text-slate-100">
            Ya sea que necesites una consulta única o un departamento legal
            independiente completo, la red de abogados experimentados de Buno lo
            tiene cubierto.
          </p>
          <div className="mt-4 lg:flex lg:flex-row justify-center items-center">
            <p className="text-2xl font-bold text-center text-slate-100">
              ¿De dónde sos?
            </p>
            <div className="flex justify-center mt-2 lg:m-0">
              <Button
                size="lg"
                variant="outline"
                className="text-xl font-bold mx-2"
              >
                CABA
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl font-bold mx-2"
              >
                Provincia
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="legal-areas"
        className="py-12 bg-slate-100 flex flex-col justify-center items-center"
      >
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nuestras áreas legales
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {legalCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-lg aspect-square"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

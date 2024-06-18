'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function MobileMenu({ onClick }: { onClick: () => void }) {
  return (
    <section
      id="mobile-menu"
      className="absolute bg-white z-40 w-full text-xl flex flex-col justify-content-center origin-top animate-open-menu"
    >
      <nav
        onClick={onClick}
        className="flex flex-col min-h-screen items-center py-8"
        aria-label="mobile"
      >
        <Link
          href="/our-lawyer"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Nuestros abogados
        </Link>
        <Link
          href="/for-lawyers"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Para abogados
        </Link>
        <Link
          href="/about-us"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Conocenos
        </Link>
        <Link
          href="/login"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Iniciar sesión
        </Link>
        <Link
          href="/sign-up"
          className="w-full text-center py-6 hover:opacity-90 font-bold"
        >
          Registrate
        </Link>
      </nav>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-100 text-white h-full w-64 flex flex-col">
      <div className="p-6 flex items-center space-x-2">
        <Image
          src="/buno-coffee-bar-transparent-2.png"
          alt="Logo"
          width={140}
          height={40}
        />
      </div>
      <ul className="flex flex-col mt-8 space-y-2">
        <li>
          <Link href="/dashboard" passHref>
            <div className="flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer">
              <span className="ml-2 text-slate-800">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/cases" passHref>
            <div className="flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer">
              <span className="ml-2 text-slate-800">Cases</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile" passHref>
            <div className="flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer">
              <span className="ml-2 text-slate-800">My Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

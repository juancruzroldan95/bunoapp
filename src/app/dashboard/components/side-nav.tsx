'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
          <Link href="/dashboard">
            <div
              className={clsx(
                'flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer',
                {
                  'bg-slate-300': pathname === '/dashboard',
                }
              )}
            >
              <p className="ml-2 text-slate-800">Home</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/cases">
            <div
              className={clsx(
                'flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer',
                {
                  'bg-slate-300': pathname === '/cases',
                }
              )}
            >
              <p className="ml-2 text-slate-800">Cases</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <div
              className={clsx(
                'flex items-center p-2 hover:bg-slate-300 rounded-full cursor-pointer',
                {
                  'bg-slate-300': pathname === '/profile',
                }
              )}
            >
              <p className="ml-2 text-slate-800">My Profile</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

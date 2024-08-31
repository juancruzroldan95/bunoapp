'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { Button } from './ui/button';
import HamburgerBtn from './hamburger-btn';
import MobileMenu from './mobile-menu';
import { CreateCaseModal } from './CreateCaseModal';

export default function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggleBtn, setToggleBtn] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!toggleBtn) setToggleBtn('toggle-btn');
    else setToggleBtn('');
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white">
      <section className="xl:max-w-7xl m-auto p-4 flex justify-between items-center">
        <div className="flex items-center w-[258px]">
          <Link href="/">
            <Image
              src="/buno-coffee-bar-transparent-2.png"
              alt="Logo"
              width={140}
              height={40}
            />
          </Link>
        </div>

        <HamburgerBtn onClick={toggleMobileMenu} toggleBtn={toggleBtn} />

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/howitworks" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Cómo funciona
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/our-lawyers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Nuestros abogados
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/for-lawyers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Para abogados
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex space-x-4">
          <CreateCaseModal />
          <Link href="/login">
            <Button variant="ghost">Iniciar sesión</Button>
          </Link>
        </div>
      </section>
      {isMobileMenuOpen && <MobileMenu onClick={toggleMobileMenu} />}
    </header>
  );
}

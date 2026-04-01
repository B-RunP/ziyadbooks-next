'use client';

import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/ziyadbooks.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="shrink-0 max-w-[170px] sm:max-w-[180px] md:max-w-[220px]">
            <Image
              src={logo}
              alt="Ziyadbooks Logo"
              width={220}
              height={60}
              priority
              className="h-9 w-auto object-contain md:h-12"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="font-medium text-emerald-800 transition-colors hover:text-emerald-600"
            >
              Home
            </a>
            <a
              href="#kategori"
              className="text-gray-700 transition-colors hover:text-emerald-600"
            >
              Kategori
            </a>
            <a
              href="#bestseller"
              className="text-gray-700 transition-colors hover:text-emerald-600"
            >
              Best Seller
            </a>
            <a
              href="#promo"
              className="text-gray-700 transition-colors hover:text-emerald-600"
            >
              Promo
            </a>
          </div>

          {/* Desktop Search */}
          <div className="mx-8 hidden max-w-md flex-1 md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Cari buku islami..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="relative rounded-lg p-2 transition-colors hover:bg-emerald-50">
              <ShoppingCart className="h-6 w-6 text-emerald-700" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                3
              </span>
            </button>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="rounded-lg p-2 transition-colors hover:bg-emerald-50 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-emerald-700" />
              ) : (
                <Menu className="h-6 w-6 text-emerald-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari buku islami..."
              className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'
            }`}
        >
          <div className="space-y-2 rounded-2xl border border-emerald-100 bg-white p-3 shadow-lg">
            <a
              href="#"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-medium text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              Home
            </a>
            <a
              href="#kategori"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              Kategori
            </a>
            <a
              href="#bestseller"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              Best Seller
            </a>
            <a
              href="#promo"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              Promo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, PhoneCall, ShieldCheck } from 'lucide-react';
import { SERVICE_URLS, LOCATION_URLS } from '@/lib/data';
import pagesData from '@/data/pages.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const pathname = usePathname();

  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url));
  const locations = pagesData.filter(p => LOCATION_URLS.includes(p.url));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#081C38] to-[#1363DF] flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-[#081C38] tracking-tight leading-tight">
                Crossroads
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#1363DF] tracking-wide uppercase">
                Gutter Cleaning Victoria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-[#1363DF] ${
                pathname === '/' ? 'text-[#1363DF]' : 'text-gray-700'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#1363DF] py-2 ${
                  SERVICE_URLS.includes(pathname) ? 'text-[#1363DF]' : 'text-gray-700'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-2 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                    Gutter & Drainage Services
                  </div>
                  <div className="max-h-96 overflow-y-auto pr-1">
                    {services.map(s => (
                      <Link
                        key={s.url}
                        href={s.url}
                        className="block px-3 py-2 text-xs font-medium text-gray-700 hover:text-[#1363DF] hover:bg-blue-50 rounded-lg transition"
                        onClick={() => setServicesDropdown(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/areas-we-serve"
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#1363DF] py-2 ${
                  pathname === '/areas-we-serve' || LOCATION_URLS.includes(pathname)
                    ? 'text-[#1363DF]'
                    : 'text-gray-700'
                }`}
              >
                Areas We Serve
                <ChevronDown className="w-4 h-4" />
              </Link>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-2 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-1">
                    Service Areas
                  </div>
                  <Link
                    href="/areas-we-serve"
                    className="block px-3 py-2 text-xs font-bold text-[#1363DF] hover:bg-blue-50 rounded-lg transition"
                    onClick={() => setLocationsDropdown(false)}
                  >
                    View All Locations
                  </Link>
                  {locations.map(loc => (
                    <Link
                      key={loc.url}
                      href={loc.url}
                      className="block px-3 py-2 text-xs font-medium text-gray-700 hover:text-[#1363DF] hover:bg-blue-50 rounded-lg transition"
                      onClick={() => setLocationsDropdown(false)}
                    >
                      {loc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faq"
              className={`text-sm font-semibold transition-colors hover:text-[#1363DF] ${
                pathname === '/faq' ? 'text-[#1363DF]' : 'text-gray-700'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-semibold transition-colors hover:text-[#1363DF] ${
                pathname.startsWith('/blog') ? 'text-[#1363DF]' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-[#1363DF] ${
                pathname === '/contact' ? 'text-[#1363DF]' : 'text-gray-700'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13615791699"
              className="flex items-center gap-2 text-sm font-bold text-[#081C38] hover:text-[#1363DF] transition"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 text-[#1363DF] flex items-center justify-center">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span>+13615791699</span>
            </a>

            <a
              href="tel:+13615791699"
              className="bg-[#1363DF] hover:bg-[#0D47A1] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-yellow-400" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+13615791699"
              className="p-2 rounded-lg bg-blue-50 text-[#1363DF]"
              aria-label="Call Now"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            className="block py-2 text-base font-semibold text-gray-800 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Services</div>
            <div className="grid grid-cols-1 pl-2 gap-1 py-1">
              {services.map(s => (
                <Link
                  key={s.url}
                  href={s.url}
                  className="py-1.5 text-sm text-gray-600 hover:text-[#1363DF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Areas We Serve</div>
            <div className="grid grid-cols-2 pl-2 gap-1 py-1">
              <Link
                href="/areas-we-serve"
                className="col-span-2 py-1.5 text-sm font-semibold text-[#1363DF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Service Areas
              </Link>
              {locations.map(loc => (
                <Link
                  key={loc.url}
                  href={loc.url}
                  className="py-1.5 text-sm text-gray-600 hover:text-[#1363DF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {loc.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/faq"
            className="block py-2 text-base font-semibold text-gray-800 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>

          <Link
            href="/blog"
            className="block py-2 text-base font-semibold text-gray-800 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="block py-2 text-base font-semibold text-gray-800 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <a
              href="tel:+13615791699"
              className="flex items-center justify-center gap-2 w-full text-center bg-[#1363DF] hover:bg-[#0D47A1] text-white font-bold py-3 rounded-xl shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneCall className="w-4 h-4 text-yellow-400" />
              <span>Call +13615791699</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

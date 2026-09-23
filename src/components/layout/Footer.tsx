'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { SERVICE_URLS, LOCATION_URLS } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url)).slice(0, 7);
  const locations = pagesData.filter(p => LOCATION_URLS.includes(p.url)).slice(0, 6);

  return (
    <footer className="bg-[#081C38] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800/80">
          {/* Col 1: About & Quick Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1363DF] flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <span className="block font-bold text-lg leading-tight text-white">
                  Crossroads Gutter Cleaning
                </span>
                <span className="text-xs text-blue-400 uppercase tracking-wider font-semibold">
                  Victoria, Texas
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier local partner for dependable rainwater management and roofline protection throughout Victoria, Texas, and the greater Crossroads area.
            </p>

            <div className="space-y-2.5 pt-2">
              <a
                href="tel:+13615791699"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 transition"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-yellow-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">+13615791699</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Victoria, TX & Surrounding Crossroads Areas</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Mon–Sat: 7:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1363DF]"></span>
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.url}>
                  <Link
                    href={s.url}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gutter-cleaning"
                  className="text-xs font-semibold text-blue-400 hover:text-white transition inline-block pt-1"
                >
                  View all gutter services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas & Info */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1363DF]"></span>
              Areas We Serve
            </h4>
            <ul className="space-y-2.5">
              {locations.map(loc => (
                <li key={loc.url}>
                  <Link
                    href={loc.url}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                    <span>{loc.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas-we-serve"
                  className="text-xs font-semibold text-blue-400 hover:text-white transition inline-block pt-1"
                >
                  All Crossroads locations &rarr;
                </Link>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-2 text-xs">
                <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
                <span className="text-gray-600">•</span>
                <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                <span className="text-gray-600">•</span>
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>

          {/* Col 4: Google Map on Footer */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Find Us In Victoria, TX
            </h4>
            <p className="text-xs text-gray-400">
              Locally based in Victoria, Texas. Serving the entire Golden Crescent region.
            </p>

            {/* Embedded Google Map */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg border border-gray-700/80 bg-gray-900 group">
              <iframe
                title="Crossroads Gutter Cleaning Victoria Google Map"
                src="https://maps.google.com/maps?q=Crossroads+Gutter+Cleaning+Victoria,+Victoria,+TX&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <a
                href="https://maps.app.goo.gl/QkwzsCMjsAGWDP397"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-[#1363DF] hover:bg-[#0D47A1] text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow flex items-center gap-1 transition"
              >
                <span>View Full Map</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/QkwzsCMjsAGWDP397"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Crossroads Gutter Cleaning Victoria on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Crossroads Gutter Cleaning Victoria. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/areas-we-serve" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>

          {/* Yellow Scroll To Top button matching Image 1 */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 flex items-center justify-center font-bold shadow-md hover:scale-105 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

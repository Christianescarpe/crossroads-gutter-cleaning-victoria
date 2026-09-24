import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { PageItem, extractH1 } from '@/lib/data';

export default function ServiceHero({ page }: { page: PageItem }) {
  const h1Text = extractH1(page.contentHtml, page.title);

  return (
    <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center bg-[#081C38] text-white overflow-hidden">
      {/* Background Image with Dark Gradient matching Image 2 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/man-cleans-leaves-from-gutters-in-autumn.webp"
          alt={h1Text}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C38] via-[#081C38]/90 to-[#0B2545]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <Link href="/gutter-cleaning" className="hover:text-white transition">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-yellow-400 font-bold truncate max-w-xs">{page.title}</span>
        </nav>

        <div className="max-w-3xl">
          {/* Exact H1 tagged from the sheet on the service hero banner */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            {h1Text}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            {page.metaDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+13615791699"
              className="bg-[#FDB813] hover:bg-[#E5A30B] text-gray-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition text-sm sm:text-base flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +13615791699</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getHomePage, extractH1, PageItem } from '@/lib/data';

export default function HeroBanner({ page }: { page?: PageItem }) {
  const currentData = page || getHomePage();
  const h1Text = extractH1(currentData.contentHtml, currentData.title);

  // Extract up to 3 bullet points verbatim from the sheet content if available
  const bulletMatches = [...currentData.contentHtml.matchAll(/<li>([\s\S]*?)<\/li>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .slice(0, 3);

  return (
    <section className="relative min-h-[600px] lg:min-h-[660px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/man-on-ladder-cleaning-gutters-of-a-suburban-house.webp"
          alt={h1Text}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multilayer gradient matching Image 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081C38]/95 via-[#081C38]/80 to-[#0B2545]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081C38]/70 via-transparent to-[#081C38]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow badge from sheet data */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-xs sm:text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            <span>Crossroads Gutter Cleaning Victoria</span>
          </div>

          {/* Exact H1 from the sheet on the hero banner */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {h1Text}
          </h1>

          {/* Subtitle from Sheet */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl font-light">
            {currentData.metaDescription}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#estimate-form"
              className="bg-[#FDB813] hover:bg-[#E5A30B] text-gray-950 font-bold px-7 py-4 rounded-xl shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <span>Request An Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/gutter-cleaning"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-bold px-7 py-4 rounded-xl transition-all text-sm sm:text-base"
            >
              Our Services
            </Link>
          </div>

          {/* Bullets directly from sheet content */}
          {bulletMatches.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
              {bulletMatches.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="line-clamp-2">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Call Badge bottom right matching Image 1 */}
        <div className="hidden lg:flex absolute bottom-12 right-8 items-center gap-4 bg-[#081C38]/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-[#1363DF] flex items-center justify-center text-white shrink-0">
            <Phone className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
              Call For Free Estimate
            </span>
            <a
              href="tel:+13615791699"
              className="text-lg font-extrabold text-white hover:text-yellow-400 transition"
            >
              +13615791699
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

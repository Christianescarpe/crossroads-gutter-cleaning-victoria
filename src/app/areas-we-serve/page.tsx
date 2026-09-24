import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MapPin, ArrowRight } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { LOCATION_URLS, cleanSeoTitle } from '@/lib/data';

// Homepage components (Image 1 design)
import HeroBanner from '@/components/home/HeroBanner';
import ServicesGrid from '@/components/home/ServicesGrid';
import EstimateFormCard from '@/components/home/EstimateFormCard';
import BlogHighlights from '@/components/home/BlogHighlights';
import SheetContentSection from '@/components/home/SheetContentSection';

const areasData = pagesData.find(p => p.url === '/areas-we-serve')!;
const locations = pagesData.filter(p => LOCATION_URLS.includes(p.url));

export const metadata: Metadata = {
  title: cleanSeoTitle(areasData.seoTitle),
  description: areasData.metaDescription,
  keywords: areasData.focusKeywords.split(';').map(k => k.trim()),
  openGraph: {
    title: cleanSeoTitle(areasData.seoTitle),
    description: areasData.metaDescription,
    url: 'https://crossroadsguttercleaningvictoria.com/areas-we-serve'
  }
};

export default function AreasWeServePage() {
  return (
    <div className="bg-white">
      {/* 1. HeroBanner with exact H1 from sheet */}
      <HeroBanner page={areasData} />

      {/* 2. Service Areas Directory Grid using exact titles & descriptions from sheet */}
      <section className="py-16 bg-[#F4F7FC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold text-[#1363DF] uppercase tracking-wider block mb-2">
              Crossroads Gutter Cleaning Victoria
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C38] tracking-tight">
              Service Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1363DF] transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1363DF] flex items-center justify-center mb-4 group-hover:bg-[#1363DF] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#081C38] mb-2 group-hover:text-[#1363DF] transition-colors">
                    {loc.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-6">
                    {loc.metaDescription}
                  </p>
                </div>

                <div>
                  <Link
                    href={loc.url}
                    className="inline-flex items-center justify-between w-full bg-[#081C38] hover:bg-[#1363DF] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow"
                  >
                    <span>View {loc.title} Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <ServicesGrid />

      {/* 4. Full Sheet Content */}
      <SheetContentSection contentHtml={areasData.contentHtml} />

      {/* 5. Estimate Form Card */}
      <EstimateFormCard />

      {/* 6. Blog Highlights */}
      <BlogHighlights />
    </div>
  );
}

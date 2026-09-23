import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Droplets, Shield, Wrench, Layers, AlertTriangle } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { SERVICE_URLS } from '@/lib/data';

const icons = [Sparkles, Droplets, Layers, AlertTriangle, Shield, Wrench];

export default function ServicesGrid() {
  // Get core services directly from sheet
  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url)).slice(0, 6);

  return (
    <section className="py-20 lg:py-24 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#1363DF] uppercase tracking-wider block mb-2">
            Crossroads Gutter Cleaning Victoria
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081C38] tracking-tight leading-tight">
            Specialist Gutter & Drainage Services
          </h2>
        </div>

        {/* 3x2 Grid matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            const isFeatured = idx === 0;

            if (isFeatured) {
              return (
                <div
                  key={s.url}
                  className="bg-[#1363DF] rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
                      <Icon className="w-7 h-7 text-yellow-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                      {s.metaDescription}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={s.url}
                      className="inline-flex items-center justify-between w-full bg-[#FDB813] hover:bg-[#E5A30B] text-gray-950 font-bold px-5 py-3 rounded-xl transition shadow"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={s.url}
                className="bg-white rounded-2xl p-8 text-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between border border-gray-100 relative overflow-hidden group hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 -rotate-45 translate-x-12 -translate-y-12 pointer-events-none group-hover:bg-blue-50 transition-colors" />

                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#1363DF] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#081C38] tracking-tight group-hover:text-[#1363DF] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {s.metaDescription}
                  </p>
                </div>
                <div>
                  <Link
                    href={s.url}
                    className="inline-flex items-center justify-between w-full bg-[#081C38] hover:bg-[#1363DF] text-white font-bold px-5 py-3 rounded-xl transition shadow"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/gutter-cleaning"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1363DF] hover:text-[#081C38] transition bg-white px-6 py-3 rounded-full shadow border border-gray-200"
          >
            <span>View All Gutter Cleaning Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

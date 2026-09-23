'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Phone, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { extractH1, stripH1 } from '@/lib/data';
import BlueEstimateSection from '@/components/service/BlueEstimateSection';

const faqData = pagesData.find(p => p.url === '/faq')!;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const h1Text = extractH1(faqData.contentHtml, 'Frequently Asked Gutter Cleaning Questions in Victoria, TX');
  const cleanedContent = stripH1(faqData.contentHtml);

  // Parse questions from HTML content
  const faqs = [
    {
      q: 'How often should gutters be cleaned in Victoria?',
      a: 'For most homes in Victoria, we recommend cleaning gutters at least twice per year. The first essential cleaning occurs in late spring after live oaks drop their pollen catkins, and the second takes place in late autumn following pecan leaf and husk shedding. Homes surrounded by heavy tree cover or positioned beneath dense canopies benefit from quarterly checkups.'
    },
    {
      q: 'What happens if I neglect my gutters in South Texas?',
      a: 'Neglected gutters accumulate heavy organic compost and roofing granules. During torrential Gulf Coast storms, obstructed gutters overflow, pouring hundreds of gallons of water directly against foundation footings. In Victoria’s reactive clay soils, localized water pooling causes foundation shifting, drywall cracking, and masonry separation.'
    },
    {
      q: 'Do you clear the downspouts as part of the cleaning?',
      a: 'Yes, every complete gutter cleaning service includes full downspout clearing and flow testing. We manually clear drop outlets, use mechanical augers or snakes to break through compacted plugs in elbows, and flush vertical runs with high-flow water to confirm rapid drainage away from your slab.'
    },
    {
      q: 'Do I need gutter guards if I clean my gutters regularly?',
      a: 'Gutter guards significantly decrease the volume of leaves, twigs, and nesting materials entering your troughs. High-quality stainless steel micro-mesh guards keep out fine oak tassels while admitting intense tropical rain. However, guards are not completely maintenance-free and require occasional surface rinsing.'
    },
    {
      q: 'Are your technicians insured and ladder-safe?',
      a: 'Yes, Crossroads Gutter Cleaning Victoria carries comprehensive general liability insurance. Our technicians are trained in ladder safety, use ladder standoff stabilizers that protect your gutters and fascia from denting, and adhere to OSHA safety standards on every job.'
    },
    {
      q: 'How do you clean gutters without making a mess on the ground?',
      a: 'We scoop debris by hand directly into collection containers rather than using leaf blowers or high-pressure wands that splatter mud across your siding, windows, and gardens. After clearing the channels, we conduct a meticulous ground cleanup and bag all debris for haul-away.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Top Banner with exact H1 from sheet */}
      <section className="bg-[#081C38] text-white py-16 lg:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-yellow-400 font-bold">FAQ</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Victoria Gutter Maintenance Answers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {h1Text}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {faqData.metaDescription}
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition hover:border-[#1363DF]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 bg-white hover:bg-gray-50 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#081C38] transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#1363DF] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 bg-white text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    <p className="mt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Blue Estimate Form Section */}
      <BlueEstimateSection defaultService="Gutter Cleaning" />

      {/* Full Sheet Content without duplicate H1 */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />
        </div>
      </section>
    </div>
  );
}

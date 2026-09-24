'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
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
  );
}

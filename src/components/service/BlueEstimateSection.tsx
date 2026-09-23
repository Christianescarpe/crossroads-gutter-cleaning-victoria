import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function BlueEstimateSection({ defaultService }: { defaultService?: string }) {
  return (
    <section id="phone-callout" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bright Blue Container matching Image 2 style, focused exclusively on Phone Call - NO FORMS */}
        <div className="bg-[#1363DF] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-yellow-300 font-bold text-xs uppercase tracking-wider block">
                Crossroads Gutter Cleaning Victoria
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {defaultService ? `Schedule ${defaultService} by Phone` : 'Get Your Free Gutter Cleaning Estimate'}
              </h2>

              <p className="text-blue-100 text-base leading-relaxed">
                Don’t wait until storm season fills your roofline with overflowing rainwater. Contact Crossroads Gutter Cleaning Victoria today at +13615791699 for a prompt estimate and scheduling.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-200 block">Hours</span>
                    <span className="text-sm font-semibold">
                      Monday through Saturday: 7:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-200 block">Service Area</span>
                    <span className="text-xs font-semibold">
                      Victoria, Port Lavaca, Cuero, Edna, Goliad, Bloomington, Inez, and nearby Crossroads areas.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Call Action Box (5 cols) */}
            <div className="lg:col-span-5 bg-white text-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-gray-950 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Phone className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-4">
                Direct Phone Line
              </span>

              <a
                href="tel:+13615791699"
                className="w-full bg-[#081C38] hover:bg-[#1363DF] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-3 text-lg cursor-pointer"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>Call +13615791699</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

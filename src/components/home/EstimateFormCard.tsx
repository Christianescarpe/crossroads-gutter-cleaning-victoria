import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EstimateFormCard() {
  return (
    <section id="phone-contact" className="py-20 lg:py-24 bg-[#081C38] text-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider block">
              Crossroads Gutter Cleaning Victoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Get Your Free Victoria Gutter Cleaning Estimate
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Don’t wait until storm season fills your roofline with overflowing rainwater. Contact Crossroads Gutter Cleaning Victoria today at +13615791699 for a free, no-obligation estimate.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Hours</span>
                  <span className="text-sm font-semibold text-white">
                    Monday through Saturday: 7:00 AM – 6:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Service Area</span>
                  <span className="text-sm font-semibold text-white">
                    Victoria, Port Lavaca, Cuero, Edna, Goliad, Bloomington, Inez, and nearby Crossroads areas.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Phone Call Box (6 cols) - NO FORMS */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-gray-900 shadow-2xl border border-gray-100 text-center relative overflow-hidden group">
              <div className="w-20 h-20 rounded-2xl bg-yellow-400 text-gray-950 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Fast Upfront Estimates By Phone
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#081C38] mb-6">
                Call Us Directly For Service
              </h3>

              <div className="pt-2">
                <a
                  href="tel:+13615791699"
                  className="w-full bg-[#1363DF] hover:bg-[#0D47A1] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl transition flex items-center justify-center gap-3 text-lg sm:text-xl cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>Call +13615791699</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

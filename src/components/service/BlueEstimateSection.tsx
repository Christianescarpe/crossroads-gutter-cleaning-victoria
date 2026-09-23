'use client';

import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { SERVICE_URLS } from '@/lib/data';

export default function BlueEstimateSection({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Gutter Cleaning',
    message: ''
  });

  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="service-estimate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bright Blue Container matching Image 2 */}
        <div className="bg-[#1363DF] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#081C38] mb-1">
                Request An Estimate
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Fast estimates within one business day across Victoria and surrounding Crossroads communities.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#081C38]">Estimate Request Sent!</h4>
                  <p className="text-xs text-gray-600">
                    We will contact you shortly at {formData.phone || 'your phone number'}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#1363DF] underline cursor-pointer"
                  >
                    Submit another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (361) 579-1699"
                        className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF]"
                      >
                        {services.map(s => (
                          <option key={s.url} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any details about your property..."
                      className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#081C38] hover:bg-[#1363DF] text-white font-bold py-3.5 rounded-xl shadow transition flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Information (5 cols) directly from sheet */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-yellow-300 font-bold text-xs uppercase tracking-wider block">
                Crossroads Gutter Cleaning Victoria
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Get Your Free Victoria Gutter Cleaning Estimate
              </h2>

              <p className="text-blue-100 text-sm leading-relaxed">
                Don’t wait until storm season fills your roofline with overflowing rainwater. Contact Crossroads Gutter Cleaning Victoria today at +13615791699 for a free, no-obligation estimate.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-yellow-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-200 block">Phone</span>
                    <a
                      href="tel:+13615791699"
                      className="text-lg font-bold text-white hover:text-yellow-300 transition"
                    >
                      +13615791699
                    </a>
                  </div>
                </div>

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
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-200 block">Coverage</span>
                    <span className="text-xs font-semibold">
                      Victoria, Port Lavaca, Cuero, Edna, Goliad, Bloomington, Inez, and nearby Crossroads areas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

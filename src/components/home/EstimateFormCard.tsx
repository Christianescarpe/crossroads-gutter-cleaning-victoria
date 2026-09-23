'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { SERVICE_URLS } from '@/lib/data';

export default function EstimateFormCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Gutter Cleaning',
    message: ''
  });

  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate-form" className="py-20 lg:py-24 bg-[#081C38] text-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols) using content from sheet */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider block">
              Crossroads Gutter Cleaning Victoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Get Your Free Victoria Gutter Cleaning Estimate
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Don’t wait until storm season fills your roofline with overflowing rainwater. Contact Crossroads Gutter Cleaning Victoria today at +13615791699 for a free, no-obligation estimate.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Phone</span>
                  <a
                    href="tel:+13615791699"
                    className="text-xl font-bold text-white hover:text-yellow-400 transition"
                  >
                    +13615791699
                  </a>
                </div>
              </div>

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
                  <ShieldCheck className="w-5 h-5" />
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

          {/* Right Column: Yellow Header Form Card (7 cols) matching Image 1 */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl text-gray-900 border border-gray-100">
              <div className="bg-[#FDB813] py-4 px-8 flex items-center justify-between">
                <h3 className="font-extrabold text-lg text-gray-950 uppercase tracking-wider">
                  Request An Estimate
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#081C38]">Thank You!</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Your request for Crossroads Gutter Cleaning Victoria has been received. Our team will contact you promptly at {formData.phone || 'your phone'} with a free estimate.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#1363DF] underline cursor-pointer"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (361) 579-1699"
                        className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
                        Select Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
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
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any details about your gutters or property..."
                      className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#081C38] hover:bg-[#1363DF] text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import pagesData from '@/data/pages.json';
import { SERVICE_URLS, extractH1, stripH1 } from '@/lib/data';

const contactData = pagesData.find(p => p.url === '/contact')!;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Gutter Cleaning',
    details: ''
  });

  const services = pagesData.filter(p => SERVICE_URLS.includes(p.url));
  const h1Text = extractH1(contactData.contentHtml, 'Contact Crossroads Gutter Cleaning Victoria');
  const cleanedContent = stripH1(contactData.contentHtml);

  // Bullets verbatim from sheet for Contact
  const contactBullets = [
    'Fast, courtesy estimates within one business day',
    'Fully insured and trained gutter professionals',
    'Meticulous hand-cleaning process with full ground cleanup',
    'Convenient seasonal reminder programs'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Banner with exact H1 from sheet */}
      <section className="bg-[#081C38] text-white py-14 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-yellow-400 font-bold">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {h1Text}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            {contactData.metaDescription}
          </p>
        </div>
      </section>

      {/* Top Map Section matching Image 3 */}
      <section className="relative w-full h-80 sm:h-96 bg-gray-200 overflow-hidden border-b border-gray-200">
        <iframe
          title="Crossroads Gutter Cleaning Victoria Location"
          src="https://maps.google.com/maps?q=Crossroads+Gutter+Cleaning+Victoria,+Victoria,+TX&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full h-full grayscale-[20%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
      </section>

      {/* Floating Get In Touch Card matching Image 3 with 100% sheet content */}
      <section className="relative -mt-24 sm:-mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081C38] tracking-tight mb-2">
              Get In Touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed">
              Ready to protect your roofline and foundation before the next heavy South Texas rain? The team at Crossroads Gutter Cleaning Victoria is here to deliver dependable, prompt, and ladder-safe service.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#081C38]">Message Sent Successfully</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, {formData.name}. A specialist from Crossroads Gutter Cleaning Victoria will reach out shortly at {formData.phone} with your free upfront estimate.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#1363DF] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 bg-[#F4F7FC] rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1363DF] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
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
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                      Select Your Services
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
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about your home, roofline, gutter issues, or preferred dates..."
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

          {/* Right Vibrant Blue Card (5 cols) matching Image 3 with exact sheet content */}
          <div className="lg:col-span-5 bg-[#1363DF] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-yellow-300 font-bold text-xs uppercase tracking-wider block">
                Crossroads Gutter Cleaning Victoria
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Why Contact Crossroads Gutter Cleaning?
              </h3>

              <div className="space-y-3 pt-2">
                {contactBullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-white/20 text-yellow-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-blue-50 font-medium">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 pt-8 border-t border-white/20 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-300 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
                    Phone
                  </span>
                  <a
                    href="tel:+13615791699"
                    className="text-base sm:text-lg font-bold text-white hover:text-yellow-300 transition"
                  >
                    +13615791699
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-300 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
                    Hours
                  </span>
                  <span className="text-xs sm:text-sm font-medium">
                    Monday through Saturday: 7:00 AM – 6:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
                    Service Area
                  </span>
                  <span className="text-xs sm:text-sm font-medium">
                    Victoria, Port Lavaca, Cuero, Edna, Goliad, Bloomington, Inez, and nearby Crossroads areas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exact Sheet Content for Contact Page without duplicate H1 */}
      <section className="py-16 bg-white border-t border-gray-100">
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

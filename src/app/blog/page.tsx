import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import blogsData from '@/data/blogs.json';
import { cleanSeoTitle } from '@/lib/data';
import BlueEstimateSection from '@/components/service/BlueEstimateSection';

export const metadata: Metadata = {
  title: cleanSeoTitle('Gutter Cleaning & Roofline Care Blog | Crossroads Gutter Cleaning Victoria'),
  description: 'Expert guides on gutter cleaning frequency, signs of clogged downspouts, South Texas hurricane prep, and foundation protection in Victoria, TX.',
  openGraph: {
    title: cleanSeoTitle('Gutter Cleaning & Roofline Care Blog | Crossroads Gutter Cleaning Victoria'),
    description: 'Expert guides on gutter cleaning frequency, signs of clogged downspouts, South Texas hurricane prep, and foundation protection in Victoria, TX.',
    url: 'https://crossroadsguttercleaningvictoria.com/blog'
  }
};

// Map each post to a relevant image from our optimized image library
const postImages: Record<number, string> = {
  0: '/images/adult-cleaning-leaves-from-gutters-on-a-home.webp',
  1: '/images/gutters-clogged-with-leaves-and-small-branches.webp',
  2: '/images/rainwater-flowing-from-downspout-on-house-roof.webp',
  3: '/images/rooftop-gutter-protection-system-on-a-residential.webp',
  4: '/images/autumn-leaves-on-a-city-park-bench.webp',
  5: '/images/drainpipe-next-to-building-overlooking-green-grass.webp',
  6: '/images/water-splashes-abstractly-in-sunlight-with-buildin.webp',
  7: '/images/brown-leaves-collect-on-rooftop-near-path.webp',
  8: '/images/gutter-cleaning-with-brush-and-pole-in-suburbia.webp',
  9: '/images/workman-climbing-aluminum-ladder-wearing-blue-pant.webp',
};

export default function BlogListingPage() {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <section className="bg-[#081C38] text-white py-16 lg:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Victoria Gutter Advice & Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Crossroads Gutter Care Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Professional roof drainage insights, storm preparation tips, and foundation protection guides for Victoria, TX property owners.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post, idx) => {
            const img = postImages[idx] || '/images/man-on-ladder-cleaning-gutters-of-a-suburban-house.webp';
            return (
              <article
                key={post.url}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#1363DF] text-white text-xs font-bold py-1 px-3 rounded-full shadow">
                      Guide #{idx + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-bold text-lg text-[#081C38] group-hover:text-[#1363DF] transition-colors line-clamp-2 mb-3">
                      <Link href={post.url}>{post.title}</Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 leading-relaxed mb-4">
                      {post.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                  <Link
                    href={post.url}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#081C38] group-hover:text-[#1363DF] transition"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Blue Estimate Section */}
      <BlueEstimateSection />
    </div>
  );
}

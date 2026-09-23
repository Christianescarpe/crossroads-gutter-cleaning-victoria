import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import blogsData from '@/data/blogs.json';

export default function BlogHighlights() {
  const featuredPosts = [
    {
      blog: blogsData[0],
      image: '/images/adult-cleaning-leaves-from-gutters-on-a-home.webp',
      date: 'Gutter Care Guide'
    },
    {
      blog: blogsData[1],
      image: '/images/gutters-clogged-with-leaves-and-small-branches.webp',
      date: 'Warning Signs'
    },
    {
      blog: blogsData[2],
      image: '/images/rainwater-flowing-from-downspout-on-house-roof.webp',
      date: 'Storm Prep'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold text-[#1363DF] uppercase tracking-wider block mb-2">
              From Our Blog
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081C38] tracking-tight leading-tight">
              Enjoy Your Premises With Expert Insights
            </h2>
          </div>
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#1363DF] hover:text-[#081C38] transition bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-200"
            >
              <span>View All 10 Blog Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Blog Cards matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((item, idx) => {
            if (!item.blog) return null;
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#1363DF] text-white text-xs font-bold py-1 px-3 rounded-full shadow">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg text-[#081C38] group-hover:text-[#1363DF] transition-colors line-clamp-2 mb-3">
                      <Link href={item.blog.url}>
                        {item.blog.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {item.blog.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                  <Link
                    href={item.blog.url}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#081C38] group-hover:text-[#1363DF] transition"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

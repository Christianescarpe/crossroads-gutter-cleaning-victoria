import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Calendar, User, Phone, ShieldCheck } from 'lucide-react';
import blogsData from '@/data/blogs.json';
import { extractH1, stripH1, cleanSeoTitle } from '@/lib/data';
import BlueEstimateSection from '@/components/service/BlueEstimateSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map(b => ({
    slug: b.url.replace('/blog/', '')
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const targetUrl = `/blog/${slug}`;
  const post = blogsData.find(b => b.url === targetUrl);

  if (!post) {
    return { title: 'Blog Post Not Found' };
  }

  const cleanedTitle = cleanSeoTitle(post.seoTitle);

  return {
    title: cleanedTitle,
    description: post.metaDescription,
    keywords: post.focusKeywords ? post.focusKeywords.split(';').map(k => k.trim()) : [],
    openGraph: {
      title: cleanedTitle,
      description: post.metaDescription,
      url: `https://crossroadsguttercleaningvictoria.com/blog/${slug}`
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const targetUrl = `/blog/${slug}`;
  const post = blogsData.find(b => b.url === targetUrl);

  if (!post) {
    notFound();
  }

  const h1Text = extractH1(post.contentHtml, post.title);
  const cleanedContent = stripH1(post.contentHtml);

  return (
    <article className="bg-white">
      {/* Article Header Banner with exact H1 from sheet */}
      <section className="bg-[#081C38] text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-yellow-400 truncate max-w-xs">{post.title}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
            {h1Text}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 font-light">
            {post.metaDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-800">
            <span className="flex items-center gap-1.5 text-yellow-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Crossroads Gutter Cleaning Victoria
            </span>
            <span>•</span>
            <span>Victoria, TX</span>
            <span>•</span>
            <a href="tel:+13615791699" className="text-white hover:text-yellow-400 transition font-bold">
              Call +13615791699
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Full HTML Content from Sheet 2 without duplicate H1 */}
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />

        {/* Back to Blog button */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1363DF] hover:text-[#081C38] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all guides</span>
          </Link>

          <a
            href="tel:+13615791699"
            className="inline-flex items-center gap-2 bg-[#FDB813] hover:bg-[#E5A30B] text-gray-950 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +13615791699</span>
          </a>
        </div>
      </div>

      {/* Blue Estimate Section */}
      <BlueEstimateSection />
    </article>
  );
}

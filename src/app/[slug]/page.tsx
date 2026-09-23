import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import pagesData from '@/data/pages.json';
import { PageItem, LOCATION_URLS } from '@/lib/data';

// Service components (Image 2 design)
import ServiceHero from '@/components/service/ServiceHero';
import BlueEstimateSection from '@/components/service/BlueEstimateSection';
import ServiceContentRenderer from '@/components/service/ServiceContentRenderer';

// Homepage components (Image 1 design)
import HeroBanner from '@/components/home/HeroBanner';
import ServicesGrid from '@/components/home/ServicesGrid';
import EstimateFormCard from '@/components/home/EstimateFormCard';
import BlogHighlights from '@/components/home/BlogHighlights';
import SheetContentSection from '@/components/home/SheetContentSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const excluded = ['/', '/faq', '/areas-we-serve', '/contact', '/blog'];
  return pagesData
    .filter(p => !excluded.includes(p.url))
    .map(p => ({
      slug: p.url.replace(/^\//, '')
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesData.find(p => p.url === `/${slug}`);

  if (!page) {
    return { title: 'Page Not Found' };
  }

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.focusKeywords ? page.focusKeywords.split(';').map(k => k.trim()) : [],
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `https://crossroadsguttercleaningvictoria.com/${slug}`
    }
  };
}

export default async function DynamicServiceOrLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pagesData.find(p => p.url === `/${slug}`) as PageItem | undefined;

  if (!page) {
    notFound();
  }

  const isLocationPage = LOCATION_URLS.includes(page.url);

  // If this is a location page, render the exact Homepage design (Image 1) with 100% sheet content
  if (isLocationPage) {
    return (
      <div className="bg-white">
        {/* 1. Hero Banner with location's exact H1 and meta description from sheet */}
        <HeroBanner page={page} />

        {/* 2. Services Grid with exact titles & descriptions from sheet */}
        <ServicesGrid />

        {/* 3. Full exact sheet content for this location (~800 words) with all headings and links */}
        <SheetContentSection contentHtml={page.contentHtml} />

        {/* 4. Estimate Request Form with phone and hours from sheet */}
        <EstimateFormCard />

        {/* 5. Blog Highlights featuring guides from Sheet 2 */}
        <BlogHighlights />
      </div>
    );
  }

  // Otherwise, render the Service Page design (Image 2) with 100% sheet content
  return (
    <div className="bg-white">
      {/* 1. Service Hero matching Image 2 with exact H1 and meta description from sheet */}
      <ServiceHero page={page} />

      {/* 2. Services Grid with exact titles & descriptions from sheet */}
      <ServicesGrid />

      {/* 3. Exact Sheet HTML Content (~800 words) with all internal & external anchors */}
      <ServiceContentRenderer htmlContent={page.contentHtml} />

      {/* 4. Bright Blue Estimate Section matching Image 2 with exact sheet contact details */}
      <BlueEstimateSection defaultService={page.title} />
    </div>
  );
}

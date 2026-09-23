import React from 'react';
import type { Metadata } from 'next';
import { getHomePage } from '@/lib/data';
import HeroBanner from '@/components/home/HeroBanner';
import ServicesGrid from '@/components/home/ServicesGrid';
import SheetContentSection from '@/components/home/SheetContentSection';
import EstimateFormCard from '@/components/home/EstimateFormCard';
import BlogHighlights from '@/components/home/BlogHighlights';

const homeData = getHomePage();

export const metadata: Metadata = {
  title: homeData.seoTitle,
  description: homeData.metaDescription,
  keywords: homeData.focusKeywords.split(';').map(k => k.trim()),
  openGraph: {
    title: homeData.seoTitle,
    description: homeData.metaDescription,
    url: 'https://crossroadsguttercleaningvictoria.com/',
  }
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner with exact H1 and meta description from sheet */}
      <HeroBanner />

      {/* 2. Services Grid with exact titles & descriptions from sheet */}
      <ServicesGrid />

      {/* 3. Full exact sheet content (~800 words) with all headings, lists, and links */}
      <SheetContentSection />

      {/* 4. Estimate Request Form with phone and hours from sheet */}
      <EstimateFormCard />

      {/* 5. Blog Highlights featuring guides from Sheet 2 */}
      <BlogHighlights />
    </>
  );
}

import React from 'react';
import { getHomePage, stripH1 } from '@/lib/data';

export default function SheetContentSection({ contentHtml }: { contentHtml?: string }) {
  const rawHtml = contentHtml || getHomePage().contentHtml;
  const cleanedContent = stripH1(rawHtml);

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />
      </div>
    </section>
  );
}

import React from 'react';
import { stripH1 } from '@/lib/data';

export default function ServiceContentRenderer({ htmlContent }: { htmlContent: string }) {
  const cleanedContent = stripH1(htmlContent);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />
      </div>
    </section>
  );
}

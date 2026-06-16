'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WatermarkFooterProps {
  className?: string;
}

export function WatermarkFooter({ className = '' }: WatermarkFooterProps) {
  const [egiHovered, setEgiHovered] = useState(false);
  const [anchorHovered, setAnchorHovered] = useState(false);

  return (
    <div className={`watermark-footer bg-white py-4 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
        <span className="text-gray-900 opacity-70">Built by</span>
        <a
          href="https://egintegrations.com/badge"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block opacity-60 hover:opacity-100 transition-opacity duration-300 -mr-2"
          aria-label="Visit EGI Integrations website"
          onMouseEnter={() => setEgiHovered(true)}
          onMouseLeave={() => setEgiHovered(false)}
        >
          {/* Base layer - original image */}
          <Image
            src="/watermarks/egi-logo.png"
            alt="EGI Integrations"
            width={140}
            height={46}
            className="h-auto max-w-[140px]"
            style={{ opacity: 0.6 }}
          />

          {/* Hover layer - colored mask overlay */}
          <span
            style={{
              position: 'absolute',
              inset: 0,
              background: '#3ec3e0',
              opacity: egiHovered ? 1 : 0,
              transition: 'opacity 300ms ease',
              WebkitMaskImage: 'url(/watermarks/egi-logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/watermarks/egi-logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              pointerEvents: 'none',
            }}
          />
        </a>
        <span className="text-gray-900 opacity-70">, secured by</span>
        <a
          href="https://www.anchor-msp.com/secured-by-anchor"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block opacity-60 hover:opacity-100 transition-opacity duration-300"
          aria-label="Visit Anchor MSP website"
          onMouseEnter={() => setAnchorHovered(true)}
          onMouseLeave={() => setAnchorHovered(false)}
        >
          {/* Base layer - original image */}
          <Image
            src="/watermarks/anchor-logo.png"
            alt="Anchor MSP"
            width={120}
            height={40}
            className="h-auto max-w-[120px]"
            style={{ opacity: 0.6 }}
          />

          {/* Hover layer - colored mask overlay */}
          <span
            style={{
              position: 'absolute',
              inset: 0,
              background: '#69867E',
              opacity: anchorHovered ? 1 : 0,
              transition: 'opacity 300ms ease',
              WebkitMaskImage: 'url(/watermarks/anchor-logo.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/watermarks/anchor-logo.png)',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              pointerEvents: 'none',
            }}
          />
        </a>
      </div>
    </div>
  );
}

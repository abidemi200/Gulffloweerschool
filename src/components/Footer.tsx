/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  GraduationCap, Facebook, Twitter, Instagram, Linkedin, Heart, ExternalLink 
} from 'lucide-react';

export default function Footer() {
  const handleScrollToSegment = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const academicShortcuts = [
    { label: "Pre-School & Kindergarten", href: "#academics" },
    { label: "Primary Lower & Upper", href: "#academics" },
    { label: "Junior Secondary (JSS 1-3)", href: "#academics" },
    { label: "Senior Secondary Science Stream", href: "#academics" },
    { label: "Senior Commercial Stream", href: "#academics" },
    { label: "Senior Arts Humanities Stream", href: "#academics" }
  ];

  const quickLinks = [
    { label: "Home Base Slider", href: "#home" },
    { label: "Director's Word", href: "#about" },
    { label: "The Elite Pillars", href: "#why-choose" },
    { label: "Our Boarding Hostels", href: "#boarding" },
    { label: "Student Hall of Fame", href: "#achievements" },
    { label: "Photo Memories", href: "#gallery" },
    { label: "The Governance Board", href: "#leadership" },
    { label: "General Contact Info", href: "#contact" }
  ];

  return (
    <footer className="bg-[#7A1F35] text-white/80 border-t border-[#D4A017]/35 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative details backgrounds */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column A: School Branding */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScrollToSegment('#home')}>
              <div className="bg-white/10 p-2.5 rounded-lg border border-white/10 shadow-inner flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-[#D4A017]" />
              </div>
              <div>
                <span className="block font-serif font-serif-academic font-black text-white text-lg tracking-wide leading-none">
                  GULF FLOWER
                </span>
                <span className="text-xs block font-sans tracking-widest text-[#D4A017] font-semibold uppercase mt-0.5 font-mono">
                  Schools International
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed">
              Serving our community for over two decades, Gulf Flower Schools International is dedicated to nurturing standard global leaders of high ethical character, pristine scientific intellect, and deep social compassion. Approved and accredited in mainland Lagos.
            </p>

            {/* Social Icons Row */}
            <div className="flex space-x-3 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" }
              ].map((soc, idx) => {
                const SocIcon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-2.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 text-white/70 hover:text-[#D4A017] transition-colors"
                  >
                    <SocIcon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column B: Links Navigation */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-serif font-serif-academic font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Explore Our Campus
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollToSegment(link.href)}
                  className="text-left text-xs text-white/70 hover:text-[#D4A017] transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <span className="h-1 w-1 bg-white/40 rounded-full" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column C: Academics Shortcuts */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-serif font-serif-academic font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Academic Curriculums
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {academicShortcuts.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollToSegment(link.href)}
                  className="text-left text-xs text-white/70 hover:text-[#D4A017] transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <span className="h-1 w-1 bg-[#D4A017]/60 rounded-full" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column D: Live Admissions desk alert */}
          <div className="md:col-span-2 text-left space-y-3">
            <h4 className="font-serif font-serif-academic font-bold text-white text-sm uppercase tracking-wider border-b border-white/10 pb-2">
              Admissions Open
            </h4>
            <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-2">
              <span className="text-[9px] font-mono font-bold text-[#D4A017] uppercase tracking-widest block">
                ● SESSION 2026/2027
              </span>
              <p className="text-[11px] text-white/70 leading-relaxed font-light">
                Secure your student's placement code today.
              </p>
              <button
                onClick={() => handleScrollToSegment('#admission-form')}
                className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider text-white hover:text-[#D4A017] transform transition-transform hover:translate-x-0.5 cursor-pointer"
              >
                <span>Enroll Today</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: License and Quotients credits */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-white/60">
          
          <div className="space-y-1">
            <p>
              © 2026 Gulf Flower Schools International. All Rights Reserved.
            </p>
            <p className="text-[10px] text-white/50 font-mono">
              Approved & Accredited by the Lagos State Ministry of Education, Nigeria.
            </p>
          </div>

          <div className="flex items-center space-x-1 text-[11px] text-white/60">
            <span>Designed & Developed with</span>
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-current mx-0.5 animate-pulse" />
            <span>by</span>
            <a 
              href="https://quotients.digitals" 
              target="_blank" 
              rel="noreferrer noopener"
              className="text-[#D4A017] hover:text-[#D4A017]/80 font-bold tracking-wide hover:underline cursor-pointer flex items-center space-x-0.5"
            >
              <span>Quotients Digital Horizon Ltd</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

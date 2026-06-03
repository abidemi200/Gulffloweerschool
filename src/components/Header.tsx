/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Award, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-choose' },
    { name: 'Academics', href: '#academics' },
    { name: 'Boarding', href: '#boarding' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#7A1F35] backdrop-blur-md shadow-xl py-3 border-b border-[#D4A017]/35 text-white'
            : 'bg-[#7A1F35]/95 backdrop-blur-md shadow-lg py-4 border-b border-[#7A1F35] text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleLinkClick('#home')}
            >
              <div className="bg-white p-1 rounded-lg shadow-inner flex items-center justify-center w-11 h-11 shrink-0 overflow-hidden">
                <img 
                  src="https://i.imgur.com/2LYEPwq.png" 
                  alt="Gulf Flower Schools Logo" 
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="block font-serif font-black text-white text-lg leading-tight tracking-wide">
                  GULF FLOWER
                </span>
                <span className="text-[10px] block font-sans tracking-widest uppercase text-[#D4A017] font-bold mt-0.5 font-mono">
                  Schools International
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer text-gray-100 hover:text-[#D4A017] hover:bg-white/5 font-mono"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="flex items-center space-x-3.5">

              <button
                onClick={() => handleLinkClick('#admissions')}
                className="hidden md:inline-flex bg-[#D4A017] hover:bg-[#FAF7F5] hover:text-[#7A1F35] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer font-mono"
              >
                Apply Now
              </button>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg cursor-pointer text-white hover:bg-white/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-20 px-4 pb-6 bg-[#7A1F35]/98 backdrop-blur-md text-white flex flex-col justify-between overflow-y-auto"
          >
            <div className="py-4 space-y-2">
              <span className="block text-[#D4A017] text-[10px] font-mono tracking-widest uppercase pb-3 border-b border-[#8B2332]">
                School Sections Menu
              </span>
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left py-3.5 text-base font-serif font-bold tracking-wide hover:text-[#D4A017] border-b border-[#8B2332]/40 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#8B2332] space-y-4">
              <div className="flex justify-between items-center bg-[#8B2332]/75 p-4 rounded-xl border border-[#D4A017]/30">
                <div className="flex items-center space-x-3">
                  <Compass className="h-5 w-5 text-[#D4A017]" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Campus Tour</h4>
                    <p className="text-[11px] text-gray-200">Schedule physical inspection of hostels</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLinkClick('#schedule-visit');
                  }}
                  className="bg-transparent hover:bg-white/5 border border-[#D4A017]/50 text-[#D4A017] text-xs px-3 py-1.5 rounded-lg transition-colors font-mono"
                >
                  Book Tour
                </button>
              </div>

              <button
                onClick={() => {
                  handleLinkClick('#admissions');
                }}
                className="w-full bg-[#D4A017] hover:bg-[#8B2332] hover:text-white text-slate-950 font-bold text-sm uppercase tracking-wide py-3 px-4 rounded-lg shadow-lg active:scale-98 transition-transform cursor-pointer font-mono"
              >
                Apply for Admission 2026/2027
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Sparkles, Building, BookmarkCheck, Award, GraduationCap } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://imgur.com/HVlRc7v.png",
      tagline: "NURTURING EXCELLENCE IN LAGOS",
      title: "Raising Global Leaders Through Excellence",
      coloredText: "in Education",
      desc: "Providing world-class Pre-School, Primary, High School, Day, and Boarding education tailored to nurture character, intelligence, and competitive leadership."
    },
    {
      image: "https://imgur.com/v8C2oko.png",
      tagline: "EMPOWERING FUTURE FUTURES",
      title: "World-Class Safe & Inspiring",
      coloredText: "Boarding Facilities",
      desc: "Our state-of-the-art boarding hostels offer a home away from home with 24/7 dedicated professional care, nutritious meals, structured study, and a lively community."
    },
    {
      image: "https://imgur.com/uH687gi.png",
      tagline: "ADVANCED TECHNOLOGY & ARTS",
      title: "Sound Morals & Modern",
      coloredText: "Academic Excellence",
      desc: "Fostering standard curriculum benchmarks supported by ultra-modern chemistry labs, a high-tech computer centre, first-rate teachers, and custom athletic fields."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Award, number: "20+", label: "Years of Excellence", color: "text-amber-400" },
    { icon: GraduationCap, number: "100%", label: "WASSCE Success Rate", color: "text-emerald-400" },
    { icon: Building, number: "Premium", label: "Boarding Facilities", color: "text-blue-400" },
    { icon: BookmarkCheck, number: "Experienced", label: "Educators & Advisors", color: "text-purple-400" }
  ];

  const handleActionClick = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#7A1F35] overflow-hidden pt-16">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <>
              {/* Left gradient for typography contrast, keeping the right side clear to exhibit the beautiful campus imagery */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A1F35]/95 via-[#7A1F35]/60 to-transparent z-10" />
              {/* Bottom gradient for stats readability, top gradient for smooth header transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F35]/90 via-transparent to-[#7A1F35]/30 z-10" />
            </>
            <img
              src={slides[currentSlide].image}
              alt="Gulf Flower Campus Background"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Info */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-[#8B2332]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4A017]/35 shadow-inner"
            >
              <Sparkles className="h-4 w-4 text-[#D4A017] animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-bold text-[#D4A017] uppercase tracking-widest font-mono">
                {slides[currentSlide].tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif-academic font-bold text-white leading-tight"
            >
              {slides[currentSlide].title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] via-[#D4A017] to-yellow-200">
                {slides[currentSlide].coloredText}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-100 text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed font-normal drop-shadow-md"
            >
              {slides[currentSlide].desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                onClick={() => handleActionClick('#admissions')}
                className="bg-[#7A1F35] border border-[#D4A017] hover:bg-[#D4A017] hover:text-[#1F2937] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-[1.03] active:scale-95 duration-200 flex items-center justify-center space-x-2 cursor-pointer font-mono"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => handleActionClick('#admissions')}
                className="bg-white border-2 border-[#7A1F35] hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-[#1F2937] text-[#7A1F35] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-sm transition-all hover:scale-[1.03] active:scale-95 duration-200 flex items-center justify-center space-x-2 cursor-pointer font-mono"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule a School Tour</span>
              </button>
            </motion.div>
          </div>

          {/* Quick Info Sidebar Widget on Large Screens / Floating Banner */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-tr from-[#8B2332]/95 to-[#7A1F35]/85 backdrop-blur-lg rounded-2xl p-6 border border-[#D4A017]/35 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A017]/10 rounded-full blur-2xl animate-pulse" />
              <h3 className="font-serif text-[#D4A017] text-lg font-bold border-b border-[#FAF7F5]/20 pb-3 mb-4 font-serif-academic">
                Latest Announcements
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#D4A017] pl-3">
                  <span className="text-[9px] text-gray-300 font-mono tracking-wider">ADMISSIONS</span>
                  <p className="text-xs font-bold text-white">2026/2027 Admissions Form Portal open</p>
                </div>
                <div className="border-l-2 border-[#D4A017] pl-3">
                  <span className="text-[9px] text-gray-300 font-mono tracking-wider font-semibold">FACILITIES</span>
                  <p className="text-xs font-bold text-white">Renovated Premium Boarding Hostels ready</p>
                </div>
                <div className="border-l-2 border-[#D4A017] pl-3">
                  <span className="text-[9px] text-gray-300 font-mono tracking-wider">ACADEMICS</span>
                  <p className="text-xs font-bold text-white">98% Distinctions recorded in last WASSCE Session</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAF7F5]/20 text-center font-mono">
                <p className="text-[10px] text-gray-300">Approved by the Lagos State Ministry of Education</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section Overlay */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 font-sans">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-[#7A1F35]/15 shadow-md flex items-start space-x-3.5 hover:shadow-lg hover:border-[#7A1F35]/30 transition-all group"
              >
                <div className={`p-2 rounded-lg bg-[#FAF7F5] border border-[#7A1F35]/10 group-hover:scale-110 transition-transform shrink-0`}>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#7A1F35]" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold font-serif-academic text-[#7A1F35] tracking-tight">{item.number}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-600 font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Indicators Bottom Center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              currentSlide === index ? 'bg-[#D4A017] w-8' : 'bg-[#FAF7F5]/40 hover:bg-[#FAF7F5]/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Trophy, GraduationCap, Flame, FlameKindling, Sparkles, BookCheck, ThumbsUp } from 'lucide-react';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'academic' | 'competitions' | 'alumni'>('all');

  const stats = [
    { label: "WASSCE Distinctions", value: "98.2%", sub: "Last 5 Years Average" },
    { label: "University Entrance", value: "95%+", sub: "Local & Global Placements" },
    { label: "Academic Laurels", value: "50+", sub: "Lagos State Awards" },
    { label: "Active Scholarships", value: "24", sub: "Dispensary Foundations" }
  ];

  const honors = [
    {
      id: "wassce-2003",
      category: "academic",
      title: "Landmark Outstanding WASSCE Student",
      student: "Master Babajide Kalu",
      year: "2003 Landmark",
      desc: "Scored straight 9 A1 grades in WASSCE, making him the top student across Southwest Nigeria. Received the prestigious state gubernatorial scholarship.",
      icon: Award,
      badge: "National Standard Record"
    },
    {
      id: "national-olympiad",
      category: "competitions",
      title: "Lagos State Physics Olympiad Champions",
      student: "Gulf Flower Science Team",
      year: "2024 Champion",
      desc: "Emerged 1st overall among 80 elite private schools in Lagos State, securing full delegation status to the National Mathematics & Physics finals.",
      icon: Trophy,
      badge: "Science Crown"
    },
    {
      id: "alumni-oxford",
      category: "alumni",
      title: "Oxford University Rhodes Scholar",
      student: "Dr. Funmilayo Akinyemi",
      year: "Class of 2012 Alumna",
      desc: "Completed her mechanical engineering doctorate at Oxford, and currently leads premium sustainable clean energy initiatives in London.",
      icon: GraduationCap,
      badge: "Global Ambassador"
    },
    {
      id: "cowbell-math",
      category: "competitions",
      title: "Cowbell National Math Competition",
      student: "Miss Chioma Okafor",
      year: "2023 Runner Up",
      desc: "Took second place in the senior category, demonstrating flawless computational proofs in spherical geometry and algebra parameters.",
      icon: BookCheck,
      badge: "Academic Honor Roll"
    }
  ];

  const filteredHonors = activeCategory === 'all' 
    ? honors 
    : honors.filter(item => item.category === activeCategory);

  return (
    <section id="achievements" className="py-24 bg-white relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7A1F35]/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans">
          <span className="inline-flex items-center space-x-1.5 bg-[#FAF7F5] text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
            <Trophy className="h-3.5 w-3.5 text-[#7A1F35] animate-bounce" />
            <span>Celebrating Excellence</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Our Hall of Achievements
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light font-sans">
            Through steady focus and sound moral training, Gulf Flower scholars have maintained a legendary culture of scholastic and competition milestones throughout Nigeria.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 font-sans">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#FAF7F5] p-6 rounded-2xl border border-[#7A1F35]/15 text-center space-y-1 hover:border-[#7A1F35]/35 transition-all duration-305 shadow-sm">
              <div className="text-white bg-[#7A1F35] p-2.5 rounded-full inline-flex mb-2 border border-[#D4A017]/35 shadow-inner">
                <Flame className="h-5 w-5" />
              </div>
              <h4 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
                {stat.value}
              </h4>
              <p className="text-xs font-bold font-sans text-[#1F2937] tracking-wide">
                {stat.label}
              </p>
              <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Filters and Timeline Grid combo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* Quick filter column (Left sidebar) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-[#FAF7F5] p-6 rounded-2xl border border-[#7A1F35]/10 text-left space-y-4 shadow-sm">
              <span className="text-[10px] font-mono text-[#7A1F35] uppercase tracking-widest block font-bold">
                Category Filters
              </span>
              <div className="flex flex-col space-y-1.5 font-mono">
                {[
                  { id: 'all', label: 'All Achievements' },
                  { id: 'academic', label: 'Academic Laurels' },
                  { id: 'competitions', label: 'Competition Wins' },
                  { id: 'alumni', label: 'Alumni Spotlight' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setActiveCategory(btn.id as any)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCategory === btn.id
                        ? 'bg-[#7A1F35] text-white font-black shadow-md border border-[#7A1F35]'
                        : 'bg-white border border-[#7A1F35]/15 text-gray-550 hover:text-[#7A1F35] hover:bg-[#FAF7F5] hover:border-[#7A1F35]/35'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Student Box: 2003 Landmark */}
            <div className="bg-gradient-to-br from-[#7A1F35] to-[#8B2332] text-white p-6 rounded-2xl text-left relative overflow-hidden shadow-xl border border-[#D4A017]/35">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/10 rounded-full blur-xl animate-pulse" />
              <div className="flex items-center space-x-2 text-[#D4A017] mb-4 bg-[#8B2332]/50 border border-[#D4A017]/25 px-2.5 py-1.5 rounded-lg w-fit">
                <Sparkles className="h-4 w-4" />
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase">HALL OF FAME SPOTLIGHT</span>
              </div>
              <h4 className="font-serif-academic font-bold text-base leading-tight mb-2 text-white">
                Master Babajide Kalu
              </h4>
              <p className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#D4A017]">
                Class of 2003 WASSCE Record
              </p>
              <p className="text-xs text-gray-200 leading-relaxed mt-3 font-light font-sans">
                Our legacy champion, scoring 9 straight A1 distinctions, paving the legacy for consecutive school generations. Today, Babajide is a distinguished pediatric medical consultant in Lagos, giving back to upcoming medical scholars.
              </p>
            </div>
          </div>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-9 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredHonors.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#FAF7F5] p-6 sm:p-8 rounded-2xl border border-[#7A1F35]/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-md hover:border-[#7A1F35]/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Visual left edge badge */}
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7A1F35] to-[#D4A017]" />
                    
                    <div className="flex items-start space-x-4 text-left">
                      <div className="bg-white border border-[#7A1F35]/15 p-3 rounded-xl text-[#7A1F35] shrink-0 shadow-sm mt-1">
                        <ItemIcon className="h-6 w-6 text-[#7A1F35]" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2 font-mono">
                          <span className="bg-[#7A1F35] border border-[#D4A017]/30 text-[#D4A017] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                            {item.badge}
                          </span>
                          <span className="text-gray-500 text-xs font-medium">{item.year}</span>
                        </div>
                        <h3 className="font-serif font-serif-academic font-bold text-lg text-[#7A1F35] leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#8B2332] font-bold uppercase tracking-wider font-mono">
                          By: {item.student}
                        </p>
                        <p className="text-xs text-gray-600 max-w-xl leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center space-x-1.5 text-[#7A1F35] bg-white border border-[#7A1F35]/15 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold shadow-sm">
                      <ThumbsUp className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

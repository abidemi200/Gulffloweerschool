/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Home, ShieldCheck, HeartPulse, Clock, Sparkles, ChefHat, CheckCircle2, Moon
} from 'lucide-react';

export default function BoardingSchool() {
  const highlights = [
    {
      icon: Home,
      title: "Modern Hostel Facilities",
      desc: "Architecturally superior hostels with air-controlled spacious chambers, individual custom wardrobes, study desks, and premium ventilation."
    },
    {
      icon: ShieldCheck,
      title: "24/7 Armed Guard & Matron Supervision",
      desc: "Protected by 24/7 security escorts, CCTV nets, and warm, maternal House Matrons/Wardens enforcing clean behaviors."
    },
    {
      icon: HeartPulse,
      title: "Dedicated Clinical Healthcare",
      desc: "Fully active on-campus clinic with registered pediatric nurses on rotation and emergency hospital affiliations in mainland Lagos."
    },
    {
      icon: Clock,
      title: "Rigorous evening Study Prep Sessions",
      desc: "Mandatory daily prep intervals (7:00 PM - 9:30 PM) supervised by visiting teachers to resolve homework blockages."
    },
    {
      icon: ChefHat,
      title: "Nutritious Hot Organic Meals",
      desc: "Gourmet meal frames designed by pediatric dieticians supplying premium proteins, grains, and fruits thrice daily."
    },
    {
      icon: Moon,
      title: "Clean Sleep & Sanitization Schedules",
      desc: "Strict hygiene blocks where laundry is professionally processed, rooms sanitized weekly, and healthy 8-hour sleep cycles ensured."
    }
  ];

  return (
    <section id="boarding" className="py-24 bg-[#FAF7F5] text-slate-800 relative overflow-hidden">
      {/* Absolute backgrounds decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F35]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans">
          <span className="inline-flex items-center space-x-1.5 bg-white text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
            <Sparkles className="h-3.5 w-3.5 text-[#D4A017] animate-pulse" />
            <span>A Home Away from Home</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Safe & Comfortable Boarding Experience
          </h2>
          <p className="text-gray-650 text-sm sm:text-base font-light">
            Our premium residential boarding facilities are meticulously structured to inspire deep academic discipline, self-governance, social harmony, and supreme physical safety.
          </p>
        </div>

        {/* Dynamic Boarding Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
          
          {/* Left Columns - Achievements Checklist and Visual collage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#7A1F35]/15 shadow-2xl">
              <img
                src="https://imgur.com/B2aUJKE.png"
                alt="Gulf Flower Elite Dormitories"
                className="w-full h-auto aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F35]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#D4A017] text-[10px] uppercase font-mono tracking-widest font-bold block">
                  Campus Life Focus
                </span>
                <h4 className="text-lg font-serif font-serif-academic font-bold text-white mt-1">
                  Premium Residential Hostels
                </h4>
              </div>
            </div>

            {/* Checklist elements */}
            <div className="bg-white p-6 rounded-2xl border border-[#7A1F35]/10 space-y-4 text-left shadow-sm">
              <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm border-b border-gray-150 pb-2">
                Boarding Security & Safety
              </h4>
              <div className="space-y-3">
                {[
                  "Secure electronic swipe cards for hostel dorm entry",
                  "Double biometric log of visitors with CCTV audits",
                  "In-house standby luxury electricity generator",
                  "Clean treated bore-hole water reservoir pipelines",
                  "Dedicated sports club activities for weekend intervals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-[#7A1F35] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns - Grid of boarding highlights */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left font-sans">
              {highlights.map((item, idx) => {
                const HighlightIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl border border-[#7A1F35]/10 shadow-sm flex flex-col justify-between hover:border-[#7A1F35]/35 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="text-[#7A1F35] bg-[#FAF7F5] border border-[#7A1F35]/10 p-2.5 rounded-xl inline-block">
                        <HighlightIcon className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif font-serif-academic font-bold text-sm text-[#7A1F35]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-650 leading-relaxed font-light font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

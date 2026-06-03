/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Users, Shield, Home, Cpu, Heart, Trophy, Globe, GraduationCap 
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      desc: "Record-shattering WASSCE, BECE, and checkpoint exam averages. Rigorous academic guidance and standardized tutoring methodologies.",
      bgAccent: "bg-blue-50 text-blue-700",
      borderAccent: "hover:border-blue-300"
    },
    {
      icon: Users,
      title: "Experienced Teachers",
      desc: "Licensed, certified core subject specialists who receive training under international advisory bodies. Low student-teacher ratio.",
      bgAccent: "bg-emerald-50 text-emerald-700",
      borderAccent: "hover:border-emerald-300"
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      desc: "Strict automated access controls, professional military guards, full HD CCTV installations, and highly secure student campuses.",
      bgAccent: "bg-rose-50 text-rose-700",
      borderAccent: "hover:border-rose-300"
    },
    {
      icon: Home,
      title: "Boarding Facilities",
      desc: "Spacious, air-conditioned rooms, healthy organic dining, dedicated healthcare clinics, and supervised warm academic environments.",
      bgAccent: "bg-amber-50 text-amber-700",
      borderAccent: "hover:border-amber-300"
    },
    {
      icon: Cpu,
      title: "Technology-Driven Education",
      desc: "Fully active ICT computer hubs, automated attendance systems, digital smart-boards, and computer-based test drills.",
      bgAccent: "bg-indigo-50 text-indigo-700",
      borderAccent: "hover:border-indigo-300"
    },
    {
      icon: Heart,
      title: "Character Development",
      desc: "Fostering standard Islamic, Christian, and ethical values alongside solid civil code parameters. Mentorship circles and moral drills.",
      bgAccent: "bg-purple-50 text-purple-700",
      borderAccent: "hover:border-purple-300"
    },
    {
      icon: Trophy,
      title: "Sports & Extracurriculars",
      desc: "Grass football pitches, standard basketball course, chess clubs, debate modules, dynamic young jet-builders, and cultural groups.",
      bgAccent: "bg-teal-50 text-teal-700",
      borderAccent: "hover:border-teal-300"
    },
    {
      icon: Globe,
      title: "International Standards",
      desc: "Blending the National British curriculum with Nigerian educational standards, molding global students competitive anywhere on Earth.",
      bgAccent: "bg-cyan-50 text-cyan-700",
      borderAccent: "hover:border-cyan-300"
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-[#FAF7F5] relative">
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#7A1F35]/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans">
          <span className="inline-flex items-center space-x-1.5 bg-white text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
            <GraduationCap className="h-3.5 w-3.5 text-[#7A1F35]" />
            <span>Guarantees of Elite Quality</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Why Choose Gulf Flower Schools?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            We provide a world-class educational ecosystem where student safety, academic leadership, moral growth, and technical fluency are nurtured seamlessly.
          </p>
        </div>

        {/* Pillars Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(122, 31, 53, 0.08), 0 8px 10px -6px rgba(122, 31, 53, 0.08)" }}
                className="bg-white p-6 rounded-2xl border border-[#7A1F35]/10 hover:border-[#7A1F35]/35 shadow-sm transition-all duration-300 group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon wrap */}
                  <div className="p-3 rounded-xl inline-block bg-[#FAF7F5] text-[#7A1F35] border border-[#7A1F35]/10 transition-all duration-200 group-hover:bg-[#7A1F35] group-hover:text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  
                  <h3 className="font-serif font-serif-academic text-[#1F2937] font-bold text-lg group-hover:text-[#7A1F35] transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-650 font-sans text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 text-[10px] font-mono text-gray-400 uppercase flex items-center justify-between">
                  <span>Accredited Elite Pillar</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Quote block */}
        <div className="mt-16 bg-[#7A1F35] text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4A017]/35 relative overflow-hidden font-sans">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B2332]/50 rounded-full blur-3xl -z-10" />
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-[#D4A017] font-serif font-serif-academic font-bold text-lg">Interested in exploring our campuses?</h4>
            <p className="text-xs text-gray-200 max-w-xl font-light leading-relaxed">
              We offer personalized parental tours from Mondays to Fridays (9:00 AM - 3:00 PM). Schedule a convenient inspection and let us show you our elite standard.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#admissions');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white hover:bg-[#D4A017] hover:text-[#1F2937] text-[#7A1F35] font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-colors cursor-pointer w-full md:w-auto text-center font-mono"
          >
            Request Private Tour
          </button>
        </div>

      </div>
    </section>
  );
}

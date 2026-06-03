/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, BookOpen, ShieldCheck, Shirt, Award, Compass, Sparkles, BookMarked, UserCheck, CheckCircle
} from 'lucide-react';

type ProgramTab = 'preschool' | 'primary' | 'junior-high' | 'senior-high';

export default function AcademicProgrammes() {
  const [activeTab, setActiveTab] = useState<ProgramTab>('preschool');

  const tabs: { id: ProgramTab; label: string; sub: string }[] = [
    { id: 'preschool', label: 'Pre-School', sub: 'Early Foundation' },
    { id: 'primary', label: 'Primary School', sub: 'Key Stage 1 & 2' },
    { id: 'junior-high', label: 'Junior School', sub: 'Grade 7 to 9 (JSS)' },
    { id: 'senior-high', label: 'Senior School', sub: 'Grade 10 to 12 (SSS)' },
  ];

  const programDetails = {
    preschool: {
      title: "Gulf Flower Pre-School Education",
      tagline: "Nurturing curiosity, building standard early motor, social & reading foundations.",
      image: "https://imgur.com/q01vXmp.png",
      pillars: [
        { title: "Early Childhood Education", desc: "Sensory-rich experiences designed around phonetic sounds, basic number blocks, physical balance, and primary shapes." },
        { title: "Creative Learning Modules", desc: "Painting, sandbox clay sculpting, vocal music sing-alongs, and standard cognitive spatial puzzles." },
        { title: "Foundation Social Skills", desc: "Active emphasis on speech clarity, sharing habits, general politeness, and self-toileting independence." }
      ],
      features: [
        { icon: Building2, label: "Child-Safe Soft-padded Playgrounds" },
        { icon: ShieldCheck, label: "1:8 Teacher-to-child ratio for maximum attention" },
        { icon: BookOpen, label: "British EYFS blended methodology" }
      ],
      conduct: "Preschoolers operate from 8:00 AM to 1:30 PM. Children are dressed in comfortable, colorful preschool cotton uniforms with velcro sneakers."
    },
    primary: {
      title: "Gulf Flower Primary School Core Cycle",
      tagline: "Instilling deep critical literacy, robust scientific inquiry, and civic intelligence.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
      pillars: [
        { title: "Standard National Curriculum", desc: "Advanced English grammar, mathematics calculations, quantitative reasoning, primary agriculture, and social studies." },
        { title: "Nutritious Feeding Programme", desc: "Balanced hot daily lunches prepared on-campus under premium sanitary supervision, supporting healthy brain growth." },
        { title: "Intellectual Facilities", desc: "Dedicated child-friendly coding labs, spacious light-filled libraries, and creative writing workshops." }
      ],
      features: [
        { icon: Shirt, label: "Formal Crested Navy Blazers & Gold Ties" },
        { icon: Award, label: "Weekly academic debate & arithmetic medals" },
        { icon: BookMarked, label: "Regular diagnostics feedback to parents" }
      ],
      conduct: "Classes run from 7:45 AM to 2:30 PM. Complete clean uniforms, black polished leather shoes, and well-groomed hair are mandatory."
    },
    'junior-high': {
      title: "Junior Secondary Academy (JSS 1-3)",
      tagline: "Equipping young minds for national examinations with rigid foundation knowledge.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
      pillars: [
        { title: "Core JSS Subjects", desc: "Comprehensive prep for NECO BECE & Lagos State BECE: Basic Sciences, Mathematics, English, Civic Code, and Pre-Vocational Studies." },
        { title: "Systematic Assessments", desc: "Bi-weekly mid-term continuous assessments, speed reading diagnostic checks, and end-of-term laboratory practices." },
        { title: "Moral Character Building", desc: "Required leadership seminars, public speaking modules, social etiquette grooming, and emotional intelligence coaching." }
      ],
      features: [
        { icon: UserCheck, label: "Dedicated personal academic counselors" },
        { icon: Compass, label: "Interactive introductory coding and science labs" },
        { icon: CheckCircle, label: "Supervised prep halls for boarders" }
      ],
      conduct: "Strict daily assembly attendance at 7:35 AM. Clean white shirts, navy blue formal trousers (boys) or pleated skirts (girls) are mandatory."
    },
    'senior-high': {
      title: "Senior Secondary Academy (SSS 1-3)",
      tagline: "Precision streaming into specialized pathways preparing scholars for premium global universities.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      pillars: [
        { title: "Science Stream", desc: "Highly intensive training in Physics, Chemistry, Biology, Further Mathematics, and High-tech Computer Science designs." },
        { title: "Commercial Stream", desc: "Comprehensive training in Financial Accounting, Economics, Commerce, and Business Studies." },
        { title: "Arts & Humanities Stream", desc: "Deep studies in English Literature, Nigerian History, Government, Christian Religious Studies / Islamic Studies, and Fine Arts." }
      ],
      features: [
        { icon: BookMarked, label: "In-depth WAEC, NECO, UTME, & SAT masterclasses" },
        { icon: Award, label: "Outstanding Student Alumni leadership circle" },
        { icon: CheckCircle, label: "Compulsory scientific laboratory research projects" }
      ],
      conduct: "Senior scholars are expected to exhibit flawless ethical deportment. School regulations strictly forbid non-academic gadgets, bullying, or uniform infractions."
    }
  };

  const current = programDetails[activeTab];

  return (
    <section id="academics" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans">
          <span className="inline-flex items-center space-x-1.5 bg-[#FAF7F5] text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
            <BookOpen className="h-3.5 w-3.5 text-[#7A1F35]" />
            <span>Pathways of Achievements</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Our Academic Programmes
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Providing tailored academic stages designed to stimulate intellectual curiosity, ethical character development, and academic milestones from infancy to global college readiness.
          </p>
        </div>

        {/* Horizontal Navigation Switcher */}
        <div className="flex justify-start lg:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-gray-150 gap-2 font-sans">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3.5 rounded-xl border flex flex-col items-start min-w-[170px] text-left transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#7A1F35] border-[#7A1F35] text-white shadow-xl shadow-[#7A1F35]/15'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-[#7A1F35] hover:border-[#7A1F35]/35'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider block">{tab.label}</span>
              <span className={`text-[10px] block mt-0.5 ${activeTab === tab.id ? 'text-[#D4A017] font-bold' : 'text-gray-400 font-mono'}`}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Tab Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left font-sans"
          >
            {/* Visual Column */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#7A1F35]/15 shadow-xl aspect-video sm:aspect-square">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F35]/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center space-x-2">
                  <div className="bg-[#D4A017] p-2 rounded-lg">
                    <Sparkles className="h-4 w-4 text-[#1F2937]" />
                  </div>
                  <span className="text-white text-xs font-bold font-mono tracking-wider uppercase">
                    Lagos Campus Standard
                  </span>
                </div>
              </div>

              {/* Extra Features Grid */}
              <div className="bg-[#FAF7F5] p-6 rounded-2xl border border-[#7A1F35]/10 space-y-4">
                <h4 className="text-xs font-bold font-mono text-[#7A1F35] uppercase tracking-widest">
                  Key Distinctive Features
                </h4>
                <div className="space-y-3">
                  {current.features.map((feat, idx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-3 text-slate-700">
                        <div className="text-[#7A1F35] bg-white border border-[#7A1F35]/10 p-1.5 rounded-lg shrink-0">
                          <FeatIcon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-semibold">{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif-academic font-bold text-[#7A1F35]">
                  {current.title}
                </h3>
                <p className="text-sm text-gray-600 italic mt-1 leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Pillars Structure */}
              <div className="space-y-4">
                {current.pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-[#FAF7F5]/60 p-5 rounded-2xl border border-[#7A1F35]/10 flex items-start space-x-4 shadow-sm">
                    <div className="bg-white p-2.5 rounded-xl border border-[#7A1F35]/15 flex items-center justify-center shrink-0 shadow-sm text-[#7A1F35] font-bold text-xs font-mono">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-serif-academic font-bold text-sm text-[#7A1F35]">{pillar.title}</h4>
                      <p className="text-xs text-gray-650 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Academic/Rules Conduct Callout */}
              <div className="bg-[#FAF7F5] border-l-4 border-[#7A1F35] p-5 rounded-r-xl space-y-2 border border-y-[#7A1F35]/10 border-r-[#7A1F35]/10 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A1F35] font-mono">
                  Conduct & Campus Guidelines
                </h4>
                <p className="text-xs text-gray-750 leading-relaxed font-normal">
                  {current.conduct}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

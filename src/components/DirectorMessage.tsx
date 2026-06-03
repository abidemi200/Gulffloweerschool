/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Sparkles, Target, Compass, Award } from 'lucide-react';

export default function DirectorMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7A1F35]/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Container */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4A017] to-[#7A1F35] rounded-2xl opacity-10 blur-xl" />
            <div className="relative bg-[#FAF7F5] p-3 rounded-2xl border border-[#7A1F35]/10 shadow-xl">
              <img
                src="https://imgur.com/2anW2KR.png"
                alt="Dr. Cynthia Gregg, School Director"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl shadow-inner filter contrast-[1.02] grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 -right-4 bg-[#7A1F35] text-white px-5 py-3 rounded-xl shadow-lg border border-[#D4A017]/35">
                <span className="block text-white font-serif font-serif-academic font-bold tracking-wide text-lg">Dr. Cynthia Gregg</span>
                <span className="block text-[10px] uppercase font-mono tracking-widest text-[#D4A017] font-bold">School Director, Ph.D.</span>
              </div>
            </div>
          </div>

          {/* Director's Written Message & Vision Box */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6 text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-2 bg-[#FAF7F5] border border-[#7A1F35]/15 px-3 py-1 rounded-full text-xs font-bold text-[#7A1F35] uppercase tracking-widest font-mono">
                <Sparkles className="h-3 w-3 text-[#D4A017] animate-pulse" />
                <span>Executive Council Welcome</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
                Message from the School Director
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-3 h-10 w-10 text-[#7A1F35]/10 -z-10" />
              <p className="text-[#1F2937] text-sm sm:text-base leading-relaxed font-serif italic text-justify pl-4">
                "Welcome to Gulf Flower Schools International. For over two decades, our educational community has stood as an elegant beacon of sound learning, high morality, and global leadership in Lagos. We believe that every child who passes through our gates represents a unique seed of potential capable of nurturing humanity."
              </p>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed text-left font-sans">
              At Gulf Flower, we don't just focus on academic syllabus execution; we construct a comprehensive crucible of lifelong values. Our curriculum safely balances solid Western scientific advancement alongside rich moral guidelines, developing rigorous problem-solving skills that allow students to thrive on the international stage.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-1 text-gray-650 text-sm overflow-hidden text-left"
                >
                  <p className="leading-relaxed text-gray-600 font-sans">
                    Our boarding community at Gulf Flower is structured carefully to function as a home away from home. Under the watchful care of experienced house guardians, boarding scholars acquire valuable independence, standard culinary/health habits, and collaborative interpersonal skills. We invest heavily in safety, high-grade laboratories, advanced computing workstations, and athletic fields to ensure comprehensive stimulation of mind, soul, and body.
                  </p>
                  <p className="leading-relaxed text-gray-600 font-sans">
                    We welcome parents with ambitious expectations to partner with us. Joining the Gulf Flower family means choosing a structured path of academic excellence, secure personal safety, global cultural integration, and sound character development that prepares your child to confidently write the next chapters of Nigeria’s and the world's exciting future.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-[#7A1F35] hover:bg-[#D4A017] hover:text-[#1F2937] text-white text-xs font-bold font-mono uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all duration-150 cursor-pointer"
              >
                {isExpanded ? 'Read Less Description' : 'Read Full Director Statement'}
              </button>
            </div>

            {/* School Mission & Vision Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-150 font-sans">
              <div className="bg-[#FAF7F5] p-4 rounded-xl border border-[#7A1F35]/15 shadow-sm flex items-start space-x-3.5">
                <div className="bg-[#7A1F35] border border-[#D4A017]/30 p-2.5 rounded-lg text-[#D4A017] shrink-0">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm tracking-wide">Our Mission</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                    To nurture humanity through the provision of sound education while developing future leaders with strong character, academic excellence, and global competitiveness.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF7F5] p-4 rounded-xl border border-[#7A1F35]/15 shadow-sm flex items-start space-x-3.5">
                <div className="bg-[#7A1F35] border border-[#D4A017]/30 p-2.5 rounded-lg text-[#D4A017] shrink-0">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm tracking-wide">Our Vision</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-1">
                    To remain Nigeria's premier center for elite instruction, creating ethical and innovative citizens poised to confidently spearhead modern technological and social global growth.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

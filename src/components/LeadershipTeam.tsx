/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Users, Award, BookOpen, GraduationCap, ArrowRight, X } from 'lucide-react';
import { StaffProfile } from '../types';

export default function LeadershipTeam() {
  const [selectedLeader, setSelectedLeader] = useState<StaffProfile | null>(null);

  const team: StaffProfile[] = [
    {
      id: "dr-cynthia",
      name: "Dr. Cynthia Gregg",
      role: "School Director & Founder",
      photoUrl: "https://imgur.com/2anW2KR.png",
      credentials: "B.Ed. (Unilag), M.S., Ph.D. in Educational Psychology (Columbia University, NY)",
      bio: "Dr. Cynthia Gregg has championed outstanding educational standards in Lagos for over 22 years. Under her diagnostic psychology frameworks, Gulf Flower has developed from a local kindergarten into a nationally recognized boarding powerhouse offering high-standard moral instruction. She serves on various state advisory councils for education and board governance."
    },
    {
      id: "mr-john",
      name: "Mr. John Segun",
      role: "Head of School & Academy Principal",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=750",
      credentials: "B.Sc. Mathematics (Ui), M.Ed. Educational Leadership (Oxford)",
      bio: "Mr. John Segun coordinates the everyday instructional fidelity of our junior and senior secondary sections. He possesses 15+ years of training students for senior WASSCE sciences stream success, specializing in diagnostic algebra and mechanical training. John advises various regional mathematics competition bodies."
    },
    {
      id: "mrs-amina",
      name: "Mrs. Amina Bello",
      role: "Registrar & Admissions Coordinator",
      photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=750",
      credentials: "B.A. English (ABU), MBA in Institutional Relations (Unilag)",
      bio: "Mrs. Amina Bello manages the front-facing admissions cycle, parental relationships, and general student enrollment records. Amina is dedicated to streamlining admissions pipelines, organizing boarder onboarding operations, and answering parents' custom curriculum enquiries."
    },
    {
      id: "pastor-david",
      name: "Pastor David Adebayo",
      role: "Dean of Student Welfare & Pastoral Care",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=750",
      credentials: "B.A. Theology (Redeemers), Diploma in Adolescent Mentorship",
      bio: "Pastor David Adebayo oversees the spiritual, moral, and emotional welfare of boarding students. Working with both Christian and Muslim chaplains, he organizes ethical focus groups, resolving boarding home sickness and organizing weekend cultural team activities."
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-[#FAF7F5] relative border-t border-gray-150">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-white text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
            <Users className="h-3.5 w-3.5 text-[#7A1F35] animate-pulse" />
            <span>Exemplary Advisory Council</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Our directors, administrative chairs, and academic heads hold certifications and degrees from elite institutes worldwide, providing rigorous governance.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between group h-full hover:border-[#7A1F35]/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={leader.photoUrl}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-550 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F35]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="bg-[#D4A017] hover:bg-white hover:text-[#7A1F35] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-4 rounded-lg shadow-md transition-all cursor-pointer w-full text-center font-mono"
                    >
                      View Executive Bio
                    </button>
                  </div>
                </div>

                <div className="p-5 text-left space-y-1">
                  <h3 className="font-serif font-serif-academic font-bold text-base text-[#7A1F35] leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-[#D4A017] font-semibold uppercase tracking-wider font-mono">
                    {leader.role}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono line-clamp-1 leading-relaxed">
                    {leader.credentials}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 text-left">
                <button
                  onClick={() => setSelectedLeader(leader)}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#7A1F35] font-bold uppercase tracking-wider hover:text-[#8B2332] transition-colors cursor-pointer font-mono"
                >
                  <span>Read Profile</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform text-[#7A1F35]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Board guidelines */}
        <div className="mt-16 bg-white p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="bg-[#FAF7F5] border border-gray-200 p-3 rounded-xl shadow-sm text-[#7A1F35] shrink-0">
              <GraduationCap className="h-5 w-5 text-[#7A1F35] animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm">Do you have a bespoke question for our Principal?</h4>
              <p className="text-xs text-gray-500">You can easily schedule a conference during our Friday executive consultations.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-[#7A1F35] hover:bg-[#8B2332] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors cursor-pointer font-mono"
          >
            Contact School Board
          </button>
        </div>

      </div>

      {/* Leader Bio Modal Dialog Box */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-950 p-2.5 rounded-full text-white cursor-pointer z-10"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 text-gray-800">
                
                {/* Modal Visual LHS */}
                <div className="md:col-span-5 bg-gray-100 h-64 md:h-auto min-h-[250px] relative">
                  <img
                    src={selectedLeader.photoUrl}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover object-center grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent md:hidden" />
                </div>

                {/* Modal Content RHS */}
                <div className="md:col-span-7 lg:col-span-7 p-6 sm:p-8 text-left space-y-4 bg-white text-gray-850">
                  <div className="space-y-1">
                    <span className="bg-[#FAF7F5] border border-gray-150 text-[#7A1F35] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full font-mono font-bold shadow-sm">
                      Executive Profile
                    </span>
                    <h3 className="font-serif font-serif-academic font-bold text-xl text-[#7A1F35] leading-tight mt-1.5">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs text-[#D4A017] font-bold uppercase tracking-widest leading-none font-mono">
                      {selectedLeader.role}
                    </p>
                  </div>

                  <div className="border-t border-gray-150 pt-3 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 block font-bold uppercase tracking-wider">
                      Educational Credentials:
                    </span>
                    <p className="text-[11px] text-gray-700 leading-snug font-medium font-sans">
                      {selectedLeader.credentials}
                    </p>
                  </div>

                  <div className="border-t border-gray-150 pt-3 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 block font-bold uppercase tracking-wider">
                      Biography & Focus:
                    </span>
                    <p className="text-xs text-gray-650 leading-relaxed max-h-[180px] overflow-y-auto pr-1 font-light font-sans">
                      {selectedLeader.bio}
                    </p>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      onClick={() => setSelectedLeader(null)}
                      className="bg-[#7A1F35] hover:bg-[#8B2332] text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-lg cursor-pointer font-mono shadow-sm"
                    >
                      Close Window
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

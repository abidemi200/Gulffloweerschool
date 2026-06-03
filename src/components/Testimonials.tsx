/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list: Testimonial[] = [
    {
      id: "parent-1",
      quote: "Sending our two children to Gulf Flower Schools is the single best investment we’ve ever made in Lagos. The rigorous boarding curriculum and the deep moral structures have reformed their learning speed. Our oldest scored incredibly high in her recent UTME and gained scholarship placements, all thanks to the rigorous teacher guidance here.",
      author: "Chief (Mrs.) Beatrice Ogundimu",
      role: "Parent" as const,
      rating: 5
    },
    {
      id: "alumnus-1",
      quote: "The academic foundations and programming skills I acquired in the Gulf Flower junior and senior secondary science streams literally created my tech trajectory. The laboratory projects taught me critical problem-solving habits that are today crucial for my role as a lead cloud architect in Dublin.",
      author: "Alhaji Ibrahim Kazeem",
      role: "Alumnus" as const,
      year: "Class of 2008",
      rating: 5
    },
    {
      id: "parent-2",
      quote: "What sets Gulf Flower apart is security and supervision. As a busy corporate professional, knowing my young son is safe, eating dietitian-designed healthy organic meals, and participating in structured 7:00 PM academic study sessions has given our family total peace of mind.",
      author: "Barrister Anthony Nwachukwu",
      role: "Parent" as const,
      rating: 5
    },
    {
      id: "student-1",
      quote: "Being a boarding student at Gulf Flower has made me so responsible. We study together, play football during weekend breaks, and our house governors are like mentors who listen to us and encourage us to represent Nigeria with pride.",
      author: "Simisola Adeosun",
      role: "Student" as const,
      rating: 5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const current = list[currentIndex];  return (
    <section className="py-24 bg-white relative border-t border-gray-150">
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#D4A017]/5 rounded-full blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-[#FAF7F5] text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
            <MessageSquare className="h-3.5 w-3.5 text-[#7A1F35] animate-pulse" />
            <span>Voices of Trust</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            What Our Family Says about Us
          </h2>
          <p className="text-gray-650 text-xs sm:text-sm font-light">
            Read high-trust accounts from corporate parents, thriving alumni globally, and active scholastic boarding students on the Gulf Flower standard.
          </p>
        </div>

        {/* Testimonial Slider Canvas */}
        <div className="relative bg-[#FAF7F5] rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm overflow-hidden min-h-[350px] flex flex-col justify-between">
          <Quote className="absolute -top-3 -left-3 text-[#7A1F35]/5 h-32 w-32 -z-10" />
          
          <div className="space-y-6">
            {/* Rating Stars */}
            <div className="flex space-x-1 text-[#D4A017]">
              {Array.from({ length: current.rating }).map((_, idx) => (
                <Star key={idx} className="h-4.5 w-4.5 fill-current text-[#D4A017]" />
              ))}
            </div>

            {/* Testimonial Quote with sliding effect */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="text-gray-700 italic font-serif leading-relaxed text-sm sm:text-base md:text-lg text-left"
              >
                "{current.quote}"
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-155 pt-6 mt-8 gap-4">
            
            {/* Author description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-left"
              >
                <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm tracking-wide sm:text-base leading-none">
                  {current.author}
                </h4>
                <p className="text-xs text-[#D4A017] font-semibold uppercase tracking-wider mt-1.5 flex items-center space-x-2 font-mono">
                  <span>{current.role}</span>
                  {current.year && (
                    <>
                      <span className="h-1 w-1 bg-gray-200 rounded-full" />
                      <span className="text-gray-500 font-mono lower-case">{current.year}</span>
                    </>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Buttons navigation */}
            <div className="flex space-x-2.5 justify-end">
              <button
                onClick={handlePrev}
                className="bg-white hover:bg-gray-100 border border-gray-250 text-[#7A1F35] p-3 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-105"
                title="Previous testimonial"
              >
                <ArrowLeft className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#7A1F35] hover:bg-[#8B2332] text-white p-3 rounded-xl transition-all cursor-pointer shadow-md hover:scale-105"
                title="Next testimonial"
              >
                <ArrowRight className="h-4.5 w-4.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

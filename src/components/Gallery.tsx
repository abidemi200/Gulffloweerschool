/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, X, ZoomIn, Heart } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "classrooms-learn",
      title: "Interactive Classroom Session",
      category: "classrooms",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      description: "Modern, light-filled standard classrooms formatted for deep focus, collaboration, and high continuous smart-board learning."
    },
    {
      id: "labs-chem",
      title: "Chemistry Research Laboratory",
      category: "laboratories",
      imageUrl: "https://images.unsplash.com/photo-1581091921606-08d2b376cdec?auto=format&fit=crop&q=80&w=800",
      description: "Equipped with state-of-the-art diagnostic microscopes, centrifuge gear, and safe chemical test panels for senior secondary researchers."
    },
    {
      id: "ict-hub",
      title: "Vibrant ICT & Computer Hub",
      category: "ict",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      description: "Fiber-optic high-speed internet terminals where students learn computer programming, coding algorithms, and graphics design."
    },
    {
      id: "sports-football",
      title: "Inter-House Athletic Competitions",
      category: "sports",
      imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
      description: "Nurturing incredible physical vitality, fair-play ethics, and sports leadership on our expansive recreational grounds."
    },
    {
      id: "boarding-study",
      title: "Supervised Evening Prep Sessions",
      category: "boarding",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      description: "Boarders engaging in focused homework, peer-study, and research inside well-ventilated hostel study halls."
    },
    {
      id: "cultural-perform",
      title: "Youth Cultural Festivities",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
      description: "Honoring diverse regional traditions in Lagos with colorful attires, stage drama presentations, and music rhythms."
    },
    {
      id: "grad-mortarpacks",
      title: "Graduation & Cap-Tossing Ceremony",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
      description: "An emotional, celebratory milestone as we launch our senior scholars into outstanding universities worldwide."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classrooms', label: 'Classrooms' },
    { id: 'laboratories', label: 'Science Labs' },
    { id: 'ict', label: 'ICT Centre' },
    { id: 'sports', label: 'Sports & Games' },
    { id: 'boarding', label: 'Boarding Life' },
    { id: 'events', label: 'School Events' }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF7F5] text-gray-800 relative border-t border-gray-150">
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-white text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
            <Camera className="h-3.5 w-3.5 text-[#7A1F35]" />
            <span>Witness Our Campus Energy</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Our Campus Life Gallery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light font-sans leading-relaxed">
            Take a glance into our vibrant, safety-supervised classrooms, cutting-edge computing modules, sports arenas, and happy boarding communal environments.
          </p>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex justify-start lg:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-150 cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#7A1F35] text-white font-bold shadow-md font-mono'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-[#7A1F35] hover:bg-[#7A1F35]/5 font-mono'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md group relative cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setActivePhoto(item)}
              >
                {/* Image panel */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-550 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#7A1F35]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#D4A017] p-3 rounded-full text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Info panel */}
                <div className="p-5 text-left space-y-1">
                  <span className="text-[9px] font-mono font-bold text-[#D4A017] uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-serif-academic font-bold text-base text-[#7A1F35] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox zoom modal overlay */}
        <AnimatePresence>
          {activePhoto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white rounded-3xl overflow-hidden border border-[#7A1F35]/15 max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-950 p-2.5 rounded-full text-white cursor-pointer z-10"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="overflow-hidden flex-1 flex items-center justify-center bg-[#FAF7F5]">
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="max-w-full max-h-[55vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 text-left space-y-2 bg-white border-t border-gray-150">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#7A1F35]/10 text-[#7A1F35] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-mono">
                      {activePhoto.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-[#D4A017] font-mono">
                      <Heart className="h-4 w-4 fill-current text-[#D4A017]" />
                      <span className="font-bold">Elite Campus Trust</span>
                    </div>
                  </div>
                  <h3 className="font-serif font-serif-academic font-bold text-xl text-[#7A1F35]">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {activePhoto.description}
                  </p>
                  <div className="pt-2 text-right">
                    <button
                      onClick={() => setActivePhoto(null)}
                      className="bg-gray-100 hover:bg-gray-200 border border-gray-250 text-gray-700 text-[10px] uppercase font-mono tracking-widest px-4 py-2 rounded-xl cursor-pointer transition-colors"
                    >
                      Close Lightbox
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

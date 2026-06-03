/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DirectorMessage from './components/DirectorMessage';
import WhyChooseUs from './components/WhyChooseUs';
import AcademicProgrammes from './components/AcademicProgrammes';
import BoardingSchool from './components/BoardingSchool';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import LeadershipTeam from './components/LeadershipTeam';
import Testimonials from './components/Testimonials';
import AdmissionsAndPortal from './components/AdmissionsAndPortal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F5] flex flex-col justify-between overflow-x-hidden relative select-none antialiased selection:bg-[#7A1F35] selection:text-white">
      
      {/* Sticky Premium Navigation Header */}
      <Header />

      {/* Main Structural Layout Modules */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <Hero />

        {/* SECTION 1: DIRECTOR'S MESSAGE */}
        <DirectorMessage />

        {/* SECTION 2: WHY CHOOSE GULF FLOWER */}
        <WhyChooseUs />

        {/* SECTION 3: OUR ACADEMIC PROGRAMMES */}
        <AcademicProgrammes />

        {/* SECTION 4: BOARDING SCHOOL */}
        <BoardingSchool />

        {/* SECTION 5: STUDENT ACHIEVEMENTS */}
        <Achievements />

        {/* SECTION 6: LEADERSHIP TEAM */}
        <LeadershipTeam />

        {/* SECTION 7: CAMPUS LIFE (GALLERY) */}
        <Gallery />

        {/* SECTION 8: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 9: ADMISSIONS (ENQUIRY & TOUR BOOKING FORMS) */}
        <AdmissionsAndPortal />

        {/* SECTION 10: CONTACT DETAILS & MESSAGE FORM */}
        <Contact />

      </main>

      {/* RICH BRANDED FOOTER AND DESIGN ATTRIBUTIONS */}
      <Footer />

    </div>
  );
}


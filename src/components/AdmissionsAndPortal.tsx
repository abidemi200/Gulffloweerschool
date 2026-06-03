/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Calendar, CloudDownload, Send, ClipboardList, CheckCircle, Check
} from 'lucide-react';
import { AdmissionEnquiry } from '../types';

export default function AdmissionsAndPortal() {
  // Public admissions states
  const [activeForm, setActiveForm] = useState<'enquiry' | 'tour'>('enquiry');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  
  // Admission Enquiry Form states
  const [studentName, setStudentName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [classOfInt, setClassOfInt] = useState<AdmissionEnquiry['classOfInterest']>('Primary School');
  const [boarding, setBoarding] = useState<AdmissionEnquiry['boardingRequired']>('Day');
  const [prevSchool, setPrevSchool] = useState('');
  const [address, setAddress] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  // Tour Booking Form states
  const [tourParentName, setTourParentName] = useState('');
  const [tourEmail, setTourEmail] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourDate, setTourDate] = useState('');
  const [tourTime, setTourTime] = useState('09:00 AM');
  const [tourVisitors, setTourVisitors] = useState('1 Student, 2 Parents');
  const [tourNotes, setTourNotes] = useState('');
  const [tourSuccess, setTourSuccess] = useState(false);

  // Submit Admission Enquiry Action
  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !dob || !parentName || !parentEmail || !parentPhone) {
      alert("Please fill in all required student and parent fields.");
      return;
    }

    const currentSaved = localStorage.getItem('gulfflow_enquiries');
    let list: AdmissionEnquiry[] = [];
    if (currentSaved) {
      try {
        list = JSON.parse(currentSaved);
      } catch (err) {
        list = [];
      }
    }

    const newEnquiry: AdmissionEnquiry = {
      id: "enq-" + Math.floor(100 + Math.random() * 900),
      studentName,
      dateOfBirth: dob,
      gender,
      parentName,
      parentEmail,
      parentPhone,
      classOfInterest: classOfInt,
      boardingRequired: boarding,
      prevSchool: prevSchool || undefined,
      address,
      additionalNotes: additionalNotes || undefined,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };

    list.unshift(newEnquiry);
    localStorage.setItem('gulfflow_enquiries', JSON.stringify(list));
    
    // Clear Form Fields
    setStudentName('');
    setDob('');
    setParentName('');
    setParentEmail('');
    setParentPhone('');
    setPrevSchool('');
    setAddress('');
    setAdditionalNotes('');
    
    setEnquirySuccess(true);

    setTimeout(() => {
      setEnquirySuccess(false);
    }, 6000);
  };

  // Submit Tour Booking Action
  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourParentName || !tourEmail || !tourPhone || !tourDate) {
      alert("Please fill in all tour reservation fields.");
      return;
    }

    const currentTourSaved = localStorage.getItem('gulfflow_tours') || '[]';
    let tourList = [];
    try {
      tourList = JSON.parse(currentTourSaved);
    } catch {
      tourList = [];
    }

    const newTour = {
      id: "tour-" + Math.floor(100 + Math.random() * 900),
      parentName: tourParentName,
      email: tourEmail,
      phone: tourPhone,
      preferredDate: tourDate,
      preferredTime: tourTime,
      visitors: tourVisitors,
      notes: tourNotes,
      submittedAt: new Date().toISOString()
    };

    tourList.unshift(newTour);
    localStorage.setItem('gulfflow_tours', JSON.stringify(tourList));

    // Reset Tour Fields
    setTourParentName('');
    setTourEmail('');
    setTourPhone('');
    setTourDate('');
    setTourNotes('');

    setTourSuccess(true);
    setTimeout(() => {
      setTourSuccess(false);
    }, 6000);
  };

  // Simulate downloading full Admission Guide
  const handleDownloadProspectus = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 5000);
  };

  return (
    <>
      <section id="admissions" className="py-24 bg-[#FAF7F5] relative border-t border-[#7A1F35]/10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7A1F35]/5 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Headline Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans border-none">
            <span className="inline-flex items-center space-x-1.5 bg-white text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
              <ClipboardList className="h-3.5 w-3.5 text-[#7A1F35]" />
              <span>Enrollment Is Open - Session 2026/2027</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
              Begin Your Child’s Journey to Excellence
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-light">
              We process applications recursively. Submit your details below, and an admissions coordinator will verify your details within 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left font-sans">
            
            {/* Left side column: Guidelines, Requirements, and Prospectus */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Requirements widget card */}
              <div className="bg-white p-6 rounded-2xl border border-[#7A1F35]/10 shadow-sm space-y-5">
                <h3 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-lg border-b border-gray-150 pb-3 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-[#8B2332]" />
                  <span>Admission Milestones</span>
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex space-x-3.5">
                    <div className="bg-[#FAF7F5] border border-[#7A1F35]/15 text-[#7A1F35] font-mono font-bold p-2.5 rounded-xl h-fit">1</div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm">Submit Online Enquiry</h4>
                      <p className="text-gray-600 leading-relaxed font-light">Fill the enquiry form with basic background data, parent contact, and boarding plans.</p>
                    </div>
                  </div>

                  <div className="flex space-x-3.5">
                    <div className="bg-[#FAF7F5] border border-[#7A1F35]/15 text-[#7A1F35] font-mono font-bold p-2.5 rounded-xl h-fit">2</div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm">Interactive Placement Interview</h4>
                      <p className="text-gray-600 leading-relaxed font-light">A pleasant cognitive assessment testing logical speech, mathematical reasoning, and basic science skills.</p>
                    </div>
                  </div>

                  <div className="flex space-x-3.5">
                    <div className="bg-[#FAF7F5] border border-[#7A1F35]/15 text-[#7A1F35] font-mono font-bold p-2.5 rounded-xl h-fit">3</div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm">Medical & Fitness Clearance</h4>
                      <p className="text-gray-600 leading-relaxed font-light">Basic verification of dietary preferences, general pediatric health history, and vaccine rosters.</p>
                    </div>
                  </div>

                  <div className="flex space-x-3.5">
                    <div className="bg-[#FAF7F5] border border-[#7A1F35]/15 text-[#7A1F35] font-mono font-bold p-2.5 rounded-xl h-fit">4</div>
                    <div className="space-y-1">
                      <h4 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-sm">Official Letter & Fees Manifest</h4>
                      <p className="text-gray-600 leading-relaxed font-light">Receipt of physical admission approval, uniform measurements schedule, and school warden briefing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Admission Guide Simulator */}
              <div className="bg-gradient-to-br from-[#7A1F35] to-[#8B2332] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden border border-[#D4A017]/25">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" />
                <h3 className="font-serif font-serif-academic font-bold text-base text-[#D4A017]">Download School Prospectus</h3>
                <p className="text-[11px] text-gray-200 mt-2 leading-relaxed">
                  Get our in-depth curriculum handbook, premium boarding guidelines, annual fee structures, uniform parameters, and extra-curricular calendar.
                </p>
                <div className="pt-5">
                  <button
                    onClick={handleDownloadProspectus}
                    className="bg-white hover:bg-[#D4A017] hover:text-[#1F2937] text-[#7A1F35] font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-lg shadow-md transition-all active:scale-95 duration-150 flex items-center space-x-2 cursor-pointer w-full justify-center font-mono border border-transparent"
                  >
                    {downloadSuccess ? (
                      <>
                        <Check className="h-4 w-4 text-[#7A1F35]" />
                        <span>Mock-Handbooks Sent!</span>
                      </>
                    ) : (
                      <>
                        <CloudDownload className="h-4 w-4 text-[#7A1F35]" />
                        <span>Get Admission PDF Guide</span>
                      </>
                    )}
                  </button>
                  {downloadSuccess && (
                    <p className="text-[10px] text-[#D4A017] italic text-center mt-2.5 font-mono">
                      Check your email inbox or local browser temporary directory! (Simulation completed)
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Right side column: Switchable Forms layout */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              
              {/* Form Toggles */}
              <div className="flex space-x-2 border-b border-gray-150 pb-3">
                <button
                  onClick={() => setActiveForm('enquiry')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer font-mono border ${
                    activeForm === 'enquiry'
                      ? 'bg-[#7A1F35] text-white border-[#7A1F35] shadow-sm'
                      : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Online Enquiry Form</span>
                </button>
                <button
                  onClick={() => setActiveForm('tour')}
                  id="schedule-visit"
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer font-mono border ${
                    activeForm === 'tour'
                      ? 'bg-[#7A1F35] text-white border-[#7A1F35] shadow-sm'
                      : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Private Campus Tour</span>
                </button>
              </div>

              {/* Toggled Frame contents */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#7A1F35]/10 shadow-xl relative">

                {/* FORM A: ADMISSION ENQUIRY */}
                {activeForm === 'enquiry' ? (
                  <form onSubmit={handleAdmissionSubmit} id="admission-form" className="space-y-6 text-left">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#7A1F35] block bg-[#FAF7F5] border border-[#7A1F35]/15 px-3 py-1.5 rounded-full w-fit">
                      Section A: Student Details
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Student Full Name *</label>
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="e.g. Babajide Akinyemi"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Student Date of Birth *</label>
                        <input
                          type="date"
                          required
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Student Gender *</label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as any)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10 cursor-pointer"
                        >
                          <option value="Male" className="bg-white text-gray-800">Male</option>
                          <option value="Female" className="bg-white text-gray-800">Female</option>
                          <option value="Other" className="bg-white text-gray-800">Other</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Class of Interest *</label>
                        <select
                          value={classOfInt}
                          onChange={(e) => setClassOfInt(e.target.value as any)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10 cursor-pointer"
                        >
                          <option value="Pre-School" className="bg-white text-gray-800">Pre-School</option>
                          <option value="Primary School" className="bg-white text-gray-800">Primary School</option>
                          <option value="Junior High School" className="bg-white text-gray-800">Junior High School</option>
                          <option value="Senior High School" className="bg-white text-gray-800">Senior High School</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Housing Program *</label>
                        <div className="flex space-x-4 pt-2.5 text-gray-700">
                          {['Day', 'Boarding'].map((opt) => (
                            <label key={opt} className="inline-flex items-center space-x-2 text-xs font-semibold cursor-pointer">
                              <input
                                type="radio"
                                name="boarding"
                                value={opt}
                                checked={boarding === opt}
                                onChange={() => setBoarding(opt as any)}
                                className="accent-[#7A1F35] text-[#7A1F35] h-4.5 w-4.5 cursor-pointer"
                              />
                              <span>{opt === 'Day' ? 'Day Scholar' : 'Residential Boarder'}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Previous School Attended (If Any)</label>
                        <input
                          type="text"
                          value={prevSchool}
                          onChange={(e) => setPrevSchool(e.target.value)}
                          placeholder="e.g. Aces Kiddies Academy, Lagos"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>
                    </div>

                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#7A1F35] block pt-4 bg-[#FAF7F5] border border-[#7A1F35]/15 px-3 py-1.5 rounded-full w-fit">
                      Section B: Parental Contact Coordinates
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Parent / Guardian Full Name *</label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. Chief Anthony Kalu"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          placeholder="guardian@workspace.com"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          placeholder="e.g. 080XXXXXXXX"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Residential Address *</label>
                        <textarea
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          rows={2}
                          placeholder="Apartment details, Street Address, Victoria Island, Ikeja or Lekki Lagos"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Additional Specific Enquiries</label>
                        <textarea
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          rows={3}
                          placeholder="Let us know of any special clinical parameters, religious restrictions, or sporting talents."
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col items-center">
                      <button
                        type="submit"
                        className="bg-[#7A1F35] hover:bg-[#8B2332] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md cursor-pointer transition-transform duration-150 active:scale-95 flex items-center space-x-2.5 w-full justify-center font-mono border border-transparent"
                      >
                        <Send className="h-4 w-4 text-white" />
                        <span>Submit Admission Enquiry</span>
                      </button>

                      {enquirySuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-white border border-[#7A1F35]/25 text-slate-800 text-xs rounded-xl flex items-start space-x-2 w-full shadow-md text-left"
                        >
                          <CheckCircle className="h-5 w-5 text-[#7A1F35] shrink-0 mt-0.5 animate-pulse" />
                          <div>
                            <p className="font-bold text-[#7A1F35] font-mono">Form Submitted Successfully!</p>
                            <p className="text-[10px] mt-0.5 leading-relaxed font-sans text-gray-600">We have stored your enquiry. A Gulf Flower admissions officer will contact your phone or email shortly.</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </form>
                ) : (
                  
                  /* FORM B: CAMPUS TOUR BOOKER */
                  <form onSubmit={handleTourSubmit} className="space-y-6 text-left">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#7A1F35] block bg-[#FAF7F5] border border-[#7A1F35]/15 px-3 py-1.5 rounded-full w-fit">
                      Personalized Campus Visitation
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Parent Full Name *</label>
                        <input
                          type="text"
                          required
                          value={tourParentName}
                          onChange={(e) => setTourParentName(e.target.value)}
                          placeholder="e.g. Alhaji Kassim Bello"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={tourEmail}
                          onChange={(e) => setTourEmail(e.target.value)}
                          placeholder="guardian@domain.com"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={tourPhone}
                          onChange={(e) => setTourPhone(e.target.value)}
                          placeholder="080XXXXXXXX"
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Preferred Visitation Date *</label>
                        <input
                          type="date"
                          required
                          value={tourDate}
                          onChange={(e) => setTourDate(e.target.value)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Preferred Visitation Timeslot *</label>
                        <select
                          value={tourTime}
                          onChange={(e) => setTourTime(e.target.value)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10 cursor-pointer"
                        >
                          <option value="09:00 AM" className="bg-white text-gray-800">09:00 AM - Morning Slot</option>
                          <option value="11:00 AM" className="bg-white text-gray-800">11:00 AM - Late Morning Slot</option>
                          <option value="01:00 PM" className="bg-white text-gray-800">01:00 PM - Afternoon Lunch Slot</option>
                          <option value="03:00 PM" className="bg-white text-gray-800">03:00 PM - Closed Session Slot</option>
                        </select>
                      </div>

                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Number of Visitors Joining *</label>
                        <select
                          value={tourVisitors}
                          onChange={(e) => setTourVisitors(e.target.value)}
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors focus:ring-1 focus:ring-[#7A1F35]/10 cursor-pointer"
                        >
                          <option value="1 Student, 1 Parent" className="bg-white text-gray-800">1 Student, 1 Parent</option>
                          <option value="1 Student, 2 Parents" className="bg-white text-gray-800">1 Student, 2 Parents</option>
                          <option value="2 Students, 2 Parents" className="bg-white text-gray-800">2 Students, 2 Parents</option>
                          <option value="Full Family Circle (3+)" className="bg-white text-gray-800">Full Family Circle (3+)</option>
                        </select>
                      </div>

                      <div className="space-y-1 col-span-1 sm:col-span-2">
                        <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Visits Comments / Special Access Requirements</label>
                        <textarea
                          value={tourNotes}
                          onChange={(e) => setTourNotes(e.target.value)}
                          rows={3}
                          placeholder="Let us know if you need physical ramp access, specific boarding hostel inspections, or Arabic/French translators."
                          className="w-full bg-[#FAF7F5] border border-[#7A1F35]/15 rounded-xl px-4 py-3 text-xs text-gray-800 focus:outline-none focus:border-[#7A1F35] transition-colors placeholder-gray-400 focus:ring-1 focus:ring-[#7A1F35]/10"
                        />
                      </div>

                    </div>

                    <div className="pt-4 flex flex-col items-center">
                      <button
                        type="submit"
                        className="bg-[#7A1F35] hover:bg-[#8B2332] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md cursor-pointer transition-transform duration-150 active:scale-95 flex items-center space-x-2.5 w-full justify-center font-mono border border-transparent"
                      >
                        <Calendar className="h-4 w-4 text-white" />
                        <span>Reserve Campus Tour Slot</span>
                      </button>

                      {tourSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-white border border-[#7A1F35]/25 text-slate-800 text-xs rounded-xl flex items-start space-x-2 w-full shadow-md text-left"
                        >
                          <CheckCircle className="h-5 w-5 text-[#7A1F35] shrink-0 mt-0.5 animate-pulse" />
                          <div>
                            <p className="font-bold text-[#7A1F35] font-mono">Campus Visit Reserved!</p>
                            <p className="text-[10px] mt-0.5 leading-relaxed font-sans text-gray-600">Visitation confirmation code reserved: GFS-T{Math.floor(100+Math.random()*900)}. An admissions coordinator will call to confirm safety parameters before entry.</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

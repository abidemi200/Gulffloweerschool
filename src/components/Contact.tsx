/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, Smartphone 
} from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required contact form fields.");
      return;
    }

    // Save contact message structures to localStorage
    const savedMsg = localStorage.getItem('gulfflow_contact_messages') || '[]';
    let list = [];
    try {
      list = JSON.parse(savedMsg);
    } catch {
      list = [];
    }

    const newMessage = {
      id: "msg-" + Math.floor(100 + Math.random() * 900),
      name,
      email,
      phone,
      subject,
      message,
      submittedAt: new Date().toISOString()
    };

    list.unshift(newMessage);
    localStorage.setItem('gulfflow_contact_messages', JSON.stringify(list));

    // Clear fields
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');

    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-gray-150">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-[#FAF7F5] text-[#7A1F35] border border-[#7A1F35]/15 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
            <Mail className="h-3.5 w-3.5 text-[#7A1F35] animate-pulse" />
            <span>Admissions Counsel Desk</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-academic font-bold text-[#7A1F35] tracking-tight">
            Contact Our Admissions Council
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-light">
            Have a unique question regarding admissions, curriculums, boarding options or dress codes? Reach our Lagos campus representatives immediately.
          </p>
        </div>

        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* LHS: Info Cards, WhatsApp trigger, and Maps embed */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-5">
              <h3 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-lg border-b border-gray-150 pb-2.5">
                Campus Location
              </h3>

              <div className="space-y-4">
                
                {/* Physical address info */}
                <div className="flex items-start space-x-3.5 text-xs text-gray-700">
                  <div className="bg-[#FAF7F5] p-2 rounded-lg text-[#7A1F35] border border-gray-200 shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#7A1F35] mb-0.5">Physical Campus Address</h4>
                    <p className="leading-relaxed text-gray-650 font-light">
                      1, Gulf Flower School Close, Off Lagos-Abeokuta Expressway, Alimosho Local Govt., Lagos State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone links */}
                <div className="flex items-start space-x-3.5 text-xs text-gray-700">
                  <div className="bg-[#FAF7F5] p-2 rounded-lg text-[#7A1F35] border border-gray-200 shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#7A1F35] mb-0.5">Telephone & Mobile Lines</h4>
                    <p className="font-mono text-[#7A1F35] font-bold">
                      <a href="tel:+2348033214556" className="hover:text-[#D4A017] hover:underline whitespace-nowrap">+234 (0) 803 321 4556</a>
                    </p>
                    <p className="font-mono text-[#7A1F35] font-bold mt-0.5">
                      <a href="tel:+2348122334455" className="hover:text-[#D4A017] hover:underline whitespace-nowrap">+234 (0) 812 233 4455</a>
                    </p>
                  </div>
                </div>

                {/* Email coordinates */}
                <div className="flex items-start space-x-3.5 text-xs text-gray-700">
                  <div className="bg-[#FAF7F5] p-2 rounded-lg text-[#7A1F35] border border-gray-200 shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#7A1F35] mb-0.5">Corporate & Admissions Email</h4>
                    <p className="font-mono">
                      <a href="mailto:admissions@gulfflowerschools.edu.ng" className="hover:text-[#D4A017] text-[#7A1F35] hover:underline">admissions@gulfflowerschools.edu.ng</a>
                    </p>
                    <p className="font-mono mt-0.5">
                      <a href="mailto:info@gulfflowerschools.edu.ng" className="hover:text-[#D4A017] text-[#7A1F35] hover:underline">info@gulfflowerschools.edu.ng</a>
                    </p>
                  </div>
                </div>

                {/* Visitation standard timing hours */}
                <div className="flex items-start space-x-3.5 text-xs text-gray-700">
                  <div className="bg-[#FAF7F5] p-2 rounded-lg text-[#7A1F35] border border-gray-200 shrink-0">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                   <div>
                     <h4 className="font-serif font-bold text-[#7A1F35] mb-0.5">Administrative Office Hours</h4>
                     <p className="leading-snug text-gray-650 font-light font-sans">
                       Mondays to Fridays: 7:30 AM - 4:00 PM
                     </p>
                     <p className="text-[10px] text-gray-500 mt-0.5 italic">
                       Closed during official Nigerian national public holidays.
                     </p>
                   </div>
                </div>

              </div>
            </div>

            {/* Direct WhatsApp Call to Action Hook tool */}
            <div className="bg-gradient-to-r from-[#7A1F35] to-[#8B2332] text-white p-5 rounded-2xl flex items-center justify-between shadow-md border border-[#D4A017]/20">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center space-x-1.5">
                  <Smartphone className="h-4.5 w-4.5 shrink-0 text-[#D4A017]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-white/90">Direct WhatsApp Desk</span>
                </div>
                <h4 className="font-serif font-serif-academic font-bold text-base leading-tight">Chat with Admissions</h4>
                <p className="text-[11px] text-gray-100 font-light max-w-xs leading-relaxed">
                  Skip contact lines and text our principal secretary instantly to get immediate boarding & tuition prospectus catalogs.
                </p>
              </div>
              <a
                href="https://wa.me/2348033214556?text=Hello%20Gulf%20Flower%20Schools%20Admissions%20Council.%20I%20am%20interested%20in%20the%20boarding%20academy%20prospectus."
                target="_blank"
                rel="noreferrer referrer"
                className="bg-[#D4A017] hover:bg-[#FAF7F5] hover:text-[#7A1F35] text-white font-bold text-[11px] uppercase tracking-wider py-2.5 px-4.5 rounded-xl shadow-md transition-all shrink-0 font-mono text-center"
              >
                Chat Live
              </a>
            </div>

            {/* Live Google Maps High Quality Embed with referer policy */}
            <div className="bg-white p-2.5 rounded-2xl border border-gray-200 shadow-md h-56 overflow-hidden">
              <iframe
                title="Gulf Flower Schools Lagos Google Map Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.91970228782!2d3.2662!3d6.5414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fded592c4cd%3A0xe6bfdd65b793ff0e!2sAlimosho%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="rounded-xl opacity-90 contrast-110 hover:opacity-100 transition-all duration-300"
              />
            </div>

          </div>

          {/* RHS: Modern interactive contact email submission form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md text-left">
              <h3 className="font-serif font-serif-academic font-bold text-[#7A1F35] text-xl mb-6 border-b border-gray-150 pb-3">
                Send Digital Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Chief Babajide"
                      className="w-full bg-[#FAF7F5] border border-gray-250 focus:border-[#7A1F35] rounded-xl px-4 py-3.5 text-xs text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. babajide@gmail.com"
                      className="w-full bg-[#FAF7F5] border border-gray-250 focus:border-[#7A1F35] rounded-xl px-4 py-3.5 text-xs text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Your Telephone (Optional)</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 080XXXXXXXX"
                      className="w-full bg-[#FAF7F5] border border-gray-250 focus:border-[#7A1F35] rounded-xl px-4 py-3.5 text-xs text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Message Subject *</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Scholarship Eligibility Enquiry"
                      className="w-full bg-[#FAF7F5] border border-gray-250 focus:border-[#7A1F35] rounded-xl px-4 py-3.5 text-xs text-gray-800 focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-600 uppercase tracking-wider block font-mono">Message Body *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Elaborate on your questions here. Let us know of previous school averages or current class structures."
                    className="w-full bg-[#FAF7F5] border border-gray-250 focus:border-[#7A1F35] rounded-xl px-4 py-3.5 text-xs text-gray-800 focus:outline-none placeholder-gray-400 leading-relaxed"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#7A1F35] hover:bg-[#8B2332] text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl shadow-md cursor-pointer transition-transform duration-100 active:scale-97 flex items-center space-x-2 w-full justify-center font-mono"
                  >
                    <Send className="h-4 w-4 text-white" />
                    <span>Send Message Protocol</span>
                  </button>

                  {contactSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-[#FAF7F5] border border-[#7A1F35]/15 text-gray-800 text-xs rounded-xl flex items-start space-x-2 w-full"
                    >
                      <CheckCircle className="h-5 w-5 text-[#D4A017] shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <p className="font-bold text-[#7A1F35] font-mono">Message Delivered!</p>
                        <p className="text-[10px] mt-0.5 text-gray-650 font-sans leading-relaxed">The corporate desk has stored your inbox item as GFS-M{Math.floor(100+Math.random()*900)}. An administrative counselor will draft a comprehensive reply inside your email inbox shortly.</p>
                      </div>
                    </motion.div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

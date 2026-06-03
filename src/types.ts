/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  classOfInterest: 'Pre-School' | 'Primary School' | 'Junior High School' | 'Senior High School';
  boardingRequired: 'Day' | 'Boarding';
  prevSchool?: string;
  address: string;
  additionalNotes?: string;
  submittedAt: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Declined';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Read' | 'Responded';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: 'Parent' | 'Alumnus' | 'Student';
  year?: string;
  rating: number;
}

export interface StaffProfile {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
  credentials?: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  category: 'academic' | 'sports' | 'arts' | 'leadership';
  studentName: string;
  description: string;
  stat?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classrooms' | 'laboratories' | 'ict' | 'sports' | 'boarding' | 'events';
  imageUrl: string;
  description: string;
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyBenefitsSection } from './components/KeyBenefitsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { PlacementEcosystemSection } from './components/PlacementEcosystemSection';
import { FacultySection } from './components/FacultySection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { ScheduleAndVenueSection } from './components/ScheduleAndVenueSection';
import { FaqAndInquirySection } from './components/FaqAndInquirySection';
import { Footer } from './components/Footer';
import { FloatingQuickBar } from './components/FloatingQuickBar';
import { ApplicationModal } from './components/ApplicationModal';
import { DiagnosisQuizModal } from './components/DiagnosisQuizModal';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyInitialTrack, setApplyInitialTrack] = useState<string | undefined>();
  const [applyInitialAudience, setApplyInitialAudience] = useState<string | undefined>();
  
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const handleOpenApply = (track?: string, audience?: string) => {
    setApplyInitialTrack(track);
    setApplyInitialAudience(audience);
    setIsApplyModalOpen(true);
  };

  const handleSelectTrackAndApply = (recommendedTrack: string, targetAudience: string) => {
    setApplyInitialTrack(recommendedTrack);
    setApplyInitialAudience(targetAudience);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans pb-16">
      {/* Navigation Header */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Promotional Showcase */}
        <HeroSection
          onOpenApply={() => handleOpenApply()}
          onOpenQuiz={() => setIsQuizModalOpen(true)}
        />

        {/* 2. Key Benefits & Academy Comparison */}
        <KeyBenefitsSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* 3. 8-Week Core Practical Curriculum */}
        <CurriculumSection
          onOpenBrochure={() => setIsBrochureModalOpen(true)}
          onOpenApply={() => handleOpenApply()}
        />

        {/* 4. Placement Ecosystem (Gangsaya x Cheonan 128 Orgs) */}
        <PlacementEcosystemSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* 5. Master Faculty & Mentors Lineup */}
        <FacultySection />

        {/* 6. Real Student Success Stories */}
        <SuccessStoriesSection
          onOpenApply={() => handleOpenApply()}
        />

        {/* 7. Schedule, Selection Procedures, Venue & Directions */}
        <ScheduleAndVenueSection
          onOpenApply={() => handleOpenApply()}
          onOpenBrochure={() => setIsBrochureModalOpen(true)}
        />

        {/* 8. Frequently Asked Questions & Quick Inquiry */}
        <FaqAndInquirySection />
      </main>

      {/* Footer */}
      <Footer
        onOpenApply={() => handleOpenApply()}
        onOpenBrochure={() => setIsBrochureModalOpen(true)}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Floating Bottom Conversion Bar */}
      <FloatingQuickBar
        onOpenApply={() => handleOpenApply()}
        onOpenQuiz={() => setIsQuizModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialTrack={applyInitialTrack}
        initialTargetAudience={applyInitialAudience}
      />

      <DiagnosisQuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onSelectTrackAndApply={handleSelectTrackAndApply}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        onOpenApply={() => handleOpenApply()}
      />
    </div>
  );
}

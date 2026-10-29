/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialPortfolioData, PortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechnicalSkills } from './components/TechnicalSkills';
import { ProjectSection } from './components/ProjectSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeSection } from './components/ResumeSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const STORAGE_KEY = 'mallikarjun_portfolio_minimal_v2';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const saveUpdatedData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const handleUpdateResumeUrl = (url: string) => {
    const updated = {
      ...data,
      contact: {
        ...data.contact,
        resumePdfUrl: url,
      },
    };
    saveUpdatedData(updated);
  };

  const handleUpdateProjectLinks = (github: string, demo: string) => {
    const updated = {
      ...data,
      project: {
        ...data.project,
        githubUrl: github,
        demoUrl: demo,
      },
    };
    saveUpdatedData(updated);
  };

  const handleUpdateGithub = (newGithub: string) => {
    const updated = {
      ...data,
      contact: {
        ...data.contact,
        github: newGithub,
      },
    };
    saveUpdatedData(updated);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar
        name={data.personal.name}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero
          data={data}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* 2. About Me */}
        <AboutSection data={data} />

        {/* 3. Technical Skills */}
        <TechnicalSkills skills={data.skills} />

        {/* 4. Projects */}
        <ProjectSection
          project={data.project}
          onUpdateProjectLinks={handleUpdateProjectLinks}
        />

        {/* 5. Education */}
        <EducationSection education={data.education} />

        {/* 6. Certifications */}
        <CertificationsSection certifications={data.certifications} />

        {/* 7. Contact */}
        <ContactSection
          contact={data.contact}
          onUpdateGithub={handleUpdateGithub}
        />

        {/* 8. Resume */}
        <ResumeSection
          data={data}
          onResumeClick={() => setIsResumeOpen(true)}
          onUpdateResumeUrl={handleUpdateResumeUrl}
        />
      </main>

      {/* Footer */}
      <Footer
        data={data}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Resume Document Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
        onUpdateResumeUrl={handleUpdateResumeUrl}
      />
    </div>
  );
}

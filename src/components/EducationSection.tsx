/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface EducationSectionProps {
  education: PortfolioData['education'];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-6">
          Education
        </h2>

        {/* Clean Minimal Education Box */}
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
            <h3 className="text-lg font-bold text-[#0a192f]">
              {education.degree}
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Expected Graduation: {education.expectedGraduation}</span>
            </div>
          </div>

          <div className="text-sm font-medium text-slate-700 mb-3 flex items-center gap-2">
            <span>{education.institution}</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="flex items-center gap-1 text-xs text-slate-500 font-normal">
              <MapPin className="w-3.5 h-3.5" />
              {education.location}
            </span>
          </div>

          <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside mt-3 border-t border-slate-100 pt-3">
            {education.curriculum.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

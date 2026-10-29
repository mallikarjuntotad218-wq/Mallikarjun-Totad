/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Compass } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-6">
          About Me
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-8">
          {data.personal.about.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Target Objective Box */}
        <div className="p-5 rounded-lg border border-blue-200 bg-blue-50/50 flex items-start gap-3.5">
          <Target className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-[#0a192f] mb-1">
              Internship Target
            </h3>
            <p className="text-sm text-slate-700 leading-normal">
              {data.personal.about.careerGoal} Available for on-site or remote opportunities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

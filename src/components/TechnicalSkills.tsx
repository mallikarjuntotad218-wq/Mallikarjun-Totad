/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SkillCategory } from '../data/portfolioData';

interface TechnicalSkillsProps {
  skills: SkillCategory[];
}

export const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-3">
          Technical Skills
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          Core technical competencies developed through academic coursework at CMR University and practical project implementation.
        </p>

        {/* Structured Clean Skills List / Table */}
        <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
          {skills.map((category) => (
            <div
              key={category.title}
              className="p-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-slate-50/70 transition-colors"
            >
              {/* Category Title in Navy */}
              <div className="w-48 shrink-0 text-sm font-bold text-[#0a192f]">
                {category.title}
              </div>

              {/* Skills as Clean Text with Dot Separators */}
              <div className="flex-1 text-sm text-slate-700 leading-relaxed">
                {category.skills.map((skill, index) => (
                  <span key={skill} className="inline-block mr-2 mb-1">
                    <span className="font-medium text-slate-800">{skill}</span>
                    {index < category.skills.length - 1 && (
                      <span aria-hidden="true" className="text-slate-400 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

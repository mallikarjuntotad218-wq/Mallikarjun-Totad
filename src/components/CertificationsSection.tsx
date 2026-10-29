/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Check } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: string[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-3">
          Certifications
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Verified academic and professional coursework as documented in my official resume.
        </p>

        {/* Clean Minimal List */}
        <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 bg-white overflow-hidden">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="p-4 flex items-center justify-between hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-blue-700 shrink-0" />
                <span className="text-sm font-semibold text-[#0a192f]">{cert}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

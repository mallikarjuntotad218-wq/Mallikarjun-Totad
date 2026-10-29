/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, FileText, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroProps {
  data: PortfolioData;
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onResumeClick }) => {
  return (
    <section className="py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Subtitle / Role indicator */}
        <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-3">
          {data.personal.title}
        </div>

        {/* Candidate Name in Navy */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a192f] mb-4">
          {data.personal.name}
        </h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 max-w-3xl">
          {data.personal.intro}
        </p>

        {/* Action Buttons: View Projects, View Resume, Contact Me */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0a192f] hover:bg-blue-800 rounded-md transition-colors shadow-sm"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onResumeClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Clean Quick Metadata Strip without photos or pill clutter */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.contact.location}</span>
          </div>

          <span aria-hidden="true" className="text-slate-300">·</span>

          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors font-mono"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{data.contact.email}</span>
          </a>

          <span aria-hidden="true" className="text-slate-300">·</span>

          <a
            href={data.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
          </a>

          <span aria-hidden="true" className="text-slate-300">·</span>

          <a
            href={data.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-slate-500" />
            <span>GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};

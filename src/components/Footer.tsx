/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onResumeClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10 text-xs text-slate-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <div className="font-bold text-[#0a192f] text-sm">
              {data.personal.name}
            </div>
            <div className="text-slate-500 mt-0.5">
              {data.personal.title} · {data.education.institution}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${data.contact.email}`}
              className="hover:text-blue-700 transition-colors"
              title="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={data.contact.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-700" />
            </a>

            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onResumeClick}
              className="hover:text-blue-700 transition-colors"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1 rounded border border-slate-200 hover:bg-white text-slate-500 hover:text-slate-800 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Mallikarjun Totad. Built with React & Tailwind CSS.
          </div>
          <div>
            {data.contact.location}
          </div>
        </div>
      </div>
    </footer>
  );
};

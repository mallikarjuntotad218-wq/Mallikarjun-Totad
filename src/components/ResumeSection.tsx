/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileText, Download, ExternalLink, HelpCircle, Check, Edit3 } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  data: PortfolioData;
  onResumeClick: () => void;
  onUpdateResumeUrl: (url: string) => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  data,
  onResumeClick,
  onUpdateResumeUrl,
}) => {
  const [showHowTo, setShowHowTo] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputUrl, setInputUrl] = useState(data.contact.resumePdfUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateResumeUrl(inputUrl);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <section id="resume" className="py-16 md:py-20 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-3">
          Resume
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Access my full resume documentation, educational credentials, and verified coursework.
        </p>

        {/* Action Card */}
        <div className="border border-slate-200 rounded-lg p-6 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-blue-50 border border-blue-200 text-blue-700">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0a192f]">
                  Mallikarjun Totad — Resume Document
                </h3>
                <p className="text-xs text-slate-500">
                  Target: Data Engineer Intern & Product Analytics (Summer 2027)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0a192f] hover:bg-blue-800 rounded-md transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit PDF Link</span>
              </button>

              <button
                type="button"
                onClick={() => setShowHowTo(!showHowTo)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
                <span>How to add PDF</span>
              </button>
            </div>
          </div>

          {/* Quick link editor */}
          {isEditing && (
            <form onSubmit={handleSave} className="pt-4 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-medium text-slate-700">
                Enter your Google Drive share link, GitHub releases URL, or local PDF path:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/... or /Mallikarjun_Totad_Resume.pdf"
                  className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded font-mono focus:outline-none focus:border-blue-600"
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Save URL
                </button>
              </div>
            </form>
          )}

          {savedSuccess && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-700">
              <Check className="w-3.5 h-3.5" />
              <span>Resume URL saved successfully!</span>
            </div>
          )}

          {/* How to add PDF guide */}
          {showHowTo && (
            <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-md text-xs text-slate-700 space-y-2 leading-relaxed">
              <div className="font-bold text-[#0a192f]">How to link your uploaded Resume PDF:</div>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>
                  <strong>Option A (Google Drive / Cloud link):</strong> Upload your resume PDF to Google Drive, set sharing to <em>&quot;Anyone with the link can view&quot;</em>, copy the link, click <strong>&quot;Edit PDF Link&quot;</strong> above, paste it, and save.
                </li>
                <li>
                  <strong>Option B (Local File in Project):</strong> Place your file named <code className="bg-white px-1 py-0.5 rounded border border-blue-200">Mallikarjun_Totad_Resume.pdf</code> directly into the public directory.
                </li>
                <li>
                  <strong>Option C (Direct in Code):</strong> Open <code className="bg-white px-1 py-0.5 rounded border border-blue-200">src/data/portfolioData.ts</code> and update the <code className="font-mono text-blue-900">resumePdfUrl</code> field.
                </li>
              </ol>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

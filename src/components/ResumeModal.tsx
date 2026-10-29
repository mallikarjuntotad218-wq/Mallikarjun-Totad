/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Download, ExternalLink, Edit3, Check, FileText } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdateResumeUrl: (url: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateResumeUrl,
}) => {
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [newUrl, setNewUrl] = useState(data.contact.resumePdfUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateResumeUrl(newUrl);
    setSaveSuccess(true);
    setIsEditingUrl(false);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleOpenPdf = () => {
    if (data.contact.resumePdfUrl && data.contact.resumePdfUrl !== '#') {
      window.open(data.contact.resumePdfUrl, '_blank');
    } else {
      window.print();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-300 rounded-lg shadow-xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-700" />
            <span className="text-sm font-bold text-[#0a192f]">
              Resume Preview — {data.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditingUrl(!isEditingUrl)}
              className="text-xs px-2.5 py-1 text-slate-600 hover:text-slate-900 border border-slate-300 rounded hover:bg-white transition-colors"
            >
              <Edit3 className="w-3 h-3 inline mr-1" />
              Edit Link
            </button>

            <button
              type="button"
              onClick={handleOpenPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-[#0a192f] hover:bg-blue-800 rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick URL Configuration */}
        {isEditingUrl && (
          <form onSubmit={handleSaveUrl} className="p-3 bg-blue-50 border-b border-blue-200 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Paste Google Drive or PDF link here..."
              className="flex-1 px-2.5 py-1 text-xs border border-blue-300 rounded font-mono bg-white text-slate-900 focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="px-3 py-1 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditingUrl(false)}
              className="px-2 py-1 text-xs text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
          </form>
        )}

        {saveSuccess && (
          <div className="px-6 py-1.5 bg-emerald-50 border-b border-emerald-200 text-xs text-emerald-800 flex items-center gap-1.5 shrink-0">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>PDF link saved successfully!</span>
          </div>
        )}

        {/* Formatted Text Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-900 bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl font-bold tracking-tight text-[#0a192f]">
              {data.personal.name}
            </h1>
            <div className="text-sm font-semibold text-blue-800 mt-0.5">
              {data.personal.title}
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600 mt-2 font-mono">
              <span>{data.contact.email}</span>
              <span>•</span>
              <span>{data.contact.phone}</span>
              <span>•</span>
              <span>{data.contact.location}</span>
              <span>•</span>
              <a href={data.contact.linkedIn} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={data.contact.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0a192f] border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs font-semibold text-slate-900">
              <span>{data.education.degree}</span>
              <span className="font-mono text-slate-600 font-normal">Expected {data.education.expectedGraduation}</span>
            </div>
            <div className="text-xs text-slate-700 mb-2">
              {data.education.institution}, {data.education.location}
            </div>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {data.education.curriculum.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0a192f] border-b border-slate-200 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {data.skills.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline">
                  <span className="font-bold text-slate-800 w-44 shrink-0">{cat.title}:</span>
                  <span className="text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0a192f] border-b border-slate-200 pb-1 mb-2">
              Projects
            </h2>
            <div className="flex justify-between items-baseline text-xs mb-1">
              <span className="font-bold text-slate-900">{data.project.title}</span>
              <span className="font-mono text-slate-600 text-[11px]">
                {data.project.technologies.join(', ')}
              </span>
            </div>
            <p className="text-xs text-slate-700 mb-2 leading-relaxed">
              {data.project.summary}
            </p>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              {data.project.implementedFeatures.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0a192f] border-b border-slate-200 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              {data.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span>Targeting Summer 2027 Opportunities</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

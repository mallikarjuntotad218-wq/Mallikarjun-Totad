/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, ExternalLink, Edit3 } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  contact: PortfolioData['contact'];
  onUpdateGithub: (newGithub: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contact,
  onUpdateGithub,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isEditingGithub, setIsEditingGithub] = useState(false);
  const [githubInput, setGithubInput] = useState(contact.github);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSaveGithub = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateGithub(githubInput);
    setIsEditingGithub(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-3">
          Contact
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          Available for Summer 2027 Data Engineering and Product Analytics internship opportunities. Feel free to reach out directly.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          
          {/* Email */}
          <div className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase text-slate-500">Email</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-semibold text-[#0a192f] hover:text-blue-700 transition-colors font-mono break-all"
              >
                {contact.email}
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Direct inbox for internship inquiries
            </div>
          </div>

          {/* LinkedIn */}
          <div className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="text-xs font-bold uppercase text-slate-500 mb-1.5">LinkedIn</div>
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-700" />
                <span>linkedin.com/in/mallikarjuntotad-97b54038a</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Professional network profile
            </div>
          </div>

          {/* Location */}
          <div className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="text-xs font-bold uppercase text-slate-500 mb-1.5">Location</div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0a192f]">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{contact.location}</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Open to on-site in Bengaluru or remote roles
            </div>
          </div>

          {/* GitHub (Editable) */}
          <div className="border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase text-slate-500">GitHub</span>
                <button
                  type="button"
                  onClick={() => setIsEditingGithub(!isEditingGithub)}
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>{isEditingGithub ? 'Close' : 'Edit Link'}</span>
                </button>
              </div>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a192f] hover:text-blue-700 transition-colors font-mono"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>{contact.github}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              {isEditingGithub ? 'Update below:' : 'Editable repository link'}
            </div>
          </div>

        </div>

        {/* GitHub link editor */}
        {isEditingGithub && (
          <form onSubmit={handleSaveGithub} className="p-4 bg-slate-50 border border-slate-200 rounded-lg mb-6">
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Your GitHub Profile URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={githubInput}
                onChange={(e) => setGithubInput(e.target.value)}
                placeholder="https://github.com/your-username"
                className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded font-mono focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded"
              >
                Save
              </button>
            </div>
          </form>
        )}

        {savedSuccess && (
          <div className="mb-6 flex items-center gap-1.5 text-xs text-emerald-700">
            <Check className="w-3.5 h-3.5" />
            <span>GitHub link updated successfully.</span>
          </div>
        )}

      </div>
    </section>
  );
};

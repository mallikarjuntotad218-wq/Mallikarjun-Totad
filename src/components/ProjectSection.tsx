/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, Github, Check, Edit3 } from 'lucide-react';
import { ProjectData } from '../data/portfolioData';

interface ProjectSectionProps {
  project: ProjectData;
  onUpdateProjectLinks: (github: string, demo: string) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  project,
  onUpdateProjectLinks,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [githubInput, setGithubInput] = useState(project.githubUrl);
  const [demoInput, setDemoInput] = useState(project.demoUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveLinks = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProjectLinks(githubInput, demoInput);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a192f] mb-3">
          Projects
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          Practical application of data engineering principles, relational schema design, and data validation pipelines.
        </p>

        {/* Project Card (Clean, minimal, no photos) */}
        <div className="border border-slate-200 rounded-lg p-6 sm:p-8 bg-white hover:border-slate-300 transition-colors">
          
          {/* Title & Tech Stack */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-[#0a192f]">
              {project.title}
            </h3>
            <div className="text-xs font-mono font-medium text-blue-700">
              {project.technologies.join(' · ')}
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-slate-700 leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Implemented Features */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Implemented Pipeline Engineering & Features
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {project.implementedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Planned Roadmap */}
          <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-md">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Planned Next Steps (Roadmap)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {project.plannedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-400">→</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links & Editor */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0a192f] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors"
                >
                  <span>Project Demo / Overview</span>
                  <ExternalLink className="w-3 h-3 text-blue-500 ml-0.5" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Close Link Editor' : 'Edit Project Links'}</span>
            </button>
          </div>

          {/* In-place link editor */}
          {isEditing && (
            <form onSubmit={handleSaveLinks} className="mt-4 pt-4 border-t border-slate-200 space-y-3">
              <div className="text-xs font-medium text-slate-700">
                Update Project URLs (saves immediately):
              </div>
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">GitHub URL</label>
                <input
                  type="url"
                  value={githubInput}
                  onChange={(e) => setGithubInput(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-blue-600 font-mono"
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">Demo URL</label>
                <input
                  type="text"
                  value={demoInput}
                  onChange={(e) => setDemoInput(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-blue-600 font-mono"
                  placeholder="https://..."
                />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Save Links
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 text-xs text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {savedSuccess && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-700">
              <Check className="w-3.5 h-3.5" />
              <span>Project links saved successfully.</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

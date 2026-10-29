/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  name: string;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ name, onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Name */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold text-[#0a192f] hover:text-blue-700 transition-colors tracking-tight whitespace-nowrap"
          >
            {name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-700 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0a192f] hover:bg-blue-800 rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-2 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { PageTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onRequestQuote }) => {
  return (
    <footer className="w-full py-12 px-4 md:px-12 bg-[#1A1A1A] text-white border-t border-black/20 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-md">
          <h2 className="text-2xl font-serif font-bold text-white mb-3 italic tracking-tight">
            FundiPro Hardware
          </h2>
          <p className="text-xs mb-4 text-white/70 leading-relaxed font-sans">
            Supplying professional grade tools, power machinery, and building materials to the Kenyan construction industry since 2012. KEBS Certified and KRA ETR Compliant.
          </p>
          <div className="flex gap-2 text-[9px] text-white/80 font-bold tracking-[0.2em] uppercase">
            <span className="bg-white/10 px-2.5 py-1 border border-white/10">
              Nairobi: Enterprise Rd
            </span>
            <span className="bg-white/10 px-2.5 py-1 border border-white/10">
              Mombasa: Mbaraki Hub
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-16">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b45309] mb-1">
              Explore Products
            </h3>
            <button
              onClick={() => setActiveTab('shop')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Power Tools
            </button>
            <button
              onClick={() => setActiveTab('shop')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Hand Tools - Fundi
            </button>
            <button
              onClick={() => setActiveTab('shop')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Building Materials
            </button>
            <button
              onClick={() => setActiveTab('shop')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Roofing (Mabati)
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b45309] mb-1">
              Quick Links
            </h3>
            <button
              onClick={() => setActiveTab('portfolio')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Case Studies &amp; Portfolio
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Bulk Supply &amp; Site Delivery
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="text-left text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              Branch Locations &amp; Support
            </button>
            <button
              onClick={onRequestQuote}
              className="text-left text-xs text-[#b45309] hover:underline font-bold uppercase tracking-wider cursor-pointer"
            >
              Request Bulk Quote →
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b45309] mb-1">
              Legal &amp; Compliance
            </h3>
            <span className="text-xs text-white/70">Privacy Policy</span>
            <span className="text-xs text-white/70">Terms of Service</span>
            <span className="text-xs text-white/70">KRA ETR Invoicing</span>
            <span className="text-xs text-white/70">KEBS Standard Quality</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/50 gap-4 font-sans">
        <p>© 2026 FundiPro Hardware Ltd. All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          Live Kenya Delivery Status: Operational
        </p>
      </div>
    </footer>
  );
};

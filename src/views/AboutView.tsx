import React from 'react';
import { branches } from '../data/portfolio';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] block mb-2">
          ORGANIZATION ARCHIVE
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] mt-2 mb-6 tracking-tight italic">
          Powering Kenya's Construction Industry
        </h1>
        <p className="text-sm text-black/70 leading-relaxed font-sans">
          Founded in Nairobi in 2012, FundiPro Hardware Ltd has grown to become Kenya's leading distributor of professional power tools, high-tensile steel, cement, and roofing solutions. We bridge the gap between major global manufacturers and local contractors.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-[#EFECE6] border border-black/10 p-6 text-center">
        <div>
          <span className="text-3xl md:text-4xl font-serif italic font-bold text-[#1A1A1A] block">
            15,000+
          </span>
          <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-black/60">Tonnes Steel Supplied</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl font-serif italic font-bold text-[#1A1A1A] block">
            500+
          </span>
          <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-black/60">Commercial Projects</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl font-serif italic font-bold text-[#b45309] block">
            100%
          </span>
          <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-black/60">KEBS Certified</span>
        </div>
        <div>
          <span className="text-3xl md:text-4xl font-serif italic font-bold text-[#1A1A1A] block">
            47
          </span>
          <span className="text-[10px] tracking-[0.15em] font-bold uppercase text-black/60">Counties Delivered</span>
        </div>
      </div>

      {/* Core Values / Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors">
          <span className="material-symbols-outlined text-3xl text-[#b45309] mb-3">
            verified
          </span>
          <h3 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight">
            KEBS Quality Guarantee
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-sans">
            We strictly stock genuine products from certified brands like Bosch, Makita, Bamburi, and Rhino Mabati with batch testing.
          </p>
        </div>

        <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors">
          <span className="material-symbols-outlined text-3xl text-[#b45309] mb-3">
            receipt_long
          </span>
          <h3 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight">
            100% KRA Tax Compliance
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-sans">
            All purchases include ETR invoices with TIMS validation to facilitate seamless input tax claims for registered firms.
          </p>
        </div>

        <div className="bg-white border border-black/10 p-6 hover:border-black transition-colors">
          <span className="material-symbols-outlined text-3xl text-[#b45309] mb-3">
            handyman
          </span>
          <h3 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight">
            Fundi-First Support
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-sans">
            Whether you need a single replacement angle grinder or 1,000 bags of cement, our technical team provides hands-on expert consultation.
          </p>
        </div>
      </div>

      {/* Branch Network */}
      <div className="border-t border-black/10 pt-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Our Branch Network
          </h2>
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-black/40">LOCATIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/10 p-6 flex flex-col justify-between hover:border-black transition-colors"
            >
              <div>
                <span className="bg-[#1A1A1A] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 inline-block mb-3">
                  {branch.city} BRANCH
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4">
                  {branch.name}
                </h3>

                <ul className="space-y-2.5 text-xs text-black/70 mb-6 font-sans">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b45309]">
                      location_on
                    </span>
                    <span>{branch.address}, {branch.city}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b45309]">
                      call
                    </span>
                    <span>{branch.phone}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b45309]">
                      mail
                    </span>
                    <span>{branch.email}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#b45309]">
                      schedule
                    </span>
                    <span>{branch.hours}</span>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${branch.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3 px-4 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-colors"
              >
                Contact {branch.name} on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { featuredCaseStudy, supplyHighlights } from '../data/portfolio';

interface PortfolioViewProps {
  onRequestQuote: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onRequestQuote }) => {
  const openWhatsApp = () => {
    const text = `Hello FundiPro Hardware! I am interested in bulk provisioning for an upcoming construction project. Please connect me with a account manager.`;
    window.open(`https://wa.me/254700123456?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto border-b border-black/15 dot-pattern">
        <div className="max-w-3xl">
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] block mb-2">ARCHITECTURAL PROVISIONING</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6 tracking-tight italic">
            Building Kenya's Infrastructure.
          </h1>
          <p className="text-base text-black/70 leading-relaxed font-sans">
            From commercial high-rises to luxury residential developments, FundiPro Hardware supplies the robust, KEBS-certified materials that power professional construction.
          </p>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-12 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[2px] bg-[#b45309] w-10 block" />
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A]">
            FEATURED CASE STUDY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border border-black/15 bg-white overflow-hidden">
          {/* Image Column */}
          <div className="md:col-span-7 h-72 md:h-auto min-h-[380px] relative border-b md:border-b-0 md:border-r border-black/15">
            <img
              src={featuredCaseStudy.imageUrl}
              alt={featuredCaseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-center">
            <div className="inline-block bg-[#1A1A1A] px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white w-max">
              {featuredCaseStudy.year}
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-4 tracking-tight">
              {featuredCaseStudy.title}
            </h3>

            <p className="text-xs text-black/70 mb-8 leading-relaxed font-sans">
              {featuredCaseStudy.description}
            </p>

            {/* Project Spec Table */}
            <ul className="flex flex-col border border-black/10 overflow-hidden text-xs">
              <li className="flex justify-between p-3 bg-white border-b border-black/10">
                <span className="text-black/50">Scope</span>
                <span className="text-[#1A1A1A] font-bold">
                  {featuredCaseStudy.scope}
                </span>
              </li>
              <li className="flex justify-between p-3 bg-[#EFECE6] border-b border-black/10">
                <span className="text-black/50">Scale</span>
                <span className="text-[#1A1A1A] font-bold">
                  {featuredCaseStudy.scale}
                </span>
              </li>
              <li className="flex justify-between p-3 bg-white">
                <span className="text-black/50">Compliance</span>
                <span className="text-[#b45309] font-bold">
                  {featuredCaseStudy.compliance}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Supply Highlights Grid */}
      <section className="py-16 bg-[#EFECE6] border-y border-black/10">
        <div className="px-4 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10 pb-3 border-b border-black/10">
            <h2 className="text-lg md:text-xl font-serif font-bold text-[#1A1A1A] tracking-tight">
              Supply Capabilities
            </h2>
            <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-black/40">PROJECT ARCHIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supplyHighlights.map((item) => (
              <div
                key={item.id}
                className="border border-black/10 bg-white overflow-hidden group hover:border-black transition-colors"
              >
                <div className="h-56 w-full border-b border-black/10 relative overflow-hidden bg-[#F5F2ED]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#b45309] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-black/60 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-4 md:px-12 bg-[#F5F2ED] dot-pattern">
        <div className="max-w-4xl mx-auto text-center border-2 border-black/20 p-8 md:p-14 bg-white shadow-xs">
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] block mb-2">BULK SUPPLY DIRECT</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Ready to provision your next project?
          </h2>
          <p className="text-xs md:text-sm text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Partner with FundiPro for reliable, bulk supply of certified hardware materials with dedicated account managers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRequestQuote}
              className="bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3.5 px-8 transition-colors w-full sm:w-auto uppercase tracking-[0.2em] text-[10px]"
            >
              Get a Bulk Quote
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-transparent text-[#1A1A1A] font-bold py-3.5 px-8 border border-black/20 hover:bg-black/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px]"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Trust Indicators Bar */}
      <div className="bg-[#EFECE6] border-t border-black/10 py-4 px-4 text-center text-xs font-bold text-[#1A1A1A] flex flex-wrap justify-center gap-6 md:gap-12 uppercase tracking-[0.15em]">
        <span className="flex items-center gap-1.5 text-[10px]">
          <span className="material-symbols-outlined text-[#b45309] text-base">verified</span>
          KEBS Certified Products
        </span>
        <span className="flex items-center gap-1.5 text-[10px]">
          <span className="material-symbols-outlined text-[#b45309] text-base">receipt_long</span>
          KRA Compliant Invoicing
        </span>
        <span className="flex items-center gap-1.5 text-[10px]">
          <span className="material-symbols-outlined text-[#b45309] text-base">shield</span>
          Genuine Brands Guarantee
        </span>
      </div>
    </div>
  );
};

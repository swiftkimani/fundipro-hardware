import React from 'react';

export const TrustBanner: React.FC = () => {
  return (
    <div className="bg-[#EFECE6] border border-black/10 p-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 my-6">
      <div className="flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
        <span className="material-symbols-outlined text-[#b45309] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified
        </span>
        <span>KEBS Certified Products</span>
      </div>

      <div className="flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
        <span className="material-symbols-outlined text-[#b45309] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
          gavel
        </span>
        <span>KRA Compliant Invoicing</span>
      </div>

      <div className="flex items-center gap-2 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
        <span className="material-symbols-outlined text-[#b45309] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
          local_shipping
        </span>
        <span>Nationwide Kenya Delivery</span>
      </div>
    </div>
  );
};

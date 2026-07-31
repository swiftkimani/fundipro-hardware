import React from 'react';

interface ServicesViewProps {
  onRequestQuote: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onRequestQuote }) => {
  const servicesList = [
    {
      icon: 'local_shipping',
      title: 'Nationwide Site Logistics & Delivery',
      description: 'Fleet of heavy hydraulic cranes and tippers serving Nairobi, Kiambu, Machakos, Kajiado, Mombasa, Nakuru, Eldoret, Kisumu, and upcountry sites.',
    },
    {
      icon: 'receipt_long',
      title: 'KRA ETR Invoicing & Tax Compliance',
      description: 'Instant ETR receipts with TIMS validation for input tax deductions. Full KEBS quality certificates for structural engineer sign-offs.',
    },
    {
      icon: 'calculate',
      title: 'BOQ & Material Take-Off Estimations',
      description: 'Send us your architectural blueprints or Bill of Quantities. Our technical engineers calculate exact steel, cement, and roofing estimates to eliminate waste.',
    },
    {
      icon: 'content_cut',
      title: 'Custom Metal Bending & Rebar Cutting',
      description: 'Factory precision cutting and bending of D10, D12, and D16 rebar steel according to your structural bending schedules.',
    },
    {
      icon: 'support_agent',
      title: 'Dedicated Pro Account Manager',
      description: 'Single point of contact for contractors, real estate developers, and hardware stockists with flexible credit terms and fast dispatch.',
    },
    {
      icon: 'published_with_changes',
      title: 'Tool Servicing & Warranty Repairs',
      description: 'Authorized warranty repair center for Bosch, Makita, DeWalt, and Stanley power machinery with genuine OEM spare parts.',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] block mb-2">
          PROFESSIONAL HARDWARE LOGISTICS
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mt-2 mb-4 tracking-tight italic">
          Services Engineered for Kenyan Construction
        </h1>
        <p className="text-xs text-black/70 leading-relaxed max-w-2xl mx-auto font-sans">
          Combining genuine KEBS-certified supplies with end-to-end supply chain logistics so your construction project stays on schedule and within budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-black/10 p-6 flex flex-col justify-between hover:border-black transition-all group"
          >
            <div>
              <div className="w-12 h-12 bg-[#EFECE6] text-[#1A1A1A] border border-black/10 flex items-center justify-center mb-4 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#b45309] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-black/70 leading-relaxed font-sans">
                {service.description}
              </p>
            </div>

            <button
              onClick={onRequestQuote}
              className="mt-6 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A] group-hover:text-[#b45309] flex items-center gap-1.5 text-left transition-colors pt-4 border-t border-black/10"
            >
              <span>Inquire Service</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Process Steps */}
      <div className="bg-[#1A1A1A] text-white p-8 md:p-12 mb-12 border border-black/20">
        <div className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] text-center mb-2">SUPPLY PROTOCOL</div>
        <h2 className="text-2xl font-serif font-bold text-white text-center mb-10 tracking-tight">
          How We Supply Your Construction Site
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 bg-white/5 border border-white/10">
            <span className="text-2xl font-serif italic font-bold text-[#b45309] block mb-2">
              01
            </span>
            <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1.5">Submit BOQ or List</h4>
            <p className="text-xs text-white/70 font-sans">
              Upload material quantities via quote form or WhatsApp.
            </p>
          </div>

          <div className="p-5 bg-white/5 border border-white/10">
            <span className="text-2xl font-serif italic font-bold text-[#b45309] block mb-2">
              02
            </span>
            <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1.5">Receive Discount Quote</h4>
            <p className="text-xs text-white/70 font-sans">
              Get official discounted price breakdown within 1 hour.
            </p>
          </div>

          <div className="p-5 bg-white/5 border border-white/10">
            <span className="text-2xl font-serif italic font-bold text-[#b45309] block mb-2">
              03
            </span>
            <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1.5">M-Pesa or Bank Order</h4>
            <p className="text-xs text-white/70 font-sans">
              Confirm order with KRA ETR invoice generated immediately.
            </p>
          </div>

          <div className="p-5 bg-white/5 border border-white/10">
            <span className="text-2xl font-serif italic font-bold text-[#b45309] block mb-2">
              04
            </span>
            <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-1.5">Direct Site Delivery</h4>
            <p className="text-xs text-white/70 font-sans">
              Offloaded on-site at your project location anywhere in Kenya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

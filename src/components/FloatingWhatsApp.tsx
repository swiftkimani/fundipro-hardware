import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const openWhatsApp = () => {
    const text = `Hello FundiPro Hardware! I am looking for construction materials and tools. Please assist me with pricing and availability.`;
    window.open(`https://wa.me/254700123456?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#1A1A1A] hover:bg-[#b45309] text-white w-13 h-13 flex items-center justify-center border border-white/20 shadow-xl transition-all duration-300 group cursor-pointer"
      title="Instant WhatsApp Consultation"
    >
      <svg className="w-6 h-6 fill-current text-green-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.104 11.896c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.444h.004c6.58 0 11.939-5.335 11.939-11.896 0-3.176-1.24-6.165-3.468-8.447zM12.047 21.782h-.004c-1.78 0-3.524-.476-5.05-1.378l-.36-.214-3.766.983.998-3.655-.235-.373c-1-1.583-1.528-3.413-1.528-5.275 0-5.464 4.453-9.904 9.924-9.904 2.653 0 5.145 1.028 7.02 2.893 1.875 1.866 2.906 4.35 2.906 6.993 0 5.464-4.453 9.904-9.924 9.904zm5.437-7.402c-.298-.149-1.762-.867-2.036-.967-.274-.101-.473-.149-.672.149-.199.298-.769.967-.942 1.165-.173.199-.347.224-.645.075-1.5-.758-2.585-1.455-3.555-2.736-.25-.328-.027-.506.12-.656.134-.136.298-.348.447-.522.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.672-1.616-.922-2.213-.243-.58-.49-.501-.672-.51-.173-.008-.372-.01-.571-.01-.199 0-.522.075-.795.373-.274.298-1.045 1.02-1.045 2.487 0 1.467 1.07 2.885 1.219 3.084.149.199 2.102 3.193 5.087 4.484 1.84.798 2.502.83 3.393.712.984-.131 3.056-1.246 3.486-2.45.43-1.204.43-2.236.302-2.45-.128-.214-.474-.338-.772-.487z" />
      </svg>
      <span className="absolute right-15 top-2 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-[0.2em] uppercase py-1.5 px-3 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        WhatsApp Consultation
      </span>
    </button>
  );
};

import React, { useState } from 'react';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    category: 'Building Materials',
    message: '',
    branch: 'Nairobi Main Branch (Industrial Area)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white border border-black/20 max-w-lg w-full p-6 md:p-8 relative shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/50 hover:text-black p-1 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="mb-6">
          <span className="bg-[#1A1A1A] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 mb-2 inline-block">
            BULK SUPPLY &amp; BOQ
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] mt-1 tracking-tight">
            Request an Industrial Bulk Quote
          </h2>
          <p className="text-xs text-black/60 mt-1 font-sans">
            Partner with FundiPro for volume discounts on cement, steel, mabati, and power tools with dedicated account management.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#EFECE6] border border-black/15 p-6 text-center space-y-2 my-4">
            <span className="material-symbols-outlined text-4xl text-[#b45309]">
              task_alt
            </span>
            <h3 className="font-serif font-bold text-[#1A1A1A] text-lg">
              Quote Request Submitted!
            </h3>
            <p className="text-xs text-black/70 font-sans">
              Reference: <strong className="text-[#1A1A1A]">#FP-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>
            </p>
            <p className="text-xs text-black/60 font-sans">
              Our Pro Account Manager will contact you shortly with discounted pricing and delivery schedules.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Kamau"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0700 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@construction.co.ke"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Company / Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kilimani Apartments Site"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Primary Category Required
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                >
                  <option>Building Materials (Cement, Steel)</option>
                  <option>Roofing (Mabati Sheets)</option>
                  <option>Power Tools &amp; Machinery</option>
                  <option>Commercial Electricals &amp; Conduits</option>
                  <option>Plumbing &amp; Industrial Piping</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                  Servicing Branch
                </label>
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                >
                  <option>Nairobi Main Branch (Industrial Area)</option>
                  <option>Mombasa Coastal Branch (Mbaraki)</option>
                  <option>Upcountry Nationwide Direct Site Delivery</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block uppercase tracking-wider text-[10px] font-bold text-[#1A1A1A] mb-1">
                List Required Quantities or BOQ Details
              </label>
              <textarea
                rows={3}
                placeholder="e.g., 200 bags Bamburi Cement, 50 pcs D12 rebar, 30 sheets Rhino Mabati, delivery to Westlands Nairobi site..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
              ></textarea>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-black/20 text-[#1A1A1A] font-bold hover:bg-black/5 transition-colors text-[10px] tracking-[0.2em] uppercase cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold transition-colors text-[10px] tracking-[0.2em] uppercase cursor-pointer"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

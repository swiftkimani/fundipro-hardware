import React, { useState } from 'react';
import { branches } from '../data/portfolio';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309] block mb-2">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] mt-2 mb-4 tracking-tight italic">
          Contact FundiPro Hardware
        </h1>
        <p className="text-xs text-black/70 leading-relaxed font-sans">
          Need advice on building materials, power tool specifications, or current site delivery timelines? Our sales and technical staff are ready to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Branch Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-center border-b border-black/15 pb-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
              STORE BRANCHES
            </h2>
            <span className="text-[10px] text-black/40 font-mono">KENYA</span>
          </div>

          {branches.map((branch, index) => (
            <div key={index} className="bg-white border border-black/10 p-5 space-y-3 hover:border-black transition-colors">
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                {branch.name}
              </h3>
              <div className="text-xs text-black/70 space-y-1.5 font-sans">
                <p>📍 {branch.address}, {branch.city}</p>
                <p>📞 Phone: <strong className="text-[#1A1A1A] font-bold">{branch.phone}</strong></p>
                <p>✉ Email: {branch.email}</p>
                <p>🕒 {branch.hours}</p>
              </div>
              <div className="pt-2 flex gap-2">
                <a
                  href={`tel:${branch.phone}`}
                  className="flex-1 bg-[#EFECE6] hover:bg-black/10 text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.15em] py-2 text-center transition-colors border border-black/10"
                >
                  Call Branch
                </a>
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-[#1A1A1A] hover:bg-[#b45309] text-white text-[10px] font-bold uppercase tracking-[0.15em] py-2 text-center transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}

          {/* Quick Support Badge */}
          <div className="bg-[#EFECE6] border border-black/15 p-5 text-xs text-[#1A1A1A]">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#b45309] mb-1">M-PESA &amp; ETR RECEIPT SUPPORT</h4>
            <p className="leading-relaxed font-sans text-black/70 text-xs">
              Lipa na M-PESA Till No: <strong className="text-[#1A1A1A]">522522</strong> | Account: <strong className="text-[#1A1A1A]">FundiPro</strong>.
              Automated KRA tax invoices issued with every order.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-black/10 p-6 md:p-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6 border-b border-black/15 pb-2">
            ONLINE INQUIRY FORM
          </h2>

          {submitted ? (
            <div className="bg-[#EFECE6] border border-black/15 p-6 text-center space-y-2 my-8">
              <span className="material-symbols-outlined text-4xl text-[#b45309]">
                check_circle
              </span>
              <h3 className="font-serif font-bold text-[#1A1A1A] text-lg">Message Delivered</h3>
              <p className="text-xs text-black/70 font-sans">
                Thank you for contacting FundiPro Hardware. One of our sales team representatives will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Peter Njoroge"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0722 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="peter@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A] mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                  >
                    <option>General Product Inquiry</option>
                    <option>Price Quote / Bulk Discount</option>
                    <option>Site Delivery Schedule</option>
                    <option>Power Tool Warranty &amp; Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A] mb-1">
                  How can we help your project? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe the materials, tools, or delivery questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-black/15 px-3 py-2 bg-[#F5F2ED] text-xs text-[#1A1A1A] focus:outline-none focus:border-black focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3.5 px-6 text-[10px] tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                Send Message to FundiPro Sales
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

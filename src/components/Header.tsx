import React, { useState } from 'react';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  cartCount,
  setIsCartOpen,
  onRequestQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string; icon: string }[] = [
    { id: 'shop', label: 'Shop', icon: 'shopping_bag' },
    { id: 'portfolio', label: 'Portfolio', icon: 'architecture' },
    { id: 'services', label: 'Services', icon: 'handyman' },
    { id: 'about', label: 'About', icon: 'info' },
    { id: 'contact', label: 'Contact', icon: 'contact_support' },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (activeTab !== 'shop') {
      setActiveTab('shop');
    }
  };

  return (
    <>
      <header className="bg-[#F5F2ED] border-b border-black/10 sticky top-0 z-50 w-full backdrop-blur-md">
        {/* Editorial Sub-bar */}
        <div className="hidden lg:flex items-center justify-between px-10 py-1.5 border-b border-black/5 text-[10px] tracking-[0.25em] font-bold uppercase text-black/50">
          <span>CATALOGUE / 2026 EDITION</span>
          <span className="text-[#b45309]">KEBS CERTIFIED INDUSTRIAL HARDWARE • NAIROBI &amp; MOMBASA</span>
          <span>EST. 2012</span>
        </div>

        <div className="flex justify-between items-center w-full px-4 md:px-10 py-4 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('shop')}
              className="text-xl md:text-2xl font-serif text-[#1A1A1A] flex items-center gap-2.5 hover:opacity-80 transition-opacity text-left"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl text-[#b45309]" style={{ fontVariationSettings: "'FILL' 1" }}>
                handyman
              </span>
              <span className="font-editorial-title font-extrabold tracking-tight italic">
                FundiPro <span className="not-italic text-[#b45309] font-normal text-lg md:text-xl tracking-widest uppercase ml-1">Hardware</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-[11px] tracking-[0.2em] uppercase font-bold transition-all py-1 relative ${
                    isActive
                      ? 'text-[#1A1A1A] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b45309]'
                      : 'text-black/60 hover:text-[#b45309]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center border border-black/15 rounded-none px-3.5 py-1.5 bg-white/80 shadow-xs focus-within:border-black focus-within:bg-white transition-all">
              <span className="material-symbols-outlined text-black/50 text-lg mr-2">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search mabati, cement, tools..."
                className="bg-transparent border-none outline-none text-xs w-36 lg:w-52 text-[#1A1A1A] placeholder-black/40 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-black/40 hover:text-black ml-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-none hover:bg-black/5 transition-colors text-[#1A1A1A] relative"
              title="View Shopping Cart"
            >
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1A1A1A] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#F5F2ED]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Account Icon / Contact */}
            <button
              onClick={() => setActiveTab('contact')}
              className="p-2 rounded-none hover:bg-black/5 transition-colors text-[#1A1A1A] hidden sm:block"
              title="Store Branches & Contact"
            >
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#1A1A1A] hover:bg-black/5"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (sub-header) */}
        <div className="sm:hidden px-4 pb-3">
          <div className="flex items-center border border-black/15 rounded-none px-3.5 py-1.5 bg-white shadow-xs">
            <span className="material-symbols-outlined text-black/50 text-lg mr-2">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search mabati, cement, tools..."
              className="bg-transparent border-none outline-none text-xs w-full text-[#1A1A1A] placeholder-black/40"
            />
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="relative w-80 max-w-full bg-[#F5F2ED] border-r border-black/15 h-full p-6 flex flex-col z-10 shadow-2xl">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-black/10">
              <div>
                <div className="text-xs tracking-[0.25em] font-bold uppercase text-[#b45309] mb-1">Vol. 2026</div>
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">FundiPro Hardware</div>
                <div className="text-[10px] tracking-wider uppercase text-black/50 mt-1">Nairobi &amp; Mombasa Branches</div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#1A1A1A] hover:bg-black/5"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-2 font-medium text-xs tracking-widest uppercase">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 text-left transition-all ${
                      isActive
                        ? 'bg-[#1A1A1A] text-white font-bold'
                        : 'text-[#1A1A1A] hover:bg-black/5'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-black/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full bg-[#1A1A1A] text-white text-[11px] tracking-[0.2em] font-bold uppercase py-3.5 px-4 hover:bg-[#b45309] transition-colors"
              >
                Get a Bulk Quote
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

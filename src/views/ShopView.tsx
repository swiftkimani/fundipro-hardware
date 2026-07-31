import React from 'react';
import { Product, FilterState } from '../types';
import { TrustBanner } from '../components/TrustBanner';

interface ShopViewProps {
  featuredDeals: Product[];
  products: Product[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onAddToCart: (product: Product, quantity: number) => void;
  onSelectProduct: (product: Product) => void;
  onRequestQuote: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  featuredDeals,
  products,
  filters,
  setFilters,
  onAddToCart,
  onSelectProduct,
  onRequestQuote,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  // Categories & Brands list
  const categoriesList = [
    { name: 'Power Tools', count: 45 },
    { name: 'Hand Tools - Fundi', count: 112 },
    { name: 'Building Materials', count: 89 },
    { name: 'Roofing (Mabati)', count: 24 },
  ];

  const brandsList = ['Bosch', 'Makita', 'Bamburi', 'Rhino Mabati', 'DeWalt', 'Stanley'];

  const toggleCategory = (category: string) => {
    setFilters((prev) => {
      const exists = prev.categories.includes(category);
      const updated = exists
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: updated };
    });
  };

  const toggleBrand = (brand: string) => {
    setFilters((prev) => {
      const exists = prev.brands.includes(brand);
      const updated = exists
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];
      return { ...prev, brands: updated };
    });
  };

  const handlePriceApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Forces re-render / filter application
  };

  const openWhatsAppItemInquiry = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hello FundiPro Hardware! I want to inquire about *${product.title}* (${product.brand}) priced at KSh ${product.price.toLocaleString()}. Please confirm stock.`;
    window.open(`https://wa.me/254700123456?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-6">
      {/* Trust Banner */}
      <TrustBanner />

      {/* Featured Industrial Deals Bento */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-black/15">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] tracking-tight italic">
            Curated Industrial Deals
          </h2>
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase text-[#b45309]">VOLUME NO. 024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Item (Bamburi Cement) */}
          {featuredDeals[0] && (
            <div
              onClick={() => onSelectProduct(featuredDeals[0])}
              className="md:col-span-2 bg-[#EFECE6] border border-black/10 overflow-hidden relative group cursor-pointer hover:border-black/30 transition-all"
            >
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              <img
                src={featuredDeals[0].imageUrl}
                alt={featuredDeals[0].title}
                className="w-full h-[320px] object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-20">
                <span className="bg-[#b45309] text-white font-bold text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 inline-block mb-2">
                  {featuredDeals[0].badge || 'Bulk Offer'}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1.5 tracking-tight">
                  {featuredDeals[0].title}
                </h3>
                <p className="text-2xl font-serif italic font-bold text-[#F5F2ED] flex items-baseline gap-3">
                  KSh {featuredDeals[0].price.toLocaleString()}
                  {featuredDeals[0].originalPrice && (
                    <span className="text-sm font-sans not-italic font-normal line-through opacity-60">
                      KSh {featuredDeals[0].originalPrice.toLocaleString()}
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Small Featured Item (D12 High Tensile Steel) */}
          {featuredDeals[1] && (
            <div
              onClick={() => onSelectProduct(featuredDeals[1])}
              className="md:col-span-1 bg-[#EFECE6] border border-black/10 overflow-hidden relative group cursor-pointer hover:border-black/30 transition-all"
            >
              <img
                src={featuredDeals[1].imageUrl}
                alt={featuredDeals[1].title}
                className="w-full h-[320px] object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-20">
                <span className="bg-[#1A1A1A] text-white font-bold text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 inline-block mb-1.5">
                  Structural Grade
                </span>
                <h3 className="text-lg font-serif font-bold mb-1 tracking-tight">
                  {featuredDeals[1].title}
                </h3>
                <p className="text-xl font-serif italic font-bold text-[#F5F2ED]">
                  KSh {featuredDeals[1].price.toLocaleString()}
                  <span className="text-xs font-sans not-italic opacity-70"> / pc</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Filter Sidebar & Product Grid Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3 space-y-6">
          <div className="bg-white/80 border border-black/10 p-5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] mb-4 pb-2 border-b border-black/10 flex justify-between items-center">
              <span>Filter Index</span>
              <span className="text-black/40">CATALOGUE</span>
            </h3>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[#1A1A1A]">Category</h4>
              <div className="space-y-2">
                {categoriesList.map((cat) => (
                  <label
                    key={cat.name}
                    className="flex items-center gap-2 cursor-pointer group text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat.name)}
                      onChange={() => toggleCategory(cat.name)}
                      className="rounded-none text-[#1A1A1A] focus:ring-[#1A1A1A] h-3.5 w-3.5 border-black/30"
                    />
                    <span className="text-black/70 group-hover:text-[#b45309] transition-colors">
                      {cat.name} <span className="text-black/40 text-[10px]">({cat.count})</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[#1A1A1A]">Brands</h4>
              <div className="space-y-2">
                {brandsList.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 cursor-pointer group text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded-none text-[#1A1A1A] focus:ring-[#1A1A1A] h-3.5 w-3.5 border-black/30"
                    />
                    <span className="text-black/70 group-hover:text-[#b45309] transition-colors">
                      {brand}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[#1A1A1A]">
                Price Range (KSh)
              </h4>
              <form onSubmit={handlePriceApply} className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
                    }
                    className="w-full border border-black/15 rounded-none px-2.5 py-1.5 text-xs bg-white text-[#1A1A1A] focus:outline-none focus:border-black"
                  />
                  <span className="text-black/30">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
                    }
                    className="w-full border border-black/15 rounded-none px-2.5 py-1.5 text-xs bg-white text-[#1A1A1A] focus:outline-none focus:border-black"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] text-white font-bold text-[10px] tracking-[0.2em] uppercase py-2 hover:bg-[#b45309] transition-colors"
                >
                  Apply Filter
                </button>
              </form>
            </div>
          </div>

          {/* Bulk Quote CTA Banner */}
          <div className="bg-[#1A1A1A] text-white p-5 border border-black/20 space-y-3">
            <div className="text-[9px] tracking-[0.25em] font-bold uppercase text-[#b45309]">CONTRACTOR DIRECT</div>
            <h4 className="font-serif text-base font-bold text-white tracking-tight">Bulk Construction Inquiries</h4>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Ordering for major building sites? Request customized volume pricing with site delivery options across Kenya.
            </p>
            <button
              onClick={onRequestQuote}
              className="w-full bg-[#b45309] hover:bg-[#d97706] text-white font-bold text-[10px] tracking-[0.2em] uppercase py-2.5 px-3 transition-colors"
            >
              Request Bulk Quote
            </button>
          </div>
        </aside>

        {/* Product Catalogue Grid */}
        <section className="md:col-span-9">
          {/* Sorting Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-black/15 gap-4">
            <p className="text-xs text-black/60">
              Showing <strong className="text-[#1A1A1A] font-bold">{products.length}</strong>{' '}
              items in{' '}
              <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[11px]">
                "{filters.searchQuery ? filters.searchQuery : 'All Hardware'}"
              </span>
            </p>

            <div className="flex items-center gap-2">
              <label className="text-[10px] tracking-widest uppercase font-bold text-black/50">Sort:</label>
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sortBy: e.target.value as FilterState['sortBy'],
                  }))
                }
                className="border border-black/15 rounded-none px-3 py-1 bg-white text-xs text-[#1A1A1A] focus:outline-none focus:border-black"
              >
                <option value="relevance">Featured &amp; Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Additions</option>
              </select>
            </div>
          </div>

          {/* Product Cards */}
          {products.length === 0 ? (
            <div className="bg-white border border-black/10 p-12 text-center text-black/60">
              <span className="material-symbols-outlined text-4xl text-black/30 mb-2">
                search_off
              </span>
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">No matching inventory found</h3>
              <p className="text-xs mt-1 text-black/50">
                Try clearing search parameters or unchecking category filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="bg-white border border-black/10 overflow-hidden flex flex-col hover:border-black transition-all duration-300 cursor-pointer group"
                >
                  {/* Card Image Container */}
                  <div className="h-48 bg-[#F5F2ED] flex items-center justify-center p-4 relative border-b border-black/5">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#1A1A1A] text-white font-bold text-[9px] tracking-[0.2em] uppercase px-2 py-0.5">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b45309] mb-1">
                      {product.brand}
                    </span>
                    <h3 className="text-sm font-bold text-[#1A1A1A] mb-2 line-clamp-2 min-h-[2.5rem] tracking-tight group-hover:text-[#b45309] transition-colors">
                      {product.title}
                    </h3>

                    {/* Spec List Box */}
                    <ul className="spec-list text-[11px] text-black/70 mb-4 border border-black/10 overflow-hidden">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <li key={idx} className="px-2.5 py-1 flex justify-between border-b border-black/5 last:border-none">
                          <span className="text-black/50">{spec.label}</span>
                          <span className="font-medium text-[#1A1A1A]">
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & Actions */}
                    <div className="mt-auto pt-3 border-t border-black/10">
                      <p className="text-lg font-serif font-bold text-[#1A1A1A] mb-3 italic">
                        KSh {product.price.toLocaleString()}
                        {product.unit && (
                          <span className="text-xs font-sans not-italic text-black/50 font-normal">
                            {' '}
                            {product.unit}
                          </span>
                        )}
                      </p>

                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product, 1);
                          }}
                          className="flex-1 bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold text-[10px] tracking-[0.2em] uppercase py-2.5 px-3 flex justify-center items-center gap-1.5 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">
                            add_shopping_cart
                          </span>
                          Add
                        </button>

                        <button
                          onClick={(e) => openWhatsAppItemInquiry(product, e)}
                          className="border border-black/20 text-[#1A1A1A] hover:bg-black/5 p-2 flex justify-center items-center transition-colors"
                          title="Inquire via WhatsApp"
                        >
                          <svg className="w-4 h-4 fill-current text-green-700" viewBox="0 0 24 24">
                            <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.104 11.896c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.444h.004c6.58 0 11.939-5.335 11.939-11.896 0-3.176-1.24-6.165-3.468-8.447zM12.047 21.782h-.004c-1.78 0-3.524-.476-5.05-1.378l-.36-.214-3.766.983.998-3.655-.235-.373c-1-1.583-1.528-3.413-1.528-5.275 0-5.464 4.453-9.904 9.924-9.904 2.653 0 5.145 1.028 7.02 2.893 1.875 1.866 2.906 4.35 2.906 6.993 0 5.464-4.453 9.904-9.924 9.904z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2 text-xs">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center border border-black/15 bg-white text-[#1A1A1A] hover:bg-black/5 transition-colors disabled:opacity-30"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 flex items-center justify-center border font-bold text-xs ${
                currentPage === 1
                  ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                  : 'border-black/15 bg-white text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              1
            </button>

            <button
              onClick={() => setCurrentPage(2)}
              className={`w-9 h-9 flex items-center justify-center border font-bold text-xs ${
                currentPage === 2
                  ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                  : 'border-black/15 bg-white text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              2
            </button>

            <button
              onClick={() => setCurrentPage(3)}
              className={`w-9 h-9 flex items-center justify-center border font-bold text-xs ${
                currentPage === 3
                  ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                  : 'border-black/15 bg-white text-[#1A1A1A] hover:bg-black/5'
              }`}
            >
              3
            </button>

            <span className="w-9 h-9 flex items-center justify-center text-black/40">
              ...
            </span>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-9 h-9 flex items-center justify-center border border-black/15 bg-white text-[#1A1A1A] hover:bg-black/5 transition-colors"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

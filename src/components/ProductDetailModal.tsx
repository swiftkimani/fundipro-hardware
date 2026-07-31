import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const openWhatsAppInquiry = () => {
    const text = `Hello FundiPro Hardware! I am interested in *${product.title}* (${product.brand}) priced at KSh ${product.price.toLocaleString()}. Please inform me about current stock and delivery options.`;
    window.open(`https://wa.me/254700123456?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white border border-black/20 max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row gap-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-black/50 hover:text-black p-1 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#F5F2ED] border border-black/10 p-4 flex items-center justify-center relative flex-shrink-0">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="max-h-full max-w-full object-contain mix-blend-multiply"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white font-bold text-[9px] uppercase tracking-[0.2em] px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>

        {/* Details Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between overflow-y-auto pr-1">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b45309] block mb-1">
              {product.brand} • {product.category}
            </span>
            <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2 tracking-tight">
              {product.title}
            </h2>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-serif italic font-bold text-[#1A1A1A]">
                KSh {product.price.toLocaleString()}
              </span>
              {product.unit && (
                <span className="text-xs text-black/50 font-normal">
                  {product.unit}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-xs text-black/40 line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-xs text-black/70 leading-relaxed mb-4 font-sans">
              {product.description}
            </p>

            {/* Spec Sheet Table */}
            <div className="mb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-black/50 mb-2">
                Technical Specifications
              </h4>
              <ul className="spec-list text-xs text-[#1A1A1A] border border-black/10 overflow-hidden">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="px-3 py-1.5 flex justify-between border-b border-black/5 last:border-none">
                    <span className="text-black/50">{spec.label}</span>
                    <span className="font-bold text-[#1A1A1A]">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-black/10">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-black/60">Quantity</span>
              <div className="flex items-center border border-black/15 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-xs text-black/70 hover:bg-black/5"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-bold text-[#1A1A1A]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-xs text-black/70 hover:bg-black/5"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3 px-4 text-[10px] tracking-[0.2em] uppercase flex justify-center items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                {addedToast ? 'Added to Bag ✓' : 'Add to Bag'}
              </button>

              <button
                onClick={openWhatsAppInquiry}
                className="py-3 px-3 border border-black/20 text-[#1A1A1A] hover:bg-black/5 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-1 transition-colors cursor-pointer"
                title="Inquire via WhatsApp"
              >
                <svg className="w-4 h-4 fill-current text-green-700" viewBox="0 0 24 24">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.104 11.896c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.444h.004c6.58 0 11.939-5.335 11.939-11.896 0-3.176-1.24-6.165-3.468-8.447zM12.047 21.782h-.004c-1.78 0-3.524-.476-5.05-1.378l-.36-.214-3.766.983.998-3.655-.235-.373c-1-1.583-1.528-3.413-1.528-5.275 0-5.464 4.453-9.904 9.924-9.904 2.653 0 5.145 1.028 7.02 2.893 1.875 1.866 2.906 4.35 2.906 6.993 0 5.464-4.453 9.904-9.924 9.904z" />
                </svg>
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [showMpesaModal, setShowMpesaModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [mpesaSuccess, setMpesaSuccess] = useState(false);

  if (!isOpen) return null;

  const totalKsh = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formatKsh = (num: number) => `KSh ${num.toLocaleString()}`;

  const generateWhatsAppOrder = () => {
    let text = `Hello FundiPro Hardware! I would like to place an order:\n\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.product.title} (x${item.quantity}) - KSh ${(item.product.price * item.quantity).toLocaleString()}\n`;
    });
    text += `\n*Total:* KSh ${totalKsh.toLocaleString()}\n`;
    text += `\nPlease confirm stock availability and site delivery options. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/254700123456?text=${encoded}`, '_blank');
  };

  const handleMpesaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setMpesaSuccess(true);
      setTimeout(() => {
        setMpesaSuccess(false);
        setShowMpesaModal(false);
        onClearCart();
        onClose();
      }, 2500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Cart Header */}
        <div className="p-5 border-b border-black/15 flex justify-between items-center bg-[#F5F2ED]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#1A1A1A]">shopping_cart</span>
            <h2 className="text-base font-serif font-bold text-[#1A1A1A] tracking-tight">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-black/60 hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F5F2ED]/50">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-black/50">
              <span className="material-symbols-outlined text-5xl mb-2 text-black/20">
                remove_shopping_cart
              </span>
              <p className="font-serif font-bold text-[#1A1A1A] text-lg">Your bag is empty</p>
              <p className="text-xs text-black/50 mt-1 font-sans">
                Browse our hardware catalog and add materials or tools to your order.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 border border-black/10 p-3 bg-white"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.title}
                  className="w-20 h-20 object-contain bg-[#F5F2ED] border border-black/5 p-1 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b45309]">
                      {item.product.brand}
                    </span>
                    <h4 className="text-xs font-bold text-[#1A1A1A] line-clamp-2">
                      {item.product.title}
                    </h4>
                    <p className="text-sm font-serif italic font-bold text-[#1A1A1A] mt-0.5">
                      {formatKsh(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-black/15 bg-white">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2 py-0.5 text-xs text-black/70 hover:bg-black/5"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-[#1A1A1A]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2 py-0.5 text-xs text-black/70 hover:bg-black/5"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-black/40 hover:text-red-700 text-xs flex items-center gap-0.5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-black/15 bg-white space-y-3">
            <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold">
              <span className="text-black/60">SUBTOTAL</span>
              <span className="font-serif italic font-bold text-lg text-[#1A1A1A]">
                {formatKsh(totalKsh)}
              </span>
            </div>

            <p className="text-[10px] text-black/50 text-center uppercase tracking-widest font-sans">
              KEBS Certified • KRA ETR Receipt with delivery
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={generateWhatsAppOrder}
                className="w-full bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3 px-4 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24">
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.335.104 11.896c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.444h.004c6.58 0 11.939-5.335 11.939-11.896 0-3.176-1.24-6.165-3.468-8.447zM12.047 21.782h-.004c-1.78 0-3.524-.476-5.05-1.378l-.36-.214-3.766.983.998-3.655-.235-.373c-1-1.583-1.528-3.413-1.528-5.275 0-5.464 4.453-9.904 9.924-9.904 2.653 0 5.145 1.028 7.02 2.893 1.875 1.866 2.906 4.35 2.906 6.993 0 5.464-4.453 9.904-9.924 9.904z" />
                </svg>
                Order via WhatsApp Direct
              </button>

              <button
                onClick={() => setShowMpesaModal(true)}
                className="w-full bg-[#EFECE6] hover:bg-black/10 border border-black/15 text-[#1A1A1A] font-bold py-3 px-4 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">payments</span>
                Lipa na M-PESA Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* M-Pesa Checkout Modal */}
      {showMpesaModal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white border border-black/20 p-6 max-w-sm w-full relative">
            <button
              onClick={() => setShowMpesaModal(false)}
              className="absolute top-3 right-3 text-black/50 hover:text-black"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <div className="inline-block bg-[#1A1A1A] text-white font-bold px-2.5 py-0.5 text-[9px] tracking-[0.2em] uppercase mb-2">
                LIPA NA M-PESA EXPRESS
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">M-PESA Payment Request</h3>
              <p className="text-xs text-black/60 mt-1">
                Amount: <strong className="text-[#1A1A1A] font-serif italic">{formatKsh(totalKsh)}</strong>
              </p>
            </div>

            {mpesaSuccess ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-12 h-12 bg-[#EFECE6] text-[#b45309] border border-black/10 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-serif font-bold text-[#1A1A1A]">M-PESA STK Push Sent!</h4>
                <p className="text-xs text-black/60 font-sans">
                  Please check your phone and enter your PIN to complete the payment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMpesaSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1A1A1A] mb-1">
                    Safaricom M-PESA Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0712 345 678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border border-black/15 px-3 py-2 text-xs bg-[#F5F2ED] focus:outline-none focus:border-black focus:bg-white"
                  />
                </div>

                <div className="bg-[#F5F2ED] p-3 text-[10px] text-black/70 border border-black/10 font-sans">
                  Paybill: <strong>522522</strong> | Account: <strong>FundiPro</strong>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#1A1A1A] hover:bg-[#b45309] text-white font-bold py-3 text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? 'Prompting M-PESA...' : 'Send STK Push Prompt'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

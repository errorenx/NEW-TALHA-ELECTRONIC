import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShieldCheck, PhoneCall } from 'lucide-react';
import { Product, OFFICIAL_PHONE_DISPLAY, OFFICIAL_WHATSAPP_NUMBER } from '../types';

interface QuickInquiryModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ product, onClose }) => {
  const [customNote, setCustomNote] = useState('');

  useEffect(() => {
    setCustomNote('');
  }, [product]);

  if (!product) return null;

  const handleInquire = () => {
    let message = `Assalam-o-Alaikum, mujhe New Talha Electronic se "${product.name}" on demand chahiye (Instalment / Cash Easy Plan). Please availability aur easy plan ke bare mein batayein.`;
    if (customNote.trim()) {
      message += ` (Details: ${customNote.trim()})`;
    }
    const url = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="product-inquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-slate-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />

            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-md border border-amber-400/40">
              <span className="text-xs font-bold text-amber-300 tracking-wider">
                {product.label}
              </span>
            </div>
          </div>

          {/* Product Details & WhatsApp Trigger */}
          <div className="p-6 md:p-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                {product.brandCategory || 'Product Inquiry'}
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-snug">
                {product.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>Available On Demand From Multiple Brands</span>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Optional Note / Specific Model:
                </label>
                <textarea
                  rows={2}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="e.g. Color preference, storage size, or specific company..."
                  className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleInquire}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>INQUIRE ON WHATSAPP</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct WhatsApp:</span>
                <span className="font-mono text-white font-bold">{OFFICIAL_PHONE_DISPLAY}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

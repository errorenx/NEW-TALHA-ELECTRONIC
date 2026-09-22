import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink } from '../types';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3 flex-col sm:flex-row pointer-events-auto"
    >
      {/* Floating Tooltip / Helper Bubble */}
      {showTooltip && (
        <div className="bg-slate-900/95 backdrop-blur-md text-slate-100 border border-emerald-500/40 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-bold text-amber-300 uppercase tracking-wider text-[10px]">
              NEW TALHA ELECTRONIC
            </p>
            <p className="text-slate-200 mt-0.5 leading-snug">
              On-demand product chahiye? Chat karein!
            </p>
            <span className="font-mono text-emerald-400 font-bold text-[11px] block mt-0.5">
              {OFFICIAL_PHONE_DISPLAY}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with NEW TALHA ELECTRONIC"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl shadow-emerald-950 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
      </a>
    </div>
  );
};

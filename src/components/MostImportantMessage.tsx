import React from 'react';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink } from '../types';

export const MostImportantMessage: React.FC = () => {
  return (
    <section
      id="on-demand-banner"
      className="relative py-16 sm:py-20 bg-gradient-to-r from-[#080d21] via-[#0c1940] to-[#080d21] border-y border-amber-500/30 overflow-hidden"
    >
      {/* Decorative Gold & Blue Glow Highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-[110px] pointer-events-none" />

      {/* Decorative Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950/70 border border-amber-500/30 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Watermark subtle logo */}
          <div className="absolute -right-8 -bottom-10 opacity-5 text-white font-black text-8xl sm:text-9xl select-none pointer-events-none tracking-tighter">
            NTE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Main Strong Headline */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>CORE STORE PROMISE • NEW TALHA ELECTRONIC</span>
              </div>

              {/* The Strongest Visual Element */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-4">
                <span className="block text-amber-400 drop-shadow-md">
                  ON DEMAND
                </span>
                <span className="block text-white">
                  PRODUCTS AVAILABLE
                </span>
                <span className="block text-emerald-400 text-xl sm:text-3xl lg:text-4xl font-extrabold mt-2 tracking-normal normal-case sm:uppercase">
                  Instalment or Cash Easy Plan
                </span>
              </h2>

              {/* Supporting Texts */}
              <div className="space-y-3 mt-4 max-w-2xl">
                <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed">
                  &ldquo;Jo product aapko chahiye, uski availability ke liye WhatsApp par rabta karein — Easy Instalments or Cash.&rdquo;
                </p>

                <p className="text-sm sm:text-lg text-blue-300 font-semibold tracking-wide flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                  Multiple Brands &amp; Products Available On Demand (Instalment &amp; Cash Easy Plan)
                </p>

                <p className="text-xs sm:text-sm text-slate-400">
                  Mobile phones, smart LED TVs, laptops, bikes, solar systems, home appliances, or any other required electronics item — contact us on WhatsApp with the product name or photo.
                </p>
              </div>
            </div>

            {/* Right Col: Direct WhatsApp Action Card */}
            <div className="lg:col-span-4 flex flex-col items-stretch justify-center bg-gradient-to-br from-slate-900 to-blue-950/80 p-6 sm:p-7 rounded-2xl border border-blue-900/60 shadow-xl">
              <div className="text-center mb-5">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                  OFFICIAL WHATSAPP
                </span>
                <span className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-amber-400 block">
                  {OFFICIAL_PHONE_DISPLAY}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Fast direct response &amp; availability confirmation
                </p>
              </div>

              <a
                id="message-section-whatsapp-cta"
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-emerald-950 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WHATSAPP PAR RABTA KAREIN</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-[11px] text-slate-400 mt-3">
                Click to open WhatsApp directly with pre-filled message
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

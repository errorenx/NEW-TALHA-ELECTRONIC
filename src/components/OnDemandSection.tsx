import React, { useState } from 'react';
import { MessageCircle, Search, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink, OFFICIAL_WHATSAPP_NUMBER } from '../types';

export const OnDemandSection: React.FC = () => {
  const [customQuery, setCustomQuery] = useState('');

  const handleCustomRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const query = customQuery.trim();
    let text = "Assalam-o-Alaikum, mujhe New Talha Electronic se ek product on demand chahiye (Instalment / Cash Easy Plan). Please availability ke bare mein batayein.";
    if (query) {
      text = `Assalam-o-Alaikum, mujhe New Talha Electronic se yeh product on demand chahiye (Instalment / Cash Easy Plan): "${query}". Please iski availability aur easy plan details batayein.`;
    }
    const url = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="on-demand" className="py-20 lg:py-24 bg-gradient-to-b from-[#070b1b] via-[#0b1430] to-[#070b1b] relative overflow-hidden">
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-950/80 border border-blue-900/60 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-xl relative">
          {/* Top Pill */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              ON-DEMAND SOURCING • INSTALMENT OR CASH EASY PLAN
            </span>
          </div>

          {/* Core Headings */}
          <div className="text-center space-y-3 mb-8">
            <h3 className="text-xl sm:text-3xl font-extrabold uppercase tracking-wide text-blue-300">
              CAN&apos;T FIND THE PRODUCT YOU NEED?
            </h3>

            <div className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                NO PROBLEM.
              </span>
            </div>

            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
              Tell us what you need. Contact <span className="font-bold text-white">NEW TALHA ELECTRONIC</span> on WhatsApp and ask about on-demand availability — cash or easy instalment plan.
            </p>

            <div className="inline-block bg-blue-950/90 border border-blue-800/80 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-blue-200 tracking-wide mt-2">
              Multiple Brands &amp; Products Available On Demand (Instalment or Cash Easy Plan)
            </div>
          </div>

          {/* Interactive Custom Product Name / Picture helper */}
          <div className="bg-slate-900/90 p-5 sm:p-7 rounded-2xl border border-slate-800 max-w-2xl mx-auto mb-8">
            <p className="text-xs sm:text-sm text-slate-300 font-medium mb-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-400" />
              <span>Send us the product name or picture on WhatsApp and ask about on-demand availability:</span>
            </p>

            <form onSubmit={handleCustomRequest} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                placeholder="e.g., iPhone 15 Pro, Dawlance Inverter, Honda 125, Solar Inverter..."
                className="flex-1 bg-slate-950 border border-slate-700 focus:border-amber-400 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>REQUEST ON WHATSAPP</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Three Key Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-800/80 pt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fast Sourcing</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Quick confirmation on availability directly via WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Multiple Brands</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Tell us your desired brand and model specification</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Store Deal</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Physical store located at Bhara Kahu, Islamabad</p>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="mt-8 text-center">
            <a
              id="on-demand-section-main-cta"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-base tracking-wider uppercase shadow-xl shadow-emerald-950 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-emerald-400/40"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>REQUEST PRODUCT ON WHATSAPP</span>
            </a>

            <p className="text-xs text-slate-400 mt-3 font-mono">
              Official WhatsApp: <strong className="text-amber-400">{OFFICIAL_PHONE_DISPLAY}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MessageCircle, ArrowDown, Sparkles, ShieldCheck, Zap, PhoneCall } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink } from '../types';
import heroBannerImage from '../assets/images/store_showcase_banner_1790092697263.jpg';

interface HeroProps {
  onViewProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProducts }) => {
  const floatingTags = [
    'Smartphones',
    'iPhones',
    'Laptops',
    'LED TV',
    'Bikes',
    'Solar Panels',
    'Home Appliances',
    'ON DEMAND ALL AVAILABLE',
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-[#070e24] to-slate-950"
    >
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
          {/* Brand Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg shadow-blue-950/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>NEW TALHA ELECTRONIC • OFFICIAL STORE</span>
          </div>

          {/* Main Brand Title & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] mb-4">
            <span className="block text-2xl sm:text-3xl font-extrabold tracking-widest text-blue-400 mb-2 font-mono">
              NEW TALHA ELECTRONIC
            </span>
            <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              YOUR PRODUCT.
            </span>
            <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              YOUR BRAND.
            </span>
            <span className="block text-blue-400 drop-shadow-sm">
              ON DEMAND.
            </span>
          </h1>

          {/* Instalment and Cash Easy Plan Highlight */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-lg shadow-amber-950/40">
            <span>⚡ Instalment Pr Bhi Aur Cash Pr Bhi — Easy Plan</span>
          </div>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Electronics, appliances and more — available from multiple brands on demand (Instalment and cash easy plan).
            <span className="block text-sm sm:text-base text-amber-300/90 mt-2 font-medium">
              &ldquo;Apni required product ke liye WhatsApp par rabta karein — Instalment or Cash Easy Plan.&rdquo;
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Main CTA */}
            <a
              id="hero-primary-cta"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-base tracking-wider uppercase shadow-xl shadow-emerald-950 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-emerald-400/30"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>WHATSAPP PAR RABTA KAREIN</span>
            </a>

            {/* Secondary CTA */}
            <button
              id="hero-secondary-cta"
              type="button"
              onClick={onViewProducts}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base tracking-wider uppercase border border-slate-700/80 hover:border-blue-500 transition-all duration-200 shadow-lg shadow-black/40"
            >
              <span>VIEW PRODUCTS</span>
              <ArrowDown className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Official Phone Indicator */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Official WhatsApp:</span>
            <span className="font-mono font-bold text-white tracking-wider bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              {OFFICIAL_PHONE_DISPLAY}
            </span>
          </div>
        </div>

        {/* Hero Visual Display with Floating Cards & Showroom Image */}
        <div className="relative max-w-5xl mx-auto mt-6">
          {/* Decorative frame */}
          <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-blue-500/30 via-slate-800/40 to-amber-500/30 shadow-2xl shadow-blue-950/80">
            <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[21/10]">
              <img
                src={heroBannerImage}
                alt="NEW TALHA ELECTRONIC flagship showroom showcase of smartphones, laptops, smart TVs, motorcycles, and solar systems"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                loading="eager"
              />

              {/* Gradient Overlay for Cinematic Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none" />

              {/* Overlay Badge Top Right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-blue-950/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-amber-500/40 shadow-lg flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-amber-300 tracking-wider">
                  ON DEMAND • INSTALMENT / CASH
                </span>
              </div>
            </div>
          </div>

          {/* Prominent feature card moved BELOW the picture as requested */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-blue-900/80 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center border border-amber-500/40 shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                  <span className="text-sm font-black text-amber-400 tracking-wider uppercase">
                    ON DEMAND AVAILABILITY
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 uppercase tracking-wide">
                    Instalment or Cash Easy Plan
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold mt-1">
                  Smartphones • LEDs • Laptops • Bikes • Solar • Appliances
                </p>
              </div>
            </div>

            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>

          {/* Floating Product Badges Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {floatingTags.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                  tag === 'ON DEMAND ALL AVAILABLE'
                    ? 'bg-amber-500/10 border-amber-500/50 text-amber-300 font-bold'
                    : 'bg-slate-900/80 border-blue-900/40 text-slate-300 hover:border-slate-600'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

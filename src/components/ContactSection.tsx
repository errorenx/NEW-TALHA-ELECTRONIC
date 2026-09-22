import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Copy, Check, Navigation, Clock } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, STORE_ADDRESS, createWhatsAppLink } from '../types';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#050814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            CONTACT <span className="text-amber-400">NEW TALHA ELECTRONIC</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Have questions about product availability or want to request an item on demand? Reach out to us directly on WhatsApp.
          </p>
        </div>

        {/* Contact Display Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/50 border border-blue-900/50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle gold accent edge */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Col: Store Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  OFFICIAL STORE INFORMATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  NEW TALHA ELECTRONIC
                </h3>
                <p className="text-xs sm:text-sm text-blue-300 font-medium mt-1">
                  Electronics &amp; Multi-Product On-Demand Sourcing
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Official WhatsApp
                  </span>
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-black font-mono text-amber-400 hover:text-amber-300 transition-colors tracking-wider block mt-0.5"
                  >
                    {OFFICIAL_PHONE_DISPLAY}
                  </a>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Available for on-demand inquiries
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center shrink-0 border border-blue-800">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Physical Store Address
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-slate-200 font-medium mt-1 leading-relaxed">
                    Main Simly Dam Road,<br />
                    Near Gujjar Battery Centre,<br />
                    Bhara Kahu, Islamabad.
                  </p>
                </div>
              </div>

              {/* Quick Hours / Fast Response info */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Fast WhatsApp response for product availability, cash and easy instalment plans.</span>
              </div>
            </div>

            {/* Right Col: Prominent WhatsApp CTA Button */}
            <div className="bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-blue-900/60 text-center flex flex-col justify-center items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40 shadow-lg shadow-emerald-950">
                <MessageCircle className="w-8 h-8 fill-emerald-400/20" />
              </div>

              <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-2">
                Need To Check Availability?
              </h4>

              <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-xs leading-relaxed">
                Connect immediately with NEW TALHA ELECTRONIC directly on WhatsApp for Cash or Easy Instalments:
              </p>

              {/* Main Button: CONTACT US ON WHATSAPP */}
              <a
                id="contact-section-main-cta"
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-emerald-950 hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-emerald-400/40"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>CONTACT US ON WHATSAPP</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent("Main simly dam road near Gujjar Battery centre Barakahu islamabad")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

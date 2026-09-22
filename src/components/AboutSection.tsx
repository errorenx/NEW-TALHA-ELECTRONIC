import React from 'react';
import { ShieldCheck, MapPin, Phone, Clock, Store } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, STORE_ADDRESS, createWhatsAppLink } from '../types';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <Store className="w-3.5 h-3.5 text-amber-400" />
              <span>STORE OVERVIEW</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-6">
              ABOUT <span className="text-amber-400">NEW TALHA ELECTRONIC</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p className="font-medium text-white/95">
                NEW TALHA ELECTRONIC provides electronics and a wide range of products on demand (Instalment or Cash Easy Plan). Customers can contact us directly through WhatsApp to ask about their required product, brand and availability.
              </p>

              <p className="text-sm sm:text-base text-slate-400">
                Operating with a customer-centric model, we bridge the gap between shoppers and high-demand multi-category goods with both cash and easy instalment options. Whether you are looking for the latest smartphone, a large screen 4K LED TV, computing gear, household appliances, reliable motorcycles, or solar energy setups — you can connect with us directly.
              </p>
            </div>

            {/* Core Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-900">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-950 border border-blue-800 text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Trusted Sourcing</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Reliable availability from well-known brand names.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-950 border border-blue-800 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Prompt Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Swift quotes &amp; stock verification on WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950/70 rounded-3xl p-7 border border-blue-900/60 shadow-2xl relative">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    REAL PHYSICAL STORE
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase">
                    NEW TALHA ELECTRONIC
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Serving Islamabad, Rawalpindi &amp; surrounding areas with on-demand fulfillment.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Store Location</span>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {STORE_ADDRESS}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Official WhatsApp Number</span>
                      <p className="text-sm font-mono font-bold text-amber-400 mt-0.5">
                        {OFFICIAL_PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    id="about-contact-whatsapp-btn"
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950 hover:brightness-110 transition-all"
                  >
                    <span>WHATSAPP PAR RABTA KAREIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

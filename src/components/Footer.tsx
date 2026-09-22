import React from 'react';
import { MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, STORE_ADDRESS, createWhatsAppLink } from '../types';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Categories', href: '#categories' },
    { label: 'On Demand', href: '#on-demand' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#03060f] border-t border-blue-950 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-slate-900 border border-amber-500/40 flex items-center justify-center">
                <span className="font-extrabold text-amber-300 text-sm tracking-wider">
                  NTE
                </span>
              </div>
              <div>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  NEW TALHA ELECTRONIC
                </h3>
                <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                  Products Available On Demand • Instalment or Cash Easy Plan
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover and request high-demand electronics, smartphones, laptops, smart TVs, motorcycles, solar systems, and household appliances on demand via direct WhatsApp contact.
            </p>

            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP: {OFFICIAL_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              STORE DETAILS
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-slate-400">WhatsApp:</span>
                <span className="font-mono font-bold text-white text-sm">
                  {OFFICIAL_PHONE_DISPLAY}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-slate-400">Address:</span>
                <p className="text-slate-300 leading-relaxed">
                  {STORE_ADDRESS}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© NEW TALHA ELECTRONIC. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

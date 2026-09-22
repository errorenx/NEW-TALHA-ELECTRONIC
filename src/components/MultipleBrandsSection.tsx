import React from 'react';
import { MessageCircle, Layers, Check } from 'lucide-react';
import { createWhatsAppLink } from '../types';

export const MultipleBrandsSection: React.FC = () => {
  const brandCategories = [
    {
      category: 'Smartphones & Mobile Devices',
      examples: 'Apple, Samsung, Xiaomi, Vivo, Oppo, Infinix, Tecno & more',
    },
    {
      category: 'Smart TVs & LED Displays',
      examples: 'Samsung, Sony, TCL, Orient, EcoStar, Haier & more',
    },
    {
      category: 'Home Appliances',
      examples: 'Dawlance, Haier, Pel, Waves, Kenwood, Gree & more',
    },
    {
      category: 'Laptops & Computing',
      examples: 'Dell, HP, Lenovo, Apple MacBook, Asus, Acer & more',
    },
    {
      category: 'Bikes & Motorcycles',
      examples: 'Honda, Yamaha, Suzuki, Road Prince, United & more',
    },
    {
      category: 'Solar Energy Systems',
      examples: 'Longi, Jinko, Canadian Solar, Inverex, Growatt, Fronus & more',
    },
  ];

  return (
    <section id="brands" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>BRAND AVAILABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            PRODUCTS FROM MULTIPLE BRANDS <br className="hidden sm:inline" />
            <span className="text-amber-400">AVAILABLE ON DEMAND</span>
            <span className="block text-emerald-400 text-lg sm:text-2xl font-bold mt-2">
              Instalment or Cash Easy Plan
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Tell us the brand, company or product you are looking for and contact us on WhatsApp for availability, cash pricing, and easy instalment plans.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Whether you need a specific model, company specification, or brand variation, our on-demand sourcing network assists you promptly.
          </p>
        </div>

        {/* Brand Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-700/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    {item.category}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.examples}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Available on demand
                </span>

                <a
                  href={createWhatsAppLink(`Assalam-o-Alaikum, mujhe New Talha Electronic se ${item.category} ke bare mein maloomat chahiye.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>Ask Brand</span>
                  <MessageCircle className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-banner CTA */}
        <div className="mt-12 text-center">
          <a
            id="brands-whatsapp-cta"
            href={createWhatsAppLink("Assalam-o-Alaikum, mujhe ek specific company/brand ka product on demand chahiye.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>INQUIRE ABOUT YOUR PREFERRED BRAND ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};

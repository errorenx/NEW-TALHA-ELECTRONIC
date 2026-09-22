import React from 'react';
import { Search, MessageSquareShare, PackageCheck, ArrowRight } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink } from '../types';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'CHOOSE YOUR PRODUCT',
      description: 'Browse the product images or decide what you need from any relevant brand.',
      icon: Search,
      highlight: 'Discover or decide',
    },
    {
      number: '02',
      title: 'CONTACT US',
      description: `Send your request directly through our official WhatsApp (${OFFICIAL_PHONE_DISPLAY}).`,
      icon: MessageSquareShare,
      highlight: 'Direct WhatsApp inquiry',
    },
    {
      number: '03',
      title: 'GET IT ON DEMAND',
      description: 'Ask about availability and arrange your purchase on cash or easy instalment plan directly with NEW TALHA ELECTRONIC.',
      icon: PackageCheck,
      highlight: 'Cash or Easy Instalments',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#060a19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>SIMPLE PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            HOW IT <span className="text-amber-400">WORKS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A frictionless on-demand service tailored for direct WhatsApp communication, cash purchases, and easy instalment plans.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between hover:border-amber-400/50 hover:shadow-xl hover:shadow-blue-950 transition-all duration-300 group"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl lg:text-5xl font-black text-amber-400/80 font-mono tracking-tighter group-hover:text-amber-300 transition-colors">
                      {step.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-amber-300 transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-blue-300">{step.highlight}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <a
            id="how-it-works-whatsapp-cta"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-amber-400 hover:text-amber-300 underline underline-offset-8"
          >
            <span>START YOUR REQUEST ON WHATSAPP ({OFFICIAL_PHONE_DISPLAY})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

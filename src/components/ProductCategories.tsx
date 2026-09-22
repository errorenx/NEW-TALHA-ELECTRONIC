import React from 'react';
import { 
  Smartphone, 
  Tv, 
  Laptop, 
  Bike, 
  SunMedium, 
  Refrigerator, 
  Cpu, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { createCategoryWhatsAppLink } from '../types';

interface ProductCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Bike':
        return <Bike className="w-5 h-5" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5" />;
      case 'Refrigerator':
        return <Refrigerator className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
              <span>STORE CATEGORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              PRODUCT <span className="text-amber-400">CATEGORIES</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Select any category for on-demand availability with easy instalment and cash plans. Contact on WhatsApp directly.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg">
              MULTIPLE BRANDS • INSTALMENT OR CASH EASY PLAN
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                className={`group relative rounded-2xl overflow-hidden bg-slate-900 border transition-all duration-300 flex flex-col ${
                  isSelected
                    ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-xl shadow-amber-500/10'
                    : 'border-slate-800 hover:border-blue-700/60 shadow-lg'
                }`}
              >
                {/* Image Container with Subtle Zoom on Hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={cat.image}
                    alt={`${cat.name} available on demand at NEW TALHA ELECTRONIC`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badge: ON DEMAND */}
                  <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-amber-300 tracking-wider">
                      ON DEMAND • Instalment or Cash Easy Plan
                    </span>
                  </div>

                  {/* Urdu Name Badge */}
                  {cat.urduName && (
                    <div className="absolute top-3 right-3 bg-blue-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-blue-800/50">
                      <span className="text-xs font-semibold text-blue-200">
                        {cat.urduName}
                      </span>
                    </div>
                  )}

                  {/* Icon floating */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-blue-900/90 text-amber-300 flex items-center justify-center border border-amber-400/30 shadow-md">
                    {getCategoryIcon(cat.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Action buttons - Explore button removed as requested */}
                  <div className="mt-5 pt-4 border-t border-slate-800">
                    <a
                      href={createCategoryWhatsAppLink(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-950 border border-emerald-400/30"
                      title={`Inquire about ${cat.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>WHATSAPP PAR RABTA KAREIN</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

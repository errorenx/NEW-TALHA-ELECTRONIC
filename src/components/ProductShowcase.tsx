import React from 'react';
import { MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, createProductWhatsAppLink } from '../types';

interface ProductShowcaseProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenProductModal?: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProductModal,
}) => {
  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-[#070b1b] relative">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SHOWCASE GALLERY • INSTALMENT OR CASH EASY PLAN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            SHOWCASE OF <span className="text-amber-400">PRODUCTS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Discover products available through NEW TALHA ELECTRONIC — on instalment or cash.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Every product shown can be ordered on demand (Instalment &amp; Cash Easy Plan). Simply contact our team on WhatsApp for availability and order confirmation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-900/50 border border-blue-400/40 scale-105'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-950/60 border border-amber-300 scale-105'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Product Grid - 2 columns on mobile, 3 on tablet, 3 or 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div 
                className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => onOpenProductModal && onOpenProductModal(product)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} available on demand at NEW TALHA ELECTRONIC`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />

                {/* ON DEMAND AVAILABLE Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/40 shadow-md">
                  <span className="text-[10px] sm:text-xs font-extrabold text-amber-300 tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {product.label}
                  </span>
                </div>

                {/* Category tag */}
                {product.brandCategory && (
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-blue-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-blue-200 border border-blue-800/40">
                    {product.brandCategory}
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-lg">
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight line-clamp-2">
                    {product.name}
                  </h3>

                  {product.highlight && (
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <span className="text-amber-400">✓</span> {product.highlight}
                    </p>
                  )}
                </div>

                {/* Direct WhatsApp CTA Button */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={createProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-emerald-950 transition-all duration-200 border border-emerald-400/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

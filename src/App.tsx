import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MostImportantMessage } from './components/MostImportantMessage';
import { ProductCategories } from './components/ProductCategories';
import { ProductShowcase } from './components/ProductShowcase';
import { OnDemandSection } from './components/OnDemandSection';
import { MultipleBrandsSection } from './components/MultipleBrandsSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll down to the products section smoothly
    const productsElement = document.getElementById('products');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProducts = () => {
    const productsElement = document.getElementById('products');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onViewProducts={handleViewProducts} />

        {/* Most Important Message Banner (ON DEMAND PRODUCTS AVAILABLE) */}
        <MostImportantMessage />

        {/* Store Categories */}
        <ProductCategories
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Product Showcase Gallery */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProductModal={(product) => setActiveModalProduct(product)}
        />

        {/* Can't Find What You Need? On-Demand Sourcing */}
        <OnDemandSection />

        {/* Products From Multiple Brands Available On Demand */}
        <MultipleBrandsSection />

        {/* How It Works: 01, 02, 03 Simple Steps */}
        <HowItWorks />

        {/* About NEW TALHA ELECTRONIC */}
        <AboutSection />

        {/* Official Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Quick Product Detail & WhatsApp Modal */}
      <QuickInquiryModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
}

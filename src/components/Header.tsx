import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_PHONE_DISPLAY, createWhatsAppLink } from '../types';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'PRODUCTS', href: '#products' },
    { label: 'CATEGORIES', href: '#categories' },
    { label: 'ON DEMAND', href: '#on-demand' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-blue-900/40 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            id="brand-logo-link"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            {/* NTE Badge Emblem */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 p-[1.5px] shadow-md shadow-blue-900/30 group-hover:shadow-amber-500/20 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center border border-amber-500/30">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  NTE
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
                  NEW TALHA ELECTRONIC
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-widest uppercase text-blue-300/80">
                Products On Demand
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-semibold tracking-wider text-slate-300 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Right Action (WhatsApp Button) */}
          <div className="flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-emerald-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-blue-900/50 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-xl border-b border-blue-900/40 px-6 py-6 shadow-2xl transition-all animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-slate-800/80">
              <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                NEW TALHA ELECTRONIC
              </p>
              <p className="text-xs text-slate-400">
                Official WhatsApp: <span className="text-white font-mono">{OFFICIAL_PHONE_DISPLAY}</span>
              </p>
            </div>

            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between text-sm font-semibold tracking-wider text-slate-200 hover:text-amber-400 py-2 border-b border-slate-900"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>WHATSAPP PAR RABTA KAREIN</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

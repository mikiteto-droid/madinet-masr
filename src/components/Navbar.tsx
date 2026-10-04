import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass, Home, MapPin, Sparkles, Building2 } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED, WHATSAPP_LINK } from '../data/projectData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'عن إيتاج', href: '#about', icon: Sparkles },
    { name: 'الموقع الاستراتيجي', href: '#location', icon: MapPin },
    { name: 'الماستر بلان', href: '#masterplan', icon: Compass },
    { name: 'الخدمات والممشى الأخضر', href: '#amenities', icon: Sparkles },
    { name: 'شركة مدينة مصر', href: '#developer', icon: Building2 },
    { name: 'الأسئلة الشائعة', href: '#faq', icon: null },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1a070c]/95 backdrop-blur-md shadow-xl border-b border-[#c5a059]/25 py-2.5'
          : 'bg-gradient-to-b from-[#1a070c]/90 via-[#1a070c]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Identities */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col items-start text-right">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-[#f7e4b2] group-hover:text-amber-300 transition-colors">
                  ÉTAJE
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 font-bold">
                  إيتاج
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-stone-300 tracking-wider">
                <span className="text-amber-400/90 font-medium">تاج سيتي</span>
                <span>•</span>
                <span>مدينة مصر</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-[#f7e4b2] text-sm font-medium transition-colors hover:scale-105 transform duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-2 bg-[#2d0c14] hover:bg-[#43121d] text-[#f7e4b2] border border-[#d4af37]/40 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all hover:border-[#d4af37]"
              title="اتصال مباشر بالمبيعات"
            >
              <Phone className="w-4 h-4 text-[#d4af37] animate-pulse" />
              <span dir="ltr">{CONTACT_PHONE_FORMATTED}</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/40 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="p-2 bg-[#2d0c14] border border-[#d4af37]/40 rounded-lg text-[#f7e4b2] sm:hidden"
              title="اتصال"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-200 hover:text-white bg-[#2d0c14]/80 border border-[#d4af37]/30 focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-amber-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18070c] border-b border-[#d4af37]/25 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-stone-200 hover:text-amber-300 hover:bg-[#340f18] text-sm font-medium transition-colors"
              >
                {link.icon && <link.icon className="w-4 h-4 text-[#d4af37]" />}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#d4af37]/20 flex flex-col gap-2.5">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center justify-center gap-2 bg-[#3b0f19] text-[#f7e4b2] border border-[#d4af37]/50 py-3 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>اتصل فوراً: {CONTACT_PHONE_FORMATTED}</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب مبيعات إيتاج</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

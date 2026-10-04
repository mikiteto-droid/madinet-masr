import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, ArrowUp } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED, WHATSAPP_LINK } from '../data/projectData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#16050a]/95 backdrop-blur-md border-t border-[#d4af37]/30 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#d4af37] text-stone-950 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-stone-950" />
          <span>اتصال: {CONTACT_PHONE}</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>واتساب فوري</span>
        </a>

        <a
          href="#contact-form"
          className="p-2.5 bg-[#340f18] text-amber-300 border border-[#d4af37]/40 rounded-xl font-bold text-xs active:scale-95 transition-transform"
          title="سجل اهتمامك"
        >
          <Send className="w-4 h-4" />
        </a>
      </div>

      {/* Desktop Floating Badges (Bottom Right / Left) */}
      <div className="hidden md:flex fixed bottom-6 left-6 z-40 flex-col gap-3">
        {/* WhatsApp Pulse Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all"
          title="تواصل مباشرة عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-bold pl-1">
            محادثة مبيعات إيتاج
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#b3851b] hover:from-white hover:to-amber-300 text-stone-950 p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all"
          title={`اتصل بنا: ${CONTACT_PHONE}`}
        >
          <Phone className="w-6 h-6 text-stone-950 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-bold pl-1" dir="ltr">
            {CONTACT_PHONE_FORMATTED}
          </span>
        </a>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#240a12]/90 hover:bg-[#3d111e] text-amber-300 border border-[#d4af37]/30 rounded-full shadow-lg transition-all hover:scale-105"
            aria-label="العودة لأعلى الصفحة"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
};

import React from 'react';
import { Phone, MessageCircle, ArrowDown, MapPin, Sparkles, Shield, Maximize, Trees } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED, WHATSAPP_LINK } from '../data/projectData';
import heroImg from '../assets/images/etaje_hero_sunset_1791075912038.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Hero Image with luxury graded overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="مرحلة إيتاج كمبوند تاج سيتي طريق السويس"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110508] via-[#1a070c]/80 to-[#1a070c]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,5,8,0.75)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        {/* Prestige Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3e1018]/90 border border-[#d4af37]/50 text-amber-200 text-xs sm:text-sm font-semibold mb-6 shadow-lg backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>المرحلة الختامية والأرقى في كمبوند تاج سيتي • شركة مدينة مصر</span>
        </div>

        {/* Hero Title */}
        <div className="mb-4">
          <h2 className="font-cinzel text-amber-300/90 text-xl sm:text-2xl tracking-[0.25em] font-semibold mb-2">
            É T A J E
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            إيتاج تاج سيتي طريق السويس
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl gold-gradient-text font-bold">
              تجربة سكنية استثنائية متكاملة بقلب القاهرة الجديدة
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            وجهة حيوية متعددة الاستخدامات تجمع بين <strong className="text-amber-300">الشقق والوحدات السكنية العصرية</strong>، الممشى الأخضر المركزي بطول <strong className="text-amber-300">450 متر</strong>، والمحلات والمطاعم الفاخرة مباشرة عند تقاطع طريق السويس والدائري.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Scroll to Form CTA */}
          <a
            href="#contact-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-stone-950 bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#b3851b] hover:from-white hover:to-amber-300 shadow-xl shadow-amber-900/40 hover:scale-105 transition-all"
          >
            <span>احجز وحدتك الآن وسجل اهتمامك</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#f7e4b2] bg-[#340f18]/90 hover:bg-[#4a1523] border border-[#d4af37]/60 shadow-lg transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>اتصل بالمبيعات: <span dir="ltr">{CONTACT_PHONE_FORMATTED}</span></span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>واتساب فوري</span>
          </a>
        </div>

        {/* 4 Key Pillars Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-right">
          <div className="burgundy-glass p-3.5 sm:p-4 rounded-xl flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#581d27]/70 text-[#d4af37] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-400">الموقع المباشر</div>
              <div className="text-xs sm:text-sm font-bold text-white">طريق السويس والدائري</div>
            </div>
          </div>

          <div className="burgundy-glass p-3.5 sm:p-4 rounded-xl flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#581d27]/70 text-[#d4af37] shrink-0">
              <Trees className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-400">الممشى الأخضر</div>
              <div className="text-xs sm:text-sm font-bold text-white">450 متر وبحيرات مائية</div>
            </div>
          </div>

          <div className="burgundy-glass p-3.5 sm:p-4 rounded-xl flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#581d27]/70 text-[#d4af37] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-400">الخصوصية التامة</div>
              <div className="text-xs sm:text-sm font-bold text-white">ارتدادات حتى 65.5 متر</div>
            </div>
          </div>

          <div className="burgundy-glass p-3.5 sm:p-4 rounded-xl flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#581d27]/70 text-[#d4af37] shrink-0">
              <Maximize className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-stone-400">تنوع المساحات</div>
              <div className="text-xs sm:text-sm font-bold text-white">خيارات تناسب جميع الاحتياجات</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

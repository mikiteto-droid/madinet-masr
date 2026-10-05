import React from 'react';
import { Phone, MessageCircle, MapPin, Globe, ArrowUp, Building2, ShieldCheck } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED, WHATSAPP_LINK } from '../data/projectData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0305] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-[#d4af37]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-right">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-2xl font-bold tracking-widest text-[#f7e4b2]">
                ÉTAJE
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 font-bold">
                إيتاج
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              المرحلة الجديدة والختامية في كمبوند تاج سيتي على طريق السويس من شركة مدينة مصر. مجتمع سكني وتجاري متكامل يضم شقق واستوديوهات عصرية فاخرة وممشى أخضر 450 متر.
            </p>

            <div className="pt-2 text-xs text-amber-300/80">
              <span>مشروع مرخص وموثق من شركة مدينة مصر (تأسست عام 1959).</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-r-2 border-[#d4af37] pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">عن مرحلة إيتاج (Étaje)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-300 transition-colors">الموقع الاستراتيجي على طريق السويس</a>
              </li>
              <li>
                <a href="#masterplan" className="hover:text-amber-300 transition-colors">الماستر بلان وممشى الجرين سباين (450م)</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-300 transition-colors">الخدمات والمرافق المتكاملة</a>
              </li>
              <li>
                <a href="#developer" className="hover:text-amber-300 transition-colors">سابقة أعمال شركة مدينة مصر</a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-amber-300 transition-colors">حجز واستفسار مباشر</a>
              </li>
            </ul>
          </div>

          {/* Direct Sales Rep & Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white border-r-2 border-[#d4af37] pr-2">
              التواصل والحجز المباشر
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              للاستفسارات الرسمية والمعاينات ومعرفة العروض المتاحة وحجز الوحدات:
            </p>

            <div className="space-y-2">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#240a12] border border-[#d4af37]/40 hover:border-amber-400 transition-all text-amber-300 group"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white">رقم المبيعات:</span>
                </div>
                <span className="font-bold text-sm tracking-wider" dir="ltr">
                  {CONTACT_PHONE_FORMATTED}
                </span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 transition-all text-emerald-300"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">محادثة فورية:</span>
                </div>
                <span className="text-xs font-bold">واتساب مبيعات إيتاج</span>
              </a>
            </div>

            <div className="text-[11px] text-stone-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>تواصل مباشر وسريع طوال أيام الأسبوع</span>
            </div>
          </div>
        </div>

        {/* SEO Tag Clouds & Breadcrumbs */}
        <div className="border-t border-stone-800/80 pt-6 pb-6 text-right">
          <span className="text-[11px] text-stone-400 block mb-2 font-bold">
            كلمات البحث الشائعة:
          </span>
          <div className="flex flex-wrap gap-1.5 text-[10px] text-stone-400">
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">ايتاج تاج سيتي</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">Étaje Taj City</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">كمبوند تاج سيتي طريق السويس</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">شركة مدينة مصر</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">شقق فاخرة تاج سيتي</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">أسعار تاج سيتي</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">شقق للبيع في تاج سيتي</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">تقاطع الدائري وطريق السويس</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">استوديوهات تاج سيتي 37 متر</span>
            <span className="bg-[#17050a] px-2 py-0.5 rounded border border-stone-800">رقم مبيعات تاج سيتي 01115550966</span>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="border-t border-stone-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} إيتاج كمبوند تاج سيتي - شركة مدينة مصر للإسكان والتعمير. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span>رقم خدمة العملاء والمبيعات: <strong className="text-amber-400" dir="ltr">{CONTACT_PHONE}</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

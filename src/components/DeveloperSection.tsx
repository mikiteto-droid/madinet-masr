import React from 'react';
import { Building2, Award, Calendar, CheckCircle, ShieldCheck, MapPin, Phone, ExternalLink } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED } from '../data/projectData';

export const DeveloperSection: React.FC = () => {
  return (
    <section id="developer" className="py-20 bg-[#120407] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Developer Credentials Left */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>المطور العقاري الرائد منذ 1959</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              شركة مدينة مصر <span className="gold-gradient-text">(Madinet Masr)</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              تُعد شركة <strong className="text-amber-200">مدينة مصر</strong> (شركة مدينة نصر للإسكان والتعمير سابقاً) واحدة من أعرق وأضخم صروح التطوير العقاري في مصر والشرق الأوسط. تأسست الشركة بقرار جمهوري عام 1959 وقامت بتخطيط وتطوير حي مدينة نصر التاريخي بالكامل على مساحة تفوق 40 مليون متر مربع.
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              تواصل الشركة مسيرتها في بناء مجتمعات عمرانية حديثة متكاملة، ويأتي مشروع <strong className="text-amber-300">تاج سيتي (Taj City)</strong> كدرة تاج مشروعاتها بمساحة عملاقة تتجاوز 3.5 مليون متر مربع في أميز موقع بالقاهرة الجديدة على طريق السويس.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#220a11] p-4 rounded-xl border border-[#d4af37]/20 text-center">
                <span className="block text-2xl sm:text-3xl font-bold gold-gradient-text font-cinzel">1959</span>
                <span className="text-xs text-stone-300 mt-1 block">عام التأسيس والريادة</span>
              </div>

              <div className="bg-[#220a11] p-4 rounded-xl border border-[#d4af37]/20 text-center">
                <span className="block text-2xl sm:text-3xl font-bold gold-gradient-text font-cinzel">+65</span>
                <span className="text-xs text-stone-300 mt-1 block">عاماً من الثقة والالتزام</span>
              </div>

              <div className="bg-[#220a11] p-4 rounded-xl border border-[#d4af37]/20 text-center col-span-2 sm:col-span-1">
                <span className="block text-2xl sm:text-3xl font-bold gold-gradient-text font-cinzel">3.5M+ M²</span>
                <span className="text-xs text-stone-300 mt-1 block">مساحة كمبوند تاج سيتي</span>
              </div>
            </div>

            {/* Prominent Projects */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs sm:text-sm font-bold text-amber-300">أبرز مشروعات وسابقة أعمال مدينة مصر:</h3>
              <div className="flex flex-wrap gap-2 text-xs text-stone-300">
                <span className="bg-[#2d0c15] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">مشروع تاج سيتي (Taj City)</span>
                <span className="bg-[#2d0c15] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">مشروع سراي (Sarai) طريق السويس</span>
                <span className="bg-[#2d0c15] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">كافانا ليك (Cavana Lake)</span>
                <span className="bg-[#2d0c15] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">إلكتر (Elect Taj City)</span>
                <span className="bg-[#2d0c15] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">تاج سلطان (Taj Sultan)</span>
              </div>
            </div>
          </div>

          {/* Direct Sales & Consultation Card Right */}
          <div className="lg:col-span-5">
            <div className="card-luxury p-6 sm:p-8 rounded-2xl text-right space-y-6">
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
                <div className="text-left">
                  <span className="text-xs text-stone-400 block">تواصل مباشر</span>
                  <span className="text-xs text-emerald-400 font-bold">متاح الآن للرد</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-sm font-bold text-white block">قسم مبيعات إيتاج تاج سيتي</span>
                    <span className="text-xs text-amber-300">مستشارك العقاري المعتمد</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#561926] text-amber-300 flex items-center justify-center">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">استشارات وحجز الوحدات:</strong>
                    <span>تزويدك بأحدث كراسة شروط ومخططات الطوابق والأسعار الرسمية المتاحة بمرحلة إيتاج.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">تحديد موعد معاينة بالموقع:</strong>
                    <span>ترتيب جولة معاينة خاصة بالمشروع على طريق السويس للتعرف على أرض الواقع.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">خط الاتصال السريع المباشر:</strong>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="text-amber-300 hover:text-white font-bold text-lg block mt-0.5 font-cinzel"
                      dir="ltr"
                    >
                      {CONTACT_PHONE_FORMATTED}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-amber-400 text-stone-950 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصل الآن للاستفسار وحجز وحدتك</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CheckCircle2, Sparkles, Building, Compass, Layers, ShieldCheck } from 'lucide-react';
import promenadeImg from '../assets/images/etaje_promenade_1791075926381.jpg';
import gateImg from '../assets/images/etaje_gate_view_1791075940555.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#14060a] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3b0f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>الفصل الأخير والأرقى في تاج سيتي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            عن مرحلة إيتاج <span className="gold-gradient-text">(ÉTAJE)</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            تمثل مرحلة <span className="font-cinzel text-amber-300">ÉTAJE</span> المحطة الختامية لمشروع تاج سيتي العملاق، حيث تلتقي الفخامة المعمارية بالموقع الجغرافي الذي لا يُضاهى على طريق السويس.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Text / Features */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="border-r-4 border-[#d4af37] pr-4">
              <span className="font-cinzel text-amber-400 text-sm tracking-wider font-semibold block mb-1">
                AN ELEVATED EXPERIENCE AT TAJ CITY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                وجهة حيوية متعددة الاستخدامات صُممت لتمنحك نمط حياة سلس ومتكامل
              </h3>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              تقع مرحلة <strong className="text-amber-200">إيتاج (Étaje)</strong> في موقع استراتيجي استثنائي عند تقاطع الطريق الدائري مع طريق السويس ومحور الوفاء والأمل ومحور تحيا مصر، مما يضعك على مقربة من كل ما يهمك.
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              تجمع إيتاج بين متاجر التسوق الفاخرة، المطاعم الراقية، المراكز الطبية المتطورة، ومكاتب الأعمال المعاصرة، لتخلق بيئة ديناميكية تعيش فيها كل تفاصيل يومك بسهولة. وفي قلب هذا المجتمع، تأتي الشقق والاستوديوهات السكنية بمساحات ذكية ومدروسة لتلبي تطلعات الراغبين في الاستقلالية والمرونة مع أرقى درجات الخصوصية.
            </p>

            {/* Core USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 bg-[#220a10] p-3 rounded-xl border border-[#d4af37]/25">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">مجتمع متكامل الخدمات</h4>
                  <p className="text-xs text-stone-400">تسوق، ترفيه، مطاعم ومراكز طبية</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#220a10] p-3 rounded-xl border border-[#d4af37]/25">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ارتدادات تصل 65.5م</h4>
                  <p className="text-xs text-stone-400">أعلى درجات الخصوصية وانعدام التجريح</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#220a10] p-3 rounded-xl border border-[#d4af37]/25">
                <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">ممشى بطول 450 متر</h4>
                  <p className="text-xs text-stone-400">جرين سباين مع بحيرات ونوافير راقصة</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#220a10] p-3 rounded-xl border border-[#d4af37]/25">
                <Building className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">مطور ذو ثقة وتاريخ</h4>
                  <p className="text-xs text-stone-400">شركة مدينة مصر منذ 1959</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors underline underline-offset-8"
              >
                <span>سجل اهتمامك واستفسر عن تفاصيل المشروع والأسعار</span>
                <span className="text-lg">←</span>
              </a>
            </div>
          </div>

          {/* Right Image Visuals Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/35 group">
              <img
                src={promenadeImg}
                alt="الممشى التجاري والبوليفارد في إيتاج تاج سيتي"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14060a] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl burgundy-glass text-right">
                <span className="text-xs text-amber-300 font-semibold block">البوليفارد التجاري والممشى الخارجي</span>
                <p className="text-xs text-stone-300 mt-1">
                  مطاعم خارجية وكافيهات ومتاجر راقية محاطة بمسطحات خضراء ومسارات للمشاة
                </p>
              </div>
            </div>

            {/* Overlapping smaller badge card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-56 rounded-xl overflow-hidden border border-[#d4af37]/50 shadow-2xl burgundy-glass p-2">
              <img
                src={gateImg}
                alt="بوابة إيتاج تاج سيتي - Gate 01"
                className="w-full h-28 object-cover rounded-lg mb-2"
              />
              <div className="text-right px-1">
                <div className="text-[11px] font-bold text-white">بوابة الدخول الذكية (Gate 01)</div>
                <div className="text-[10px] text-amber-300/90">أمن وحراسة إلكترونية 24 ساعة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

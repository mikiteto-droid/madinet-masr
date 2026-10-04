import React, { useState } from 'react';
import { Compass, ShieldCheck, Trees, Eye, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import masterplanArt from '../assets/images/etaje_masterplan_art_1791076014075.jpg';
import aerialNight from '../assets/images/etaje_aerial_night_1791075953604.jpg';

export const MasterPlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'night'>('plan');
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="masterplan" className="py-20 bg-[#120407] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>المخطط العام والهندسي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            الماستر بلان وتوزيع <span className="gold-gradient-text">العمائر السكنية الفاخرة</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            تم تخطيط مرحلة إيتاج بعناية فائقة لتوفر خصوصية لا تضاهى وأجواء معيشية مريحة تحيط بها الطبيعة الخلابة.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-extrabold gold-gradient-text font-cinzel">450 M</span>
              <Trees className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">الممشى الأخضر المركزي (Green Spine)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              شريان أخضر ممتد بطول 450 متراً يضم بحيرات ومجاري مائية ونوافير ومسارات للمشاة دون أي تداخل مع مسارات السيارات.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-extrabold gold-gradient-text font-cinzel">18.5 - 65.5 M</span>
              <ShieldCheck className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">مسافات ارتداد واسعة للخصوصية</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              مسافات فاصلة غير مسبوقة بين المباني تبدأ من 18.5 متر وتصل إلى 65.5 متراً لضمان الانفتاح والتهوية وانعدام التجريح التام.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-extrabold gold-gradient-text font-cinzel">LUXURY</span>
              <Sparkles className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">تصميم معماري فاخر ومبتكر</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              فلسفة تصميم عصرية تقدم مساحات مرنة ومستقلة مع شرفات زجاجية واسعة وحدائق خاصة للأدوار الأرضية.
            </p>
          </div>
        </div>

        {/* Master Plan Visualizer Box */}
        <div className="bg-[#1e070e] border border-[#d4af37]/30 rounded-2xl p-4 sm:p-6 shadow-2xl">
          {/* Controls Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-[#d4af37]/20">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'plan'
                    ? 'bg-[#d4af37] text-stone-950 shadow-md'
                    : 'bg-[#2a0c14] text-stone-300 hover:text-white'
                }`}
              >
                المخطط العام للوحدات والجرين سباين
              </button>
              <button
                onClick={() => setActiveTab('night')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'night'
                    ? 'bg-[#d4af37] text-stone-950 shadow-md'
                    : 'bg-[#2a0c14] text-stone-300 hover:text-white'
                }`}
              >
                المنظور الجوي الليلي للمشروع
              </button>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-300 hover:text-amber-200 transition-colors bg-[#350f18] px-3.5 py-2 rounded-xl border border-[#d4af37]/30"
            >
              <ZoomIn className="w-4 h-4" />
              <span>تكبير المخطط بملء الشاشة</span>
            </button>
          </div>

          {/* Master Image View with Points of Interest */}
          <div className="relative rounded-xl overflow-hidden cursor-pointer group" onClick={() => setShowModal(true)}>
            <img
              src={activeTab === 'plan' ? masterplanArt : aerialNight}
              alt="المخطط العام لمرحلة إيتاج كمبوند تاج سيتي"
              className="w-full h-80 sm:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Visual Overlays / Hotspots */}
            <div className="absolute top-4 right-4 burgundy-glass px-3.5 py-2 rounded-xl text-right">
              <span className="text-xs font-bold text-amber-300 block">طريق السويس المباشر</span>
              <span className="text-[11px] text-stone-300">Suez Road Frontage</span>
            </div>

            <div className="absolute bottom-4 left-4 burgundy-glass px-3.5 py-2 rounded-xl text-left">
              <span className="text-xs font-bold text-amber-300 block">The Green Spine</span>
              <span className="text-[11px] text-stone-300">ممشى بطول 450 متر ونوافير مائية</span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1.5 rounded-lg text-xs text-stone-300 flex items-center gap-1.5 backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>اضغط للتكبير واستعراض التفاصيل</span>
            </div>
          </div>

          {/* Legend Details */}
          <div className="mt-4 pt-4 border-t border-[#d4af37]/15 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span>العمائر والوحدات السكنية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span>الممشى الأخضر والحدائق المركزية (450m)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
              <span>البحيرات والنوافير المائية التفاعلية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
              <span>الممشى التجاري والمطاعم (Retail Promenade)</span>
            </div>
          </div>
        </div>

        {/* Modal Lightbox */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="relative max-w-5xl w-full bg-[#18070c] border border-[#d4af37] rounded-2xl overflow-hidden p-2">
              <div className="flex justify-between items-center px-4 py-2 text-stone-200">
                <span className="font-bold text-amber-300">
                  {activeTab === 'plan' ? 'المخطط الهندسي العام لمرحلة إيتاج' : 'المنظور المعماري الليلي'}
                </span>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-red-900/60 hover:bg-red-800 text-white rounded-lg text-xs font-bold"
                >
                  إغلاق ✕
                </button>
              </div>
              <img
                src={activeTab === 'plan' ? masterplanArt : aerialNight}
                alt="تكبير الماستر بلان"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

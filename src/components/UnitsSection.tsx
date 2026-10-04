import React, { useState } from 'react';
import { Home, Maximize2, Bed, Bath, Trees, Sparkles, Check, Phone, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { UNITS_DATA, UnitItem, CONTACT_PHONE, WHATSAPP_LINK } from '../data/projectData';

export const UnitsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'studio' | '1bed' | '2bed' | '3bed' | 'garden'>('all');
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<UnitItem | null>(null);

  const filteredUnits = UNITS_DATA.filter((unit) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'garden') return unit.hasGarden;
    return unit.type === selectedFilter;
  });

  const getWhatsappForUnit = (unit: UnitItem) => {
    const text = `مرحباً، أود الاستفسار عن كراسة الشروط وسعر الوحدة رقم (${unit.unitNumber}) بمساحة ${unit.area} متر مربع (${unit.typeNameAr} - ${unit.floorLevelAr}) في مرحلة إيتاج كمبوند تاج سيتي.`;
    return `https://wa.me/201115550966?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="units" className="py-20 bg-[#16060c] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Home className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>مخططات الطوابق والوحدات المتاحة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            مساحات وتصميمات شقق <span className="gold-gradient-text">مرحلة إيتاج تاج سيتي</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            استكشف تفاصيل ومساحات الوحدات المطروحة في مرحلة إيتاج تاج سيتي بدءاً من الاستوديوهات العصرية 37م وحتى الشقق العائلية 133م مع حدائق خاصة وتراسات مفتوحة.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg shadow-amber-950/40'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            جميع الوحدات
          </button>

          <button
            onClick={() => setSelectedFilter('studio')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === 'studio'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            استوديوهات (37 م²)
          </button>

          <button
            onClick={() => setSelectedFilter('1bed')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === '1bed'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            شقق غرفة واحدة (51 - 53 م²)
          </button>

          <button
            onClick={() => setSelectedFilter('2bed')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === '2bed'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            شقق غرفتين نوم (109 م²)
          </button>

          <button
            onClick={() => setSelectedFilter('3bed')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === '3bed'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            شقق 3 غرف نوم (132 - 133 م²)
          </button>

          <button
            onClick={() => setSelectedFilter('garden')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === 'garden'
                ? 'bg-[#d4af37] text-stone-950 shadow-lg'
                : 'bg-[#290b13] text-stone-300 hover:text-white border border-[#d4af37]/20'
            }`}
          >
            أرضي بحديقة خاصة 🌿
          </button>
        </div>

        {/* Units Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="card-luxury rounded-2xl overflow-hidden p-5 flex flex-col justify-between text-right relative group"
            >
              {/* Card Header Top */}
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-[#d4af37]/20 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#d4af37]/20 text-[#f7e4b2] border border-[#d4af37]/40 font-bold">
                      وحدة رقم {unit.unitNumber}
                    </span>
                    <span className="text-xs text-stone-400">{unit.floorLevelAr}</span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-300 font-cinzel font-bold text-xl">
                    <span>{unit.area}</span>
                    <span className="text-xs font-sans">م²</span>
                  </div>
                </div>

                {/* Unit Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {unit.typeNameAr}
                </h3>

                {/* Specs Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-stone-300">
                  {unit.bedrooms > 0 ? (
                    <span className="flex items-center gap-1 bg-[#2b0c14] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                      <Bed className="w-3.5 h-3.5 text-amber-400" />
                      <span>{unit.bedrooms} غرفة نوم</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 bg-[#2b0c14] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>استوديو مستقل</span>
                    </span>
                  )}

                  <span className="flex items-center gap-1 bg-[#2b0c14] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                    <Bath className="w-3.5 h-3.5 text-amber-400" />
                    <span>{unit.bathrooms} حمام</span>
                  </span>

                  {unit.hasGarden && (
                    <span className="flex items-center gap-1 bg-emerald-950/60 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      <Trees className="w-3.5 h-3.5" />
                      <span>حديقة خاصة</span>
                    </span>
                  )}

                  {unit.hasTerrace && !unit.hasGarden && (
                    <span className="flex items-center gap-1 bg-[#2b0c14] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>تراس خارجي</span>
                    </span>
                  )}
                </div>

                {/* View description */}
                <div className="bg-[#1f070e] p-2.5 rounded-xl border border-[#d4af37]/15 mb-4 text-xs text-amber-200/90 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>{unit.view}</span>
                </div>

                {/* Key Features List */}
                <ul className="space-y-1.5 mb-6 text-xs text-stone-300">
                  {unit.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#d4af37]/20 space-y-2">
                <button
                  onClick={() => setSelectedUnitForModal(unit)}
                  className="w-full py-2 bg-[#2d0c15] hover:bg-[#43121f] text-[#f7e4b2] text-xs font-bold rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>عرض تفاصيل ومخطط الوحدة (Floor Plan)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getWhatsappForUnit(unit)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>طلب السعر</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="py-2.5 bg-[#d4af37] hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-950" />
                    <span>اتصال للحجز</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Unit Consultation CTA */}
        <div className="p-6 sm:p-8 rounded-2xl burgundy-glass text-center max-w-4xl mx-auto border border-[#d4af37]/40">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            هل تبحث عن دور معين أو مساحة خاصة في إيتاج تاج سيتي؟
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto mb-6">
            يتوفر لدينا وحدات في الأدوار الأرضية بحدائق مستقلة، والأدوار المتكررة، والطوابق العلوية بتراسات بانورامية. اتصل بمستشار المبيعات الآن لمعرفة الوحدات المتبقية وجداول الأقساط.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center gap-2 bg-[#d4af37] text-stone-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-all shadow-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>تحدث مع المبيعات فوراً: {CONTACT_PHONE}</span>
            </a>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-[#2d0c15] text-[#f7e4b2] border border-[#d4af37]/50 font-bold px-6 py-3 rounded-xl hover:bg-[#43121f] transition-all text-sm"
            >
              <span>تسجيل طلب تسعير مخصص</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>

        {/* Floor Plan Detail Modal */}
        {selectedUnitForModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedUnitForModal(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#1c070e] border border-[#d4af37] rounded-2xl p-6 text-right max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4 mb-4">
                <button
                  onClick={() => setSelectedUnitForModal(null)}
                  className="px-3 py-1 bg-red-950 hover:bg-red-900 text-stone-200 rounded-lg text-xs font-bold border border-red-500/40"
                >
                  إغلاق ✕
                </button>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    مخطط الوحدة رقم {selectedUnitForModal.unitNumber}
                  </h3>
                  <span className="text-xs text-amber-300">
                    {selectedUnitForModal.floorLevelAr} • {selectedUnitForModal.area} م²
                  </span>
                </div>
              </div>

              {/* Architectural Schematic representation */}
              <div className="bg-[#120408] border border-[#d4af37]/30 rounded-xl p-6 mb-6 text-center">
                <div className="w-full max-w-md mx-auto aspect-video border-2 border-dashed border-[#d4af37]/40 rounded-xl flex flex-col items-center justify-center p-4 bg-[#230911]/50">
                  <div className="text-xs text-amber-300 font-cinzel tracking-widest mb-1">
                    ÉTAJE - UNIT {selectedUnitForModal.unitNumber}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {selectedUnitForModal.area} M²
                  </div>
                  <div className="text-xs text-stone-300 mb-3">
                    {selectedUnitForModal.typeNameAr}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-amber-200 bg-[#350f18] px-3 py-1.5 rounded-lg border border-[#d4af37]/20">
                    <span>{selectedUnitForModal.view}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-bold text-amber-300">المواصفات والتقسيم الداخلي:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-200">
                  {selectedUnitForModal.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-[#260a12] p-2.5 rounded-lg border border-[#d4af37]/15">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={getWhatsappForUnit(selectedUnitForModal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تأكيد الحجز عبر واتساب</span>
                </a>

                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="py-3 bg-[#d4af37] hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر: {CONTACT_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

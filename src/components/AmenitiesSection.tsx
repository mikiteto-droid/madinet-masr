import React from 'react';
import { Trees, Waves, UtensilsCrossed, HeartPulse, Briefcase, ShieldCheck, Bike, Lock, Sparkles } from 'lucide-react';
import { AMENITIES_LIST } from '../data/projectData';

export const AmenitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Trees,
    Waves,
    UtensilsCrossed,
    HeartPulse,
    Briefcase,
    ShieldCheck,
    Bike,
    Lock,
  };

  return (
    <section id="amenities" className="py-20 bg-[#120407] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>خدمات متكاملة ونمط حياة استثنائي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            مزايا وخدمات مرحلة <span className="gold-gradient-text">إيتاج تاج سيتي</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            بيئة سكنية حيوية متكاملة الخدمات تم تصميمها لتلبي أدق تفاصيل الراحة والرفاهية، حيث تبعد الخدمات الأساسية والترفيهية خطوات معدودة عن باب منزلك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_LIST.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles;
            return (
              <div
                key={index}
                className="card-luxury p-6 rounded-2xl text-right flex flex-col justify-between group hover:border-amber-400/60"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#481420] text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#5e1a2b] transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {amenity.title}
                  </h3>
                  <div className="font-cinzel text-[11px] text-amber-400/70 tracking-wider mb-2">
                    {amenity.titleEn}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#d4af37]/15 flex items-center gap-1.5 text-[11px] text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>متوفر لقاطني مرحلة إيتاج</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

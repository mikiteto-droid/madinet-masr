import React from 'react';
import { MapPin, Navigation, Clock, Plane, Car, Building2, ExternalLink, Compass } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_LINK } from '../data/projectData';

export const LocationSection: React.FC = () => {
  const nearbyPoints = [
    { name: 'مطار القاهرة الدولي', time: '5 دقائق فقط', icon: Plane, desc: 'موقع مثالي لرجال الأعمال وكثيري السفر' },
    { name: 'مصر الجديدة ومدينة نصر', time: '5 دقائق', icon: Building2, desc: 'اتصال مباشر عبر الدائري ومحور الوفاء والأمل' },
    { name: 'التجمع الخامس وكايرو فستيفال', time: '10 دقائق', icon: Car, desc: 'سهولة الوصول لشارع التسعين والجامعة الأمريكية' },
    { name: 'العاصمة الإدارية الجديدة', time: '15 دقيقة', icon: Navigation, desc: 'امتداد سريع ومباشر عبر طريق السويس' },
    { name: 'فندق ماريوت ميراج سيتي وكيمبنسكي', time: 'مواجهة مباشرة', icon: MapPin, desc: 'أرقى المنشآت الفندقية العالمية أمام المشروع' },
    { name: 'محور المشير طنطاوي وتحيا مصر', time: '3 دقائق', icon: Navigation, desc: 'شريان مروري يربطك بكل أنحاء القاهرة الكبرى' },
  ];

  return (
    <section id="location" className="py-20 bg-[#19070d] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#340f18] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>نقطة الالتقاء الأقوى في القاهرة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            موقع إيتاج تاج سيتي على طريق السويس
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            تتمتع مرحلة <strong className="text-amber-300">إيتاج (Étaje)</strong> بموقع استراتيجي هو الأكثر حيوية في كمبوند تاج سيتي، يطل مباشرة على أهم المحاور الرئيسية التي تضعك في قلب العاصمة خلال دقائق.
          </p>
        </div>

        {/* Master Axis Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-[#521723] flex items-center justify-center text-amber-400 mb-4">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">طريق السويس المباشر</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              واجهة رئيسية مباشرة على طريق السويس، أحد أهم المحاور الحيوية الممتدة بين قلب القاهرة ومصر الجديدة وحتى العاصمة الإدارية.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-[#521723] flex items-center justify-center text-amber-400 mb-4">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">تقاطع الطريق الدائري</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              ربط فوري وحر مع الطريق الدائري، مما يتيح لك الانتقال السلس إلى المعادي، التجمع، الشروق، وكافة أحياء الجيزة والقاهرة.
            </p>
          </div>

          <div className="card-luxury p-6 rounded-2xl text-right">
            <div className="w-12 h-12 rounded-xl bg-[#521723] flex items-center justify-center text-amber-400 mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">محاور الوفاء والأمل وتحيا مصر</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              مداخل ومخارج سريعة على محور الوفاء والأمل ومحور تحيا مصر، مما يجعل الوصول للمشروع في غاية السهولة دون أي ازدحام.
            </p>
          </div>
        </div>

        {/* Distances Grid & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Nearby Distances */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
            {nearbyPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#240a12]/90 border border-[#d4af37]/20 p-4 rounded-xl hover:border-amber-400/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-300 text-xs font-bold">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </span>
                  <item.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Directions CTA Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-8 burgundy-glass border border-[#d4af37]/40 text-right space-y-4">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                احصل على لوكيشن المشروع وعاين الموقع على الطبيعة
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                يسعدنا ترتيب جولة معاينة خاصة لك ولعائلتك في كمبوند تاج سيتي وموقع مرحلة إيتاج الجديد على طريق السويس.
              </p>

              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-amber-400 text-stone-950 py-3 rounded-xl font-bold text-sm shadow-lg transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>تحديد موعد زيارة للموقع (01115550966)</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700/80 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm border border-emerald-500/40 transition-all"
                >
                  <span>أرسل لي موقع المشروع عبر واتساب</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

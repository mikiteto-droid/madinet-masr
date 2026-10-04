import React, { useState } from 'react';
import { Camera, ZoomIn, Eye, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/etaje_hero_sunset_1791075912038.jpg';
import promenadeImg from '../assets/images/etaje_promenade_1791075926381.jpg';
import gateImg from '../assets/images/etaje_gate_view_1791075940555.jpg';
import aerialNight from '../assets/images/etaje_aerial_night_1791075953604.jpg';
import masterplanArt from '../assets/images/etaje_masterplan_art_1791076014075.jpg';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: heroImg,
      title: 'الممشى الأخضر وقت الغروب',
      subtitle: 'The Central Green Spine at Sunset',
      desc: 'إطلالة البحيرات المركزية والنوافير الراقصة ومسارات المشاة والعمائر السكنية الفاخرة.',
    },
    {
      src: promenadeImg,
      title: 'البوليفارد التجاري والمطاعم المفتوحة',
      subtitle: 'Retail & Outdoor Dining Promenade',
      desc: 'مساحات مفتوحة تضم أرقى الكافيهات والمتاجر العالمية في أجواء نابضة بالحياة.',
    },
    {
      src: gateImg,
      title: 'بوابة إيتاج الرئيسية - Gate 01',
      subtitle: 'Main Gate & Security Entrance',
      desc: 'مدخل فخم يجسد الهوية المعمارية الراقية للمشروع مع حراسة ذكية 24/7.',
    },
    {
      src: aerialNight,
      title: 'المنظور الجوي الليلي للمشروع',
      subtitle: 'Aerial Night Master View',
      desc: 'إضاءة ساحرة للممشى المائي بطول 450 متراً مع الإطلالة على طريق السويس.',
    },
    {
      src: masterplanArt,
      title: 'المخطط الهندسي وتوزيع الكتل السكنية',
      subtitle: 'Architectural Master Plan Overview',
      desc: 'توزيع مدروس للمباني بارتدادات واسعة تصل إلى 65.5م تضمن الخصوصية الكاملة.',
    },
  ];

  return (
    <section className="py-20 bg-[#16060c] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>معرض الصور واللقطات ثلاثية الأبعاد</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            رؤية معمارية تجسد <span className="gold-gradient-text">الفخامة المعاصرة</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            استمتع بمشاهدة صور وتصميمات مرحلة إيتاج تاج سيتي المستوحاة من أحدث المعايير العالمية في التخطيط العمراني.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border border-[#d4af37]/30 group cursor-pointer shadow-xl bg-[#20070f] ${
                index === 0 ? 'md:col-span-2 md:h-96' : 'h-80'
              }`}
              onClick={() => setActiveImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140509] via-[#140509]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4 p-2 rounded-xl bg-black/50 text-amber-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="text-[11px] font-cinzel text-amber-300 tracking-wider block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div className="relative max-w-5xl w-full bg-[#18070c] border border-[#d4af37] rounded-2xl overflow-hidden p-2">
              <div className="flex justify-between items-center px-4 py-2 text-stone-200">
                <span className="text-xs sm:text-sm font-bold text-amber-300">
                  عرض اللقطة المعمارية عالية الدقة
                </span>
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-3 py-1 bg-red-900 hover:bg-red-800 text-white rounded-lg text-xs font-bold"
                >
                  إغلاق ✕
                </button>
              </div>
              <img
                src={activeImage}
                alt="تكبير الصورة"
                className="w-full max-h-[82vh] object-contain rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

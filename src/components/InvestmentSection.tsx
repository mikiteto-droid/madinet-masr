import React, { useState } from 'react';
import { Calculator, Percent, ShieldCheck, DollarSign, ArrowRight, Phone } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_LINK } from '../data/projectData';

export const InvestmentSection: React.FC = () => {
  const [selectedUnitType, setSelectedUnitType] = useState<'studio' | '1bed' | '2bed' | '3bed'>('1bed');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(10);
  const [years, setYears] = useState<number>(8);

  // Approximate base starting indicators for guidance
  const basePrices: Record<string, { label: string; area: string; approxBase: number }> = {
    studio: { label: 'استوديو فاخر (37م²)', area: '37 م²', approxBase: 4200000 },
    '1bed': { label: 'شقة غرفة نوم واحدة (51-53م²)', area: '52 م²', approxBase: 5800000 },
    '2bed': { label: 'شقة غرفتين نوم (109م²)', area: '109 م²', approxBase: 9500000 },
    '3bed': { label: 'شقة 3 غرف نوم (132-133م²)', area: '133 م²', approxBase: 12200000 },
  };

  const currentUnit = basePrices[selectedUnitType];
  const calculatedDownPayment = (currentUnit.approxBase * downPaymentPercent) / 100;
  const remainingAmount = currentUnit.approxBase - calculatedDownPayment;
  const totalMonths = years * 12;
  const monthlyInstallment = Math.round(remainingAmount / totalMonths);
  const quarterlyInstallment = monthlyInstallment * 3;

  return (
    <section className="py-20 bg-[#16060c] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>حاسبة الأقساط وأنظمة السداد المرنة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            خطط السداد والاستثمار في <span className="gold-gradient-text">إيتاج تاج سيتي</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            تقدم شركة مدينة مصر تيسيرات غير مسبوقة وأنظمة سداد مرنة بدون فوائد بنكية تمنحك استثماراً آمناً وقيمة متصاعدة مع مرور الوقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Left */}
          <div className="lg:col-span-6 bg-[#20080f] p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 text-right space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-[#d4af37]/20 pb-3">
              احسب خطة الدفع المقترحة لوحدتك
            </h3>

            {/* Select Unit Type */}
            <div>
              <label className="block text-xs font-bold text-amber-300 mb-2">نوع الوحدة والمساحة التقديرية:</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(basePrices).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedUnitType(key as any)}
                    className={`p-2.5 rounded-xl text-xs font-bold text-right transition-all border ${
                      selectedUnitType === key
                        ? 'bg-[#d4af37] text-stone-950 border-amber-300 shadow-md'
                        : 'bg-[#2b0c15] text-stone-300 hover:text-white border-[#d4af37]/20'
                    }`}
                  >
                    <div>{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Downpayment percentage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-stone-400">النسبة المختارة: {downPaymentPercent}%</span>
                <label className="text-xs font-bold text-amber-300">نسبة المقدم (Down Payment):</label>
              </div>
              <div className="flex items-center gap-2">
                {[5, 10, 15, 20].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setDownPaymentPercent(pct)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      downPaymentPercent === pct
                        ? 'bg-[#5e1828] text-amber-300 border-amber-400'
                        : 'bg-[#2b0c15] text-stone-300 border-[#d4af37]/20'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Installment Years */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-stone-400">{years} سنوات</span>
                <label className="text-xs font-bold text-amber-300">مدة التقسيط:</label>
              </div>
              <div className="flex items-center gap-2">
                {[5, 7, 8, 9].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setYears(yr)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      years === yr
                        ? 'bg-[#5e1828] text-amber-300 border-amber-400'
                        : 'bg-[#2b0c15] text-stone-300 border-[#d4af37]/20'
                    }`}
                  >
                    {yr} سنوات
                  </button>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-stone-400 italic">
              * الأرقام الموضحة استرشادية بحسب خطط الطرح الحالية، وللحصول على عرض السعر الدقيق والخصومات المتاحة يُرجى التواصل مباشرة مع المبيعات.
            </p>
          </div>

          {/* Results Summary Right */}
          <div className="lg:col-span-6 card-luxury p-6 sm:p-8 rounded-2xl text-right space-y-6">
            <div className="border-b border-[#d4af37]/20 pb-4">
              <span className="text-xs text-amber-400 block mb-1">تفاصيل القسط التقديري</span>
              <h3 className="text-xl font-bold text-white">
                {currentUnit.label}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#240a12] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-xs text-stone-400 block mb-1">المقدم المطلوب ({downPaymentPercent}%):</span>
                <span className="text-lg font-bold text-amber-300 font-cinzel">
                  {calculatedDownPayment.toLocaleString('ar-EG')} ج.م
                </span>
              </div>

              <div className="bg-[#240a12] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-xs text-stone-400 block mb-1">القسط الشهري التقديري:</span>
                <span className="text-lg font-bold text-emerald-400 font-cinzel">
                  {monthlyInstallment.toLocaleString('ar-EG')} ج.م
                </span>
              </div>

              <div className="bg-[#240a12] p-4 rounded-xl border border-[#d4af37]/20 sm:col-span-2">
                <span className="text-xs text-stone-400 block mb-1">القسط ربع السنوي (كل 3 شهور):</span>
                <span className="text-xl font-bold gold-gradient-text font-cinzel">
                  {quarterlyInstallment.toLocaleString('ar-EG')} ج.م
                </span>
                <span className="text-[11px] text-stone-400 block mt-1">موزع بالتساوي على مدار {years} سنوات بدون فوائد</span>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <a
                href="#contact-form"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-amber-400 text-stone-950 font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm"
              >
                <span>طلب جدول الأقساط الرسمي المعتمد لوحدتك</span>
                <ArrowRight className="w-4 h-4 rotate-180" />
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2d0c15] hover:bg-[#43121f] text-amber-200 border border-[#d4af37]/40 font-bold py-3 rounded-xl transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>اتصال بالمستشار المالي: {CONTACT_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

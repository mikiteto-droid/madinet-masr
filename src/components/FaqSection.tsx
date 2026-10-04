import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS_LIST } from '../data/projectData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#120407] relative border-t border-[#d4af37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>الأسئلة الشائعة والأجوبة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            كل ما تود معرفته عن <span className="gold-gradient-text">إيتاج كمبوند تاج سيتي</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            إجابات شاملة ومفصلة عن الموقع، المطور، المساحات المتوفرة، والخدمات المميزة لمرحلة إيتاج.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-luxury rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#3b0f19] flex items-center justify-center text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-right border-t border-[#d4af37]/15">
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

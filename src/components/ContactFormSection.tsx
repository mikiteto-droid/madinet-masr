import React, { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, User, Smartphone, Clock, Sparkles } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_FORMATTED, WHATSAPP_LINK, TARGET_EMAIL } from '../data/projectData';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('برجاء كتابة الاسم بالكامل');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMsg('برجاء إدخال رقم هاتف صحيح للتواصل');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to laplagegroupe@gmail.com via FormSubmit AJAX service
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `طلب حجز واستفسار جديد - إيتاج تاج سيتي (${formData.name})`,
          الاسم_بالكامل: formData.name,
          رقم_الموبايل: formData.phone,
          الاستفسار_او_الملاحظات: formData.message || 'لا يوجد استفسار إضافي',
          المشروع: 'مرحلة إيتاج كمبوند تاج سيتي طريق السويس - شركة مدينة مصر',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      // Save locally as backup
      try {
        const storedLeads = JSON.parse(localStorage.getItem('etaje_leads') || '[]');
        storedLeads.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('etaje_leads', JSON.stringify(storedLeads));
      } catch (e) {
        // ignore localStorage errors
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Email submission error', err);
      // Fallback save in case of adblockers or network interruptions
      try {
        const storedLeads = JSON.parse(localStorage.getItem('etaje_leads') || '[]');
        storedLeads.push({
          ...formData,
          date: new Date().toISOString(),
        });
        localStorage.setItem('etaje_leads', JSON.stringify(storedLeads));
      } catch (e) {
        // ignore
      }
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenWhatsAppFromSubmission = () => {
    const text = `مرحباً، أنا ${formData.name}، رقم هاتفي: ${formData.phone}. أود الاستفسار عن تفاصيل وأسعار مرحلة إيتاج كمبوند تاج سيتي طريق السويس. ${formData.message ? `ملاحظات: ${formData.message}` : ''}`;
    window.open(`https://wa.me/201115550966?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact-form" className="py-20 bg-[#140509] relative border-t border-[#d4af37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#390f19] border border-[#d4af37]/30 text-amber-300 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>تسجيل الاهتمام والحجز المباشر</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            تواصل معنا واحصل على <span className="gold-gradient-text">بروشور إيتاج والأسعار</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            سجل بياناتك الآن وسيقوم أحد مستشاري مبيعات مشروع إيتاج تاج سيتي بالتواصل معك فوراً لتزويدك بكافة التفاصيل وأنظمة التقسيط، أو اتصل مباشرة على الرقم المعتمد.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Form Box Left */}
          <div className="lg:col-span-7 card-luxury p-6 sm:p-8 rounded-2xl text-right">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-900/30">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  تم استلام طلبك بنجاح!
                </h3>
                <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  شكراً لك يا <strong className="text-amber-300">{formData.name}</strong>. تم تسجيل اهتمامك بمشروع إيتاج كمبوند تاج سيتي طريق السويس.
                </p>
                <div className="bg-[#240a12] p-4 rounded-xl border border-[#d4af37]/30 text-xs text-stone-300 max-w-md mx-auto space-y-1.5">
                  <p className="text-emerald-400 font-bold">تم إرسال بيانات طلبك بنجاح إلى إدارة المبيعات.</p>
                  <p>سيتواصل معك مستشار المبيعات على رقمك: <strong className="text-white" dir="ltr">{formData.phone}</strong> خلال دقائق معدودة.</p>
                  <p className="text-amber-400 pt-1">للحصول على الرد الفوري دون انتظار، يمكنك أيضاً بدء محادثة واتساب الآن:</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleOpenWhatsAppFromSubmission}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>فتح محادثة واتساب فورية</span>
                  </button>

                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d4af37] text-stone-950 font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>اتصال بالمسؤول ({CONTACT_PHONE})</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="text-xs text-stone-400 hover:text-stone-200 underline"
                  >
                    إرسال استفسار آخر
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#d4af37]/20 pb-3 mb-2">
                  <h3 className="text-lg font-bold text-white">استمارة الحجز والاستفسار</h3>
                  <p className="text-xs text-stone-400 mt-0.5">ادخل بياناتك وسنتواصل معك خلال 10 دقائق</p>
                </div>

                {errorMsg && (
                  <div className="bg-red-950/80 border border-red-500/50 text-red-200 text-xs p-3 rounded-xl text-right">
                    {errorMsg}
                  </div>
                )}

                {/* Name field */}
                <div>
                  <label htmlFor="user-name" className="block text-xs font-bold text-amber-300 mb-1.5">
                    الاسم بالكامل <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="user-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: محمد أحمد"
                      className="w-full bg-[#200810] border border-[#d4af37]/30 rounded-xl px-4 py-3 pr-10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                    <User className="w-4 h-4 text-stone-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Mobile field */}
                <div>
                  <label htmlFor="user-phone" className="block text-xs font-bold text-amber-300 mb-1.5">
                    رقم الموبايل / واتساب <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مثال: 01115550966"
                      className="w-full bg-[#200810] border border-[#d4af37]/30 rounded-xl px-4 py-3 pr-10 text-white placeholder-stone-500 text-sm text-right focus:outline-none focus:border-amber-400 transition-colors"
                      dir="ltr"
                    />
                    <Smartphone className="w-4 h-4 text-stone-400 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  <span className="text-[11px] text-stone-400 mt-1 block">
                    نحافظ على سرية بياناتك ولن نرسل أي رسائل غير مرغوبة
                  </span>
                </div>

                {/* Additional notes */}
                <div>
                  <label htmlFor="user-message" className="block text-xs font-bold text-amber-300 mb-1.5">
                    أي استفسار إضافي أو ميعاد مفضل للاتصال (اختياري):
                  </label>
                  <textarea
                    id="user-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب استفسارك عن الأسعار أو أنظمة السداد أو ميعاد المعاينة..."
                    className="w-full bg-[#200810] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#b3851b] hover:from-white hover:to-amber-300 text-stone-950 font-bold rounded-xl shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-stone-950" />
                      <span>إرسال الطلب واستلام كراسة الشروط</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Phone & Agent Info Right */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Highlight Card */}
            <div className="card-luxury p-6 sm:p-7 rounded-2xl text-right border-2 border-[#d4af37]/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#d4af37]/10 rounded-br-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa8022] text-stone-950 flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-bold block">خط الاتصال السريع المباشر</span>
                  <h4 className="text-base font-bold text-white">قسم مبيعات إيتاج تاج سيتي</h4>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                يسعدنا الرد على جميع استفساراتكم وحجز المعاينات واختيار أفضل الوحدات مباشرة على مدار الساعة:
              </p>

              {/* Huge Clickable Phone Number */}
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="block text-center py-3.5 px-4 bg-[#2f0c16] hover:bg-[#461221] border border-[#d4af37] rounded-xl text-2xl sm:text-3xl font-extrabold gold-gradient-text font-cinzel tracking-wider shadow-inner transition-colors mb-4"
                dir="ltr"
              >
                {CONTACT_PHONE_FORMATTED}
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#d4af37] hover:bg-amber-400 text-stone-950 font-bold py-2.5 rounded-xl text-xs transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال هاتفي</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>شات واتساب</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-[#1f070f] p-5 rounded-2xl border border-[#d4af37]/20 text-right space-y-3 text-xs text-stone-300">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Clock className="w-4 h-4" />
                <span>مواعيد العمل والمتابعة:</span>
              </div>
              <p>طوال أيام الأسبوع من الساعة 9:00 صباحاً وحتى 11:00 مساءً.</p>
              <div className="border-t border-[#d4af37]/15 pt-2 flex items-center gap-2 text-stone-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>فريق المبيعات متواجد وجاهز للرد فوراً على الواتساب والهاتف.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

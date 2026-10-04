export interface UnitItem {
  id: string;
  unitNumber: string;
  floor: string;
  floorLevelAr: string;
  type: 'studio' | '1bed' | '2bed' | '3bed';
  typeNameAr: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  hasGarden?: boolean;
  gardenArea?: string;
  hasTerrace?: boolean;
  view: string;
  features: string[];
}

export const CONTACT_PHONE = "01115550966";
export const CONTACT_PHONE_FORMATTED = "0111 555 0966";
export const TARGET_EMAIL = "laplagegroupe@gmail.com";
export const WHATSAPP_LINK = `https://wa.me/201115550966?text=${encodeURIComponent(
  "مرحباً، أود الاستفسار عن أسعار وتفاصيل مرحلة إيتاج (Étaje) في كمبوند تاج سيتي طريق السويس من شركة مدينة مصر."
)}`;

export const PROJECT_DETAILS = {
  name: "إيتاج تاج سيتي",
  nameEn: "ÉTAJE AT TAJ CITY",
  developer: "شركة مدينة مصر (مدينة نصر للإسكان والتعمير سابقاً)",
  developerEn: "Madinet Masr",
  establishedYear: 1959,
  location: "طريق السويس - تقاطع الطريق الدائري، القاهرة الجديدة",
  slogan: "المرحلة الختامية والأرقى في كمبوند تاج سيتي",
  sloganEn: "An Elevated Experience at Taj City - The Final Chapter",
  greenSpineLength: "450 متر",
  setbacks: "18.5 م إلى 65.5 م",
  startingArea: "37 متر مربع",
  unitTypesCount: "استوديوهات - شقق غرفة - شقق غرفتين - شقق 3 غرف فاخرة",
};

export const UNITS_DATA: UnitItem[] = [
  // Ground Floor
  {
    id: "g-02",
    unitNumber: "02",
    floor: "ground",
    floorLevelAr: "الدور الأرضي",
    type: "studio",
    typeNameAr: "استوديو فاخر مع حديقة",
    area: 37,
    bedrooms: 0,
    bathrooms: 1,
    hasGarden: true,
    gardenArea: "حديقة خاصة رحبة",
    hasTerrace: true,
    view: "إطلالة مباشرة على الممشى الأخضر المركزي",
    features: ["حديقة خاصة", "تراس خارجي", "حمام فندقي 2.7x1.4م", "استوديو مفتوح 19.9م²", "أقصى درجات الاستقلالية"],
  },
  {
    id: "g-03",
    unitNumber: "03",
    floor: "ground",
    floorLevelAr: "الدور الأرضي",
    type: "studio",
    typeNameAr: "استوديو فاخر مع حديقة",
    area: 37,
    bedrooms: 0,
    bathrooms: 1,
    hasGarden: true,
    gardenArea: "حديقة خاصة رحبة",
    hasTerrace: true,
    view: "إطلالة بانورامية على المساحات الخضراء والبحيرات",
    features: ["حديقة خاصة بإطلالة خضراء", "تراس واسع", "تصميم معماري ذكي وعصري", "قريب من بوابات الدخول والخدمات"],
  },
  {
    id: "g-05",
    unitNumber: "05",
    floor: "ground",
    floorLevelAr: "الدور الأرضي",
    type: "2bed",
    typeNameAr: "شقة غرفتين مع حديقة خاصة",
    area: 109,
    bedrooms: 2,
    bathrooms: 2,
    hasGarden: true,
    gardenArea: "حديقة خاصة كبيرة عريضة",
    hasTerrace: true,
    view: "إطلالة مزدوجة على اللاندسكيب والممشى الأخضر",
    features: ["غرفة نوم ماستر مع دريسنج وحمام خاص", "غرفة نوم ثانية واسعة", "ريسبشن رحب 26.6م²", "حديقة خاصة محيطة", "مطبخ وتراس"],
  },
  {
    id: "g-01",
    unitNumber: "01",
    floor: "ground",
    floorLevelAr: "الدور الأرضي",
    type: "3bed",
    typeNameAr: "شقة 3 غرف كورنر مع حديقة",
    area: 132,
    bedrooms: 3,
    bathrooms: 3,
    hasGarden: true,
    gardenArea: "حديقة خاصة زاوية واسعة",
    hasTerrace: true,
    view: "إطلالة واجهتين على الممشى الأخضر والمساحات المفتوحة",
    features: ["جناح ماستر كامل مع تراس وحمام خاص", "غرفتين نوم للأولاد والضيوف", "حمام رئيسي + تواليت ضيوف", "ريسبشن 6.4x3.6م", "2 تراس خارجي"],
  },
  {
    id: "g-04",
    unitNumber: "04",
    floor: "ground",
    floorLevelAr: "الدور الأرضي",
    type: "3bed",
    typeNameAr: "شقة 3 غرف ماستر مع حديقة",
    area: 132,
    bedrooms: 3,
    bathrooms: 3,
    hasGarden: true,
    gardenArea: "حديقة خاصة فسيحة",
    hasTerrace: true,
    view: "إطلالة زاوية خلابة على المسطحات المائية",
    features: ["3 غرف نوم مريحة", "3 حمامات فاخرة", "ريسبشن استقبال كبير", "حديقة خاصة مناسبة للشواء والجلسات العائلية"],
  },

  // First Floor
  {
    id: "f1-12",
    unitNumber: "12",
    floor: "first",
    floorLevelAr: "الدور الأول المتكرر",
    type: "1bed",
    typeNameAr: "شقة غرفة نوم واحدة فاخرة",
    area: 51,
    bedrooms: 1,
    bathrooms: 1,
    hasTerrace: true,
    view: "إطلالة مميزة على الممشى الأخضر والنوافير",
    features: ["غرفة نوم مريحة 3.2x3.2م", "ريسبشن مفتوح 5.9x3.2م", "تراس مشمس 2.6x1.4م", "حمام كامل 3.2x1.4م"],
  },
  {
    id: "f1-13",
    unitNumber: "13",
    floor: "first",
    floorLevelAr: "الدور الأول المتكرر",
    type: "1bed",
    typeNameAr: "شقة غرفة نوم واحدة فاخرة",
    area: 51,
    bedrooms: 1,
    bathrooms: 1,
    hasTerrace: true,
    view: "إطلالة واسعة على البحيرة والممشى",
    features: ["مخطط هندسي ذكي بدون أي هدر للمساحات", "تراس بإطلالة خضراء", "تشطيبات عصرية متقدمة"],
  },
  {
    id: "f1-15",
    unitNumber: "15",
    floor: "first",
    floorLevelAr: "الدور الأول المتكرر",
    type: "2bed",
    typeNameAr: "شقة غرفتين نوم فاخرة",
    area: 109,
    bedrooms: 2,
    bathrooms: 2,
    hasTerrace: true,
    view: "إطلالة بانورامية على الممشي الأخضر والمحلات الراقية",
    features: ["ماستر روم مع دريسنج وحمام", "غرفة إضافية وحمام كامل", "ريسبشن واسع وتراس عريض 3.4x1.2م"],
  },
  {
    id: "f1-11",
    unitNumber: "11",
    floor: "first",
    floorLevelAr: "الدور الأول المتكرر",
    type: "3bed",
    typeNameAr: "شقة عائلية 3 غرف نوم",
    area: 132,
    bedrooms: 3,
    bathrooms: 3,
    hasTerrace: true,
    view: "إطلالة بحرية زاوية مفتوحة على الماستر بلان",
    features: ["3 غرف نوم واسعة", "3 تراسات مستقلة للاستمتاع بالهواء النقي", "ريسبشن استقبال ضخم", "مطبخ مستقل 6.35م²"],
  },

  // Second Floor
  {
    id: "f2-22",
    unitNumber: "22",
    floor: "second",
    floorLevelAr: "الدور الثاني",
    type: "1bed",
    typeNameAr: "شقة غرفة نوم أنيقة",
    area: 52,
    bedrooms: 1,
    bathrooms: 1,
    hasTerrace: true,
    view: "إطلالة علوية مميزة على مسار الجري واللاندسكيب",
    features: ["تراس أمامي ممتد 3.1x1.2م", "غرفة نوم هادئة", "مساحة استقبال مريحة مع إضاءة طبيعية وافرة"],
  },
  {
    id: "f2-25",
    unitNumber: "25",
    floor: "second",
    floorLevelAr: "الدور الثاني",
    type: "2bed",
    typeNameAr: "شقة غرفتين نوم بانورامية",
    area: 109,
    bedrooms: 2,
    bathrooms: 2,
    hasTerrace: true,
    view: "إطلالة بانورامية غير مجروحة بالكامل",
    features: ["ارتدادات واسعة أمام المبنى تصل إلى 65.5م لضمان الخصوصية", "غرفة نوم رئيسية بحمام خاص", "تراس مطل على الشارع المظلل"],
  },
  {
    id: "f2-21",
    unitNumber: "21",
    floor: "second",
    floorLevelAr: "الدور الثاني",
    type: "3bed",
    typeNameAr: "شقة 3 غرف نوم بريميوم",
    area: 133,
    bedrooms: 3,
    bathrooms: 3,
    hasTerrace: true,
    view: "إطلالة على الممشى الأخضر الممتد بطول 450م",
    features: ["مساحة إجمالية 133م² متكاملة", "3 شرفات مطلة على الطبيعة", "تصميم معماري فاخر من شركة مدينة مصر"],
  },

  // Third, Fourth & Fifth Floors
  {
    id: "f3-32",
    unitNumber: "32",
    floor: "typical",
    floorLevelAr: "الأدوار الثالث والرابع والخامس",
    type: "1bed",
    typeNameAr: "شقة غرفة نوم بإطلالة علوية",
    area: 53,
    bedrooms: 1,
    bathrooms: 1,
    hasTerrace: true,
    view: "إطلالة مفتوحة على أفق كمبوند تاج سيتي",
    features: ["تراس واسع 4.83م²", "أعلى درجات الهدوء والتهوية الطبيعية", "مثالية للسكن الفاخر أو الاستثمار ذو العائد الإيجاري المرتفع"],
  },
  {
    id: "f3-35",
    unitNumber: "35",
    floor: "typical",
    floorLevelAr: "الأدوار المتكررة العلوية",
    type: "2bed",
    typeNameAr: "شقة غرفتين نوم إكزكتيف",
    area: 109,
    bedrooms: 2,
    bathrooms: 2,
    hasTerrace: true,
    view: "إطلالة خيالية على غروب الشمس والجرين سباين",
    features: ["موقع مميز جداً في الطوابق العلوية", "مساحة 109م² مقسمة بعناية", "مناسبة للعائلات الصغيرة والشباب"],
  },
  {
    id: "f3-31",
    unitNumber: "31",
    floor: "typical",
    floorLevelAr: "الأدوار المتكررة العلوية",
    type: "3bed",
    typeNameAr: "شقة 3 غرف نوم لاكشري",
    area: 133,
    bedrooms: 3,
    bathrooms: 3,
    hasTerrace: true,
    view: "إطلالة ثلاثية الاتجاهات على أفق القاهرة الجديدة والبحيرات",
    features: ["3 غرف نوم + 3 حمامات", "تراسات متعددة بمساحات حتى 5.1م²", "أكبر المساحات النموذجية في مرحلة إيتاج"],
  },
];

export const AMENITIES_LIST = [
  {
    title: "ممشى أخضر مركزي بطول 450 متر",
    titleEn: "450m Central Green Spine",
    desc: "محور بيئي وطبيعي يربط كامل المرحلة بمسطحات خضراء ومائية وأشجار نادرة ومسارات للمشي والاسترخاء.",
    icon: "Trees",
  },
  {
    title: "بحيرات مائية ونوافير راقصة",
    titleEn: "Water Features & Dancing Fountains",
    desc: "مسطحات مائية خلابة تمنح كل شرفة إطلالة ساحرة وصوتاً مهدئاً يضفي سكينة وأناقة استثنائية.",
    icon: "Waves",
  },
  {
    title: "ممشى تجاري ومطاعم مفتوحة",
    titleEn: "Retail & Outdoor Dining Boulevard",
    desc: "بوليفارد تجاري راقٍ يضم أشهر الماركات العالمية، كافيهات خارجية ومطاعم تقدم أشهى المأكولات على بعد خطوات.",
    icon: "UtensilsCrossed",
  },
  {
    title: "مرافق طبية وعيادات متخصصة",
    titleEn: "Integrated Medical Facilities",
    desc: "مجمع خدمات طبية متكامل وصيدليات على مدار 24 ساعة لخدمة قاطني إيتاج وتاج سيتي بأعلى المعايير.",
    icon: "HeartPulse",
  },
  {
    title: "مساحات عمل ومكاتب إدارية",
    titleEn: "Business & Flexible Workspaces",
    desc: "بيئة عمل حديثة ومكاتب مجهزة لأصحاب الأعمال ورواد الأعمال بالقرب من وحداتك السكنية.",
    icon: "Briefcase",
  },
  {
    title: "أقصى درجات الخصوصية (ارتدادات حتى 65.5م)",
    titleEn: "Max Privacy (Setbacks up to 65.5m)",
    desc: "توزيع هندسي متقن يضمن مسافات فاصلة رحبة بين المباني تتراوح من 18.5 إلى 65.5 متر دون أي تجريح.",
    icon: "ShieldCheck",
  },
  {
    title: "مسارات للدراجات والركض",
    titleEn: "Jogging & Cycling Tracks",
    desc: "مسارات مخصصة ومعزولة لممارسة رياضة الجري وركوب الدراجات بأمان تام وسط الطبيعة الغنّاء.",
    icon: "Bike",
  },
  {
    title: "بوابات أمنية وحراسة ذكية 24/7",
    titleEn: "Gate 01 & 24/7 Smart Security",
    desc: "نظام أمني متكامل بكاميرات مراقبة حديثة، بوابات ذكية بنظام البطاقات وكوادر حراسة مدربة على مدار الساعة.",
    icon: "Lock",
  },
];

export const FAQS_LIST = [
  {
    q: "ما هي مرحلة إيتاج (Étaje) في تاج سيتي؟",
    a: "مرحلة إيتاج (Étaje) هي المرحلة الأحدث والختامية في مشروع كمبوند تاج سيتي، وتعتبر تحفة معمارية متكاملة تقدم مفهوم المعيشة الراقية العصرية بتصميمات هندسية استثنائية وممشى أخضر مركزي بطول 450 متر ومزيج متكامل من الخدمات السكنية والتجارية والطبية.",
  },
  {
    q: "أين يقع كمبوند تاج سيتي ومرحلة إيتاج بالتحديد؟",
    a: "يقع المشروع في أميز بقعة جغرافية في شرق القاهرة مباشرة على طريق السويس عند تقاطع الطريق الدائري ومحور الوفاء والأمل ومحور تحيا مصر، أمام فندق ماريوت ميراج سيتي ومطار القاهرة الدولي، على بعد 5 دقائق من مصر الجديدة ومدينة نصر و10 دقائق من التجمع الخامس.",
  },
  {
    q: "ما هي الوحدات المتوفرة في مرحلة إيتاج؟",
    a: "تتميز مرحلة إيتاج بتنوع استثنائي في خيارات السكن، حيث تضم استوديوهات فاخرة وشقق سكنية مكونة من غرفة وغرفتين و3 غرف نوم مع حدائق خاصة بالأدوار الأرضية وتراسات واسعة بالأدوار العلوية، ويمكنكم التواصل مع المبيعات لمعرفة المساحات المتوفرة بالتفصيل.",
  },
  {
    q: "ما هي ميزة الخصوصية والمخطط العام (Master Plan) في إيتاج؟",
    a: "تم تخطيط المرحلة بمسافات ارتداد واسعة بين المباني تتراوح بين 18.5 متر وتصل إلى 65.5 متر لضمان الخصوصية التامة والإطلالة المفتوحة على المساحات الخضراء والمسطحات المائية دون أي تجريح بين الوحدات.",
  },
  {
    q: "من هي الشركة المطورة لمشروع إيتاج تاج سيتي؟",
    a: "المطور هو شركة 'مدينة مصر' (Madinet Masr) - شركة مدينة نصر للإسكان والتعمير سابقاً - التي تأسست عام 1959 ولديها تاريخ يمتد لأكثر من 65 عاماً في قيادة التطوير العقاري المصري وتطوير أحياء ومجتمعات عمرانية متكاملة.",
  },
  {
    q: "كيف يمكنني معرفة الأسعار وأنظمة السداد أو حجز معاينة؟",
    a: "يمكنك التواصل الفوري مع قسم مبيعات إيتاج تاج سيتي مباشرة عبر الهاتف على الرقم 01115550966، أو إرسال رسالة واتساب، أو تسجيل بياناتك في النموذج بالصفحة وسيقوم مستشار عقاري بالتواصل معك خلال دقائق.",
  },
];

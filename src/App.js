import React, { useState, useEffect } from 'react';
import { Droplets, SprayCan, Wind, Target, Eye, Building } from 'lucide-react';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

// Import individual service pages
import WaterChemicalAnalysisPage from './pages/Services/WaterChemicalAnalysisPage';
import AntiscalantProjectionPage from './pages/Services/AntiscalantProjectionPage';
import PrecipitationTestPage from './pages/Services/PrecipitationTestPage';
import MembraneAutopsyPage from './pages/Services/MembraneAutopsyPage';
import CleaningTestsPage from './pages/Services/CleaningTestsPage';
import PlantInspectionPage from './pages/Services/PlantInspectionPage';

// --- DATA (English & Arabic) ---
const i18n = {
  en: {
    lang: 'en',
    dir: 'ltr',
    companyName: "Somicon",
    flag: "🇦🇪",
    navLinks: ["Home", "About Us", "Our Products", "Our Services", "Contact Us"],
    // --- HOME PAGE ---
    home: {
        hero: {
            title: "Pioneering Chemical Solutions for a Better Future",
            subtitle: "We trade in a diverse range of chemical raw materials, catering to various industries such as detergents, foodstuffs, and water treatment.",
            cta: "Explore Our Solutions",
        },
        clients: {
            title: "Trusted by Industry Leaders",
            logos: [
                "https://placehold.co/200x80/1f2937/ffffff?text=BASF",
                "https://placehold.co/200x80/1f2937/ffffff?text=DOW",
                "https://placehold.co/200x80/1f2937/ffffff?text=DUPONT",
                "https://placehold.co/200x80/1f2937/ffffff?text=AKZONOBEL",
                "https://placehold.co/200x80/1f2937/ffffff?text=EVONIK",
                "https://placehold.co/200x80/1f2937/ffffff?text=LANXESS",
                "https://placehold.co/200x80/1f2937/ffffff?text=SOLVAY",
                "https://placehold.co/200x80/1f2937/ffffff?text=CLARIANT",
                "https://placehold.co/200x80/1f2937/ffffff?text=HUNTSMAN",
                "https://placehold.co/200x80/1f2937/ffffff?text=WACKER"
            ]
        },
        ctaBanner: {
            title: "Ready to elevate your business?",
            subtitle: "Discover how our high-quality chemical solutions can drive your success.",
            cta: "Get In Touch"
        }
    },
    // --- ABOUT PAGE ---
    about: {
        title: "About Somicon",
        content1: "SOMICON is a leading company in the chemical industry, established in 1993 with a capital of 10 million Saudi riyals. As a limited liability company, we take pride in being a 100% Saudi-owned entity. With our headquarters located in the prestigious city of Al-Khobar, we have strategically expanded our presence with branches in Riyadh and Jeddah, ensuring comprehensive coverage across the Kingdom.",
        content2: "We continuously strive to innovate and adapt to the ever-evolving market demands, ensuring that we remain at the forefront of the chemical trading industry. Our team of experienced professionals is dedicated to providing tailored solutions that address the unique needs of each client, further solidifying our position as a trusted partner in their success.",
        stats: [ { value: "1993", label: "Established" }, { value: "10M+", label: "Capital (SAR)" }, { value: "3", label: "Branches" } ],
        missionVision: {
            title: "Our Guiding Principles",
            mission: { icon: Target, title: "Our Mission", description: "To supply high-quality and cost-effective chemical raw materials to our customers with a commitment to safety and reliability." },
            vision: { icon: Eye, title: "Our Vision", description: "To be the partner of choice for chemical raw materials in the region, driven by our customer-centric approach and commitment to excellence." }
        },
        chairmanMessage: {
            title: "Chairman's Message",
            name: "Mr. Abdulmuhsin Al-Ruwais",
            role: "Chairman",
            message: "Welcome to Somicon! Since our inception in 1993, we have been dedicated to fostering growth and innovation in the chemical industry. Our journey has been one of relentless commitment to our clients, providing them with not just products, but solutions that drive their success. We believe in building lasting partnerships based on trust, integrity, and a shared vision for a prosperous future. Our team is our greatest asset, and their dedication is the cornerstone of our success. We look forward to continuing to serve our community and stakeholders with the highest standards of excellence.",
            image: "https://placehold.co/400x400/f5f5f4/dc2626?text=Chairman" // Placeholder image
        }
    },
    // --- PRODUCTS PAGE ---
    products: {
        title: "Our Products",
        subtitle: "Delivering a comprehensive range of chemical raw materials for diverse industrial needs.",
        categories: [
            { 
                name: "Detergents", 
                description: "High-performance raw materials for industrial and household cleaning products.", 
                image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                items: ["Sulphonic Acid (LABSA)", "Caustic Soda Flakes/Pearls", "Soda Ash Light/Dense", "Sodium Sulphate Anhydrous", "SLES", "CDEA"]
            },
            { 
                name: "Water Treatment", 
                description: "Specialized chemicals for water purification and wastewater treatment.", 
                image: "https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                items: ["Caustic Soda", "Sodium Hypochlorite", "Hydrochloric Acid", "Ferric Chloride", "Sulphuric Acid", "Citric Acid"]
            },
            { 
                name: "Foodstuffs", 
                description: "A selection of food-grade additives compliant with the highest safety standards.", 
                image: "https://images.pexels.com/photos/4051571/pexels-photo-4051571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                items: ["Citric Acid Monohydrate/Anhydrous", "Phosphoric Acid", "Ascorbic Acid", "Sodium Bicarbonate", "Glycerine"]
            },
            { 
                name: "Other Industries", 
                description: "Versatile chemicals for textiles, paints, coatings, and more.", 
                image: "https://images.pexels.com/photos/5409749/pexels-photo-5409749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                items: ["Hydrogen Peroxide", "Acetic Acid", "Formic Acid", "Toluene", "Xylene", "Acetone"]
            }
        ]
    },
    // --- SERVICES PAGE ---
    services: {
        title: "Our Services",
        subtitle: "Beyond products, we provide value-added services to support our clients' operations.",
        learnMore: "Learn More",
        waterAnalysis: {
            title: "Water Chemical Analysis",
            description: "Accurate and comprehensive water analysis is crucial for designing an effective water treatment program. We provide detailed analysis of your water source to identify potential issues like scaling, corrosion, and biofouling."
        },
        antiscalant: {
            title: "Antiscalant Projection Program",
            description: "Our advanced projection software helps determine the optimal antiscalant dosage for your specific feed water chemistry and system parameters. This customized approach prevents scale formation and protects your membranes."
        },
        precipitationTest: {
            title: "Precipitation Test (SDI)",
            description: "The Silt Density Index (SDI) is a critical measure of the fouling potential of water on RO membranes. We conduct on-site or in-lab SDI testing to evaluate the effectiveness of your pre-treatment system."
        },
        membraneAutopsy: {
            title: "Membrane Autopsy",
            description: "When membranes fail, a detailed autopsy is the best way to determine the root cause. Our comprehensive membrane autopsies involve visual inspection, performance testing, and microscopic analysis."
        },
        cleaningTests: {
            title: "Cleaning Tests & Protocols",
            description: "Effective membrane cleaning is key to restoring performance and extending membrane life. We perform cleaning studies to identify the most effective cleaning chemicals and procedures for your specific foulants."
        },
        plantInspection: {
            title: "Plant Inspection & Troubleshooting",
            description: "Our experienced engineers provide on-site plant inspections and troubleshooting services. We assess overall plant performance, identify operational issues, and provide recommendations for improvement."
        },
        items: [
            { name: "Global Sourcing", description: "Leveraging our global network to source high-quality, cost-effective raw materials.", icon: Droplets },
            { name: "Technical Support", description: "Our expert team provides technical guidance and support for product application and formulation.", icon: SprayCan },
            { name: "Logistics & Distribution", description: "Efficient and reliable supply chain management to ensure timely delivery across the region.", icon: Wind },
        ]
    },
    // --- CONTACT PAGE ---
    contact: {
        title: "Get In Touch",
        subtitle: "We're here to help. Reach out to us for inquiries, quotes, or technical support.",
        form: { name: "Full Name", email: "Email Address", message: "Your Message", send: "Send Message" },
        info: {
            title: "Our Offices",
            branches: [
              {
                name: "Al-Khobar (Head Office)",
                icon: Building,
                address: "7553 King Fahd Road, Al-Ulaya, Al-Khobar 34447",
                phone: "+966 13 887 7225",
                email: "info@somiconme.com"
              },
              {
                name: "Riyadh Branch",
                icon: Building,
                address: "8121 At Turud, An Narjis, Riyadh 13323",
                phone: "+966 11 213 1333",
                email: "riyadh@somiconme.com"
              },
              {
                name: "Jeddah Branch",
                icon: Building,
                address: "3516 Sari Branch Rd, As Salamah, Jeddah 23525",
                phone: "+966 12 616 1488",
                email: "jeddah@somiconme.com"
              }
            ]
        }
    },
    // --- FOOTER ---
    footer: {
      rights: "All Rights Reserved."
    }
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    companyName: "سوميكون",
    flag: "🇦🇪",
    navLinks: ["الرئيسية", "من نحن", "منتجاتنا", "خدماتنا", "اتصل بنا"],
    home: {
        hero: {
            title: "حلول كيميائية رائدة لمستقبل أفضل",
            subtitle: "نتاجر في مجموعة متنوعة من المواد الخام الكيميائية، التي تلبي احتياجات مختلف الصناعات مثل المنظفات والمواد الغذائية ومعالجة المياه.",
            cta: "اكتشف حلولنا",
        },
        clients: { 
            title: "موثوق بنا من قبل رواد الصناعة",
            logos: [
                "https://placehold.co/200x80/1f2937/ffffff?text=BASF",
                "https://placehold.co/200x80/1f2937/ffffff?text=DOW",
                "https://placehold.co/200x80/1f2937/ffffff?text=DUPONT",
                "https://placehold.co/200x80/1f2937/ffffff?text=AKZONOBEL",
                "https://placehold.co/200x80/1f2937/ffffff?text=EVONIK",
                "https://placehold.co/200x80/1f2937/ffffff?text=LANXESS",
                "https://placehold.co/200x80/1f2937/ffffff?text=SOLVAY",
                "https://placehold.co/200x80/1f2937/ffffff?text=CLARIANT",
                "https://placehold.co/200x80/1f2937/ffffff?text=HUNTSMAN",
                "https://placehold.co/200x80/1f2937/ffffff?text=WACKER"
            ]
        },
        ctaBanner: {
            title: "هل أنت مستعد للارتقاء بعملك؟",
            subtitle: "اكتشف كيف يمكن لحلولنا الكيميائية عالية الجودة أن تقود نجاحك.",
            cta: "تواصل معنا"
        }
    },
    about: {
        title: "عن سوميكون",
        content1: "سوميكون هي شركة رائدة في الصناعة الكيميائية، تأسست عام 1993 برأس مال قدره 10 ملايين ريال سعودي. كشركة ذات مسؤولية محدودة، نفخر بكوننا كيانًا سعوديًا بنسبة 100%. يقع مقرنا الرئيسي في مدينة الخبر، وقمنا بتوسيع وجودنا بفروع في الرياض وجدة.",
        content2: "نسعى باستمرار للابتكار والتكيف مع متطلبات السوق المتطورة، مما يضمن بقاءنا في طليعة صناعة تجارة المواد الكيميائية. فريقنا من المحترفين ذوي الخبرة مكرس لتقديم حلول مخصصة تلبي الاحتياجات الفريدة لكل عميل.",
        stats: [ { value: "1993", label: "سنة التأسيس" }, { value: "10+ مليون", label: "رأس المال (ريال)" }, { value: "3", label: "فروع" } ],
        missionVision: {
            title: "مبادئنا التوجيهية",
            mission: { icon: Target, title: "رسالتنا", description: "توفير مواد خام كيميائية عالية الجودة وفعالة من حيث التكلفة لعملائنا مع الالتزام بالسلامة والموثوقية." },
            vision: { icon: Eye, title: "رؤيتنا", description: "أن نكون الشريك المفضل للمواد الخام الكيميائية في المنطقة، مدفوعين بنهجنا المرتكز على العملاء والتزامنا بالتميز." }
        },
        chairmanMessage: {
            title: "رسالة رئيس مجلس الإدارة",
            name: "عبدالمحسن الرويس",
            role: "رئيس مجلس الإدارة",
            message: "أهلاً بكم في سوميكون! منذ تأسيسنا في عام 1993، كرسنا جهودنا لتعزيز النمو والابتكار في الصناعة الكيميائية. كانت رحلتنا رحلة التزام لا هوادة فيه تجاه عملائنا، حيث نقدم لهم ليس فقط المنتجات، بل الحلول التي تدفع نجاحهم. نؤمن ببناء شراكات دائمة قائمة على الثقة والنزاهة ورؤية مشتركة لمستقبل مزدهر. فريقنا هو أعظم أصولنا، وتفانيهم هو حجر الزاوية في نجاحنا. نتطلع إلى مواصلة خدمة مجتمعنا وأصحاب المصلحة بأعلى معايير التميز.",
            image: "https://placehold.co/400x400/f5f5f4/dc2626?text=Chairman"
        }
    },
    products: {
        title: "منتجاتنا",
        subtitle: "نقدم مجموعة شاملة من المواد الخام الكيميائية لتلبية الاحتياجات الصناعية المتنوعة.",
        categories: [
            { name: "المنظفات", description: "مواد خام عالية الأداء لمنتجات التنظيف الصناعية والمنزلية.", image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: ["حمض السلفونيك (LABSA)", "صودا كاوية قشور/لؤلؤ", "رماد الصودا خفيف/كثيف", "كبريتات الصوديوم اللامائية", "SLES", "CDEA"] },
            { name: "معالجة المياه", description: "كيماويات متخصصة لتنقية المياه ومعالجة مياه الصرف الصحي.", image: "https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: ["صودا كاوية", "هيبوكلوريت الصوديوم", "حمض الهيدروكلوريك", "كلوريد الحديديك", "حمض الكبريتيك", "حمض الستريك"] },
            { name: "المواد الغذائية", description: "مجموعة مختارة من المضافات الغذائية المتوافقة مع أعلى معايير السلامة.", image: "https://images.pexels.com/photos/4051571/pexels-photo-4051571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: ["حمض الستريك أحادي/لا مائي", "حمض الفوسفوريك", "حمض الأسكوربيك", "بيكربونات الصوديوم", "الجلسرين"] },
            { name: "صناعات أخرى", description: "كيماويات متعددة الاستخدامات للمنسوجات والدهانات والطلاء.", image: "https://images.pexels.com/photos/5409749/pexels-photo-5409749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", items: ["بيروكسيد الهيدروجين", "حمض الخليك", "حمض الفورميك", "تولوين", "زيلين", "أسيتون"] }
        ]
    },
    services: {
        title: "خدماتنا",
        subtitle: "بالإضافة إلى المنتجات، نقدم خدمات ذات قيمة مضافة لدعم عمليات عملائنا.",
        learnMore: "اعرف المزيد",
        waterAnalysis: {
            title: "تحليل المياه الكيميائي",
            description: "يعد التحليل الدقيق والشامل للمياه أمرًا بالغ الأهمية لتصميم برنامج معالجة مياه فعال. نقدم تحليلاً مفصلاً لمصدر المياه الخاص بك لتحديد المشكلات المحتملة مثل الترسيب والتآكل والتلوث البيولوجي."
        },
        antiscalant: {
            title: "برنامج إسقاط المواد المضادة للترسيب",
            description: "يساعد برنامج الإسقاط المتقدم لدينا في تحديد الجرعة المثلى للمواد المضادة للترسيب لكيمياء مياه التغذية ومعاملات النظام المحددة. هذا النهج المخصص يمنع تكوين الترسبات ويحمي الأغشية."
        },
        precipitationTest: {
            title: "اختبار الترسيب (مؤشر كثافة الطمي)",
            description: "مؤشر كثافة الطمي (SDI) هو مقياس حرج لإمكانية تلوث المياه على أغشية التناضح العكسي. نقوم بإجراء اختبارات SDI في الموقع أو في المختبر لتقييم فعالية نظام المعالجة المسبقة."
        },
        membraneAutopsy: {
            title: "تشريح الأغشية",
            description: "عندما تفشل الأغشية، فإن التشريح المفصل هو أفضل طريقة لتحديد السبب الجذري. تشمل تشريحات الأغشية الشاملة لدينا الفحص البصري واختبار الأداء والتحليل المجهري."
        },
        cleaningTests: {
            title: "اختبارات التنظيف والبروتوكولات",
            description: "التنظيف الفعال للأغشية هو مفتاح استعادة الأداء وإطالة عمر الغشاء. نقوم بإجراء دراسات التنظيف لتحديد أكثر المواد الكيميائية وإجراءات التنظيف فعالية للملوثات المحددة."
        },
        plantInspection: {
            title: "فحص المصنع واستكشاف الأخطاء",
            description: "يوفر مهندسونا ذوو الخبرة خدمات فحص المصنع واستكشاف الأخطاء في الموقع. نقوم بتقييم الأداء العام للمصنع وتحديد المشكلات التشغيلية وتقديم التوصيات للتحسين."
        },
        items: [
            { name: "التوريد العالمي", description: "الاستفادة من شبكتنا العالمية لتوريد مواد خام عالية الجودة وفعالة من حيث التكلفة.", icon: Droplets },
            { name: "الدعم الفني", description: "يقدم فريق الخبراء لدينا التوجيه الفني والدعم لتطبيق المنتج وتركيبه.", icon: SprayCan },
            { name: "الخدمات اللوجستية والتوزيع", description: "إدارة سلسلة توريد فعالة وموثوقة لضمان التسليم في الوقت المناسب.", icon: Wind },
        ]
    },
    contact: {
        title: "تواصل معنا",
        subtitle: "نحن هنا للمساعدة. تواصل معنا للاستفسارات أو عروض الأسعار أو الدعم الفني.",
        form: { name: "الاسم الكامل", email: "البريد الإلكتروني", message: "رسالتك", send: "إرسال الرسالة" },
        info: {
          title: "مكاتبنا",
          branches: [
            { name: "الخبر (المكتب الرئيسي)", icon: Building, address: "7553 طريق الملك فهد، العليا، الخبر 34447", phone: "+966 13 887 7225", email: "info@somiconme.com" },
            { name: "فرع الرياض", icon: Building, address: "8121 الطرود، النرجس، الرياض 13323", phone: "+966 11 213 1333", email: "riyadh@somiconme.com" },
            { name: "فرع جدة", icon: Building, address: "3516 طريق صاري الفرعي، السلامة، جدة 23525", phone: "+966 12 616 1488", email: "jeddah@somiconme.com" }
          ]
        }
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    }
  }
};

// --- SERVICE PAGE TRANSLATIONS ---
const servicePagesData = {
  WaterChemicalAnalysis: {
    en: {
      backToServices: "Back to Services",
      title: "Water Chemical Analysis",
      subtitle: "Comprehensive water analysis for optimal treatment design",
      sectionTitle: "Accurate and Comprehensive Water Analysis",
      sectionDesc1: "Accurate and comprehensive water analysis is crucial for designing an effective water treatment program. We provide detailed analysis of your water source to identify potential issues like scaling, corrosion, and biofouling.",
      sectionDesc2: "Our state-of-the-art laboratory is equipped to perform a wide range of tests, providing you with the data needed to make informed decisions about your water treatment strategy.",
      imageAlt: "Chemical laboratory water analysis",
      whatWeAnalyzeTitle: "What We Analyze",
      whatWeAnalyzeList: [
        "pH and conductivity measurements",
        "Total dissolved solids (TDS)",
        "Hardness and alkalinity",
        "Chloride, sulfate, and nitrate levels",
        "Heavy metals and trace elements",
        "Organic compounds and contaminants"
      ],
      benefitsTitle: "Benefits",
      benefitsList: [
        "Identify scaling potential",
        "Detect corrosion risks",
        "Assess biofouling potential",
        "Optimize treatment chemicals",
        "Ensure regulatory compliance",
        "Prevent system failures"
      ],
      ctaTitle: "Ready to Get Started?",
      ctaDesc: "Contact us to schedule your water analysis and receive a comprehensive report with recommendations.",
      ctaButton: "Contact Us"
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "تحليل المياه الكيميائي",
      subtitle: "تحليل شامل للمياه لتصميم معالجة مثالية",
      sectionTitle: "تحليل دقيق وشامل للمياه",
      sectionDesc1: "يعد التحليل الدقيق والشامل للمياه أمرًا بالغ الأهمية لتصميم برنامج معالجة مياه فعال. نقدم تحليلاً مفصلاً لمصدر المياه الخاص بك لتحديد المشكلات المحتملة مثل الترسيب والتآكل والتلوث البيولوجي.",
      sectionDesc2: "مختبرنا المجهز بأحدث التقنيات قادر على إجراء مجموعة واسعة من الاختبارات، مما يوفر لك البيانات اللازمة لاتخاذ قرارات مستنيرة بشأن استراتيجية معالجة المياه الخاصة بك.",
      imageAlt: "تحليل المياه في مختبر كيميائي",
      whatWeAnalyzeTitle: "ما الذي نقوم بتحليله",
      whatWeAnalyzeList: [
        "قياسات الرقم الهيدروجيني والتوصيلية",
        "إجمالي المواد الصلبة الذائبة (TDS)",
        "الصلابة والقلوية",
        "مستويات الكلوريد والكبريتات والنترات",
        "المعادن الثقيلة والعناصر النزرة",
        "المركبات العضوية والملوثات"
      ],
      benefitsTitle: "الفوائد",
      benefitsList: [
        "تحديد احتمالية الترسيب",
        "كشف مخاطر التآكل",
        "تقييم احتمالية التلوث البيولوجي",
        "تحسين المواد الكيميائية للمعالجة",
        "ضمان الامتثال التنظيمي",
        "منع فشل النظام"
      ],
      ctaTitle: "جاهز للبدء؟",
      ctaDesc: "تواصل معنا لجدولة تحليل المياه الخاص بك والحصول على تقرير شامل مع التوصيات.",
      ctaButton: "اتصل بنا"
    }
  },
  AntiscalantProjection: {
    en: {
      backToServices: "Back to Services",
      title: "Antiscalant Projection Program",
      subtitle: "Advanced software to determine optimal antiscalant dosage",
      sectionTitle: "Optimize Your Antiscalant Dosage",
      sectionDesc1: "Our advanced projection software helps determine the optimal antiscalant dosage for your specific feed water chemistry and system parameters. This customized approach prevents scale formation and protects your membranes.",
      sectionDesc2: "Fill out the form with your system details and we'll provide you with a comprehensive antiscalant projection report.",
      imageAlt: "Industrial chemical dosing system",
      formTitle: "Antiscalant Projection Form",
      formSubtitle: "Please provide your system details for accurate projection",
      personalInfoTitle: "Personal Information",
      technicalParamsTitle: "Technical Parameters",
      rawWaterTitle: "Raw Water (mg/L)",
      chemicalsDosingTitle: "Chemicals Dosing",
      submitButton: "Submit Projection Request",
      name: "Name *",
      email: "Email Address *",
      projectName: "Project Name *",
      companyName: "Company Name *",
      mobileNumber: "Mobile Number *",
      projectSite: "Project Site *",
      desalinationMethod: "Desalination Method *",
      mechanicalCleaning: "Mechanical Cleaning *",
      waterType: "Water Type *",
      naclRejection: "NaCl Rejection (%) *",
      ph: "pH *",
      temperature: "Temperature (°C) *",
      feedFlow: "Feed Flow (m³/h) *",
      recovery: "Recovery (%) *",
      naPlus: "Na⁺",
      kPlus: "K⁺",
      caPlusPlus: "Ca⁺⁺",
      mgPlusPlus: "Mg⁺⁺",
      srPlusPlus: "Sr⁺⁺",
      baPlusPlus: "Ba⁺⁺",
      fePlusPlus: "Fe⁺⁺/Fe⁺⁺⁺",
      mnPlusPlus: "Mn⁺⁺",
      clMinus: "Cl⁻",
      so4MinusMinus: "SO₄⁻⁻",
      hco3Minus: "HCO₃⁻",
      co3MinusMinus: "CO₃⁻⁻",
      no3Minus: "NO₃⁻",
      po4MinusMinus: "PO₄⁻⁻",
      fMinus: "F⁻",
      dosingTank: "Dosing Tank",
      pumpCapacity: "Pump Capacity",
      pulseRate: "Pulse Rate",
      acidAlkali: "Acid/Alkali",
      concentration: "Concentration",
      density: "Density",
      dose: "Dose",
      dosingPump: "Dosing Pump",
      // Dropdown options
      selectMethod: "Select Method",
      selectOption: "Select Option",
      selectWaterType: "Select Water Type",
      selectChemical: "Select Chemical",
      // Method options
      ro: "RO",
      nf: "NF",
      msf: "MSF",
      med: "MED",
      mvc: "MVC",
      // Water type options
      seaWater: "Sea water",
      brackishWater: "Brackish Water",
      roReject: "RO Reject",
      wasteWater: "Waste Water",
      // Chemical options
      h2so4: "H₂SO₄",
      naoh: "NaOH",
      hcl: "HCl",
      koh: "KOH",
      // Placeholder text
      "e.g.": "e.g."
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "برنامج إسقاط المواد المضادة للترسيب",
      subtitle: "برنامج متقدم لتحديد الجرعة المثلى للمواد المضادة للترسيب",
      sectionTitle: "حسن جرعة المواد المضادة للترسيب",
      sectionDesc1: "يساعد برنامج الإسقاط المتقدم لدينا في تحديد الجرعة المثلى للمواد المضادة للترسيب لكيمياء مياه التغذية ومعاملات النظام المحددة. هذا النهج المخصص يمنع تكوين الترسبات ويحمي الأغشية.",
      sectionDesc2: "املأ النموذج بتفاصيل نظامك وسنقدم لك تقرير إسقاط شامل للمواد المضادة للترسيب.",
      imageAlt: "نظام الجرعات الكيميائية الصناعية",
      formTitle: "نموذج إسقاط المواد المضادة للترسيب",
      formSubtitle: "يرجى تقديم تفاصيل نظامك للحصول على إسقاط دقيق",
      personalInfoTitle: "المعلومات الشخصية",
      technicalParamsTitle: "المعاملات التقنية",
      rawWaterTitle: "المياه الخام (ملجم/لتر)",
      chemicalsDosingTitle: "جرعات المواد الكيميائية",
      submitButton: "إرسال طلب الإسقاط",
      name: "الاسم *",
      email: "البريد الإلكتروني *",
      projectName: "اسم المشروع *",
      companyName: "اسم الشركة *",
      mobileNumber: "رقم الجوال *",
      projectSite: "موقع المشروع *",
      desalinationMethod: "طريقة التحلية *",
      mechanicalCleaning: "التنظيف الميكانيكي *",
      waterType: "نوع المياه *",
      naclRejection: "رفض كلوريد الصوديوم (%) *",
      ph: "الرقم الهيدروجيني *",
      temperature: "درجة الحرارة (°م) *",
      feedFlow: "تدفق التغذية (م³/ساعة) *",
      recovery: "الاسترداد (%) *",
      naPlus: "Na⁺",
      kPlus: "K⁺",
      caPlusPlus: "Ca⁺⁺",
      mgPlusPlus: "Mg⁺⁺",
      srPlusPlus: "Sr⁺⁺",
      baPlusPlus: "Ba⁺⁺",
      fePlusPlus: "Fe⁺⁺/Fe⁺⁺⁺",
      mnPlusPlus: "Mn⁺⁺",
      clMinus: "Cl⁻",
      so4MinusMinus: "SO₄⁻⁻",
      hco3Minus: "HCO₃⁻",
      co3MinusMinus: "CO₃⁻⁻",
      no3Minus: "NO₃⁻",
      po4MinusMinus: "PO₄⁻⁻",
      fMinus: "F⁻",
      dosingTank: "خزان الجرعات",
      pumpCapacity: "سعة المضخة",
      pulseRate: "معدل النبض",
      acidAlkali: "حمض/قلوي",
      concentration: "التركيز",
      density: "الكثافة",
      dose: "الجرعة",
      dosingPump: "مضخة الجرعات",
      // Dropdown options
      selectMethod: "اختر الطريقة",
      selectOption: "اختر الخيار",
      selectWaterType: "اختر نوع المياه",
      selectChemical: "اختر المادة الكيميائية",
      // Method options
      ro: "RO",
      nf: "NF",
      msf: "MSF",
      med: "MED",
      mvc: "MVC",
      // Water type options
      seaWater: "مياه البحر",
      brackishWater: "المياه المالحة",
      roReject: "رفض التناضح العكسي",
      wasteWater: "مياه الصرف الصحي",
      // Chemical options
      h2so4: "H₂SO₄",
      naoh: "NaOH",
      hcl: "HCl",
      koh: "KOH",
      // Placeholder text
      "e.g.": "مثال:"
    }
  },
  PrecipitationTest: {
    en: {
      backToServices: "Back to Services",
      title: "Precipitation Test (Silt Density Index)",
      subtitle: "Critical measurement for membrane fouling potential",
      sectionTitle: "Silt Density Index (SDI) Testing",
      sectionDesc1: "The Silt Density Index (SDI) is a critical measure of the fouling potential of water on RO membranes. We conduct on-site or in-lab SDI testing to evaluate the effectiveness of your pre-treatment system and to predict and prevent membrane fouling.",
      sectionDesc2: "This testing ensures the longevity and performance of your RO plant by identifying potential fouling issues before they become problems.",
      imageAlt: "Industrial SDI filtration test",
      whatIsSDITitle: "What is SDI?",
      whatIsSDIDesc: "SDI is a measure of the fouling potential of water, specifically the amount of suspended solids that can clog membrane pores. It's calculated by measuring the time it takes to filter a specific volume of water through a 0.45-micron filter.",
      sdiLevels: [
        "SDI < 3: Excellent water quality",
        "SDI 3-5: Good water quality",
        "SDI > 5: Requires pretreatment"
      ],
      testingProcessTitle: "Testing Process",
      testingProcessSteps: [
        "Collect representative water sample",
        "Measure initial filtration time",
        "Continue filtration for 15 minutes",
        "Measure final filtration time",
        "Calculate SDI value"
      ],
      ctaTitle: "Schedule Your SDI Test",
      ctaDesc: "Contact us to schedule on-site or in-lab SDI testing for your facility.",
      ctaButton: "Contact Us"
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "اختبار الترسيب (مؤشر كثافة الطمي)",
      subtitle: "قياس حرج لإمكانية تلوث الأغشية",
      sectionTitle: "اختبار مؤشر كثافة الطمي (SDI)",
      sectionDesc1: "مؤشر كثافة الطمي (SDI) هو مقياس حرج لإمكانية تلوث المياه على أغشية التناضح العكسي. نقوم بإجراء اختبارات SDI في الموقع أو في المختبر لتقييم فعالية نظام المعالجة المسبقة والتنبؤ بمنع تلوث الأغشية.",
      sectionDesc2: "يضمن هذا الاختبار طول العمر وأداء محطة التناضح العكسي الخاصة بك من خلال تحديد مشاكل التلوث المحتملة قبل أن تصبح مشاكل.",
      imageAlt: "اختبار ترشيح SDI الصناعي",
      whatIsSDITitle: "ما هو SDI؟",
      whatIsSDIDesc: "SDI هو مقياس لإمكانية تلوث المياه، وتحديداً كمية المواد الصلبة العالقة التي يمكن أن تسد مسام الأغشية. يتم حسابه بقياس الوقت المستغرق لترشيح حجم محدد من المياه من خلال مرشح 0.45 ميكرون.",
      sdiLevels: [
        "SDI < 3: جودة مياه ممتازة",
        "SDI 3-5: جودة مياه جيدة",
        "SDI > 5: يتطلب معالجة مسبقة"
      ],
      testingProcessTitle: "عملية الاختبار",
      testingProcessSteps: [
        "جمع عينة مياه ممثلة",
        "قياس وقت الترشيح الأولي",
        "استمرار الترشيح لمدة 15 دقيقة",
        "قياس وقت الترشيح النهائي",
        "حساب قيمة SDI"
      ],
      ctaTitle: "جدولة اختبار SDI الخاص بك",
      ctaDesc: "تواصل معنا لجدولة اختبارات SDI في الموقع أو في المختبر لمنشأتك.",
      ctaButton: "اتصل بنا"
    }
  },
  MembraneAutopsy: {
    en: {
      backToServices: "Back to Services",
      title: "Membrane Autopsy",
      subtitle: "Comprehensive analysis to determine membrane failure causes",
      sectionTitle: "Detailed Membrane Failure Analysis",
      sectionDesc1: "When membranes fail, a detailed autopsy is the best way to determine the root cause. Our comprehensive membrane autopsies involve visual inspection, performance testing, and microscopic analysis to identify foulants, scaling, or physical damage.",
      sectionDesc2: "This information is vital for troubleshooting and preventing future failures in your RO system.",
      imageAlt: "Membrane inspection in chemical plant",
      autopsyProcessTitle: "Autopsy Process",
      autopsyProcessSteps: [
        "Visual inspection of membrane elements",
        "Performance testing and data analysis",
        "Microscopic examination of foulants",
        "Chemical analysis of deposits",
        "Comprehensive failure report"
      ],
      failureTypesTitle: "Common Failure Types",
      failureTypes: [
        "Scaling (mineral deposits)",
        "Biofouling (microbial growth)",
        "Colloidal fouling",
        "Physical damage",
        "Chemical degradation"
      ],
      ctaTitle: "Schedule Membrane Autopsy",
      ctaDesc: "Contact us to schedule a comprehensive membrane autopsy for your failed elements.",
      ctaButton: "Contact Us"
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "تشريح الأغشية",
      subtitle: "تحليل شامل لتحديد أسباب فشل الأغشية",
      sectionTitle: "تحليل مفصل لفشل الأغشية",
      sectionDesc1: "عندما تفشل الأغشية، فإن التشريح المفصل هو أفضل طريقة لتحديد السبب الجذري. تشمل تشريحات الأغشية الشاملة لدينا الفحص البصري واختبار الأداء والتحليل المجهري لتحديد الملوثات أو الترسبات أو الأضرار المادية.",
      sectionDesc2: "هذه المعلومات حيوية لاستكشاف الأخطاء وإصلاحها ومنع الفشل المستقبلي في نظام التناضح العكسي الخاص بك.",
      imageAlt: "فحص الأغشية في مصنع كيميائي",
      autopsyProcessTitle: "عملية التشريح",
      autopsyProcessSteps: [
        "الفحص البصري لعناصر الأغشية",
        "اختبار الأداء وتحليل البيانات",
        "الفحص المجهري للملوثات",
        "التحليل الكيميائي للترسبات",
        "تقرير فشل شامل"
      ],
      failureTypesTitle: "أنواع الفشل الشائعة",
      failureTypes: [
        "الترسيب (ترسبات معدنية)",
        "التلوث البيولوجي (نمو ميكروبي)",
        "التلوث الغرواني",
        "الأضرار المادية",
        "التدهور الكيميائي"
      ],
      ctaTitle: "جدولة تشريح الأغشية",
      ctaDesc: "تواصل معنا لجدولة تشريح شامل للأغشية للعناصر الفاشلة.",
      ctaButton: "اتصل بنا"
    }
  },
  CleaningTests: {
    en: {
      backToServices: "Back to Services",
      title: "Cleaning Tests & Protocols",
      subtitle: "Optimized cleaning procedures for maximum membrane performance",
      sectionTitle: "Effective Membrane Cleaning Solutions",
      sectionDesc1: "Effective membrane cleaning is key to restoring performance and extending membrane life. We perform cleaning studies to identify the most effective cleaning chemicals and procedures for your specific foulants.",
      sectionDesc2: "Based on these tests, we develop customized cleaning protocols to ensure your CIP (Clean-In-Place) procedures are both efficient and effective.",
      imageAlt: "Chemical cleaning in plant",
      cleaningProcessTitle: "Cleaning Process",
      cleaningProcessSteps: [
        "Analyze foulant type and composition",
        "Select appropriate cleaning chemicals",
        "Determine optimal cleaning conditions",
        "Test cleaning effectiveness",
        "Develop customized protocol"
      ],
      cleaningSolutionsTitle: "Cleaning Solutions",
      cleaningSolutions: [
        "Acid cleaners for scaling",
        "Alkaline cleaners for organics",
        "Biocides for biofouling",
        "Surfactants for colloidal fouling",
        "Specialty formulations"
      ],
      ctaTitle: "Optimize Your Cleaning Protocol",
      ctaDesc: "Contact us to develop a customized cleaning protocol for your specific foulants and system.",
      ctaButton: "Contact Us"
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "اختبارات التنظيف والبروتوكولات",
      subtitle: "إجراءات تنظيف محسنة لأقصى أداء للأغشية",
      sectionTitle: "حلول تنظيف الأغشية الفعالة",
      sectionDesc1: "التنظيف الفعال للأغشية هو مفتاح استعادة الأداء وإطالة عمر الغشاء. نقوم بإجراء دراسات التنظيف لتحديد أكثر المواد الكيميائية وإجراءات التنظيف فعالية للملوثات المحددة.",
      sectionDesc2: "بناءً على هذه الاختبارات، نطور بروتوكولات تنظيف مخصصة لضمان أن إجراءات CIP (التنظيف في المكان) الخاصة بك فعالة ومفيدة.",
      imageAlt: "التنظيف الكيميائي في المصنع",
      cleaningProcessTitle: "عملية التنظيف",
      cleaningProcessSteps: [
        "تحليل نوع وتركيب الملوثات",
        "اختيار المواد الكيميائية المناسبة للتنظيف",
        "تحديد ظروف التنظيف المثلى",
        "اختبار فعالية التنظيف",
        "تطوير بروتوكول مخصص"
      ],
      cleaningSolutionsTitle: "حلول التنظيف",
      cleaningSolutions: [
        "منظفات حمضية للترسيب",
        "منظفات قلوية للمواد العضوية",
        "مبيدات حيوية للتلوث البيولوجي",
        "المواد الخافضة للتوتر السطحي للتلوث الغرواني",
        "تركيبات متخصصة"
      ],
      ctaTitle: "حسن بروتوكول التنظيف الخاص بك",
      ctaDesc: "تواصل معنا لتطوير بروتوكول تنظيف مخصص للملوثات والنظام المحدد.",
      ctaButton: "اتصل بنا"
    }
  },
  PlantInspection: {
    en: {
      backToServices: "Back to Services",
      title: "Plant Inspection & Troubleshooting",
      subtitle: "Expert on-site assessment and problem resolution",
      sectionTitle: "Professional Plant Assessment Services",
      sectionDesc1: "Our experienced engineers provide on-site plant inspections and troubleshooting services. We assess overall plant performance, identify operational issues, and provide recommendations for improvement.",
      sectionDesc2: "With our comprehensive approach, we help optimize your water treatment plant's efficiency and ensure reliable operation.",
      imageAlt: "Chemical plant inspection",
      inspectionAreasTitle: "Inspection Areas",
      inspectionAreas: [
        "Pre-treatment system performance",
        "RO membrane condition and efficiency",
        "Chemical dosing systems",
        "Instrumentation and controls",
        "Water quality parameters"
      ],
      benefitsTitle: "Benefits",
      benefits: [
        "Identify performance bottlenecks",
        "Prevent costly breakdowns",
        "Optimize operational efficiency",
        "Extend equipment lifespan",
        "Ensure regulatory compliance"
      ],
      ctaTitle: "Schedule Plant Inspection",
      ctaDesc: "Contact us to schedule a comprehensive plant inspection and receive detailed recommendations.",
      ctaButton: "Contact Us"
    },
    ar: {
      backToServices: "العودة إلى الخدمات",
      title: "فحص المصنع واستكشاف الأخطاء",
      subtitle: "تقييم خبير في الموقع وحل المشاكل",
      sectionTitle: "خدمات تقييم المصنع الاحترافية",
      sectionDesc1: "يوفر مهندسونا ذوو الخبرة خدمات فحص المصنع واستكشاف الأخطاء في الموقع. نقوم بتقييم الأداء العام للمصنع وتحديد المشكلات التشغيلية وتقديم التوصيات للتحسين.",
      sectionDesc2: "بنهجنا الشامل، نساعد في تحسين كفاءة محطة معالجة المياه الخاصة بك وضمان التشغيل الموثوق.",
      imageAlt: "فحص المصنع الكيميائي",
      inspectionAreasTitle: "مناطق الفحص",
      inspectionAreas: [
        "أداء نظام المعالجة المسبقة",
        "حالة وكفاءة أغشية التناضح العكسي",
        "أنظمة الجرعات الكيميائية",
        "الأجهزة والتحكم",
        "معاملات جودة المياه"
      ],
      benefitsTitle: "الفوائد",
      benefits: [
        "تحديد نقاط الاختناق في الأداء",
        "منع الأعطال المكلفة",
        "تحسين الكفاءة التشغيلية",
        "إطالة عمر المعدات",
        "ضمان الامتثال التنظيمي"
      ],
      ctaTitle: "جدولة فحص المصنع",
      ctaDesc: "تواصل معنا لجدولة فحص شامل للمصنع والحصول على توصيات مفصلة.",
      ctaButton: "اتصل بنا"
    }
  }
};

// --- Main App Component ---
export default function App() {
  const [activePageIndex, setActivePageIndex] = useState(0); // Use index instead of page name
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('somicon-theme');
    return savedTheme || 'light';
  });
  const [language, setLanguage] = useState(() => {
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('somicon-language');
    return savedLanguage || 'en';
  });

  const data = i18n[language];
  const activePage = data.navLinks[activePageIndex]; // Get current page name from index

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Keep navbar transparent until we scroll past the hero section + clients section
          // Hero section is 100vh, clients section is about 20vh, so we use 120vh as threshold
          const heroEndPosition = window.innerHeight * 1.2; // 120vh
          setIsScrolled(window.scrollY > heroEndPosition);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Apply language to document
    document.documentElement.lang = language;
    document.documentElement.dir = data.dir;
    
    // Save preferences to localStorage
    localStorage.setItem('somicon-theme', theme);
    localStorage.setItem('somicon-language', language);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [language, data.dir, theme]);

  // Separate effect for page navigation - scroll to top only when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePageIndex]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };
  
  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'en' ? 'ar' : 'en';
      return newLang;
    });
  };
  
  const handleNavClick = (pageIndex) => {
    setActivePageIndex(pageIndex);
    setIsMenuOpen(false);
  }

  const renderPage = () => {
    switch (activePageIndex) {
      case 0:
        return <HomePage data={data} handleNavClick={handleNavClick} />;
      case 1:
        return <AboutPage data={data.about} />;
      case 2:
        return <ProductsPage data={data.products} />;
      case 3:
        return <ServicesPage handleNavClick={handleNavClick} data={data.services} dir={data.dir} />;
      case 4:
        return <ContactPage data={data.contact} />;
      case 5:
        return <WaterChemicalAnalysisPage handleNavClick={handleNavClick} data={servicePagesData.WaterChemicalAnalysis[language]} dir={data.dir} />;
      case 6:
        return <AntiscalantProjectionPage handleNavClick={handleNavClick} data={servicePagesData.AntiscalantProjection[language]} dir={data.dir} />;
      case 7:
        return <PrecipitationTestPage handleNavClick={handleNavClick} data={servicePagesData.PrecipitationTest[language]} dir={data.dir} />;
      case 8:
        return <MembraneAutopsyPage handleNavClick={handleNavClick} data={servicePagesData.MembraneAutopsy[language]} dir={data.dir} />;
      case 9:
        return <CleaningTestsPage handleNavClick={handleNavClick} data={servicePagesData.CleaningTests[language]} dir={data.dir} />;
      case 10:
        return <PlantInspectionPage handleNavClick={handleNavClick} data={servicePagesData.PlantInspection[language]} dir={data.dir} />;
      default:
        return <HomePage data={data} handleNavClick={handleNavClick} />;
    }
  };

  return (
    <div className={`${theme} ${language === 'ar' ? 'font-arabic' : 'font-sans'} antialiased`}>
      <div className="bg-white dark:bg-stone-950 text-gray-800 dark:text-stone-200 transition-colors duration-500 min-h-screen">
        <Header 
          isScrolled={isScrolled}
          data={data}
          activePage={activePage}
          activePageIndex={activePageIndex}
          handleNavClick={handleNavClick}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
          theme={theme}
        />
        <main className="relative">{renderPage()}</main>
        <Footer data={{...data.footer, companyName: data.companyName, contact: data.contact.info, subtitle: data.home.hero.subtitle}} />
      </div>
    </div>
  );
}
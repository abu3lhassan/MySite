const PROFILE = {
  name: "Ali Hussain Alhanabi",
  nameAr: "علي حسين الحنابي",
  title: "IT Manager | Head of Technology",
  titleAr: "مدير تقنية المعلومات | رئيس التقنية",
  location: "Khobar, Saudi Arabia",
  locationAr: "الخبر، المملكة العربية السعودية",
  email: "ali@alhanabi.com",
  phone: "+966578535751",
  domain: "www.alhanabi.com",
  profilePhoto: "assets/profile.jpg",
  availability: "Open to strategic technology leadership, consulting, and digital transformation opportunities.",
  availabilityAr: "متاح لفرص القيادة التقنية، الاستشارات، والتحول الرقمي.",
  social: {
    linkedin: "https://www.linkedin.com/in/ali-al-hanabi-09a138151/",
    x: "https://x.com/alihalhanabi",
    whatsapp: "https://wa.me/966578535751",
    email: "mailto:ali@alhanabi.com"
  },
  metrics: [
    { value: "IT", label: "Leadership", labelAr: "قيادة تقنية" },
    { value: "Ops", label: "Multi-site Operations", labelAr: "تشغيل متعدد المواقع" },
    { value: "AI", label: "Decision Systems", labelAr: "أنظمة دعم القرار" },
    { value: "Cloud", label: "Infrastructure", labelAr: "بنية تحتية" }
  ],
  strengths: [
    { title: "IT Strategy", titleAr: "استراتيجية تقنية المعلومات", text: "Translate business goals into practical technology roadmaps, systems, and measurable operating improvements.", textAr: "تحويل أهداف العمل إلى خارطة طريق تقنية وأنظمة عملية وتحسينات تشغيلية قابلة للقياس." },
    { title: "Operations Technology", titleAr: "تقنية التشغيل", text: "Experience across fuel-station technology, CCTV, automation, support, systems administration, and daily IT operations.", textAr: "خبرة في تقنية محطات الوقود، المراقبة، الأتمتة، الدعم الفني، إدارة الأنظمة، وتشغيل التقنية اليومي." },
    { title: "Digital Products", titleAr: "المنتجات الرقمية", text: "Build business dashboards, data-driven tools, admin systems, and user-friendly web or mobile interfaces.", textAr: "بناء لوحات تحكم وأدوات مبنية على البيانات وأنظمة إدارية وواجهات ويب وموبايل سهلة الاستخدام." },
    { title: "Cybersecurity & Reliability", titleAr: "الأمن السيبراني والاعتمادية", text: "Focus on stable infrastructure, controlled access, backup readiness, and practical security governance.", textAr: "التركيز على استقرار البنية التحتية، التحكم بالوصول، الجاهزية للنسخ الاحتياطي، وحوكمة أمنية عملية." }
  ],
  projects: [
    {
      name: "Fuel Command Center Pro",
      tag: "AI Operations Platform",
      tagAr: "منصة تشغيل ذكية",
      summary: "A fuel-station intelligence system for sales forecasting, stock monitoring, risk visibility, and executive decision support.",
      summaryAr: "نظام ذكي لمحطات الوقود لتوقع المبيعات، مراقبة المخزون، كشف المخاطر، ودعم القرار التنفيذي.",
      impact: "Built as a practical command center for operational clarity, forecasting, and future API/database expansion.",
      impactAr: "تم بناؤه كمركز تحكم عملي لوضوح التشغيل والتوقعات والتوسع المستقبلي عبر API وقاعدة بيانات.",
      stack: ["Python", "FastAPI", "PostgreSQL", "Forecasting", "Dashboards"],
      featured: true
    },
    {
      name: "HanaShop",
      tag: "E-commerce Solution",
      tagAr: "حل تجارة إلكترونية",
      summary: "An elegant online shopping concept with product browsing, admin dashboard, customer management, and invoices.",
      summaryAr: "منصة تسوق إلكتروني أنيقة تشمل تصفح المنتجات ولوحة إدارة وإدارة العملاء والفواتير.",
      impact: "Designed to provide a seamless shopping and administration experience with clean navigation and product workflows.",
      impactAr: "مصممة لتقديم تجربة تسوق وإدارة سلسة مع تنقل واضح وسير عمل منظم للمنتجات.",
      stack: ["Web UI", "Admin Dashboard", "Products", "Customers", "Invoices"],
      featured: true
    },
    {
      name: "Smart Address Keeper",
      tag: "Mobile Utility",
      tagAr: "تطبيق موبايل خدمي",
      summary: "A mobile address manager for saving places, categories, ratings, notes, sharing, and map links.",
      summaryAr: "تطبيق لإدارة العناوين وحفظ الأماكن والتصنيفات والتقييمات والملاحظات والمشاركة وروابط الخرائط.",
      impact: "Built around practical daily use, bilingual UX, and quick sharing workflows.",
      impactAr: "مصمم للاستخدام اليومي العملي مع تجربة ثنائية اللغة وسير مشاركة سريع.",
      stack: ["Kotlin", "Android", "Maps", "Bilingual UX"],
      featured: false
    },
    {
      name: "IT Operations Leadership",
      tag: "Enterprise Technology",
      tagAr: "قيادة تقنية مؤسسية",
      summary: "Leadership of IT operations, support structures, infrastructure reliability, and technology governance.",
      summaryAr: "قيادة عمليات تقنية المعلومات وهيكلة الدعم واعتمادية البنية التحتية وحوكمة التقنية.",
      impact: "Recognized for outstanding contribution as an IT Manager.",
      impactAr: "تم تكريمه لمساهماته البارزة كمدير تقنية معلومات.",
      stack: ["IT Management", "Infrastructure", "Support", "Security", "Governance"],
      featured: false
    }
  ],
  timeline: [
    { year: "Now", title: "IT Manager & Head of Technology", titleAr: "مدير تقنية المعلومات ورئيس التقنية", text: "Leading technology operations, support, infrastructure improvement, and digital transformation initiatives.", textAr: "قيادة عمليات التقنية والدعم وتحسين البنية التحتية ومبادرات التحول الرقمي." },
    { year: "2025+", title: "Fuel Intelligence Builder", titleAr: "بناء أنظمة ذكاء تشغيلي للوقود", text: "Developing AI-assisted operational dashboards and forecasting tools for fuel-station decision making.", textAr: "تطوير لوحات تحكم وأدوات توقع مدعومة بالذكاء الاصطناعي لدعم قرار محطات الوقود." },
    { year: "2024", title: "HanaShop Concept", titleAr: "مشروع HanaShop", text: "Designed an elegant e-commerce solution with user-friendly shopping and admin workflows.", textAr: "تصميم حل تجارة إلكترونية أنيق بتجربة تسوق وإدارة سهلة." }
  ]
};

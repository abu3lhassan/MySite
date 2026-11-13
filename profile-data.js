const PROFILE = {
  name: "Ali Al-Hanabi",
  nameAr: "علي الحنابي",
  title: "IT Manager | Head of Technology",
  titleAr: "مدير تقنية المعلومات | رئيس التقنية",
  location: "Eastern Province, Saudi Arabia",
  locationAr: "المنطقة الشرقية، المملكة العربية السعودية",
  email: "ali@alhanabi.com",
  phone: "+966578535751",
  domain: "www.alhanabi.com",
  profilePhoto: "assets/profile.jpg",
  availability: "Open to professional inquiries, industry collaboration, and conversations on technology leadership.",
  availabilityAr: "أرحب بالاستفسارات المهنية والتعاون وتبادل الخبرات في مجال القيادة التقنية.",
  social: {
    linkedin: "https://www.linkedin.com/in/ali-al-hanabi-09a138151/",
    x: "https://x.com/alihalhanabi",
    whatsapp: "https://wa.me/966578535751",
    email: "mailto:ali@alhanabi.com"
  },
  metrics: [
    { value: "Full-scope", label: "IT Function Leadership", labelAr: "قيادة وظيفة تقنية المعلومات بالكامل" },
    { value: "Multi-site", label: "Technology Operations", labelAr: "تشغيل تقني متعدد المواقع" },
    { value: "Governance", label: "Policy, Risk & Controls", labelAr: "السياسات والمخاطر والضوابط" },
    { value: "Cross-functional", label: "Business Transformation", labelAr: "تحول رقمي عبر الإدارات" }
  ],
  strengths: [
    { title: "IT Strategy & Leadership", titleAr: "استراتيجية وقيادة تقنية المعلومات", text: "Set technology direction and priorities that serve business objectives, and lead the IT function from planning through delivery.", textAr: "تحديد توجه التقنية وأولوياتها بما يخدم أهداف الأعمال، وقيادة وظيفة تقنية المعلومات من التخطيط حتى التنفيذ." },
    { title: "IT Operations & Service Management", titleAr: "عمليات تقنية المعلومات وإدارة الخدمات", text: "Keep enterprise systems, networks, and user services dependable through structured service management and clear operational ownership.", textAr: "ضمان اعتمادية الأنظمة والشبكات وخدمات المستخدمين عبر إدارة خدمات منظمة وملكية تشغيلية واضحة." },
    { title: "Digital Transformation & Enterprise Systems", titleAr: "التحول الرقمي والأنظمة المؤسسية", text: "Lead process digitization and enterprise application initiatives, including ERP, from requirements through adoption and continuous improvement.", textAr: "قيادة رقمنة الإجراءات ومبادرات التطبيقات المؤسسية بما فيها أنظمة ERP، من المتطلبات حتى التبني والتحسين المستمر." },
    { title: "Governance, Cybersecurity & Continuity", titleAr: "الحوكمة والأمن السيبراني والاستمرارية", text: "Strengthen policy, accountability, access control, and security practices that protect operations and business continuity.", textAr: "تعزيز السياسات والمساءلة وضبط الصلاحيات والممارسات الأمنية لحماية التشغيل واستمرارية الأعمال." }
  ],
  projects: [
    { name: "Operations Automation Program", tag: "Strategic Program · Project Leadership", tagAr: "برنامج استراتيجي · قيادة المشروع", summary: "Project leadership for a multi-site operational automation program, coordinating business stakeholders, technology partners, and site operations.", summaryAr: "قيادة مشروع لبرنامج أتمتة تشغيلية متعدد المواقع، بالتنسيق بين أصحاب المصلحة والشركاء التقنيين وفرق التشغيل الميداني.", impact: "Planning, vendor coordination, technical integration, risk management, and delivery governance.", impactAr: "التخطيط وإدارة الموردين والتكامل التقني وإدارة المخاطر وحوكمة التسليم.", stack: ["Program Leadership", "IT/OT", "Vendor Management", "Automation"], featured: true },
    { name: "Enterprise Operations Platform", tag: "Enterprise Application · Transformation", tagAr: "تطبيق مؤسسي · تحول رقمي", summary: "Led the implementation and rollout of an enterprise operations application used by teams across multiple departments.", summaryAr: "قيادة تنفيذ وإطلاق تطبيق عمليات مؤسسي تستخدمه فرق عمل عبر إدارات متعددة.", impact: "Directed requirements, workflow design, development partners, testing, training, rollout, and ongoing improvement.", impactAr: "قيادة المتطلبات وتصميم الإجراءات وشركاء التطوير والاختبار والتدريب والإطلاق والتحسين المستمر.", stack: ["Digital Transformation", "Enterprise Workflows", "Change Adoption"], featured: true },
    { name: "Corporate Governance Framework", tag: "Governance · Organizational Design", tagAr: "حوكمة · تصميم تنظيمي", summary: "Led the development of organizational governance foundations: structure, delegation of authority, RACI accountability, and policy management.", summaryAr: "قيادة بناء أسس الحوكمة المؤسسية: الهيكل التنظيمي، ومصفوفة الصلاحيات، والمساءلة وفق RACI، وإدارة السياسات.", impact: "Clearer ownership and decision rights to support accountable, consistent operations.", impactAr: "وضوح أكبر في الملكية وصلاحيات القرار لدعم تشغيل منضبط وخاضع للمساءلة.", stack: ["Governance", "DOA", "RACI", "Change Management"], featured: true },
    { name: "Digital Workflow Solutions", tag: "Process Digitization", tagAr: "رقمنة الإجراءات", summary: "Designed and built internal request, approval, and organizational information workflows to replace manual processes.", summaryAr: "تصميم وبناء إجراءات رقمية داخلية للطلبات والموافقات والمعلومات التنظيمية بديلًا عن العمل اليدوي.", impact: "Moved routine requests to structured, trackable digital workflows.", impactAr: "نقل الطلبات الروتينية إلى إجراءات رقمية منظمة وقابلة للتتبع.", stack: ["Workflow Automation", "Process Design", "Low-code"], featured: false },
    { name: "ShareAdd", tag: "Independent Product · Personal", tagAr: "منتج مستقل · شخصي", summary: "An Android utility for saving and sharing addresses and events, built independently in personal time.", summaryAr: "تطبيق أندرويد لحفظ العناوين والمناسبات ومشاركتها، طُوّر بشكل مستقل في الوقت الشخصي.", impact: "Independent bilingual mobile product, separate from my employment role.", impactAr: "منتج جوال مستقل ثنائي اللغة، منفصل عن دوري الوظيفي.", stack: ["Kotlin", "Android", "Jetpack Compose"], featured: false },
    { name: "Ali OS", tag: "Independent Product · Personal", tagAr: "منتج مستقل · شخصي", summary: "A personal operations platform for planning, tasks, and daily administration, built independently.", summaryAr: "منصة شخصية لإدارة التخطيط والمهام والشؤون اليومية، طُوّرت بشكل مستقل.", impact: "Hands-on practice in user-focused product thinking and practical automation.", impactAr: "تطبيق عملي للتفكير في المنتج المتمحور حول المستخدم والأتمتة العملية.", stack: ["Cloudflare Workers", "D1", "Web App"], featured: false }
  ],
  timeline: [
    { year: "2022 — Now", title: "IT Manager | Head of Technology", titleAr: "مدير تقنية المعلومات | رئيس التقنية", text: "Leading the IT function: technology strategy, operations, infrastructure, cybersecurity, enterprise applications, governance, and digital initiatives.", textAr: "قيادة وظيفة تقنية المعلومات: استراتيجية التقنية والتشغيل والبنية التحتية والأمن السيبراني والتطبيقات المؤسسية والحوكمة والمبادرات الرقمية." },
    { year: "2017 — 2022", title: "Infrastructure & Operations Foundation", titleAr: "أساس في البنية التحتية والتشغيل", text: "Progressed through support, mobility, infrastructure, and network engineering roles across holding, manufacturing, services, and fuel retail organizations.", textAr: "تدرج عبر أدوار الدعم الفني والأجهزة المتنقلة والبنية التحتية وهندسة الشبكات في شركات قابضة وصناعية وخدمية وقطاع الوقود." }
  ]
};

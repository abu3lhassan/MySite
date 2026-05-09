let pageLang = localStorage.getItem("portfolio_lang") || "en";
const pageI18n = {
  en: {
    nav_home:"Home", nav_about:"About", nav_work:"Work", nav_philosophy:"Philosophy", nav_contact:"Contact", lets_talk:"Let’s Talk", back_top:"Back to top",
    about_kicker:"About", about_title:"A practical technology leader shaped by operations, discipline, and clarity.", about_lead:"I build technology with a simple belief: systems should make work clearer, decisions easier, and operations more reliable.",
    about_story_h:"My story", about_story_p:"My professional path sits at the intersection of IT leadership, fuel-station operations, support, infrastructure, and digital products. I am not interested in technology as decoration. I care about technology that solves a real operational problem, reduces confusion, and gives leaders a clearer view of the business.",
    about_edge_h:"What makes my approach different", about_edge_p:"I combine the mindset of an IT manager, the discipline of an operator, and the product sense of a builder. I look for the weak points in workflows, tools, data, and ownership, then turn them into cleaner systems people can actually use.",
    about_personal_h:"Beyond work", about_personal_p:"Books, anime, and simple living are part of how I think. They keep me curious, grounded, and aware that complexity is not always intelligence. Sometimes the strongest system is the one that removes noise.",
    about_values:"Operating values", about_v1:"Clarity before complexity", about_v2:"Useful systems over impressive tools", about_v3:"Discipline before scale", about_v4:"Technology that serves operations",
    work_kicker:"Work", work_title:"Case studies that show how I think, build, and create business value.", work_lead:"These projects are presented as practical business systems, not just technical exercises.",
    work_fuel_h:"Fuel Command Center Pro", work_fuel_p:"A fuel-station intelligence platform designed to bring sales, stock, risk, forecasting, and executive visibility into one clear command center.", work_fuel_problem:"Problem", work_fuel_problem_p:"Operational data can become fragmented across files, teams, systems, and manual decisions.", work_fuel_solution:"Solution", work_fuel_solution_p:"A structured dashboard and backend direction built around forecasting, stock visibility, tank/product logic, and future database/API expansion.", work_fuel_role:"My role", work_fuel_role_p:"Product owner, architect, reviewer, risk controller, and business translator between operations and technology.",
    work_hana_h:"HanaShop", work_hana_p:"An e-commerce concept focused on clean product browsing, admin control, customer management, invoices, and a better digital shopping workflow.",
    work_address_h:"Smart Address Keeper", work_address_p:"A mobile utility concept for saving places, categories, ratings, notes, sharing, and map links. It reflects my interest in practical tools that solve everyday friction.",
    work_pattern_h:"My delivery pattern", work_pattern_p:"I start with the operational pain, define the simplest reliable workflow, protect stability, then improve the system step by step.",
    philosophy_kicker:"Philosophy", philosophy_title:"From fragmented work to clear systems.", philosophy_lead:"My leadership style is built around one idea: technology should reduce fragmentation, not add another layer of noise.",
    ph_1_h:"Clarity over noise", ph_1_p:"Before adding tools, I look for what is unclear: ownership, data flow, process, access, reporting, and accountability.",
    ph_2_h:"Practical systems over complex promises", ph_2_p:"A system is valuable only if people can use it, trust it, and maintain it. I prefer practical progress over impressive complexity.",
    ph_3_h:"Operations first", ph_3_p:"Technology should respect the reality of the field: people, shifts, assets, vendors, incidents, and daily pressure.",
    ph_4_h:"Build with discipline", ph_4_p:"Good technology leadership is not speed alone. It is sequencing, documentation, rollback thinking, security awareness, and stable execution.",
    ph_manifesto:"My operating manifesto", ph_m1:"Simplify the workflow.", ph_m2:"Connect the scattered pieces.", ph_m3:"Make the data visible.", ph_m4:"Protect reliability.", ph_m5:"Build systems that outlive the meeting.",
    contact_kicker:"Contact", contact_title:"Let’s build something clear, useful, and durable.", contact_lead:"I am open to strategic technology leadership, consulting, digital transformation, and practical systems work.",
    contact_email:"Email", contact_linkedin:"LinkedIn", contact_x:"X", contact_whatsapp:"WhatsApp", contact_fit:"Good-fit conversations", contact_fit_p:"Technology leadership, operations technology, fuel retail systems, dashboards, automation, IT governance, and business systems that need clarity."
  },
  ar: {
    nav_home:"الرئيسية", nav_about:"عنّي", nav_work:"الأعمال", nav_philosophy:"الفلسفة", nav_contact:"التواصل", lets_talk:"تواصل معي", back_top:"العودة للأعلى",
    about_kicker:"عنّي", about_title:"قائد تقني عملي تشكّل من التشغيل والانضباط والوضوح.", about_lead:"أبني التقنية من قناعة بسيطة: الأنظمة يجب أن تجعل العمل أوضح، والقرار أسهل، والتشغيل أكثر اعتمادية.",
    about_story_h:"قصتي", about_story_p:"مساري المهني يقع بين قيادة تقنية المعلومات، وتشغيل محطات الوقود، والدعم، والبنية التحتية، وبناء المنتجات الرقمية. لا أتعامل مع التقنية كزينة، بل كأداة لحل مشكلة تشغيلية حقيقية وتقليل التشويش ومنح القادة رؤية أوضح للأعمال.",
    about_edge_h:"ما يميز أسلوبي", about_edge_p:"أجمع بين عقلية مدير تقنية المعلومات، وانضباط المشغّل، وحسّ بناء المنتج. أبحث عن نقاط الضعف في سير العمل والأدوات والبيانات والملكية، ثم أحولها إلى أنظمة أوضح يستطيع الناس استخدامها فعلاً.",
    about_personal_h:"خارج العمل", about_personal_p:"الكتب والأنمي وبساطة العيش جزء من طريقة تفكيري. تبقيني فضولياً ومتزناً ومدركاً أن التعقيد ليس دائماً ذكاءً. أحياناً أقوى نظام هو النظام الذي يزيل الضجيج.",
    about_values:"قيم التشغيل", about_v1:"الوضوح قبل التعقيد", about_v2:"الأنظمة المفيدة قبل الأدوات المبهرة", about_v3:"الانضباط قبل التوسع", about_v4:"تقنية تخدم التشغيل",
    work_kicker:"الأعمال", work_title:"دراسات حالة توضّح كيف أفكر وأبني وأخلق قيمة للأعمال.", work_lead:"هذه المشاريع معروضة كأنظمة أعمال عملية، وليست مجرد تمارين تقنية.",
    work_fuel_h:"Fuel Command Center Pro", work_fuel_p:"منصة ذكاء تشغيلي لمحطات الوقود تهدف إلى جمع المبيعات والمخزون والمخاطر والتوقعات والرؤية التنفيذية في مركز قيادة واضح.", work_fuel_problem:"المشكلة", work_fuel_problem_p:"البيانات التشغيلية قد تتشظى بين ملفات وفرق وأنظمة وقرارات يدوية.", work_fuel_solution:"الحل", work_fuel_solution_p:"لوحة تحكم واتجاه خلفي منظم حول التوقعات ورؤية المخزون ومنطق الخزانات والمنتجات والتوسع المستقبلي عبر قاعدة بيانات وواجهات API.", work_fuel_role:"دوري", work_fuel_role_p:"مالك منتج، معماري، مراجع، ضابط مخاطر، ومترجم بين التشغيل والتقنية.",
    work_hana_h:"HanaShop", work_hana_p:"تصور لمنصة تجارة إلكترونية تركز على تصفح منتجات واضح، وتحكم إداري، وإدارة عملاء، وفواتير، وسير عمل رقمي أفضل للتسوق.",
    work_address_h:"Smart Address Keeper", work_address_p:"تصور لتطبيق خدمي لحفظ الأماكن والتصنيفات والتقييمات والملاحظات والمشاركة وروابط الخرائط. يعكس اهتمامي بالأدوات العملية التي تحل احتكاكاً يومياً.",
    work_pattern_h:"نمط التنفيذ لدي", work_pattern_p:"أبدأ من الألم التشغيلي، أحدد أبسط سير عمل موثوق، أحمي الاستقرار، ثم أحسن النظام خطوة بعد خطوة.",
    philosophy_kicker:"الفلسفة", philosophy_title:"من العمل المتشظي إلى الأنظمة الواضحة.", philosophy_lead:"أسلوبي القيادي مبني على فكرة واحدة: التقنية يجب أن تقلل التشرذم، لا أن تضيف طبقة جديدة من الضجيج.",
    ph_1_h:"الوضوح قبل الضجيج", ph_1_p:"قبل إضافة الأدوات، أبحث عما هو غير واضح: الملكية، تدفق البيانات، الإجراءات، الصلاحيات، التقارير، والمساءلة.",
    ph_2_h:"النظام العملي قبل الوعود المعقدة", ph_2_p:"قيمة النظام تظهر فقط إذا استطاع الناس استخدامه والثقة به وصيانته. أفضل التقدم العملي على التعقيد المثير للإعجاب.",
    ph_3_h:"التشغيل أولاً", ph_3_p:"التقنية يجب أن تحترم واقع الميدان: الناس، الورديات، الأصول، الموردين، الأعطال، والضغط اليومي.",
    ph_4_h:"البناء بانضباط", ph_4_p:"القيادة التقنية الجيدة ليست سرعة فقط. هي ترتيب مراحل، توثيق، تفكير بالرجوع الآمن، ووعي أمني، وتنفيذ مستقر.",
    ph_manifesto:"منهجي التشغيلي", ph_m1:"بسّط سير العمل.", ph_m2:"اربط الأجزاء المتفرقة.", ph_m3:"اجعل البيانات مرئية.", ph_m4:"احمِ الاعتمادية.", ph_m5:"ابنِ أنظمة تعيش بعد الاجتماع.",
    contact_kicker:"التواصل", contact_title:"لنبنِ شيئاً واضحاً، مفيداً، وقابلاً للاستمرار.", contact_lead:"متاح لفرص القيادة التقنية، الاستشارات، التحول الرقمي، وبناء الأنظمة العملية.",
    contact_email:"الإيميل", contact_linkedin:"لينكدإن", contact_x:"X", contact_whatsapp:"واتساب", contact_fit:"المحادثات المناسبة", contact_fit_p:"القيادة التقنية، تقنية التشغيل، أنظمة محطات الوقود، لوحات التحكم، الأتمتة، حوكمة تقنية المعلومات، وأنظمة الأعمال التي تحتاج إلى وضوح."
  }
};
function pt(k){ return pageI18n[pageLang][k] || k; }
function applyPageLang(){
  document.documentElement.lang = pageLang;
  document.documentElement.dir = pageLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', pageLang === 'ar');
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = pt(el.dataset.i18n));
  const btn = document.getElementById('langToggle'); if(btn) btn.textContent = pageLang === 'ar' ? 'English' : 'عربي';
}
function initPageReveal(){
  const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
window.addEventListener('mousemove', e => { const glow = document.getElementById('cursorGlow'); if(glow){ glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px'; }});
document.addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#"]'); if(!anchor) return;
  const href = anchor.getAttribute('href');
  if(href === '#top'){ event.preventDefault(); window.scrollTo({top:0,left:0,behavior:'smooth'}); return; }
  const target = document.querySelector(href); if(target){ event.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
});
document.getElementById('langToggle')?.addEventListener('click', () => { pageLang = pageLang === 'ar' ? 'en' : 'ar'; localStorage.setItem('portfolio_lang', pageLang); applyPageLang(); initPageReveal(); });
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
applyPageLang(); initPageReveal();

function getSavedLanguage(){ try { return localStorage.getItem("portfolio_lang") === "ar" ? "ar" : "en"; } catch { return "en"; } }
function saveLanguage(lang){ try { localStorage.setItem("portfolio_lang", lang); } catch {} }
function esc(value){ return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function safeHref(value){ try { const u = new URL(String(value), location.href); return ["https:","http:","mailto:","tel:"].includes(u.protocol) ? esc(u.href) : "#"; } catch { return "#"; } }
let currentLang = getSavedLanguage();
const runtimeProfile = PROFILE;

const i18n = {
  "en": {
    "hero_line_2": "Connecting strategy with execution.",
    "hero_statement": "IT leadership grounded in hands-on technical experience, enterprise operations, and cross-functional delivery.",
    "expertise_lead": "A management role built on years of hands-on engineering, from support desks and networks to enterprise systems and governance.",
    "career_kicker": "Career path",
    "proof_label": "Professional summary",
    "profile_location_label": "Location",
    "nav_home": "Home",
    "nav_about": "About",
    "nav_work": "Work",
    "nav_philosophy": "Philosophy",
    "nav_resume": "Resume",
    "nav_notes": "Notes",
    "nav_expertise": "Expertise",
    "nav_impact": "Impact",
    "nav_contact": "Contact",
    "lets_talk": "Let’s Talk",
    "eyebrow": "Enterprise Technology Leadership",
    "hero_line": "Leading technology.",
    "view_work": "View Selected Work",
    "email_me": "Email Me",
    "available": "Professional inquiries & collaboration",
    "expertise_kicker": "Leadership pillars",
    "expertise_title": "Five areas where I carry responsibility.",
    "work_kicker": "Professional initiatives",
    "work_title": "Leadership in delivery, systems, and governance.",
    "impact_kicker": "Leadership approach",
    "impact_title": "Understand the requirement. Set priorities. Follow through.",
    "impact_text": "I connect business requirements with technology decisions, set priorities for technical work, and coordinate departments and vendors through implementation. My operational background keeps service reliability, user adoption, clear responsibilities, and ongoing support in view.",
    "contact_kicker": "Contact",
    "contact_title": "Professional inquiries & collaboration.",
    "back_top": "Back to top",
    "brand_descriptor": "IT Leadership",
    "github_link": "GitHub · Technical projects",
    "github_contact": "GitHub · Selected technical projects",
    "shareadd_source": "View ShareAdd on GitHub",
    "view_resume": "View Resume",
    "more_work": "Read the full initiatives",
    "about_resume": "View career history and English CV",
    "home_label": "Ali Al-Hanabi home",
    "nav_label": "Primary navigation",
    "profile_label": "Professional profile",
    "capabilities_label": "Technology capabilities",
    "footer_name": "Ali Hussain Al-Hanabi",
    "social_linkedin": "LinkedIn profile",
    "social_x": "X profile",
    "social_whatsapp": "Contact on WhatsApp",
    "social_email": "Email Ali Al-Hanabi",
    "profile_photo": "Ali Al-Hanabi profile photo",
    "hero_context": "IT career since 2017. IT leadership and management since 2021.",
    "cap_strategy": "IT Strategy",
    "cap_infrastructure": "Enterprise Infrastructure",
    "cap_cloud": "Cloud",
    "cap_security": "Cybersecurity",
    "cap_governance": "IT Governance",
    "cap_transformation": "Digital Transformation",
    "cap_erp": "ERP & Business Systems",
    "cap_service": "Service Management"
  },
  "ar": {
    "hero_line_2": "وربط الاستراتيجية بالتنفيذ.",
    "hero_statement": "قيادة لتقنية المعلومات ترتكز على خبرة تقنية عملية، وتشغيل مؤسسي، وتنفيذ مشترك بين الإدارات.",
    "expertise_lead": "دور إداري بُني على سنوات من العمل التقني المباشر، من الدعم الفني والشبكات إلى الأنظمة المؤسسية والحوكمة.",
    "career_kicker": "المسار المهني",
    "proof_label": "ملخص مهني",
    "profile_location_label": "الموقع",
    "nav_home": "الرئيسية",
    "nav_about": "عنّي",
    "nav_work": "الأعمال",
    "nav_philosophy": "الفلسفة",
    "nav_resume": "السيرة",
    "nav_notes": "الأفكار",
    "nav_expertise": "الخبرات",
    "nav_impact": "الأثر",
    "nav_contact": "التواصل",
    "lets_talk": "تواصل معي",
    "eyebrow": "قيادة تقنية مؤسسية",
    "hero_line": "قيادة التقنية،",
    "view_work": "استعرض الأعمال",
    "email_me": "راسلني",
    "available": "للاستفسارات المهنية والتعاون",
    "expertise_kicker": "محاور القيادة",
    "expertise_title": "خمسة مجالات أتحمل فيها المسؤولية.",
    "work_kicker": "مبادرات مهنية",
    "work_title": "قيادة في التنفيذ والأنظمة والحوكمة.",
    "impact_kicker": "المنهج القيادي",
    "impact_title": "فهم المتطلب، وترتيب الأولويات، ومتابعة التنفيذ.",
    "impact_text": "أربط متطلبات الأعمال بالقرارات التقنية، وأرتب أولويات العمل التقني، وأنسق بين الإدارات والموردين خلال التنفيذ. ويساعدني أساس عملي في التشغيل على مراعاة اعتمادية الخدمات وتبني المستخدمين ووضوح المسؤوليات والدعم المستمر.",
    "contact_kicker": "التواصل",
    "contact_title": "الاستفسارات المهنية والتعاون.",
    "back_top": "العودة للأعلى",
    "brand_descriptor": "قيادة تقنية المعلومات",
    "github_link": "GitHub · مشاريع تقنية",
    "github_contact": "GitHub · مشاريع تقنية مختارة",
    "shareadd_source": "استعرض ShareAdd على GitHub",
    "view_resume": "استعرض السيرة",
    "more_work": "اقرأ تفاصيل المبادرات",
    "about_resume": "استعرض المسار المهني والسيرة بالإنجليزية",
    "home_label": "الرئيسية | علي الحنابي",
    "nav_label": "التنقل الرئيسي",
    "profile_label": "الملف المهني",
    "capabilities_label": "القدرات التقنية",
    "footer_name": "علي حسين الحنابي",
    "social_linkedin": "الملف المهني على LinkedIn",
    "social_x": "الملف على X",
    "social_whatsapp": "التواصل عبر WhatsApp",
    "social_email": "مراسلة علي الحنابي بالبريد الإلكتروني",
    "profile_photo": "الصورة الشخصية لعلي الحنابي",
    "hero_context": "مسيرة تقنية منذ 2017، وقيادة وإدارة تقنية المعلومات منذ 2021.",
    "cap_strategy": "استراتيجية التقنية",
    "cap_infrastructure": "البنية التحتية المؤسسية",
    "cap_cloud": "السحابة",
    "cap_security": "الأمن السيبراني",
    "cap_governance": "حوكمة تقنية المعلومات",
    "cap_transformation": "التحول الرقمي",
    "cap_erp": "ERP وأنظمة الأعمال",
    "cap_service": "إدارة الخدمات"
  }
};

const icons = {
  linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.34 8h4.32v14H.34V8zm7.5 0h4.14v1.92h.06c.58-1.1 1.99-2.26 4.1-2.26 4.38 0 5.19 2.88 5.19 6.63V22h-4.32v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.61V22H7.84V8z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M20.52 3.45A11.84 11.84 0 0 0 12.08 0C5.51 0 .16 5.35.16 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.45ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.92-9.9a9.85 9.85 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>',
  email: '<svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm10 9.25L2.5 6.8V18h19V6.8L12 13.25Zm0-2.4L20.1 6H3.9L12 10.85Z"/></svg>'
};

function t(key){ return i18n[currentLang][key] || key; }
function text(en, ar){ return currentLang === "ar" ? (ar || en) : en; }

function render(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", currentLang === "ar");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.getElementById("langToggle").textContent = currentLang === "ar" ? "English" : "عربي";
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)));
  const menu = document.getElementById('mobileNavToggle');
  if (menu) { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-label', document.documentElement.lang === 'ar' ? (open ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل') : (open ? 'Close navigation' : 'Open navigation')); }
  document.getElementById("heroName").textContent = text(runtimeProfile.name, runtimeProfile.nameAr);
  document.getElementById("heroLocation").textContent = text(runtimeProfile.location, runtimeProfile.locationAr);
  document.getElementById("cardName").textContent = text(runtimeProfile.name, runtimeProfile.nameAr);
  document.getElementById("cardTitle").textContent = text(runtimeProfile.title, runtimeProfile.titleAr);
  document.documentElement.classList.add("js-ready");
  const photo = document.getElementById("profilePhoto");
  const orb = document.getElementById("profileOrb");
  if (runtimeProfile.profilePhoto) {
    photo.alt = t("profile_photo");
    photo.src = runtimeProfile.profilePhoto;
    photo.onload = () => orb.classList.add("has-photo");
    photo.onerror = () => orb.classList.remove("has-photo");
  }
  document.getElementById("availability").textContent = text(runtimeProfile.availability, runtimeProfile.availabilityAr);
  renderSocial(); renderMetrics(); renderStrengths(); renderProjects(); renderTimeline(); renderContacts();
}

function renderSocial(){
  const html = ["linkedin","x","whatsapp","email"].map(k => `<a class="icon-btn" href="${safeHref(runtimeProfile.social[k])}" target="_blank" rel="noopener" aria-label="${esc(t("social_" + k))}">${icons[k]}</a>`).join("");
  document.getElementById("heroSocial").innerHTML = html;
}
function renderMetrics(){
  document.getElementById("metrics").innerHTML = runtimeProfile.metrics.map(m => `<div class="metric-card"><dt>${esc(text(m.value,m.valueAr))}</dt><dd>${esc(text(m.label,m.labelAr))}</dd></div>`).join("");
}
function renderStrengths(){
  document.getElementById("strengths").innerHTML = runtimeProfile.strengths.map((s,i) => `<li class="pillar reveal"><span class="pillar-num" aria-hidden="true">0${i+1}</span><h3>${esc(text(s.title,s.titleAr))}</h3><p>${esc(text(s.text,s.textAr))}</p></li>`).join("");
}
function renderProjects(){
  document.getElementById("projects").innerHTML = runtimeProfile.projects.filter(p => p.homeFeatured).map(p => `<article class="project-card reveal"><div class="initiative-meta"><span class="tag">${esc(text(p.tag,p.tagAr))}</span>${p.status ? `<span class="status-chip">${esc(text(p.status,p.statusAr))}</span>` : ""}</div><h3>${esc(text(p.name,p.nameAr))}</h3><p>${esc(text(p.summary,p.summaryAr))}</p><p class="impact-text">${esc(text(p.impact,p.impactAr))}</p><div class="stack">${(currentLang === "ar" ? (p.stackAr || p.stack) : p.stack).map(x=>`<span>${esc(x)}</span>`).join("")}</div></article>`).join("");
}
function renderTimeline(){
  document.getElementById("timeline").innerHTML = runtimeProfile.timeline.map(item => `<article class="timeline-item reveal"><strong>${esc(text(item.year,item.yearAr))}</strong><h3>${esc(text(item.title,item.titleAr))}</h3><p>${esc(text(item.text,item.textAr))}</p></article>`).join("");
}
function renderContacts(){
  const phoneDisplay = "+966 57 853 5751";
  const contact = [
    ["email", runtimeProfile.email, runtimeProfile.social.email],
    ["linkedin", "ali-al-hanabi", runtimeProfile.social.linkedin],
    ["x", "@alihalhanabi", runtimeProfile.social.x],
    ["whatsapp", phoneDisplay, runtimeProfile.social.whatsapp]
  ];
  document.getElementById("contactActions").innerHTML = contact.map(([key,value,href]) => `<a class="contact-link" href="${safeHref(href)}" target="_blank" rel="noopener" aria-label="${esc(t("social_" + key))}"><span class="contact-icon">${icons[key]}</span><b class="contact-value" dir="ltr">${esc(value)}</b><span class="contact-arrow">↗</span></a>`).join("");
}

function initReveal(){
  if (!("IntersectionObserver" in window)) { document.querySelectorAll(".reveal").forEach(el => el.classList.add("show")); return; }
  const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("show"); }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

window.addEventListener("mousemove", e => {
  const glow = document.getElementById("cursorGlow");
  glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
});
document.getElementById("langToggle").addEventListener("click", () => { currentLang = currentLang === "ar" ? "en" : "ar"; saveLanguage(currentLang); render(); initReveal(); });
document.getElementById("year").textContent = new Date().getFullYear();

function scrollToTop(){
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  document.documentElement.scrollTo?.({ top: 0, left: 0, behavior: "smooth" });
  document.body.scrollTo?.({ top: 0, left: 0, behavior: "smooth" });
}

document.addEventListener("click", event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (href === "#top") {
    event.preventDefault();
    scrollToTop();
    return;
  }
  const target = document.querySelector(href);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

render(); initReveal();

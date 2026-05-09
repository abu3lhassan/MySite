let currentLang = localStorage.getItem("portfolio_lang") || "en";
let runtimeProfile = JSON.parse(localStorage.getItem("portfolio_profile_override") || "null") || PROFILE;

const i18n = {
  en: { nav_home:"Home", nav_about:"About", nav_work:"Work", nav_philosophy:"Philosophy", nav_resume:"Resume", nav_notes:"Notes", nav_expertise:"Expertise", nav_impact:"Impact", nav_philosophy:"Philosophy", nav_contact:"Contact", lets_talk:"Let’s Talk", eyebrow:"Premium Technology Leadership", hero_line:" builds reliable technology, intelligent operations, and executive-grade digital products.", view_work:"View Selected Work", email_me:"Email Me", available:"Available for strategic opportunities", expertise_kicker:"Expertise", expertise_title:"A technology leader who connects business, operations, and execution.", work_kicker:"Selected Work", work_title:"Projects with operational value, premium design, and practical business impact.", impact_kicker:"Professional Impact", impact_title:"Built for trust: stable systems, clear dashboards, and disciplined technology delivery.", impact_text:"My work focuses on turning complex operational needs into reliable technology: systems that teams can use, leaders can trust, and businesses can scale.", contact_kicker:"Contact", contact_title:"Let’s build something exceptional.", back_top:"Back to top" },
  ar: { nav_home:"الرئيسية", nav_about:"عنّي", nav_work:"الأعمال", nav_philosophy:"الفلسفة", nav_resume:"السيرة", nav_notes:"الأفكار", nav_expertise:"الخبرات", nav_impact:"الأثر", nav_philosophy:"الفلسفة", nav_contact:"التواصل", lets_talk:"تواصل معي", eyebrow:"قيادة تقنية بريميوم", hero_line:" يبني تقنية موثوقة وعمليات ذكية ومنتجات رقمية بمستوى تنفيذي.", view_work:"استعرض الأعمال", email_me:"راسلني", available:"متاح لفرص استراتيجية", expertise_kicker:"الخبرات", expertise_title:"قائد تقني يربط بين أهداف الأعمال والتشغيل والتنفيذ.", work_kicker:"أعمال مختارة", work_title:"مشاريع بقيمة تشغيلية وتصميم فاخر وأثر عملي على الأعمال.", impact_kicker:"الأثر المهني", impact_title:"مبني على الثقة: أنظمة مستقرة، لوحات واضحة، وتسليم تقني منضبط.", impact_text:"يركز عملي على تحويل الاحتياجات التشغيلية المعقدة إلى تقنية موثوقة تستخدمها الفرق، يثق بها القادة، وتتوسع معها الأعمال.", contact_kicker:"التواصل", contact_title:"لنبنِ شيئاً استثنائياً.", back_top:"العودة للأعلى" }
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
  document.getElementById("heroName").textContent = text(runtimeProfile.name, runtimeProfile.nameAr);
  document.getElementById("heroSub").textContent = `${text(runtimeProfile.title, runtimeProfile.titleAr)} · ${text(runtimeProfile.location, runtimeProfile.locationAr)}`;
  document.getElementById("cardName").textContent = text(runtimeProfile.name, runtimeProfile.nameAr);
  document.getElementById("cardTitle").textContent = text(runtimeProfile.title, runtimeProfile.titleAr);
  const photo = document.getElementById("profilePhoto");
  const orb = document.getElementById("profileOrb");
  if (runtimeProfile.profilePhoto) {
    photo.src = runtimeProfile.profilePhoto;
    photo.onload = () => orb.classList.add("has-photo");
    photo.onerror = () => orb.classList.remove("has-photo");
  }
  document.getElementById("availability").textContent = text(runtimeProfile.availability, runtimeProfile.availabilityAr);
  renderSocial(); renderMetrics(); renderStrengths(); renderProjects(); renderTimeline(); renderContacts();
}

function renderSocial(){
  const html = ["linkedin","x","whatsapp","email"].map(k => `<a class="icon-btn" href="${runtimeProfile.social[k]}" target="_blank" rel="noopener" aria-label="${k}">${icons[k]}</a>`).join("");
  document.getElementById("heroSocial").innerHTML = html;
}
function renderMetrics(){
  document.getElementById("metrics").innerHTML = runtimeProfile.metrics.map(m => `<div class="metric-card reveal"><strong>${m.value}</strong><span>${text(m.label,m.labelAr)}</span></div>`).join("");
}
function renderStrengths(){
  document.getElementById("strengths").innerHTML = runtimeProfile.strengths.map((s,i) => `<article class="strength-card reveal"><div class="num">0${i+1}</div><h3>${text(s.title,s.titleAr)}</h3><p>${text(s.text,s.textAr)}</p></article>`).join("");
}
function renderProjects(){
  document.getElementById("projects").innerHTML = runtimeProfile.projects.map(p => `<article class="project-card reveal ${p.featured ? "featured" : ""}"><span class="tag">${text(p.tag,p.tagAr)}</span><h3>${p.name}</h3><p>${text(p.summary,p.summaryAr)}</p><p class="impact-text">${text(p.impact,p.impactAr)}</p><div class="stack">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div></article>`).join("");
}
function renderTimeline(){
  document.getElementById("timeline").innerHTML = runtimeProfile.timeline.map(item => `<article class="timeline-item reveal"><strong>${item.year}</strong><h3>${text(item.title,item.titleAr)}</h3><p>${text(item.text,item.textAr)}</p></article>`).join("");
}
function renderContacts(){
  const phoneDisplay = "+966 57 853 5751";
  const contact = [
    ["email", runtimeProfile.email, runtimeProfile.social.email],
    ["linkedin", "ali-al-hanabi", runtimeProfile.social.linkedin],
    ["x", "@alihalhanabi", runtimeProfile.social.x],
    ["whatsapp", phoneDisplay, runtimeProfile.social.whatsapp]
  ];
  document.getElementById("contactActions").innerHTML = contact.map(([key,value,href]) => `<a class="contact-link" href="${href}" target="_blank" rel="noopener" aria-label="${key}"><span class="contact-icon">${icons[key]}</span><b class="contact-value" dir="ltr">${value}</b><span class="contact-arrow">↗</span></a>`).join("");
}

function initReveal(){
  const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("show"); }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

window.addEventListener("mousemove", e => {
  const glow = document.getElementById("cursorGlow");
  glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
});
document.getElementById("langToggle").addEventListener("click", () => { currentLang = currentLang === "ar" ? "en" : "ar"; localStorage.setItem("portfolio_lang", currentLang); render(); initReveal(); });
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

const params = new URLSearchParams(location.search);
const secretAdminKey = "abu3lhassanAdminZ";
const adminOpen = params.has(secretAdminKey) || location.hash === "#" + secretAdminKey || location.pathname.split("/").filter(Boolean).pop() === secretAdminKey;
if(adminOpen){
  const dot = document.getElementById("adminDot"); dot.style.display = "block";
  const panel = document.getElementById("adminPanel");
  dot.addEventListener("click", () => { document.getElementById("dataEditor").value = JSON.stringify(runtimeProfile,null,2); panel.showModal(); });
  document.getElementById("applyData").addEventListener("click", () => { runtimeProfile = JSON.parse(document.getElementById("dataEditor").value); localStorage.setItem("portfolio_profile_override", JSON.stringify(runtimeProfile)); render(); initReveal(); });
  document.getElementById("downloadData").addEventListener("click", () => {
    const blob = new Blob(["const PROFILE = " + JSON.stringify(runtimeProfile,null,2) + ";\n"], {type:"application/javascript"});
    const a = Object.assign(document.createElement("a"), {href:URL.createObjectURL(blob), download:"profile-data.js"}); a.click(); URL.revokeObjectURL(a.href);
  });
}
render(); initReveal();


/* =====================================
   ANASS ABBOU - MULTILINGUAL PORTFOLIO
   JavaScript
   ===================================== */

const translations = {

    fr: {
        nav_home: "Accueil",
        nav_about: "Profil",
        nav_education: "Formation",
        nav_experience: "Expérience",
        nav_skills: "Compétences",
        nav_contact: "Contact",
        hire: "Me contacter",

        hero_tag: "TECHNICIEN SPÉCIALISÉ",
        hero_hello: "Bonjour, je suis",
        hero_job: "Technicien spécialisé en électromécanique des systèmes automatisés",
        hero_description: "Passionné par la maintenance industrielle, l'automatisme et les systèmes électroniques.",
        discover: "Découvrir mon profil",
        contact_me: "Me contacter",

        about_subtitle: "À PROPOS",
        about_title: "Mon profil professionnel",
        about_text: "Personne motivée dotée d'une solide éthique professionnelle et d'une capacité à travailler en toute indépendance. Solides compétences en organisation et en collaboration au sein d'une équipe. Je cherche à mettre à profit mes compétences dans un poste stimulant.",

        education_subtitle: "PARCOURS",
        education_title: "Diplômes et formations",
        degree1: "Technicien Spécialisé en Électromécanique des Systèmes Automatisés",
        degree2: "Baccalauréat - Sciences de la Vie et de la Terre",
        degree3: "Baccalauréat Libre - Sciences Physiques",

        experience_subtitle: "EXPÉRIENCE",
        experience_title: "Expériences professionnelles",
        internship: "Stagiaire en maintenance industrielle",
        exp1: "Maintenance et tests électroniques : bancs d'essais ONIXE 850DLP3 (Tramway).",
        exp2: "Réparation électronique : diagnostic, soudure et réparation des cartes électroniques.",

        project_subtitle: "RÉALISATION",
        project_title: "Projet de fin d'études",
        project_name: "Système de détection et commande automatisé basé sur Arduino",
        project1: "Conception et réalisation d'un prototype automatisé.",
        project2: "Programmation du microcontrôleur Arduino.",
        project3: "Intégration d'un capteur ultrason pour la détection et la mesure de distance.",
        project4: "Commande d'un servomoteur pour l'orientation du système.",
        project5: "Câblage électronique et tests de fonctionnement du prototype.",

        skills_subtitle: "SAVOIR-FAIRE",
        skills_title: "Compétences techniques",

        personal_subtitle: "QUALITÉS",
        personal_title: "Compétences personnelles",
        personal1: "Sens des responsabilités",
        personal2: "Capacité d'adaptation",
        personal3: "Gestion du stress",
        personal4: "Travail d'équipe",

        languages_subtitle: "COMMUNICATION",
        languages_title: "Langues",
        arabic: "Arabe",
        french: "Français",
        english: "Anglais",

        interests_subtitle: "LOISIRS",
        interests_title: "Centres d'intérêt",

        contact_subtitle: "RESTONS EN CONTACT",
        contact_title: "Me contacter",
        rights: "Tous droits réservés.",

        skill1_title: "⚙️ Automatisme",
        skill1_text: "Siemens TIA Portal, Factory I/O, logique séquentielle et systèmes pneumatiques.",
        skill2_title: "🔌 Électrotechnique",
        skill2_text: "Maintenance moteurs triphasés, relais de protection, câblage d'armoires.",
        skill3_title: "💡 Électronique",
        skill3_text: "Diagnostic, soudure et réparation de cartes électroniques.",
        skill4_title: "🌐 Réseaux & Câblage",
        skill4_text: "Brassage d'armoires (Racks), câblage RJ45, Cat 6/6A et étiquetage.",

        location: "Salé, Maroc",
        interest1: "⚽ Football",
        interest2: "🚴 Vélo",
        interest3: "🏊 Natation"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hire: "Contact me",

        hero_tag: "SPECIALIZED TECHNICIAN",
        hero_hello: "Hello, I'm",
        hero_job: "Specialized Technician in Electromechanics of Automated Systems",
        hero_description: "Passionate about industrial maintenance, automation and electronic systems.",
        discover: "Discover my profile",
        contact_me: "Contact me",

        about_subtitle: "ABOUT ME",
        about_title: "My professional profile",
        about_text: "Motivated individual with a strong professional ethic and the ability to work independently. Strong organizational and teamwork skills. I am looking to apply my skills in a stimulating professional position.",

        education_subtitle: "MY JOURNEY",
        education_title: "Education and qualifications",
        degree1: "Specialized Technician in Electromechanics of Automated Systems",
        degree2: "Baccalaureate - Life and Earth Sciences",
        degree3: "Independent Baccalaureate - Physical Sciences",

        experience_subtitle: "EXPERIENCE",
        experience_title: "Professional experience",
        internship: "Industrial Maintenance Intern",
        exp1: "Electronic maintenance and testing: ONIXE 850DLP3 test benches (Tramway).",
        exp2: "Electronic repair: diagnostics, soldering and electronic board repair.",

        project_subtitle: "ACHIEVEMENTS",
        project_title: "Final-year project",
        project_name: "Arduino-Based Automated Detection and Control System",
        project1: "Design and development of an automated prototype.",
        project2: "Arduino microcontroller programming.",
        project3: "Integration of an ultrasonic sensor for detection and distance measurement.",
        project4: "Servo motor control for system orientation.",
        project5: "Electronic wiring and prototype operational testing.",

        skills_subtitle: "EXPERTISE",
        skills_title: "Technical skills",

        personal_subtitle: "STRENGTHS",
        personal_title: "Personal skills",
        personal1: "Sense of responsibility",
        personal2: "Adaptability",
        personal3: "Stress management",
        personal4: "Teamwork",

        languages_subtitle: "COMMUNICATION",
        languages_title: "Languages",
        arabic: "Arabic",
        french: "French",
        english: "English",

        interests_subtitle: "HOBBIES",
        interests_title: "Interests",

        contact_subtitle: "LET'S CONNECT",
        contact_title: "Contact me",
        rights: "All rights reserved.",

        skill1_title: "⚙️ Automation",
        skill1_text: "Siemens TIA Portal, Factory I/O, sequential logic and pneumatic systems.",
        skill2_title: "🔌 Electrotechnics",
        skill2_text: "Three-phase motor maintenance, protection relays and electrical cabinet wiring.",
        skill3_title: "💡 Electronics",
        skill3_text: "Diagnostics, soldering and electronic board repair.",
        skill4_title: "🌐 Networks & Wiring",
        skill4_text: "Rack wiring, RJ45, Cat 6/6A cabling and labeling.",

        location: "Salé, Morocco",
        interest1: "⚽ Football",
        interest2: "🚴 Cycling",
        interest3: "🏊 Swimming"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_about: "نبذة عني",
        nav_education: "التكوين",
        nav_experience: "التجربة",
        nav_skills: "المهارات",
        nav_contact: "اتصل بي",
        hire: "تواصل معي",

        hero_tag: "تقني متخصص",
        hero_hello: "مرحباً، أنا",
        hero_job: "تقني متخصص في الكهروميكانيك والأنظمة المؤتمتة",
        hero_description: "شغوف بالصيانة الصناعية والأتمتة والأنظمة الإلكترونية.",
        discover: "اكتشف ملفي المهني",
        contact_me: "تواصل معي",

        about_subtitle: "نبذة عني",
        about_title: "ملفي المهني",
        about_text: "شخص طموح يتمتع بأخلاقيات مهنية عالية وقدرة على العمل بشكل مستقل. أمتلك مهارات جيدة في التنظيم والعمل الجماعي والتعاون. أسعى إلى توظيف مهاراتي وخبراتي في منصب مهني محفز.",

        education_subtitle: "مساري الدراسي",
        education_title: "الشهادات والتكوينات",
        degree1: "تقني متخصص في الكهروميكانيك والأنظمة المؤتمتة",
        degree2: "البكالوريا - علوم الحياة والأرض",
        degree3: "البكالوريا الحرة - العلوم الفيزيائية",

        experience_subtitle: "التجربة",
        experience_title: "التجارب المهنية",
        internship: "متدرب في الصيانة الصناعية",
        exp1: "الصيانة والاختبارات الإلكترونية: منصات اختبار ONIXE 850DLP3 الخاصة بالترامواي.",
        exp2: "الإصلاح الإلكتروني: التشخيص واللحام وإصلاح اللوحات الإلكترونية.",

        project_subtitle: "الإنجازات",
        project_title: "مشروع نهاية الدراسة",
        project_name: "نظام الكشف والتحكم الآلي باستخدام Arduino",
        project1: "تصميم وإنجاز نموذج أولي آلي.",
        project2: "برمجة المتحكم الدقيق Arduino.",
        project3: "دمج مستشعر الموجات فوق الصوتية للكشف وقياس المسافة.",
        project4: "التحكم في محرك Servo لتوجيه النظام.",
        project5: "التوصيلات الإلكترونية واختبارات تشغيل النموذج.",

        skills_subtitle: "الخبرات",
        skills_title: "المهارات التقنية",

        personal_subtitle: "المؤهلات الشخصية",
        personal_title: "المهارات الشخصية",
        personal1: "الإحساس بالمسؤولية",
        personal2: "القدرة على التكيف",
        personal3: "إدارة الضغط",
        personal4: "العمل الجماعي",

        languages_subtitle: "التواصل",
        languages_title: "اللغات",
        arabic: "العربية",
        french: "الفرنسية",
        english: "الإنجليزية",

        interests_subtitle: "الهوايات",
        interests_title: "الاهتمامات",

        contact_subtitle: "لنبقَ على تواصل",
        contact_title: "معلومات الاتصال",
        rights: "جميع الحقوق محفوظة.",

        skill1_title: "⚙️ الأتمتة الصناعية",
        skill1_text: "Siemens TIA Portal وFactory I/O والمنطق التتابعي والأنظمة الهوائية.",
        skill2_title: "🔌 الهندسة الكهربائية",
        skill2_text: "صيانة المحركات ثلاثية الطور ومرحلات الحماية وتوصيل اللوحات الكهربائية.",
        skill3_title: "💡 الإلكترونيات",
        skill3_text: "تشخيص الأعطال واللحام وإصلاح اللوحات الإلكترونية.",
        skill4_title: "🌐 الشبكات والتوصيلات",
        skill4_text: "توصيل الخزائن (Racks) وكابلات RJ45 وCat 6/6A ووضع الملصقات.",

        location: "سلا، المغرب",
        interest1: "⚽ كرة القدم",
        interest2: "🚴 ركوب الدراجة",
        interest3: "🏊 السباحة"
    }
};


/* =====================================
   LANGUAGE SYSTEM
   ===================================== */

const languageSelector = document.getElementById("languageSelector");

function changeLanguage(language) {

    const selectedLanguage = translations[language];

    if (!selectedLanguage) return;

    // Update all translated HTML elements
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (selectedLanguage[key]) {
            element.textContent = selectedLanguage[key];
        }

    });

    // Update technical skills
    document.querySelectorAll(".skill-card").forEach((card, index) => {

        const number = index + 1;

        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        if (title) {
            title.textContent = selectedLanguage[`skill${number}_title`];
        }

        if (description) {
            description.textContent = selectedLanguage[`skill${number}_text`];
        }

    });

    // Update interests
    document.querySelectorAll(".interests-list span").forEach((item, index) => {
        item.textContent = selectedLanguage[`interest${index + 1}`];
    });

    // Update contact location
    const locationElement = document.querySelector(".contact-card p:last-child");

    if (locationElement) {
        locationElement.innerHTML = `📍 ${selectedLanguage.location}`;
    }

    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Save selected language
    localStorage.setItem("anassPortfolioLanguage", language);

    // Update selector
    languageSelector.value = language;
}


// Listen to language changes
languageSelector.addEventListener("change", function () {
    changeLanguage(this.value);
});

// Load saved language
const savedLanguage =
    localStorage.getItem("anassPortfolioLanguage") || "fr";

changeLanguage(savedLanguage);


/* =====================================
   SCROLL REVEAL ANIMATIONS
   ===================================== */

const observerOptions = {
    threshold: 0.12
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);


// Observe sections and cards
document.querySelectorAll(
    ".section, .skill-card, .timeline-item, .experience-card, .project-card"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================
   CURRENT YEAR
   ===================================== */

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace("2026", new Date().getFullYear());
}


/* =====================================
   CONSOLE MESSAGE
   ===================================== */

console.log(
    "%c ANASS ABBOU PORTFOLIO ",
    "background:#1d2d50;color:white;padding:10px;font-size:16px;font-weight:bold;"
);

console.log("Portfolio loaded successfully!");

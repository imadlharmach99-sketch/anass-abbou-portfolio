
const cvTranslations = {
    fr: {
        back: "← Retour au portfolio",
        download: "Télécharger PDF",
        contact: "CONTACT",
        languages: "LANGUES",
        arabic: "Arabe",
        english: "Anglais",
        french: "Français",
        personal: "QUALITÉS",
        personal1: "Sens des responsabilités",
        personal2: "Capacité d'adaptation",
        personal3: "Gestion du stress",
        personal4: "Travail d'équipe",
        interests: "CENTRES D'INTÉRÊT",
        sports: "Football, vélo, natation",
        job: "Technicien Spécialisé en Électromécanique des Systèmes Automatisés",
        profile: "PROFIL",
        profileText: "Personne motivée dotée d'une solide éthique professionnelle et d'une capacité à travailler en toute indépendance. Solides compétences en organisation et en collaboration au sein d'une équipe.",
        education: "DIPLÔMES ET FORMATIONS",
        degree1: "Technicien Spécialisé en Électromécanique des Systèmes Automatisés",
        degree2: "Baccalauréat - Sciences de la Vie et de la Terre",
        degree3: "Baccalauréat Libre - Sciences Physiques",
        experience: "EXPÉRIENCES PROFESSIONNELLES",
        internship: "Stagiaire en Maintenance Industrielle",
        exp1: "Maintenance et tests électroniques : bancs d'essais ONIXE 850DLP3 (Tramway).",
        exp2: "Réparation électronique : diagnostic, soudure et réparation des cartes électroniques.",
        project: "PROJET DE FIN D'ÉTUDES",
        projectName: "Système de détection et commande automatisé basé sur Arduino",
        project1: "Conception et réalisation d'un prototype automatisé.",
        project2: "Programmation du microcontrôleur Arduino.",
        project3: "Intégration d'un capteur ultrason pour la détection et la mesure de distance.",
        project4: "Commande d'un servomoteur pour l'orientation du système.",
        project5: "Câblage électronique et tests de fonctionnement du prototype.",
        skills: "COMPÉTENCES TECHNIQUES",
        automation: "Automatisme :",
        electrical: "Électrotechnique :",
        electronics: "Électronique :",
        networks: "Réseaux & Câblage :"
    },

    en: {
        back: "← Back to portfolio",
        download: "Download PDF",
        contact: "CONTACT",
        languages: "LANGUAGES",
        arabic: "Arabic",
        english: "English",
        french: "French",
        personal: "PERSONAL STRENGTHS",
        personal1: "Sense of responsibility",
        personal2: "Adaptability",
        personal3: "Stress management",
        personal4: "Teamwork",
        interests: "INTERESTS",
        sports: "Football, cycling, swimming",
        job: "Specialized Technician in Electromechanics of Automated Systems",
        profile: "PROFILE",
        profileText: "Motivated individual with a strong professional ethic and the ability to work independently. Strong organizational and teamwork skills.",
        education: "EDUCATION AND QUALIFICATIONS",
        degree1: "Specialized Technician in Electromechanics of Automated Systems",
        degree2: "Baccalaureate - Life and Earth Sciences",
        degree3: "Independent Baccalaureate - Physical Sciences",
        experience: "PROFESSIONAL EXPERIENCE",
        internship: "Industrial Maintenance Intern",
        exp1: "Electronic maintenance and testing: ONIXE 850DLP3 test benches (Tramway).",
        exp2: "Electronic repair: diagnostics, soldering and electronic board repair.",
        project: "FINAL-YEAR PROJECT",
        projectName: "Arduino-Based Automated Detection and Control System",
        project1: "Design and development of an automated prototype.",
        project2: "Arduino microcontroller programming.",
        project3: "Integration of an ultrasonic sensor for detection and distance measurement.",
        project4: "Servo motor control for system orientation.",
        project5: "Electronic wiring and prototype operational testing.",
        skills: "TECHNICAL SKILLS",
        automation: "Automation:",
        electrical: "Electrotechnics:",
        electronics: "Electronics:",
        networks: "Networks & Wiring:"
    },

    ar: {
        back: "العودة إلى الموقع ←",
        download: "تحميل PDF",
        contact: "معلومات الاتصال",
        languages: "اللغات",
        arabic: "العربية",
        english: "الإنجليزية",
        french: "الفرنسية",
        personal: "المؤهلات الشخصية",
        personal1: "الإحساس بالمسؤولية",
        personal2: "القدرة على التكيف",
        personal3: "إدارة الضغط",
        personal4: "العمل الجماعي",
        interests: "الاهتمامات",
        sports: "كرة القدم، ركوب الدراجة، السباحة",
        job: "تقني متخصص في الكهروميكانيك والأنظمة المؤتمتة",
        profile: "الملف الشخصي",
        profileText: "شخص طموح يتمتع بأخلاقيات مهنية عالية وقدرة على العمل بشكل مستقل، مع مهارات جيدة في التنظيم والتعاون والعمل الجماعي.",
        education: "الشهادات والتكوينات",
        degree1: "تقني متخصص في الكهروميكانيك والأنظمة المؤتمتة",
        degree2: "البكالوريا - علوم الحياة والأرض",
        degree3: "البكالوريا الحرة - العلوم الفيزيائية",
        experience: "التجارب المهنية",
        internship: "متدرب في الصيانة الصناعية",
        exp1: "الصيانة والاختبارات الإلكترونية: منصات اختبار ONIXE 850DLP3 الخاصة بالترامواي.",
        exp2: "الإصلاح الإلكتروني: التشخيص واللحام وإصلاح اللوحات الإلكترونية.",
        project: "مشروع نهاية الدراسة",
        projectName: "نظام الكشف والتحكم الآلي باستخدام Arduino",
        project1: "تصميم وإنجاز نموذج أولي آلي.",
        project2: "برمجة المتحكم الدقيق Arduino.",
        project3: "دمج مستشعر الموجات فوق الصوتية للكشف وقياس المسافة.",
        project4: "التحكم في محرك Servo لتوجيه النظام.",
        project5: "التوصيلات الإلكترونية واختبارات تشغيل النموذج.",
        skills: "المهارات التقنية",
        automation: "الأتمتة الصناعية:",
        electrical: "الهندسة الكهربائية:",
        electronics: "الإلكترونيات:",
        networks: "الشبكات والتوصيلات:"
    }
};

const selector = document.getElementById("cvLanguage");

function setCVLanguage(language) {
    const data = cvTranslations[language];

    if (!data) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (data[key]) {
            element.textContent = data[key];
        }
    });

    document.documentElement.lang = language;
    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";

    document.title =
        language === "ar"
            ? "السيرة الذاتية - أنس عبو"
            : language === "en"
            ? "CV - Anass Abbou"
            : "CV - Anass Abbou";

    localStorage.setItem("anassPortfolioLanguage", language);
    selector.value = language;
}

selector.addEventListener("change", () => {
    setCVLanguage(selector.value);
});

const savedLanguage =
    localStorage.getItem("anassPortfolioLanguage") || "fr";

setCVLanguage(savedLanguage);

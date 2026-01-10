/* =========================================
   INTERNATIONALIZATION (i18n)
   ========================================= */

// Translations object
const translations = {
    bg: {
        // Meta
        pageTitle: "Ивона Тонева | Видео Услуги",
        
        // Preloader
        loading: "Зареждане",
        
        // Header/Navigation
        logo: "Ивона Тонева",
        navServices: "Услуги",
        navPortfolio: "Портфолио",
        navAbout: "За мен",
        navContact: "Контакти",
        
        // Hero Section
        heroBadge: "Видео обработка и присъствие в социалните мрежи",
        heroTitle: "Видеа, които ",
        heroTitleHighlight: "спират</br>скролването",
        heroDescription: "Viral монтаж за социалните мрежи. Грабни аудиторията с перфектен ритъм, трендови ефекти и субтитри, които се четат.",
        heroBtnPrimary: "Да обсъдим идеята ти!",
        heroBtnSecondary: "Виж услугите ми →",
        
        // Services Section
        servicesTitle: "Как мога да помогна?",
        service1Title: "Съдържание за социални мрежи",
        service1Desc: "Ангажиращи Reels, TikTok и Shorts видеа, които увеличават обхвата и носят последователи.",
        service2Title: "Динамични Субтитри",
        service2Desc: "Анимирани надписи в стил Hormozi, които задържат вниманието дори без звук.",
        service3Title: "YouTube Продукция",
        service3Desc: "Цялостен монтаж за влогове и подкасти – от рязане и B-roll до цветови корекции.",
        service4Title: "Управление на Социални Мрежи",
        service4Desc: "Стратегическо управление на присъствие на TikTok, Facebook и Instagram. Планиране, публикуване и engagement с твоята аудитория.",
        
        // About Section
        aboutBadge: "За мен",
        aboutTitle: "За мен",
        aboutText1: 'Здравей! Аз съм <strong>Ивона Тонева</strong>. В света на бързото скролване имаш по-малко от 3 секунди, за да грабнеш вниманието.',
        aboutText2: 'Моята работа не е просто да "сглобявам кадри". Аз създавам ритъм, добавям емоция и опаковам историята ти така, че алгоритмите да я обичат, а хората – да я споделят.',
        stat1Value: "1+",
        stat1Label: "Години опит",
        stat2Value: "50+",
        stat2Label: "Успешни проекта",
        
        // Portfolio Section
        portfolioBadge: "Портфолио",
        portfolioTitle: "Част от моята работа",
        portfolioSubtitle: "Вертикални видеа за TikTok и Reels с енергия и ритъм. Виж селекция от проекти, които спират скролването.",
        
        // Contact Section
        contactTitle: "Готов ли си за действие?",
        contactSubtitle: "Нека превърнем суровите кадри в шедьовър.",
        
        // Footer
        footerCopyright: "© 2025 Ивона Тонева. Всички права запазени."
    },
    en: {
        // Meta
        pageTitle: "Ivona Toneva | Video Services",
        
        // Preloader
        loading: "Loading",
        
        // Header/Navigation
        logo: "Ivona Toneva",
        navServices: "Services",
        navPortfolio: "Portfolio",
        navAbout: "About",
        navContact: "Contact",
        
        // Hero Section
        heroBadge: "Video editing and social media presence",
        heroTitle: "Videos that ",
        heroTitleHighlight: "stop the</br>scroll",
        heroDescription: "Viral editing for social media. Capture your audience with perfect rhythm, trending effects, and subtitles that pop.",
        heroBtnPrimary: "Let's discuss your idea!",
        heroBtnSecondary: "See my services →",
        
        // Services Section
        servicesTitle: "How can I help?",
        service1Title: "Social Media Content",
        service1Desc: "Engaging Reels, TikTok and Shorts videos that increase reach and bring followers.",
        service2Title: "Dynamic Subtitles",
        service2Desc: "Animated captions in Hormozi style that keep attention even without sound.",
        service3Title: "YouTube Production",
        service3Desc: "Complete editing for vlogs and podcasts – from cutting and B-roll to color correction.",
        service4Title: "Social Media Management",
        service4Desc: "Strategic presence management on TikTok, Facebook and Instagram. Planning, publishing and engaging with your audience.",
        
        // About Section
        aboutBadge: "About",
        aboutTitle: "About me",
        aboutText1: 'Hi! I\'m <strong>Ivona Toneva</strong>. In the world of fast scrolling, you have less than 3 seconds to grab attention.',
        aboutText2: 'My job isn\'t just to "put clips together". I create rhythm, add emotion and package your story so algorithms love it, and people share it.',
        stat1Value: "1+",
        stat1Label: "Years of experience",
        stat2Value: "50+",
        stat2Label: "Successful projects",
        
        // Portfolio Section
        portfolioBadge: "Portfolio",
        portfolioTitle: "Part of my work",
        portfolioSubtitle: "Vertical videos for TikTok and Reels with energy and rhythm. See a selection of projects that stop the scroll.",
        
        // Contact Section
        contactTitle: "Ready for action?",
        contactSubtitle: "Let's turn raw footage into a masterpiece.",
        
        // Footer
        footerCopyright: "© 2025 Ivona Toneva. All rights reserved."
    }
};

// Current language state
let currentLang = localStorage.getItem('preferredLang') || 'bg';

// Get translation
function t(key) {
    return translations[currentLang][key] || translations['bg'][key] || key;
}

// Update page content with translations
function updatePageContent() {
    // Update document title
    document.title = t('pageTitle');
    
    // Update logo
    const logo = document.querySelector('.logo');
    if (logo) {
        const logoText = logo.childNodes[0]; // Get the text node
        if (logoText && logoText.nodeType === Node.TEXT_NODE) {
            logoText.textContent = t('logo') + ' ';
        }
    }
    
    // Update preloader
    const preloaderText = document.querySelector('.preloader-text');
    if (preloaderText) preloaderText.textContent = t('loading');
    
    // Update navigation
    const navLinks = {
        'services': 'navServices',
        'portfolio': 'navPortfolio',
        'about': 'navAbout',
        'contact': 'navContact'
    };
    
    // Update desktop nav
    document.querySelectorAll('.nav-desktop a').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const section = href.replace('#', '');
            if (navLinks[section]) {
                link.textContent = t(navLinks[section]);
            }
        }
    });
    
    // Update mobile nav
    document.querySelectorAll('.nav-mobile a').forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const section = href.replace('#', '');
            if (navLinks[section]) {
                link.textContent = t(navLinks[section]);
            }
        }
    });
    
    // Update hero section
    const heroBadge = document.querySelector('.hero-content .badge');
    if (heroBadge) heroBadge.textContent = t('heroBadge');
    
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = t('heroTitle') + '<span class="gradient-text">' + t('heroTitleHighlight') + '</span>';
    }
    
    const heroDesc = document.querySelector('.hero-content p');
    if (heroDesc) heroDesc.textContent = t('heroDescription');
    
    const heroBtnPrimary = document.querySelector('.hero-content .btn-primary');
    if (heroBtnPrimary) heroBtnPrimary.textContent = t('heroBtnPrimary');
    
    const heroBtnSecondary = document.querySelector('.hero-content .btn-text');
    if (heroBtnSecondary) heroBtnSecondary.textContent = t('heroBtnSecondary');
    
    // Update services section
    const servicesTitle = document.querySelector('.services .section-title');
    if (servicesTitle) servicesTitle.textContent = t('servicesTitle');
    
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const titleKey = `service${index + 1}Title`;
        const descKey = `service${index + 1}Desc`;
        
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        
        if (title) title.textContent = t(titleKey);
        if (desc) desc.textContent = t(descKey);
    });
    
    // Update about section
    const aboutTitle = document.querySelector('.about .section-title');
    if (aboutTitle) aboutTitle.textContent = t('aboutTitle');
    
    const aboutTexts = document.querySelectorAll('.about-text p');
    if (aboutTexts[0]) aboutTexts[0].innerHTML = t('aboutText1');
    if (aboutTexts[1]) aboutTexts[1].innerHTML = t('aboutText2');
    
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems[0]) {
        const num = statItems[0].querySelector('.stat-num');
        const label = statItems[0].querySelector('.stat-label');
        if (num) num.textContent = t('stat1Value');
        if (label) label.textContent = t('stat1Label');
    }
    if (statItems[1]) {
        const num = statItems[1].querySelector('.stat-num');
        const label = statItems[1].querySelector('.stat-label');
        if (num) num.textContent = t('stat2Value');
        if (label) label.textContent = t('stat2Label');
    }
    
    // Update portfolio section
    const portfolioBadge = document.querySelector('.portfolio-header .badge');
    if (portfolioBadge) portfolioBadge.textContent = t('portfolioBadge');
    
    const portfolioTitle = document.querySelector('.portfolio-header .section-title');
    if (portfolioTitle) portfolioTitle.textContent = t('portfolioTitle');
    
    const portfolioSubtitle = document.querySelector('.portfolio-header .section-subtitle');
    if (portfolioSubtitle) portfolioSubtitle.textContent = t('portfolioSubtitle');
    
    // Update contact section
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) contactTitle.textContent = t('contactTitle');
    
    const contactSubtitle = document.querySelector('.contact-wrapper p');
    if (contactSubtitle) contactSubtitle.textContent = t('contactSubtitle');
    
    // Update footer
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = t('footerCopyright');
}

// Switch language
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        updatePageContent();
        updateLanguageSwitcher();
    }
}

// Update language switcher UI
function updateLanguageSwitcher() {
    // Desktop switcher
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
        const bgBtn = switcher.querySelector('[data-lang="bg"]');
        const enBtn = switcher.querySelector('[data-lang="en"]');
        
        if (bgBtn && enBtn) {
            // Hide active language, show inactive language
            if (currentLang === 'bg') {
                bgBtn.style.display = 'none';
                enBtn.style.display = 'flex';
                enBtn.classList.remove('active');
            } else {
                enBtn.style.display = 'none';
                bgBtn.style.display = 'flex';
                bgBtn.classList.remove('active');
            }
        }
    }
    
    // Mobile switcher
    const switcherMobile = document.getElementById('languageSwitcherMobile');
    if (switcherMobile) {
        const bgBtnMobile = switcherMobile.querySelector('[data-lang="bg"]');
        const enBtnMobile = switcherMobile.querySelector('[data-lang="en"]');
        
        if (bgBtnMobile && enBtnMobile) {
            // Hide active language, show inactive language
            if (currentLang === 'bg') {
                bgBtnMobile.style.display = 'none';
                enBtnMobile.style.display = 'flex';
                enBtnMobile.classList.remove('active');
            } else {
                enBtnMobile.style.display = 'none';
                bgBtnMobile.style.display = 'flex';
                bgBtnMobile.classList.remove('active');
            }
        }
    }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    updateLanguageSwitcher();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, switchLanguage, currentLang };
}

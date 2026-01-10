// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* =========================================
   LANGUAGE SWITCHER
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Desktop language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (typeof switchLanguage === 'function') {
                switchLanguage(lang);
            }
        });
    });
    
    // Mobile language buttons
    const langButtonsMobile = document.querySelectorAll('.lang-btn-mobile');
    langButtonsMobile.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (typeof switchLanguage === 'function') {
                switchLanguage(lang);
                // Close mobile menu after language switch
                const burgerMenu = document.getElementById('burgerMenu');
                const navMobile = document.getElementById('navMobile');
                if (burgerMenu && navMobile) {
                    burgerMenu.classList.remove('active');
                    navMobile.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
});

/* =========================================
   MOBILE BURGER MENU
   ========================================= */
const burgerMenu = document.getElementById('burgerMenu');
const navMobile = document.getElementById('navMobile');
const navLinks = document.querySelectorAll('.nav-mobile .nav-link');

// Toggle burger menu
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMobile.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMobile.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMobile.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMobile.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navMobile.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMobile.classList.contains('active') && 
        !navMobile.contains(e.target) && 
        !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        navMobile.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

/* =========================================
   ANIMATIONS
   ========================================= */

// Hero Animation (Зареждане на началния екран)
const tl = gsap.timeline();

tl.from(".anim-hero", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

// Анимация на 3D въртележката при поява
tl.from(".carousel-scene", {
    duration: 1.5,
    scale: 0,
    rotation: 180,
    opacity: 0,
    ease: "elastic.out(1, 0.75)"
}, "-=0.5");

// Section Titles (Анимация на заглавията при скрол)
gsap.utils.toArray(".anim-title").forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Service cards animation removed per request

// About Text & Stats (Текстът за мен и статистиката)
gsap.from(".anim-text", {
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
});

/* =========================================
   PRELOADER
   ========================================= */
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
    if (!preloader) return;
    preloader.classList.add('preloader-hide');
    setTimeout(() => preloader.remove(), 600);
});

/* =========================================
   PORTFOLIO BUILDER (THUMBNAILS + DRIVE MODAL)
   ========================================= */
const portfolioGrid = document.getElementById('portfolioGrid');
const thumbSrc = './assets/images/img1.jpg';

// Portfolio items with local video files
const portfolioVideos = [
    { tag: 'TikTok', video: './assets/videos/video1.mov', thumb: './assets/images/img10.jpg' },
    { tag: 'Campaign', video: './assets/videos/video2.mov', thumb: './assets/images/img9.jpg' },
    { tag: 'Campaign', video: './assets/videos/video18.mov', thumb: './assets/images/img11.jpg' },
    { tag: 'TikTok - субтитри', video: './assets/videos/video11.mp4', thumb: './assets/images/img16.jpg' },
    { tag: 'Video', video: './assets/videos/video13.MOV', thumb: './assets/images/img4.jpg', landscape: true },
    { tag: 'TikTok - субтитри', video: './assets/videos/Ostavi me.mov', thumb: './assets/images/img17.jpg' },
    { tag: 'Campaign', video: './assets/videos/video13.mov', thumb: './assets/images/img2.jpg' },
    { tag: 'Campaign', video: './assets/videos/video13.mp4', thumb: './assets/images/img19.jpg' },
    { tag: 'TikTok - субтитри', video: './assets/videos/video4.mov', thumb: './assets/images/img1.jpg' },
    { tag: 'Campaign', video: './assets/videos/video5.mov', thumb: './assets/images/img13.jpg' },
    { tag: 'Campaign', video: './assets/videos/video6.mov', thumb: './assets/images/img8.jpg' },
    { tag: 'Campaign', video: './assets/videos/video8.mov', thumb: './assets/images/img15.jpg' },
    { tag: 'Reels', video: './assets/videos/video9.mov', thumb: './assets/images/img3.jpg' },
    { tag: 'Campaign', video: './assets/videos/video12.mov', thumb: './assets/images/img20.jpg' },
    { tag: 'Campaign', video: './assets/videos/video12.mp4', thumb: './assets/images/img5.jpg' },
    { tag: 'Campaign', video: './assets/videos/video19.mov', thumb: './assets/images/img6.jpg' },
    { tag: 'Campaign', video: './assets/videos/video14.mov', thumb: './assets/images/thumbnail2.jpg' },
    { tag: 'TikTok', video: './assets/videos/video15.mp4', thumb: './assets/images/img24.jpg' },
    { tag: 'Campaign', video: './assets/videos/video10.mov', thumb: './assets/images/img23.jpg' },
    { tag: 'Campaign', video: './assets/videos/video17.mov', thumb: './assets/images/img25.jpg' },
    { tag: 'Thumbnail', image: './assets/images/thumbnail1.PNG' },
    { tag: 'Thumbnail', image: './assets/images/img7.jpg' }
];



const openModal = (videoSrc, isLandscape = false) => {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const modalPreloader = document.getElementById('modalPreloader');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    
    if (!modal || !video) {
        console.error('Modal or video element not found');
        return;
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Apply landscape styling if needed
    if (isLandscape) {
        video.style.aspectRatio = '16/9';
        video.style.maxWidth = '95vw';
        video.style.maxHeight = '95vh';
        video.style.width = '95vw';
        video.style.margin = '0 auto';
        video.style.display = 'block';
        if (modalContent) {
            modalContent.style.maxWidth = '95vw';
            modalContent.style.width = '95vw';
        }
    } else {
        video.style.aspectRatio = '9/16';
        video.style.maxWidth = '';
        video.style.maxHeight = '90vh';
        video.style.width = '';
        video.style.margin = '';
        video.style.display = 'block';
        if (modalContent) {
            modalContent.style.maxWidth = 'min(480px, 95vw)';
            modalContent.style.width = 'min(480px, 95vw)';
        }
    }
    
    // Show preloader
    if (modalPreloader) modalPreloader.classList.add('show');
    
    video.muted = false; // Enable sound
    
    // Set and load video
    video.src = videoSrc;
    video.load();
    
    // Hide preloader when ready
    const hidePreloader = () => {
        if (modalPreloader) modalPreloader.classList.remove('show');
        video.play().catch(() => {});
    };
    
    // Hide on any of these events
    video.addEventListener('canplay', hidePreloader, { once: true });
    video.addEventListener('error', hidePreloader, { once: true });
    
    // Always hide after 4 seconds
    setTimeout(hidePreloader, 4000);
};

const openImageModal = (imageSrc) => {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const modalPreloader = document.getElementById('modalPreloader');
    
    if (!modal || !video) {
        console.error('Modal or video element not found');
        return;
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Hide preloader immediately for images
    if (modalPreloader) modalPreloader.classList.remove('show');
    
    // Replace video element with image temporarily
    video.style.display = 'none';
    video.pause();
    video.src = '';
    
    // Create or get image element
    let imgElement = modal.querySelector('.modal-image');
    if (!imgElement) {
        imgElement = document.createElement('img');
        imgElement.className = 'modal-image';
        imgElement.style.cssText = 'width: 100%; height: 100%; object-fit: contain;';
        video.parentElement.appendChild(imgElement);
    }
    
    imgElement.src = imageSrc;
    imgElement.style.display = 'block';
};

const closeModal = () => {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const modalPreloader = document.getElementById('modalPreloader');
    const imgElement = modal ? modal.querySelector('.modal-image') : null;
    
    if (!modal || !video) return;
    
    video.pause();
    video.src = '';
    video.style.display = '';
    
    if (imgElement) {
        imgElement.style.display = 'none';
        imgElement.src = '';
    }
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    if (modalPreloader) modalPreloader.classList.remove('show');
};

const buildPortfolio = () => {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    portfolioVideos.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        const phoneFrame = document.createElement('div');
        phoneFrame.className = 'phone-frame';

        const mediaWrapper = document.createElement('div');
        mediaWrapper.className = 'media-wrapper';

        const img = document.createElement('img');
        img.src = item.image || item.thumb || thumbSrc;
        img.alt = 'Portfolio preview';

        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay';
        const playIcon = document.createElement('span');
        playIcon.className = 'play-icon';
        
        if (item.image) {
            // Search icon for image-only items
            playIcon.innerHTML = '&#128269;'; // 🔍 search icon
        } else {
            // Play icon for video items
            playIcon.textContent = '\u25B6';
        }
        overlay.appendChild(playIcon);

        const meta = document.createElement('div');
        meta.className = 'portfolio-meta';

        const pill = document.createElement('span');
        pill.className = 'pill';
        pill.textContent = item.tag;

        const duration = document.createElement('span');
        duration.className = 'duration';
        duration.textContent = '';

        const open = () => {
            if (item.image) {
                openImageModal(item.image);
            } else {
                openModal(item.video, item.landscape);
            }
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });

        mediaWrapper.appendChild(img);
        mediaWrapper.appendChild(overlay);
        phoneFrame.appendChild(mediaWrapper);
        card.appendChild(phoneFrame);

        meta.appendChild(pill);
        meta.appendChild(duration);
        card.appendChild(meta);

        portfolioGrid.appendChild(card);
    });
};

// (moved: call after lazy loader is defined)

/* =========================================
   LAZY LOADING (IntersectionObserver)
   ========================================= */
const observeMediaLazy = (el) => {
    if (!('IntersectionObserver' in window)) {
        if (!el.src && el.dataset.src) {
            el.src = el.dataset.src;
            if (el.tagName === 'VIDEO') {
                el.preload = 'metadata';
                el.load();
            }
        }
        return;
    }

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!el.src && el.dataset.src) {
                    el.src = el.dataset.src;
                    if (el.tagName === 'VIDEO') {
                        el.preload = 'metadata';
                        el.load();
                    }
                }
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '200px', threshold: 0.15 });

    io.observe(el);
};

// Set up lazy loading for carousel videos
document.addEventListener('DOMContentLoaded', () => {
    // Build portfolio after lazy helper exists
    buildPortfolio();

    // Observe carousel videos lazily
    const carouselMedia = document.querySelectorAll('.carousel-face img, .carousel-face video');
    carouselMedia.forEach(el => {
        if (el.tagName === 'VIDEO') el.preload = 'none';
        observeMediaLazy(el);
    });

    // Set up modal event listeners
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Close button clicked');
            closeModal();
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                console.log('Modal background clicked');
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            console.log('Escape key pressed');
            closeModal();
        }
    });
});

// --- Modal Logic (Модален прозорец за снимките) ---
/*
const modal = document.getElementById("media-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");
const carouselFaces = document.querySelectorAll(".carousel-face");

// Отваряне на модала при клик върху елемент от въртележката
carouselFaces.forEach(face => {
    face.addEventListener("click", function() {
        // Намираме изображението вътре в елемента
        const img = this.querySelector("img");
        
        if (img) {
            modal.style.display = "flex";
            // Добавяме малка анимация при отваряне
            gsap.fromTo(modalImg, 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
            );
            modalImg.src = img.src;
        }
    });
});

// Функция за затваряне
function closeModal() {
    gsap.to(modalImg, {
        scale: 0.8, 
        opacity: 0, 
        duration: 0.2, 
        onComplete: () => {
            modal.style.display = "none";
        }
    });
}

closeBtn.addEventListener("click", closeModal);

// Затваряне при клик извън снимката
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});
*/
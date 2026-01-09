// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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

// Service Cards (Картите с услугите)
gsap.from(".anim-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

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
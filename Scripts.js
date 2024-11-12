// Animations using GSAP
document.addEventListener("DOMContentLoaded", () => {
    // Navbar animation
    gsap.from(".navbar", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "bounce"
    });

    // Hero section animation
    gsap.from(".hero-content h1", {
        duration: 1.5,
        x: -200,
        opacity: 0,
        ease: "power3.out"
    });
    gsap.from(".hero-content p", {
        duration: 1.5,
        x: 200,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });
    gsap.from(".cta-button", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "back",
        delay: 1
    });

    // Services section animation
    gsap.from(".service-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Contact form animation
    gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
});

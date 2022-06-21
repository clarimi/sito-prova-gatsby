import { gsap, Power1, Power4 } from "gsap";

export function animaPreloader(animaCopertine) {
    var body = document.querySelector("body");

    gsap.to("#preloader", {
        opacity: 0,
        duration: 0.8,
        delay: 2,
        onStart: () => {
            if (animaCopertine) {
                animaCopertine();
            }
        },
        onComplete: () => {
            body.classList.remove("preloader_active");
            body.classList.remove("preloader_ready");
        },
        ease: Power1.easeOut
    });

    gsap.to("#the", {
        y: -400,
        duration: 1,
        delay: 1,
        ease: Power1.easeOut
    });

    gsap.to("#veroneser", {
        y: 400,
        duration: 1,
        delay: 1,
        ease: Power1.easeOut
    })
    gsap.to("#testocentro", {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: Power1.easeOut
    })
}
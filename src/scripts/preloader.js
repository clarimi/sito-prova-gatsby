import { gsap, Power1 } from "gsap";

export function animaPreloader(animaCopertine) {
    if (typeof document !== `undefined`) {

        // Do something with the document
        // Call your modules and libraries
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

    } else {
        return {
            // Do something different while window and document are not defined on the server
        };
    }

}
gsap.registerPlugin(ScrollTrigger);

const bg = document.querySelector('.bg-1');
    
    let timeLineFondo = gsap.timeline({
        scrollTrigger:{
        trigger: bg,
        start : "10% 5%",
        end: "=+200% 100%",
        scrub: 1,
        ease: "power2.out"
        }
    });
    timeLineFondo.to(bg,{ y: -50,opacity: 0, skewY: -10, });

let tlsHabilidades = gsap.timeline({
    scrollTrigger:{
        trigger: ["#habilidades"],
        // markers: true,
        // Primer valor top de el objeto segundo top de la pantalla
        start: "-160% top",
        end: '=-20% 0',
        scrub: 5,
        ease: "power2.out"
    }
});
tlsHabilidades.from("#habilidades",{ x: 300, skewX: 0,opacity: 0,});

let tlsProyectos = gsap.timeline({
    scrollTrigger:{
        trigger: [".wave"],
        // markers: true,
        // Primer valor top de el objeto segundo top de la pantalla
        start: "0% top",
        end: '120% 0%',
        scrub: 3,
        ease: "power2.out"
    }
});

tlsProyectos.from("#proyectos",{ x: -300, skewX: 30,opacity: 0});

let tlsPreparacion = gsap.timeline({
    scrollTrigger:{
        trigger: ["#preparacion"],
        ease: "power2.out",
        start: "-140% top",
        end: '50% bottom',
        scrub: 3,
    }
});

tlsPreparacion.from("#preparacion",{ x: 300, skewX: 10, opacity: 0});


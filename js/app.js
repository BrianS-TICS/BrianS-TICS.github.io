gsap.registerPlugin(ScrollTrigger);

//addEvents();

let posicionEnScreen =  window.scrollY;

window.onscroll = function() {
    console.log(posicionEnScreen);
    const navegacionMovil = document.querySelector('.navegacion-movil');
     // RESTA ES IGUAL A SCROLL HACIA arriba
    if ( (posicionEnScreen + 25 ) < window.scrollY) {
        navegacionMovil.classList.add('desaparecer-barra', 'display-none');

        posicionEnScreen = window.scrollY;
    }
    // SUMA ES IGUAL A SCROLL HACIA abajo
    if ( ( posicionEnScreen - 25 ) > window.scrollY) {
        navegacionMovil.classList.add('aparecer-barra');
        navegacionMovil.classList.remove('desaparecer-barra');
        navegacionMovil.classList.remove('display-none');

        posicionEnScreen = window.scrollY;
    }
};

//function addEvents(){
   // document.addEventListener('DOMContentLoaded', playAnimaciones);
//}

//function playAnimaciones(){
    // // Selectores DOM
    // const imgPresentacion = document.querySelector('#imagen-presentacion');
    // const txtPresentacion = document.querySelector('#principal_texto');

    // // Linas de tiempo
    // const timelineInicio = gsap.timeline( {defaults: { skewX: 45, duration: 2.5, ease: "back.out(1.7)", opacity : 0} });


    // timelineInicio
    //     .from(imgPresentacion,{x: -100, y: 50,})
    //     .from(txtPresentacion,{x: 100, y: 50,}, "-=2.5");
//}

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


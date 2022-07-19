
let texto = document.querySelector('.principal_texto');
const divsCirculos = document.querySelectorAll('.circulo');
const divsIconos = document.querySelectorAll('.iconos');
const figura = document.querySelector('.figura');

// Primera animacion

addEventListener('DOMContentLoaded', InicioAnimaciones());

function InicioAnimaciones(){
  anime({
    targets: [divsCirculos],
    duration: 1500,
    //easing: 'easeInOutSine',
    direction: 'aternate',
    loop: 1,

    
    translateX: [-150,0]
  });

  anime({
    targets: divsIconos,
    duration: 1500,
    direction: 'aternate',
    loop: 1,

    translateX: [150,0]
  });
  
  anime({
    targets: texto,
    skew: 10,

    scale: [1.5,1],
    rotate: '1turn',
    
    duration: 2000,
  });

  anime({
    targets: figura,
    rotate : '1turn',
    scale: [0,4],

    //loop: true,
    translateX: [-110],
    translateY: [0, 35],

    duration: 7000
  });

}
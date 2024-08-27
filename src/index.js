document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('show');
});

let animationLogo = anime({
    targets: "#logo",
    translateX: ['-100vw', '0px'], 
    opacity: [0, 1], 
    duration: 1000, 
    easing: 'easeOutQuad'
})

let animationTexto = anime({
    targets: ".principalText",
    translateX: ['-100vw', '0px'], 
    opacity: [0, 1], 
    duration: 4000, 
    easing: 'easeOutQuad' // Tipo de easing para suavizar a animação
});

let animationFotoJogadores = anime ({
    targets: '.image-furiaJogadores',
    translateX: ['100vw', '0px'], 
    opacity: [0, 1], 
    duration: 4000, 
    easing: 'easeOutQuad'
})

let animatinPlayerPhoto = anime ({
    targets:".playerphoto",
    translateX: ['100vw', '0px'], 
    opacity: [0, 1], 
    duration: 4000, 
    easing: 'easeOutQuad'
})
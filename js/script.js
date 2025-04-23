// Seleciona os botões de navegação
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Seleciona o contêiner de slides e inicializa variáveis
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const slideCount = slideElements.length;
let index = 0; // Índice do slide atual
let autoSlide; // Intervalo para troca automática

// Verifica se os elementos necessários existem no DOM
if (nextButton && prevButton && slides) {
// Adiciona eventos de clique nos botões de navegação
    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide); // Pausa a troca automática
        nextSlide(); // Vai para o próximo slide
        restartAutoSlide(); // Reinicia a troca automática
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoSlide); // Pausa a troca automática
        prevSlide(); // Vai para o slide anterior
        restartAutoSlide(); // Reinicia a troca automática
    });

    // Inicia a troca automática de slides
    autoSlide = setInterval(nextSlide, 5000);
} else {
    console.error('Elementos necessários para o carrossel não foram encontrados.');
}

// Função para ir para o próximo slide
function nextSlide() {
    index = (index + 1) % slideCount; // Incrementa o índice e volta ao início se necessário
    updateCarousel();
}

// Função para ir para o slide anterior
function prevSlide() {
    index = (index - 1 + slideCount) % slideCount; // Decrementa o índice e volta ao final se necessário
    updateCarousel();
    }

// Função que move o wrapper de slides
function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`; // Move os slides
    slides.style.transition = 'transform 0.5s ease-in-out'; // Adiciona transição suave
}

// Função para reiniciar a troca automática de slides
function restartAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

// Pausa a troca automática ao passar o mouse sobre o carrossel
slides.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

// Retoma a troca automática ao remover o mouse do carrossel
slides.addEventListener('mouseleave', () => {
    restartAutoSlide();
});
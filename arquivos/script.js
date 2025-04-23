// Seleciona o contêiner dos slides e conta quantos há
const slides = document.querySelector('.slides');
const slideCount = slides.children.length;
let index = 0; // Índice do slide atual

// Ao clicar em “Próximo”, avança para o próximo slide
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slideCount; // Volta ao início após o último
  updateCarousel();                // Atualiza posição
});

// Ao clicar em “Anterior”, retorna um slide
document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount; // Lógica circular
  updateCarousel();                              // Atualiza posição
});

// Função que move o wrapper de slides
function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Troca automática a cada 5 segundos
setInterval(() => {
  index = (index + 1) % slideCount;
  updateCarousel();
}, 5000);


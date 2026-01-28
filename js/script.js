const card = document.querySelector('.card');
const images = document.querySelectorAll('.carousel img');
const dedicatoria = document.getElementById('dedicatoria');
const music = document.getElementById('bg-music');

music.volume = 0.4;

let index = 0;
let autoplay;
let hasPlayedMusic = false;

/* MENSAJES POR FOTO */
const mensajes = [
  "¿Pero que ven mis oídos?",
  "Hoy es un día muy especial para ti",
  "Aunque digas que no es especial",
  "No sabes cuan feliz estoy por ti",
  "Eres mi máquina, mi tifón, mi fiera, mi número uno :P",
  "¡Feliz cumpleaños mi amor! 🎉"
];

/* ABRIR CARTA + MÚSICA SOLO PRIMER CLIC */
function toggleCard() {
  card.classList.toggle('open');

  if (!hasPlayedMusic) {
    music.play().catch(() => {});
    hasPlayedMusic = true;
  }
}

/* MOSTRAR IMAGEN + TEXTO */
function showImg(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');

  dedicatoria.style.opacity = 0;
  setTimeout(() => {
    dedicatoria.innerHTML = `<strong>${mensajes[i]}</strong>`;
    dedicatoria.style.opacity = 1;
  }, 200);
}

/* CONTROLES */
function nextImg(e) {
  e.stopPropagation();
  index = (index + 1) % images.length;
  showImg(index);
  resetAutoplay();
}

function prevImg(e) {
  e.stopPropagation();
  index = (index - 1 + images.length) % images.length;
  showImg(index);
  resetAutoplay();
}

/* AUTOPLAY */
function startAutoplay() {
  autoplay = setInterval(() => {
    index = (index + 1) % images.length;
    showImg(index);
  }, 3000);
}

function resetAutoplay() {
  clearInterval(autoplay);
  startAutoplay();
}

/* INICIAL */
showImg(0);
startAutoplay();

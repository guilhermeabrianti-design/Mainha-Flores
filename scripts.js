 
// Esteira horizontal de texto

const items = [
  "Flores Frescas ✦",
  "Entrega no Mesmo Dia ✦",
  "Arranjos Personalizados ✦",
  "Pedidos via WhatsApp ✦",
  "Cestas e Presentes ✦"
];

function render(items) {
  const track = document.getElementById("ticker-track");

  if (!track) return;

  const doubled = [...items, ...items];

  track.innerHTML = doubled
    .map(text => `<div class="ticker-item">${text}</div>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  render(items);
});

function setSpeed(seconds) {
  const track = document.getElementById("ticker-track");
  if (track) track.style.animationDuration = seconds + "s";
}

function pause() {
  const track = document.getElementById("ticker-track");
  if (track) track.style.animationPlayState = "paused";
}

function resume() {
  const track = document.getElementById("ticker-track");
  if (track) track.style.animationPlayState = "running";
}

// Cookies  

document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');

    document.getElementById('cookie-consent').style.display = 'none';
});

//  menu mobile


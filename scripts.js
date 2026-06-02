 
// Esteira horizontal de texto

 const items = [
    "Flores Frescas ✦",
    "Entrega no Mesmo Dia ✦",
    "Arranjos Personalizados ✦",
    "Pedidos via WhatsApp ✦",
    "Cestas e Presentes ✦"
  ]

  function render(items) {
    const track = document.getElementById("ticker-track");
    // Duplica os itens para o loop ser contínuo
    const doubled = [...items, ...items];
    track.innerHTML = doubled
      .map(text => `<div class="ticker-item">${text}</div>`)
      .join("");
  }

   render(items);

  // Controle de velocidade via JS
  function setSpeed(seconds) {
    document.getElementById("ticker-track").style.animationDuration = seconds + "s";
  }

  // Pausar/retomar via JS
  function pause() {
    document.getElementById("ticker-track").style.animationPlayState = "paused";
  }

  function resume() {
    document.getElementById("ticker-track").style.animationPlayState = "running";
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

// Seleciona os elementos no DOM
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu() {
  // Alterna a classe 'active' nos elementos
  nav.classList.toggle('active');
  btnMobile.classList.toggle('active');
}

// Adiciona o evento de clique ao botão
btnMobile.addEventListener('click', toggleMenu);
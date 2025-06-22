// Bonequinhos SVG pulando
const quantidade = 15;

for (let i = 0; i < quantidade; i++) {
  const svg = document.createElement('div');
  svg.classList.add('svg-boneco');
  svg.style.left = Math.random() * 100 + 'vw';
  svg.style.top = Math.random() * 90 + 'vh';
  svg.style.animationDuration = (Math.random() * 2 + 2) + 's';
  svg.style.width = (Math.random() * 20 + 30) + 'px';

  svg.innerHTML = `
    <svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="20" r="10" />
      <line x1="50" y1="30" x2="50" y2="70" stroke="white" stroke-width="5"/>
      <line x1="50" y1="40" x2="30" y2="60" stroke="white" stroke-width="5"/>
      <line x1="50" y1="40" x2="70" y2="60" stroke="white" stroke-width="5"/>
      <line x1="50" y1="70" x2="35" y2="90" stroke="white" stroke-width="5"/>
      <line x1="50" y1="70" x2="65" y2="90" stroke="white" stroke-width="5"/>
    </svg>
  `;
  document.body.appendChild(svg);
}

// 🔥 Frases escondidas de impacto, charme e sedução
const mensagens = [
  "Se você fosse crime, eu já tava preso por passar muito tempo pensando em você.",
  "Se você fosse dívida, eu parcelava só pra ficar com você mais tempo.",
  "Se fosse mentira, eu ia querer acreditar só pra ficar perto.",
  "Se você fosse problema, eu ia querer resolver até sem ajuda.",
  "Se fosse cilada, eu ia cair só pra passar mais tempo contigo."
];

// 📨 Abre o modal com frase aleatória
function abrirMensagem() {
  const modal = document.getElementById('modal');
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById('mensagem').innerText = mensagem;
  modal.style.display = 'block';
}

// ❌ Fecha o modal
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

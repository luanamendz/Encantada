// Quantidade de bonequinhos SVG
const quantidade = 15;

for (let i = 0; i < quantidade; i++) {
  const svg = document.createElement('div');
  svg.classList.add('svg-boneco');
  svg.style.left = Math.random() * 100 + 'vw';
  svg.style.top = Math.random() * 90 + 'vh';
  svg.style.animationDuration = (Math.random() * 2 + 2) + 's';
  svg.style.width = (Math.random() * 20 + 30) + 'px';

  // SVG estilizado, boneco stickman minimalista branco
  svg.innerHTML = `
    <svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Bonequinho">
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

// Mensagens de carinho
const mensagens = [
  "Você é incrível, não esquece disso.",
  "Tá tudo bem se nem tudo estiver bem agora.",
  "O mundo é melhor porque você existe.",
  "Se olha com amor. Você é maravilhosa.",
  "Tem muita gente que te ama mais do que imagina.",
  "Você é luz até nos dias nublados.",
  "O seu jeito faz o mundo mais bonito.",
  "Você é uma obra de arte em movimento.",
  "Tudo passa... e você fica cada vez mais forte.",
  "Você tem uma energia única. Protege ela."
];

// Função pra abrir modal com mensagem aleatória
function abrirMensagem() {
  const modal = document.getElementById('modal');
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById('mensagem').innerText = mensagem;
  modal.style.display = 'block';
}

// Função pra fechar modal
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

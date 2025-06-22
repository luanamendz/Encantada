// 🧍‍♂️ Frases nos bonecos
const mensagens = [
  "Se você fosse crime, eu já tava preso.",
  "Se fosse dívida, eu parcelava só pra ficar mais.",
  "Se fosse mentira, ia querer acreditar.",
  "Se você fosse problema, eu ia resolver.",
  "Se fosse cilada, eu ia cair feliz."
];

// Quantidade = quantidade de frases
const quantidade = mensagens.length;

// Gerando bonecos
for (let i = 0; i < quantidade; i++) {
  const svg = document.createElement('div');
  svg.classList.add('svg-boneco');
  svg.style.left = Math.random() * 100 + 'vw';
  svg.style.top = Math.random() * 90 + 'vh';
  svg.style.animationDuration = (Math.random() * 2 + 2) + 's';
  svg.style.width = (Math.random() * 20 + 60) + 'px';

  svg.innerHTML = `
    <div class="boneco-com-frase">
      <svg viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="20" r="10" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="white" stroke-width="5"/>
        <line x1="50" y1="40" x2="30" y2="60" stroke="white" stroke-width="5"/>
        <line x1="50" y1="40" x2="70" y2="60" stroke="white" stroke-width="5"/>
        <line x1="50" y1="70" x2="35" y2="90" stroke="white" stroke-width="5"/>
        <line x1="50" y1="70" x2="65" y2="90" stroke="white" stroke-width="5"/>
      </svg>
      <p class="frase-boneco">${mensagens[i]}</p>
    </div>
  `;

  document.body.appendChild(svg);
}

// 🎈 Chuva de corações
const createHeart = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 1 + 0.7) + 's';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
};
setInterval(createHeart, 50);

// 💌 Mensagens de carinho
const mensagens = [
  "Você é muito mais forte do que imagina.",
  "Se soubesse o quanto é incrível, nunca duvidaria de si mesma.",
  "Isso vai passar, e você vai sair ainda mais maravilhosa disso tudo.",
  "A vida te escolheu porque sabe que você é luz pra quem te cerca.",
  "Respira fundo... você é amada, você é necessária, você é única.",
  "Só queria te lembrar: EU ACREDITO EM VOCÊ. Sempre.",
  "Você é exatamente tudo que o mundo precisa.",
  "Que nunca te falte amor próprio e a certeza do quanto é especial.",
  "Se cuida, você é uma joia rara no mundo.",
  "Sabe aquele tipo de pessoa que muda o dia dos outros? É você.",
  "Te admiro mais do que você imagina. Nunca esquece disso."
];

// 📨 Abrir mensagem
function abrirMensagem() {
  const modal = document.getElementById('modal');
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById('mensagem').innerText = mensagem;
  modal.style.display = 'block';
}

// ❌ Fechar modal
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

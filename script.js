document.getElementById("spin-button").addEventListener("click", function () {
  const spinner = document.getElementById("spinner");
  const result = document.getElementById("result");
  const inicio = parseInt(document.getElementById("inicio").value);
  const fim = parseInt(document.getElementById("fim").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (
    isNaN(inicio) ||
    isNaN(fim) ||
    isNaN(quantidade) ||
    inicio >= fim ||
    quantidade <= 0
  ) {
    result.style.display = "block";
    result.style.color = "#FF4500";
    result.textContent = "Por favor, insira valores válidos.";
    return;
  }

  result.style.display = "none";
  let numerosSorteados = [];

  // Tocar áudio de Big Win imediatamente após clicar
  const audio = document.getElementById("bigwin-audio");
  audio.play();

  // Animação de sorteio
  let interval = setInterval(() => {
    const currentNumber =
      Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    spinner.textContent = `🎰 ${currentNumber} 🎰`;
  }, 100);

  // Sorteia múltiplos números após a animação
  setTimeout(() => {
    clearInterval(interval);
    for (let i = 0; i < quantidade; i++) {
      const sorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
      numerosSorteados.push(sorteado);
    }
    spinner.textContent = `🎰 ${numerosSorteados.join(", ")} 🎰`;
    result.style.display = "block";
  }, 3000); // 3 segundos de animação
});

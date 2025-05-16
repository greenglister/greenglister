function calcularPontuacao() {
  let total = 0;
  const selects = document.querySelectorAll('.select-pontuacao');

  for (let select of selects) {
    if (select.value === "") {
      alert("Por favor, responda todas as perguntas antes de calcular.");
      return;
    }

    total += parseInt(select.value);
  }

  window.location.href = `resultado.html?pontuacao=${total}`;
}

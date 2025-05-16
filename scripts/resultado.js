const urlParams = new URLSearchParams(window.location.search);
const pontuacao = parseInt(urlParams.get('pontuacao'));

const nivelEl = document.getElementById("nivel-emissao");
const mensagemEl = document.getElementById("mensagem-emissao");
const setaEl = document.getElementById("seta");

let nivel = "";
let mensagem = "";
let posicao = 0;

if (pontuacao <= 20) {
    nivel = "MUITO BAIXA";
    mensagem = "Sua pegada de carbono está muito abaixo da média. Isso indica que você tem hábitos altamente sustentáveis e um compromisso admirável com o meio ambiente. Continue sendo um exemplo de consciência ecológica!";
    posicao = 0;
} else if (pontuacao <= 35) {
    nivel = "BAIXA";
    mensagem = "Você apresenta uma pegada de carbono baixa, o que demonstra escolhas conscientes em sua rotina. Há sempre algo a melhorar, mas seu impacto ambiental já está em um bom caminho.";
    posicao = 1;
} else if (pontuacao <= 50) {
    nivel = "MODERADA";
    mensagem = "Sua pegada de carbono é moderada. Isso significa que você tem hábitos equilibrados, mas há espaço para mudanças que podem reduzir ainda mais seu impacto ambiental. Pequenas ações fazem grande diferença!";
    posicao = 2;
} else if (pontuacao <= 65) {
    nivel = "ALTA";
    mensagem = " Sua emissão de CO₂ está acima da média. Isso sugere que seus hábitos geram um impacto ambiental significativo. Avaliar e ajustar comportamentos pode ajudar bastante na redução das emissões.";
    posicao = 3;
} else {
    nivel = "MUITO ALTA";
    mensagem = "Sua pegada de carbono está muito acima da média. É importante repensar seu estilo de vida e buscar alternativas mais sustentáveis. O planeta precisa de ações conscientes! Cada escolha conta.";
    posicao = 4;
}

nivelEl.innerText = nivel;
mensagemEl.innerText = mensagem;

const faixaLargura = document.querySelector(".barra-emissao").offsetWidth / 5;
const setaOffset = faixaLargura * posicao + faixaLargura / 2 - 10;

document.querySelectorAll('.barra-emissao .faixa')[posicao].classList.add('destacar');
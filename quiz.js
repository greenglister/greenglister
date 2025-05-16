const quizData = [
    {
        question: "O que melhor define sustentabilidade?",
        opcoes: [
            "a) Termo que se refere exclusivamente à preservação ambiental.",
            "b) Investir no desenvolvimento de produtos com matéria-prima da floresta.",
            "c) Suprir necessidades do presente sem esgotar recursos para o futuro."
        ],
        answer: 2
    },
    {
        question: "Qual das opções não é uma energia renovável?",
        opcoes: [
            "a) Gás natural",
            "b) Hídrica",
            "c) Solar"
        ],
        answer: 0
    },
    {
        question: "Quais os principais objetivos do desenvolvimento sustentável?",
        opcoes: [
            "a) Desenvolvimento econômico e a conservação ambiental.",
            "b) Os recursos naturais se esgotarem.",
            "c) Alcançar a segurança alimentar."
        ],
        answer: 0
    },
    {
        question: "Como consumir de forma consciente?",
        opcoes: [
            "a) Trocando objetos sempre que um novo for lançado",
            "b) Utilizando recursos naturais para satisfazer necessidades atuais e futuras",
            "c) Comprando produtos apenas pelo preço mais baixo"
        ],
        answer: 1
    },
    {
        question: "Qual das alternativas abaixo não se encaixa na sustentabilidade ambiental?",
        opcoes: [
            "a) Preservação do meio ambiente",
            "b) Reduzir, reutilizar e reciclar",
            "c) Investimentos em educação pública visando qualidade do ensino"
        ],
        answer: 2
    },
    {
        question: "Qual meio de transporte gera mais poluição?",
        opcoes: [
            "a) Carro movido a gasolina",
            "b) Carro elétrico",
            "c) Bicicleta"
        ],
        answer: 0
    },
    {
        question: "Se todos vivessem em países com alta pegada ecológica, o que aconteceria?",
        opcoes: [
            "a) Os recursos seriam suficientes ",
            "b) Tecnologia resolveria tudo",
            "c) Os recursos se esgotariam rápido"
        ],
        answer: 2
    },
    {
        question: "Qual das ações abaixo ajuda a reduzir a pegada ecológica?",
        opcoes: [
            "a) Usar sacolas plásticas descartáveis.",
            "b)  Descartar lixo em locais inadequados.",
            "c) Optar por transporte público ou bicicleta."
        ],
        answer: 2
    },
    {
        question: "Qual é um dos principais desafios para alcançar a sustentabilidade global?",
        opcoes: [
            "a) Falta de tecnologia.",
            "b) Descarte inadequado de resíduos e uso excessivo de recursos naturais.",
            "c) Falta de interesse das pessoas."
        ],
        answer: 1
    },
    {
        question: "Qual a função da reciclagem?",
        opcoes: [
            "a) Reduzir a quantidade de resíduos e transformar materiais usados em novos produtos.",
            "b) Aumentar o consumo de materiais descartáveis para estimular a economia.",
            "c) Armazenar lixo em aterros sanitários sem reaproveitamento."
        ],
        answer: 0
    }
];

let currentQuestion = 0
let acertos = 0

const quiz = document.getElementById('quiz')
const resultado = document.getElementById('resultado')
const barraProgresso = document.getElementById('barraProgresso')

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        quiz.innerHTML = ''

        const resultContainer = document.getElementById("resultado")
        const resultTitle = document.createElement("h2")
        const resultText = document.createElement("p")
        const refazerButton = document.createElement("a")
        const totalQuestoes = quizData.length

        if (acertos <= 3) {
            resultTitle.textContent = `Você acertou ${acertos} de ${totalQuestoes} perguntas!`
            resultText.textContent = "Vamos começar a aprender mais sobre sustentabilidade! Não se preocupe, o importante é começar. Sustentabilidade é cuidar do planeta para um futuro melhor. Explore nosso conteúdo e refaça o quiz para continuar aprendendo!"
            refazerButton.textContent = "Refazer o Quiz"
            refazerButton.href = "quiz.html"
        } else if (acertos <= 6) {
            resultTitle.textContent = `Você acertou ${acertos} de ${totalQuestoes} perguntas!`
            resultText.textContent = "Muito bom! Você já conhece bastante sobre sustentabilidade. Você está no caminho certo para ajudar o meio ambiente. Continue aprendendo e colocando em prática ações sustentáveis no seu dia a dia. Pequenas mudanças geram grandes impactos positivos!"
            refazerButton.textContent = "Refazer o Quiz"
            refazerButton.href = "quiz.html"
        } else if (acertos <= 10) {
            resultTitle.textContent = `Você acertou ${acertos} de ${totalQuestoes} perguntas!`
            resultText.textContent = "Parabéns! Você tem um ótimo conhecimento sobre sustentabilidade! Seu entendimento sobre práticas sustentáveis e os Objetivos de Desenvolvimento Sustentável (ODS) é excelente. Continue compartilhando esse conhecimento e inspirando outras pessoas a adotarem atitudes conscientes."
            refazerButton.textContent = "Refazer o Quiz"
            refazerButton.href = "quiz.html"
        } else {
            resultTitle.textContent = `Parabéns! Você acertou ${acertos} de ${totalQuestoes} perguntas!`
            resultText.textContent = "Incrível! Você é um verdadeiro defensor da sustentabilidade! Seu conhecimento é exemplar e você está preparado para fazer a diferença no mundo."
            refazerButton.textContent = "Refazer o Quiz"
            refazerButton.href = "quiz.html"
        }

        resultContainer.appendChild(resultTitle)
        resultContainer.appendChild(resultText)
        resultContainer.appendChild(refazerButton)
        return
    }


    const data = quizData[currentQuestion];
    quiz.innerHTML = `
            <div class="question">
            <strong>${currentQuestion + 1}. ${data.question}</strong>
            </div>
            <div class="opcoes">
            ${data.opcoes.map((opt, i) => `<button onclick="checkAnswer(${i}, this)">${opt}</button>`).join('')}
            </div>
            `;
    updateProgress()
}

function checkAnswer(selected, btn) {
    const certaIndex = quizData[currentQuestion].answer
    const buttons = document.querySelectorAll('.opcoes button')

    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === certaIndex) {
            button.classList.add('certa')
        } else if (index === selected) {
            button.classList.add('errada')
        }
    });

    if (selected === certaIndex) acertos++

    setTimeout(() => {
        currentQuestion++
        loadQuestion()
    }, 1000)
}

function updateProgress() {
    const progress = ((currentQuestion) / quizData.length) * 100;
    barraProgresso.style.width = progress + '%'
}

loadQuestion()
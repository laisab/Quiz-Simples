const questao_facil = [
    {
        questao: "Qual é a capital da China?",
        respostas: [
            {id: 1, texto: "São Paulo", correta: false},
            {id: 2, texto: "Pequim", correta: true},
            {id: 3, texto: "Tóquio", correta: false},
            {id: 4, texto: "Seul", correta: false}
        ]
    },

    {
        questao: "Qual é a fórmula da água?",
        respostas: [
            {id: 1, texto: "H2O", correta: true},
            {id: 2, texto: "CO2", correta: false},
            {id: 3, texto: "O2", correta: false},
            {id: 4, texto: "NO2", correta: false}
        ]
    },

    {
        questao: "Quem foi o autor da Mona Lisa?",
        respostas: [
            {id: 1, texto: "Leonardo Da Vinci", correta: true},
            {id: 2, texto: "Picasso", correta: false},
            {id: 3, texto: "Van Gogh", correta: false},
            {id: 4, texto: "Tarsila do Amaral", correta: false}
        ]
    },

    {
        questao: "Qual é o maior oceano?",
        respostas: [
            {id: 1, texto: "Atlântico", correta: false},
            {id: 2, texto: "Pacífico", correta: true},
            {id: 3, texto: "Índico", correta: false},
            {id: 4, texto: "Ártico", correta: false}
        ]
    },

    {
        questao: "Quantos continentes existem?",
        respostas: [
            {id: 1, texto: "5 (cinco) continentes", correta: false},
            {id: 2, texto: "7 (sete) continentes", correta: false},
            {id: 3, texto: "9 (nove) continentes", correta: false},
            {id: 4, texto: "6 (seis) continentes", correta: true}
        ]
    }
]

const questao_medio = [
    {
        questao: "O que é transformado pelo processo de fotossíntese?",
        respostas: [
            {id: 1, texto: "Luz em Energia", correta: true},
            {id: 2, texto: "Água em Gelo", correta: false},
            {id: 3, texto: "Luz em Calor", correta: false},
            {id: 4, texto: "Sólido em Gasoso", correta: false}
        ]
    },

    {
        questao: "Quem foi o inventor do WWW (World Wide Web)?",
        respostas: [
            {id: 1, texto: "Bill Gates", correta: false},
            {id: 2, texto: "Steve Jobs", correta: false},
            {id: 3, texto: "Tim Berners-Lee", correta: true},
            {id: 4, texto: "Ada Lovelace", correta: false}
        ]
    },

    {
        questao: "Qual foi o ano em que o homem pisou na lua?",
        respostas: [
            {id: 1, texto: "1959", correta: false},
            {id: 2, texto: "1969", correta: true},
            {id: 3, texto: "1968", correta: false},
            {id: 4, texto: "1958", correta: false}
        ]
    },

    {
        questao: "Qual o elemento químico representado por 'Au'?",
        respostas: [
            {id: 1, texto: "Ouro", correta: true},
            {id: 2, texto: "Prata", correta: false},
            {id: 3, texto: "Bronze", correta: false},
            {id: 4, texto: "Alumínio", correta: false}
        ]
    },

    {
        questao: "Qual planeta possui anéis?",
        respostas: [
            {id: 1, texto: "Marte", correta: false},
            {id: 2, texto: "Netuno", correta: false},
            {id: 3, texto: "Vênus", correta: false},
            {id: 4, texto: "Saturno", correta: true}
        ]
    }
]

const questao_dificil = [
    {
        questao: "Qual é a teoria do gato vivo e morto ao mesmo tempo?",
        respostas: [
            {id: 1, texto: "Schrodinger", correta: true},
            {id: 2, texto: "Schondiger", correta: false},
            {id: 3, texto: "Heisenberg", correta: false},
            {id: 4, texto: "Engels", correta: false}
        ]
    },

    {
        questao: "Qual é o menor osso do corpo humano?",
        respostas: [
            {id: 1, texto: "Martelo", correta: false},
            {id: 2, texto: "Estribo", correta: true},
            {id: 3, texto: "Falange", correta: false},
            {id: 4, texto: "Bigorna", correta: false}
        ]
    },

    {
        questao: "Qual foi a causa do primeiro bug em computadores?",
        respostas: [
            {id: 1, texto: "Rato", correta: false},
            {id: 2, texto: "Mariposa", correta: true},
            {id: 3, texto: "Pinguim", correta: false},
            {id: 4, texto: "Cobra", correta: false}
        ]
    },

    {
        questao: "Quem foi o mestre de Platão?",
        respostas: [
            {id: 1, texto: "Sócrates", correta: true},
            {id: 2, texto: "Aristóteles", correta: false},
            {id: 3, texto: "Karl Marx", correta: false},
            {id: 4, texto: "Pitágoras", correta: false}
        ]
    },

    {
        questao: "Qual é a letra que não aparece na tabela periódica?",
        respostas: [
            {id: 1, texto: "A", correta: false},
            {id: 2, texto: "L", correta: false},
            {id: 3, texto: "J", correta: true},
            {id: 4, texto: "W", correta: false}
        ]
    }
]

const telaInicio = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const btnNivel = document.getElementById("nivel-btn");
const questaoElemento = document.getElementById("question");
const btnResposta = document.getElementById("answer-buttons");
const btnProximo = document.getElementById("next-btn");

let questaoAtual = [];
let indiceQuestaoAtual = 0;
let pontuacao = 0;

btnNivel.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const nivel = e.target.dataset.level;
        iniciarQuiz(nivel);
    })
})

function iniciarQuiz(nivel){
    // Esconder a tela de início e exibir o quiz
    telaInicio.style.display = "none";
    telaQuiz.style.display = "block";

    switch(nivel){
        case "facil":
            questaoAtual = questao_facil;
            break;
        case "medio":
            questaoAtual = questao_medio;
            break;
        case "dificil":
            questaoAtual = questao_dificil;
            break;
    }

    indiceQuestaoAtual = 0;
    pontuacao = 0;
    
    // Botão para próxima questão permanece escondido
    btnProximo.style.display = "none";

    mostrarQuestao();
}

function mostrarQuestao(){
    btnResposta.innerHTML = "";
    btnProximo.style.display = "none";

    let perguntaAtual = questaoAtual[indiceQuestaoAtual];
    questaoElemento.textContent = perguntaAtual.questao;

    perguntaAtual.respostas.forEach(answer => {
        const botao = document.createElement("button");
        botao.textContent = answer.texto;
        botao.classList.add("btn");
        btnResposta.appendChild(botao);

        if(answer.correta){
            botao.dataset.correct = "true";
        }

        botao.addEventListener("click", selecionarResposta);
    });
}

function selecionarResposta(e){
    const btnSelecionado = e.target;
    const respCorreta = btnSelecionado.dataset.correct === "true";

    if(respCorreta){
        btnSelecionado.classList.add("correct");
        pontuacao++;
    }else{
        btnSelecionado.classList.add("incorrect");
    }

    Array.from(btnResposta.children).forEach(botao => {
        if(botao.dataset.correct === "true"){
            // Destaque da resposta correta
            botao.classList.add("correct");
        }
        botao.disabled = true;
    });

    btnProximo.style.display = "block";
}

function mostrarPontuacao(){
    btnResposta.innerHTML = "";
    btnProximo.textContent = "Jogar novamente";
    btnProximo.style.display = "block";
    questaoElemento.textContent = `Pontuação: ${pontuacao} de ${questaoAtual.length}`;

    btnProximo.onclick = () => {
        resetQuiz();
    };
}

function resetQuiz(){
    indiceQuestaoAtual = 0;
    pontuacao = 0;

    telaInicio.style.display = "block";
    telaQuiz.style.display = "none";
    btnProximo.textContent = "Próxima";
    btnProximo.onclick = null;
    questaoElemento.textContent = "Questão aqui";
    btnResposta.innerHTML = "";
}

btnProximo.addEventListener("click", () => {
    indiceQuestaoAtual++;

    if(indiceQuestaoAtual < questaoAtual.length){
        mostrarQuestao();
    }else{
        mostrarPontuacao();
    }
});
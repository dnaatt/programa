const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você acabou de sair da escola, e está procurando um emprego, agora é o momento de responder a entrevista",
        alternativas: [
            {
                texto: "ok, estou muito animado!",
            },
            {
                texto: "Estou nervoso!",
               
            }
        ]
    },
    {
        enunciado: "Você tem experiência na área?",
        alternativas: [
            {
                texto: "sim.",
               
            },
            {
                texto: "Não.",
               
            }
        ]
    },
    {
        enunciado: "Você já liderou uma equipe ou projeto?",
        alternativas: [
            {
                texto: "Sim.",
               
            },
            {
                texto: "Não",
                
            }
        ]
    },
    {
        enunciado: "Você se sente confortável trabalhando com prazos apertados",
        alternativas: [
            {
                texto: "sim",
            
            },
            {
                texto: "Não",
                
            }
        ]
    },
    {
        enunciado: "Você é bom em receber feedback construtivo? ",
        alternativas: [
            {
                texto: "sim",
                
            },
            {
                texto: "não",
                
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Agora você faz parte da nossa equipe";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

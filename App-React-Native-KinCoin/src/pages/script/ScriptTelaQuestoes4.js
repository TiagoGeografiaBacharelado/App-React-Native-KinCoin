import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useTelaQuestoes4(navigation) {
  const perguntasIniciais = [
    {
      pergunta: "Por que é importante guardar dinheiro?",
      alternativas: [
        "Para gastar tudo depois",
        "Para emergências e objetivos futuros",
        "Para pagar mais impostos",
        "Porque o banco exige",
      ],
      correta: 1,
      explicacao:
        "Guardar dinheiro ajuda a lidar com emergências e alcançar objetivos.",
    },
    {
      pergunta: "O que é uma reserva de emergência?",
      alternativas: [
        "Dinheiro para compras",
        "Um investimento arriscado",
        "Dinheiro guardado para imprevistos",
        "Um empréstimo",
      ],
      correta: 2,
      explicacao:
        "Reserva de emergência é um valor guardado para situações inesperadas.",
    },
    {
      pergunta: "Qual atitude ajuda a economizar dinheiro?",
      alternativas: [
        "Comprar por impulso",
        "Planejar os gastos",
        "Ignorar contas",
        "Usar crédito sempre",
      ],
      correta: 1,
      explicacao:
        "Planejar os gastos ajuda a evitar desperdícios e economizar.",
    },
    {
      pergunta: "O que acontece quando gastamos mais do que ganhamos?",
      alternativas: [
        "Sobra dinheiro",
        "Nada acontece",
        "Entramos em dívidas",
        "O salário aumenta",
      ],
      correta: 2,
      explicacao: "Gastar mais do que se ganha gera dívidas.",
    },
    {
      pergunta: "Qual é uma boa prática financeira?",
      alternativas: [
        "Anotar despesas",
        "Ignorar o extrato bancário",
        "Parcelar tudo",
        "Gastar sem planejar",
      ],
      correta: 0,
      explicacao: "Anotar despesas ajuda a ter controle financeiro.",
    },
    {
      pergunta: "O que é consumo consciente?",
      alternativas: [
        "Comprar tudo que quiser",
        "Comprar apenas o necessário",
        "Gastar todo o salário",
        "Evitar dinheiro",
      ],
      correta: 1,
      explicacao: "Consumo consciente é comprar apenas o que é necessário.",
    },
    {
      pergunta: "Qual dessas é uma despesa fixa?",
      alternativas: ["Lazer", "Aluguel", "Presentes", "Viagem"],
      correta: 1,
      explicacao:
        "Despesas fixas são aquelas que se repetem todo mês, como aluguel.",
    },
    {
      pergunta: "Qual dessas é uma despesa variável?",
      alternativas: ["Aluguel", "Internet", "Luz", "Compras por lazer"],
      correta: 3,
      explicacao: "Despesas variáveis mudam de valor e frequência.",
    },
    {
      pergunta: "Por que evitar compras por impulso?",
      alternativas: [
        "Porque são sempre necessárias",
        "Porque atrapalham o orçamento",
        "Porque aumentam o salário",
        "Porque não fazem diferença",
      ],
      correta: 1,
      explicacao: "Compras por impulso podem prejudicar o controle financeiro.",
    },
    {
      pergunta: "Qual é o primeiro passo para organizar a vida financeira?",
      alternativas: [
        "Pedir empréstimo",
        "Ignorar gastos",
        "Conhecer sua renda e despesas",
        "Gastar tudo",
      ],
      correta: 2,
      explicacao:
        "Conhecer sua renda e despesas é essencial para se organizar.",
    },
  ];

  const [filaPerguntas, setFilaPerguntas] = useState(perguntasIniciais);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [confirmado, setConfirmado] = useState(false);

  const perguntaAtual = filaPerguntas[0];

  function confirmarResposta() {
    if (respostaSelecionada === null) return;
    setConfirmado(true);
  }

  async function proximaPergunta() {
    let novaFila = [...filaPerguntas];

    novaFila.shift();

    if (novaFila.length === 0) {
      await AsyncStorage.setItem("@progresso", "5");
      navigation.navigate("TelaConclusao");
      return;
    }

    setFilaPerguntas(novaFila);
    setRespostaSelecionada(null);
    setConfirmado(false);
  }

  function acaoBotao() {
    confirmado ? proximaPergunta() : confirmarResposta();
  }

  return {
    perguntaAtual,
    respostaSelecionada,
    setRespostaSelecionada,
    confirmado,
    acaoBotao,
  };
}

import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScriptTelaQuestoes2(navigation) {
  const perguntasIniciais = [
    {
      pergunta: "O que é orçamento pessoal?",
      alternativas: [
        "Um tipo de investimento",
        "O controle dos ganhos e gastos",
        "Um imposto obrigatório",
        "Um empréstimo bancário",
      ],
      correta: 1,
      explicacao:
        "Orçamento pessoal é o controle dos ganhos e gastos para manter a saúde financeira.",
    },
    {
      pergunta: "Qual é a principal vantagem de anotar os gastos?",
      alternativas: [
        "Gastar mais dinheiro",
        "Controlar melhor o dinheiro",
        "Pagar mais impostos",
        "Perder o controle financeiro",
      ],
      correta: 1,
      explicacao:
        "Anotar os gastos ajuda a entender para onde o dinheiro está indo.",
    },
    {
      pergunta: "Qual atitude ajuda a manter o orçamento equilibrado?",
      alternativas: [
        "Gastar mais do que ganha",
        "Ignorar pequenas despesas",
        "Planejar os gastos",
        "Usar crédito sem controle",
      ],
      correta: 2,
      explicacao: "Planejar os gastos ajuda a manter o equilíbrio financeiro.",
    },
    {
      pergunta: "O que é uma despesa fixa?",
      alternativas: [
        "Um gasto que varia todo mês",
        "Um gasto eventual",
        "Um gasto que ocorre regularmente",
        "Um gasto inesperado",
      ],
      correta: 2,
      explicacao:
        "Despesas fixas são aquelas que acontecem regularmente, como aluguel.",
    },
    {
      pergunta: "Qual destas opções é um gasto variável?",
      alternativas: [
        "Aluguel",
        "Mensalidade escolar",
        "Conta de luz",
        "Financiamento",
      ],
      correta: 2,
      explicacao: "Gastos variáveis mudam de valor, como a conta de luz.",
    },
    {
      pergunta: "Por que é importante controlar pequenos gastos?",
      alternativas: [
        "Porque eles não fazem diferença",
        "Porque podem somar valores altos",
        "Porque são obrigatórios",
        "Porque substituem gastos fixos",
      ],
      correta: 1,
      explicacao:
        "Pequenos gastos, quando somados, podem comprometer o orçamento.",
    },
    {
      pergunta: "O que significa viver dentro do orçamento?",
      alternativas: [
        "Gastar mais do que ganha",
        "Gastar tudo e pedir empréstimos",
        "Adequar os gastos à renda",
        "Não planejar despesas",
      ],
      correta: 2,
      explicacao:
        "Viver dentro do orçamento significa adequar os gastos à renda.",
    },
    {
      pergunta: "Qual atitude ajuda a reduzir despesas?",
      alternativas: [
        "Comprar por impulso",
        "Comparar preços",
        "Ignorar gastos fixos",
        "Aumentar o uso do crédito",
      ],
      correta: 1,
      explicacao: "Comparar preços ajuda a gastar menos.",
    },
    {
      pergunta: "O que é planejamento financeiro?",
      alternativas: [
        "Gastar sem pensar",
        "Organizar o uso do dinheiro",
        "Usar crédito livremente",
        "Ignorar o orçamento",
      ],
      correta: 1,
      explicacao:
        "Planejamento financeiro é organizar o uso do dinheiro para atingir objetivos.",
    },
    {
      pergunta: "Qual é o primeiro passo para organizar as finanças?",
      alternativas: [
        "Fazer investimentos arriscados",
        "Anotar receitas e despesas",
        "Pedir empréstimos",
        "Usar limite do cartão",
      ],
      correta: 1,
      explicacao:
        "Anotar receitas e despesas é o primeiro passo para organização financeira.",
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

    if (respostaSelecionada !== perguntaAtual.correta) {
      novaFila.push(perguntaAtual);
    }

    novaFila.shift();

    if (novaFila.length === 0) {
      await AsyncStorage.setItem("@fase2Concluida", "true");

      await AsyncStorage.setItem("@progresso", "3");

      navigation.navigate("TelaConclusao");
      return;
    }

    setFilaPerguntas(novaFila);
    setRespostaSelecionada(null);
    setConfirmado(false);
  }

  function acaoBotao() {
    if (confirmado) {
      proximaPergunta();
    } else {
      confirmarResposta();
    }
  }

  return {
    perguntaAtual,
    respostaSelecionada,
    setRespostaSelecionada,
    confirmado,
    acaoBotao,
  };
}

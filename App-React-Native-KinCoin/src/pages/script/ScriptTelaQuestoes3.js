import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useTelaQuestoes3(navigation) {
  const perguntasIniciais = [
    {
      pergunta: "O que é orçamento pessoal?",
      alternativas: [
        "Uma lista de desejos",
        "Um controle de receitas e despesas",
        "Um tipo de imposto",
        "Um investimento",
      ],
      correta: 1,
      explicacao:
        "Orçamento pessoal é o controle de quanto você ganha e quanto gasta.",
    },
    {
      pergunta: "Qual o principal benefício do orçamento?",
      alternativas: [
        "Gastar mais",
        "Evitar dívidas",
        "Aumentar impostos",
        "Comprar por impulso",
      ],
      correta: 1,
      explicacao:
        "O orçamento ajuda a evitar dívidas e organizar melhor o dinheiro.",
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
        "Despesa fixa é aquela que ocorre regularmente, como aluguel.",
    },
    {
      pergunta: "Qual é um exemplo de despesa variável?",
      alternativas: [
        "Aluguel",
        "Mensalidade escolar",
        "Conta de luz",
        "Financiamento",
      ],
      correta: 2,
      explicacao: "Despesas variáveis mudam de valor, como a conta de luz.",
    },
    {
      pergunta: "Por que é importante anotar os gastos?",
      alternativas: [
        "Para gastar mais",
        "Para perder controle",
        "Para saber para onde vai o dinheiro",
        "Para aumentar dívidas",
      ],
      correta: 2,
      explicacao:
        "Anotar gastos ajuda a entender e controlar o uso do dinheiro.",
    },
    {
      pergunta: "O que significa viver dentro do orçamento?",
      alternativas: [
        "Gastar mais do que ganha",
        "Usar crédito sem limites",
        "Adequar gastos à renda",
        "Ignorar despesas",
      ],
      correta: 2,
      explicacao: "Viver dentro do orçamento é adequar os gastos à renda.",
    },
    {
      pergunta: "Qual atitude ajuda a controlar melhor o dinheiro?",
      alternativas: [
        "Comprar por impulso",
        "Planejar gastos",
        "Ignorar pequenas despesas",
        "Usar limite do cartão",
      ],
      correta: 1,
      explicacao: "Planejar gastos ajuda a manter o controle financeiro.",
    },
    {
      pergunta: "O que é planejamento financeiro?",
      alternativas: [
        "Gastar sem pensar",
        "Organizar o uso do dinheiro",
        "Aumentar dívidas",
        "Evitar orçamento",
      ],
      correta: 1,
      explicacao: "Planejamento financeiro é organizar o uso do dinheiro.",
    },
    {
      pergunta: "Qual é o primeiro passo para organizar as finanças?",
      alternativas: [
        "Investir em ações",
        "Pedir empréstimos",
        "Anotar receitas e despesas",
        "Usar cartão de crédito",
      ],
      correta: 2,
      explicacao: "Anotar receitas e despesas é o primeiro passo.",
    },
    {
      pergunta: "Por que controlar gastos pequenos é importante?",
      alternativas: [
        "Porque não fazem diferença",
        "Porque somam valores altos",
        "Porque são opcionais",
        "Porque substituem renda",
      ],
      correta: 1,
      explicacao: "Pequenos gastos somados podem impactar o orçamento.",
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
      await AsyncStorage.setItem("@progresso", "4");

      navigation.reset({
        index: 0,
        routes: [{ name: "TelaPrincipal" }],
      });
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

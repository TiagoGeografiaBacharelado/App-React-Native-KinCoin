import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScriptTelaQuestoes1(navigation) {
  const perguntasIniciais = [
    {
      pergunta: "O que é inflação?",
      alternativas: [
        "O aumento geral e contínuo dos preços de bens e serviços",
        "A diminuição do valor do salário mínimo",
        "O aumento do valor do dólar em relação ao real",
        "O ato de guardar dinheiro no banco",
      ],
      correta: 0,
      explicacao:
        "Inflação é o aumento geral e contínuo dos preços de bens e serviços.",
    },
    {
      pergunta: "O que são juros?",
      alternativas: [
        "Um imposto cobrado pelo governo",
        "O custo do dinheiro ao longo do tempo",
        "Um tipo de inflação",
        "Um desconto no salário",
      ],
      correta: 1,
      explicacao:
        "Juros representam o custo de emprestar ou usar dinheiro ao longo do tempo.",
    },
    {
      pergunta: "Qual é a principal função do dinheiro?",
      alternativas: [
        "Servir como meio de troca",
        "Garantir lucro",
        "Substituir o trabalho",
        "Eliminar gastos",
      ],
      correta: 0,
      explicacao:
        "O dinheiro serve principalmente como meio de troca entre bens e serviços.",
    },
    {
      pergunta: "O que é orçamento pessoal?",
      alternativas: [
        "Uma lista de desejos",
        "Um controle de receitas e despesas",
        "Um tipo de investimento",
        "Um imposto mensal",
      ],
      correta: 1,
      explicacao:
        "Orçamento pessoal é o controle do quanto se ganha e do quanto se gasta.",
    },
    {
      pergunta: "Qual destas opções é um gasto fixo?",
      alternativas: ["Aluguel", "Lazer", "Viagem", "Compras por impulso"],
      correta: 0,
      explicacao:
        "Gastos fixos são aqueles que costumam ter o mesmo valor todos os meses, como aluguel.",
    },
    {
      pergunta: "O que significa poupar dinheiro?",
      alternativas: [
        "Gastar tudo no mês",
        "Guardar uma parte do que ganha",
        "Investir apenas em ações",
        "Pedir empréstimos",
      ],
      correta: 1,
      explicacao: "Poupar é guardar uma parte do dinheiro para uso futuro.",
    },
    {
      pergunta: "Qual é um exemplo de gasto variável?",
      alternativas: [
        "Conta de luz",
        "Aluguel",
        "Mensalidade escolar",
        "Financiamento",
      ],
      correta: 0,
      explicacao: "Gastos variáveis mudam de valor, como a conta de luz.",
    },
    {
      pergunta: "O que é reserva de emergência?",
      alternativas: [
        "Dinheiro guardado para compras grandes",
        "Um investimento de alto risco",
        "Dinheiro guardado para imprevistos",
        "Um tipo de empréstimo",
      ],
      correta: 2,
      explicacao:
        "Reserva de emergência é um valor guardado para situações inesperadas.",
    },
    {
      pergunta: "Qual atitude ajuda a melhorar a vida financeira?",
      alternativas: [
        "Gastar sem planejar",
        "Anotar gastos",
        "Ignorar dívidas",
        "Usar crédito sem controle",
      ],
      correta: 1,
      explicacao:
        "Anotar gastos ajuda a entender e controlar melhor o dinheiro.",
    },
    {
      pergunta: "Por que é importante ter controle financeiro?",
      alternativas: [
        "Para gastar mais",
        "Para evitar problemas financeiros",
        "Para eliminar impostos",
        "Para ganhar na loteria",
      ],
      correta: 1,
      explicacao:
        "O controle financeiro ajuda a evitar dívidas e a alcançar objetivos.",
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

      await AsyncStorage.setItem("@progresso", "2");

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

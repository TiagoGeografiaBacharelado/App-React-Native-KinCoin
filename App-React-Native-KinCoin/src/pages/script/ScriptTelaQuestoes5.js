import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useTelaQuestoes5(navigation) {
  const perguntasIniciais = [
    {
      pergunta: "O que significa viver dentro do orçamento?",
      alternativas: [
        "Gastar mais do que ganha",
        "Gastar exatamente todo o salário",
        "Gastar menos ou igual ao que ganha",
        "Não gastar dinheiro",
      ],
      correta: 2,
      explicacao:
        "Viver dentro do orçamento significa gastar menos ou igual ao que se ganha.",
    },
    {
      pergunta: "Qual atitude ajuda a evitar dívidas?",
      alternativas: [
        "Parcelar tudo",
        "Ignorar contas",
        "Planejar os gastos",
        "Usar crédito sem controle",
      ],
      correta: 2,
      explicacao: "Planejar os gastos ajuda a evitar dívidas.",
    },
    {
      pergunta: "O que é uma meta financeira?",
      alternativas: [
        "Um gasto inesperado",
        "Um objetivo relacionado ao dinheiro",
        "Uma dívida",
        "Um imposto",
      ],
      correta: 1,
      explicacao: "Meta financeira é um objetivo que envolve dinheiro.",
    },
    {
      pergunta: "Por que definir metas financeiras?",
      alternativas: [
        "Para gastar mais",
        "Para ter mais controle e motivação",
        "Para aumentar impostos",
        "Para evitar dinheiro",
      ],
      correta: 1,
      explicacao: "Metas ajudam a manter foco e controle financeiro.",
    },
    {
      pergunta: "Qual é um exemplo de meta financeira?",
      alternativas: [
        "Comprar tudo sem planejar",
        "Guardar dinheiro para uma viagem",
        "Gastar o salário inteiro",
        "Ignorar contas",
      ],
      correta: 1,
      explicacao: "Guardar dinheiro para uma viagem é uma meta financeira.",
    },
    {
      pergunta: "O que ajuda a alcançar metas financeiras?",
      alternativas: [
        "Compras por impulso",
        "Falta de planejamento",
        "Disciplina e organização",
        "Endividamento",
      ],
      correta: 2,
      explicacao:
        "Disciplina e organização são essenciais para alcançar metas.",
    },
    {
      pergunta: "Qual dessas é uma meta de curto prazo?",
      alternativas: [
        "Comprar uma casa",
        "Guardar dinheiro para emergência",
        "Planejar aposentadoria",
        "Comprar um carro novo em 10 anos",
      ],
      correta: 1,
      explicacao: "Reserva de emergência é uma meta de curto prazo.",
    },
    {
      pergunta: "Por que acompanhar gastos regularmente?",
      alternativas: [
        "Para gastar mais",
        "Para perder controle",
        "Para saber onde o dinheiro está indo",
        "Para pagar mais impostos",
      ],
      correta: 2,
      explicacao: "Acompanhar gastos ajuda a entender o uso do dinheiro.",
    },
    {
      pergunta: "Qual comportamento prejudica a vida financeira?",
      alternativas: [
        "Planejar despesas",
        "Anotar gastos",
        "Comprar por impulso",
        "Criar metas",
      ],
      correta: 2,
      explicacao: "Compras por impulso prejudicam o controle financeiro.",
    },
    {
      pergunta: "Qual é o maior benefício da educação financeira?",
      alternativas: [
        "Gastar mais",
        "Ter mais dívidas",
        "Tomar melhores decisões financeiras",
        "Evitar dinheiro",
      ],
      correta: 2,
      explicacao:
        "Educação financeira ajuda a tomar decisões mais conscientes.",
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

    // Remove pergunta atual (não repete)
    novaFila.shift();

    if (novaFila.length === 0) {
      // Libera próximo passo / final do módulo
      await AsyncStorage.setItem("@progresso", "6");
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

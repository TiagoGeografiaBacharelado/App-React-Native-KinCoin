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
      await AsyncStorage.setItem("@progresso", "4");
      // Navega para TelaConclusao em vez de TelaPrincipal
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

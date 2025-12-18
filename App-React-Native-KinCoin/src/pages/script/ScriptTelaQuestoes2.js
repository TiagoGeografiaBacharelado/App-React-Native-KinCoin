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
      // Marca fase 2 como concluída
      await AsyncStorage.setItem("@fase2Concluida", "true");

      // Libera a próxima fase (progresso = 3)
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

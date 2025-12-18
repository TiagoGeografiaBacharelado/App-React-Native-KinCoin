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
      pergunta: "O que é juros?",
      alternativas: [
        "Um imposto do governo",
        "O custo do dinheiro ao longo do tempo",
        "Um desconto no salário",
        "Um tipo de inflação",
      ],
      correta: 1,
      explicacao:
        "Juros representam o custo de emprestar dinheiro ao longo do tempo.",
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
      await AsyncStorage.setItem("@fase1Concluida", "true");

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

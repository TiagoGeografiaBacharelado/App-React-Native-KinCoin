import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function useTelaPrincipal(navigation) {
  const [progresso, setProgresso] = useState(1);

  useFocusEffect(
    useCallback(() => {
      carregarProgresso();
    }, [])
  );

  async function carregarProgresso() {
    const valor = await AsyncStorage.getItem("@progresso");
    setProgresso(valor ? Number(valor) : 1);
  }

  async function salvarProgresso(novoProgresso) {
    await AsyncStorage.setItem("@progresso", String(novoProgresso));
    setProgresso(novoProgresso);
  }

  const modulos = [
    {
      id: 1,
      ativo: progresso === 1,
      deslocamento: -40,
      tela: "TelaQuestoes1",
    },
    {
      id: 2,
      ativo: progresso === 2,
      deslocamento: 40,
      tela: "TelaQuestoes2",
    },
    {
      id: 3,
      ativo: progresso === 3,
      deslocamento: -40,
      tela: "TelaQuestoes3",
    },
    {
      id: 4,
      ativo: progresso === 4,
      deslocamento: 40,
      tela: "TelaQuestoes4",
    },
    {
      id: 5,
      ativo: progresso === 5,
      deslocamento: -40,
      tela: "TelaConclusao",
    },
  ];

  function abrirModulo(item) {
    if (!item.ativo) return;
    navigation.navigate(item.tela);
  }

  return {
    modulos,
    abrirModulo,
    salvarProgresso,
    progresso,
  };
}

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScriptTelaPrincipal(navigation) {
  const [progresso, setProgresso] = useState(1);

  useEffect(() => {
    carregarProgresso();
  }, []);

  async function carregarProgresso() {
    const valor = await AsyncStorage.getItem("@progresso");
    if (valor) setProgresso(Number(valor));
  }

  async function salvarProgresso(novoProgresso) {
    await AsyncStorage.setItem("@progresso", String(novoProgresso));
    setProgresso(novoProgresso);
  }

  const modulos = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    ativo: index < progresso,
  }));

  function abrirModulo(item) {
    if (!item.ativo) return;

    console.log("Abrindo módulo", item.id);
    // navigation.navigate(`TelaModulo${item.id}`);
  }

  return {
    modulos,
    abrirModulo,
    salvarProgresso,
  };
}

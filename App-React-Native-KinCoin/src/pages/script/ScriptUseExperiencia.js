import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useExperiencia() {
  const [nivel, setNivel] = useState(1);
  const [xpAtual, setXpAtual] = useState(0);
  const [xpTotal, setXpTotal] = useState(0);

  useEffect(() => {
    carregarXP();
  }, []);

  async function carregarXP() {
    const nivelSalvo = await AsyncStorage.getItem("@nivel");
    const xpSalvo = await AsyncStorage.getItem("@xp_atual");
    const xpTotalSalvo = await AsyncStorage.getItem("@xp_total");

    if (nivelSalvo) setNivel(Number(nivelSalvo));
    if (xpSalvo) setXpAtual(Number(xpSalvo));
    if (xpTotalSalvo) setXpTotal(Number(xpTotalSalvo));
  }

  async function ganharXP(valor) {
    let novoXP = xpAtual + valor;
    let novoNivel = nivel;
    const xpNecessario = nivel * 100;

    if (novoXP >= xpNecessario) {
      novoXP -= xpNecessario;
      novoNivel++;
    }

    await AsyncStorage.multiSet([
      ["@nivel", String(novoNivel)],
      ["@xp_atual", String(novoXP)],
      ["@xp_total", String(xpTotal + valor)],
    ]);

    setNivel(novoNivel);
    setXpAtual(novoXP);
    setXpTotal(xpTotal + valor);
  }

  return {
    nivel,
    xpAtual,
    xpTotal,
    xpNecessario: nivel * 100,
    ganharXP,
  };
}

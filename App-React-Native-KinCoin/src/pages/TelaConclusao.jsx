import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native"; // Para ler params
import style from "./style/StyleTelaConclusao";
import Esquilo from "../assets/images/EsquiloComemorando.png";
import useExperiencia from "./script/ScriptUseExperiencia";

export default function TelaConclusao({ navigation }) {
  const { ganharXP } = useExperiencia();
  const route = useRoute();
  const xpGanho = route.params?.xpGanho || 25; // Padrão 25 se não passado

  useEffect(() => {
    // Concede o XP calculado
    ganharXP(xpGanho);
  }, []);

  async function continuar() {
    navigation.reset({
      index: 0,
      routes: [{ name: "TelaPrincipal" }],
    });
  }

  return (
    <View style={style.container}>
      <Image source={Esquilo} style={style.esquilo} resizeMode="contain" />

      <Text style={style.titulo}>Você por acaso é um gênio?</Text>

      <Text style={style.xp}>⭐ Você recebeu +{xpGanho} de experiência</Text>

      <TouchableOpacity style={style.botao} onPress={continuar}>
        <Text style={style.botaoTexto}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

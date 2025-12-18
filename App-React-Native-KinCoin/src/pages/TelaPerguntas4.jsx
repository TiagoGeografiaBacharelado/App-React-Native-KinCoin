import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./style/StyleTelaPerguntas4";

export default function TelaPerguntas4({ navigation }) {
  async function escolherResposta(resposta) {
    console.log("Resposta P4:", resposta);

    // 🔥 RESET TOTAL DO PROGRESSO
    await AsyncStorage.setItem("@progresso", "1");

    // ir para a TelaPrincipal limpando o histórico
    navigation.reset({
      index: 0,
      routes: [{ name: "TelaPrincipal" }],
    });
  }

  return (
    <View style={style.container}>
      <Text style={style.titulo}>
        Qual é o seu principal objetivo com{"\n"}
        Educação Financeira?
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[style.botao, style.btnVerde]}
        onPress={() => escolherResposta("Quitar dívidas")}
      >
        <Text style={style.textoBotao}>Quitar dívidas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[style.botao, style.btnLaranja]}
        onPress={() => escolherResposta("Criar reserva")}
      >
        <Text style={style.textoBotao}>Criar reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[style.botao, style.btnVermelho]}
        onPress={() => escolherResposta("Investir")}
      >
        <Text style={style.textoBotao}>Investir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[style.botao, style.btnRoxo]}
        onPress={() => escolherResposta("Organizar gastos")}
      >
        <Text style={style.textoBotao}>Organizar gastos</Text>
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style/StyleTelaPerguntas3";

export default function TelaPerguntas3({ navigation }) {
  function escolherResposta(opcao) {
    console.log("Resposta P3:", opcao);

    navigation.navigate("TelaPerguntas4", {
      resposta3: opcao,
    });
  }

  return (
    <View style={style.container}>
      <Text style={style.titulo}>
        Quanto você costuma{"\n"}
        guardar por mês?
      </Text>

      <TouchableOpacity
        style={style.botao}
        onPress={() => escolherResposta("Nada")}
      >
        <Text style={style.textoBotao}>Nada</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.botao}
        onPress={() => escolherResposta("Até 10%")}
      >
        <Text style={style.textoBotao}>Até 10% da renda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.botao}
        onPress={() => escolherResposta("10% a 30%")}
      >
        <Text style={style.textoBotao}>10% a 30%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.botao}
        onPress={() => escolherResposta("Mais de 30%")}
      >
        <Text style={style.textoBotao}>Mais de 30%</Text>
      </TouchableOpacity>
    </View>
  );
}

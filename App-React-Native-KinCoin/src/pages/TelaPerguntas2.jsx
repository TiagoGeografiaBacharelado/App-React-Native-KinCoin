import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import style from "./style/StyleTelaPerguntas2";
import Esquilo from "../assets/images/EsquiloSentado.png";

export default function TelaPerguntas2({ navigation }) {
  function escolherNivel(nivel) {
    console.log("Resposta P2:", nivel);

    navigation.navigate("TelaPerguntas3", {
      resposta2: nivel,
    });
  }

  return (
    <View style={style.container}>
      <Text style={style.titulo}>
        Qual o seu nível de{"\n"}
        Conhecimento sobre{"\n"}
        Educação Financeira?
      </Text>

      <TouchableOpacity
        style={[style.botao, style.btnVerde]}
        onPress={() => escolherNivel("Iniciante")}
      >
        <Feather name="smile" size={22} color="#FFF" />
        <Text style={style.textoBotao}>Iniciante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.botao, style.btnLaranja]}
        onPress={() => escolherNivel("Moderado")}
      >
        <AntDesign name="star" size={22} color="#FFF" />
        <Text style={style.textoBotao}>Moderado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.botao, style.btnVermelho]}
        onPress={() => escolherNivel("Avançado")}
      >
        <Ionicons name="hand-left" size={22} color="#FFF" />
        <Text style={style.textoBotao}>Avançado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.botao, style.btnRoxo]}
        onPress={() => escolherNivel("Experiente")}
      >
        <Ionicons name="globe-outline" size={22} color="#FFF" />
        <Text style={style.textoBotao}>Experiente</Text>
      </TouchableOpacity>

      <Image source={Esquilo} style={style.imagem} resizeMode="contain" />
    </View>
  );
}

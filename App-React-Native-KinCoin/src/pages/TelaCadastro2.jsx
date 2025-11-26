import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { style } from "./style/StyleTelaCadastro2";
import EsquiloComOculos from "../assets/images/EsquiloComOculos.png";

export default function TelaCadastro2({ navigation }) {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.progressoContainer}>
        <View style={style.progressoAtivo} />
        <View style={style.progressoAtivo} />
      </View>

      <Text style={style.titulo}>Quase lá!</Text>

      <Image
        source={EsquiloComOculos}
        style={style.imagem}
        resizeMode="contain"
      />

      <Text style={style.textoCentral}>
        Clique no botão de cadastrar e{"\n"}
        tenha acesso ao maior{"\n"}
        aplicativo de Educação{"\n"}
        Financeira do Brasil!
      </Text>

      <TouchableOpacity style={style.botao}>
        <Text style={style.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

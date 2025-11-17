import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style/StyleTelaInicial";
import EsquiloComMoeda from "../assets/images/EsquiloSentado.png";

export default function TelaInicial({ navigation }) {
  return (
    <View style={style.container}>
      <Image source={EsquiloComMoeda} style={style.logo} resizeMode="contain" />
      <Text style={style.textoBemVindo}>Seja bem-vindo ao KinCoin!</Text>

      <TouchableOpacity
        style={[style.botao, style.botaoLogin]}
        onPress={() => navigation.navigate("TelaLogin")}
      >
        <Text style={style.textoBotao}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.botao, style.botaoCadastrar]}
        onPress={() => navigation.navigate("TelaCadastro")}
      >
        <Text style={style.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

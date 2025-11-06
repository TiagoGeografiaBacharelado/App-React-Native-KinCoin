import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style/StyleTelaInicial";
import EsquiloComMoeda from "../assets/images/EsquiloSentado.png";

export default function TelaInicial() {
  return (
    <View style={style.container}>
      <Image source={EsquiloComMoeda} style={style.logo} resizeMode="contain" />
      <Text style={style.textoBemVindo}>Seja bem-vindo ao KinCoin!</Text>

      <TouchableOpacity style={[style.botao, style.botaoLogin]}>
        <Text style={style.textoBotao}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[style.botao, style.botaoCadastrar]}>
        <Text style={style.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

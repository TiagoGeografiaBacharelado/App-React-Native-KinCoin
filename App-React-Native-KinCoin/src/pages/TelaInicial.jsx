import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./StyleTelaInicial";
import EsquiloComMoeda from "../assets/ChatGPT_Image_21_de_set._de_2025__20_15_59-removebg-preview 1.png";

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
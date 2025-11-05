import React from "react";

import { Text, View, Image } from "react-native";

import { style } from "./StyleTelaDeCarregamento";
import Logo from "../assets/ImgTelaCarregamento.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo}
        resizeMode="contain" >
        </Image>
        <Text style={style.TextAguarde}> Aguarde...</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.TextPrincipal}> Aprenda finanças e investimento de forma simples e divertida!</Text>
      </View>
    </View> 
  );
}
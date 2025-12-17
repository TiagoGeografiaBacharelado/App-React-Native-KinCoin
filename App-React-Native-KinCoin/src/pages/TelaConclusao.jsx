import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./style/StyleTelaConclusao";
import Esquilo from "../assets/images/EsquiloComemorando.png";

export default function TelaConclusao({ navigation }) {
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

      <Text style={style.xp}>⭐ Você recebeu +25 de experiência</Text>

      <TouchableOpacity style={style.botao} onPress={continuar}>
        <Text style={style.botaoTexto}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

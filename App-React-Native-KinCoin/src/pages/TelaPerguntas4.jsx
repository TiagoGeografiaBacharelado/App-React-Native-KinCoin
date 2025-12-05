import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import style from "./style/StyleTelaPerguntas4";
import Esquilo from "../assets/images/EsquiloComCelular.png";

export default function TelaPerguntas4({ navigation }) {

  function escolherTempo(tempo) {
    console.log("Tempo selecionado:", tempo);

    navigation.navigate("Home");
  }

  return (
    <View style={style.container}>
      
      <Text style={style.titulo}>
        Quanto tempo você pode{"\n"}
        dedicar diariamente ao{"\n"}
        estudo ?
      </Text>

      <View style={style.linha}>
        <TouchableOpacity
          style={[style.botao, style.btnLaranjaPequeno]}
          onPress={() => escolherTempo("5 min/dia")}
        >
          <Ionicons name="time-outline" size={18} color="#FFF" />
          <Text style={style.textoBotao}>5min/dia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.botao, style.btnLaranjaPequeno]}
          onPress={() => escolherTempo("10 min/dia")}
        >
          <Ionicons name="time-outline" size={18} color="#FFF" />
          <Text style={style.textoBotao}>10min/dia</Text>
        </TouchableOpacity>
      </View>

      <View style={style.linha}>
        <TouchableOpacity
          style={[style.botao, style.btnLaranjaPequeno]}
          onPress={() => escolherTempo("20 min/dia")}
        >
          <Ionicons name="time-outline" size={18} color="#FFF" />
          <Text style={style.textoBotao}>20min/dia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.botao, style.btnLaranjaPequeno]}
          onPress={() => escolherTempo("30 min/dia")}
        >
          <Ionicons name="time-outline" size={18} color="#FFF" />
          <Text style={style.textoBotao}>30min/dia</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[style.botao, style.btnLaranja]}
        onPress={() => escolherTempo("+ de 30 min/dia")}
      >
        <Ionicons name="time-outline" size={20} color="#FFF" />
        <Text style={style.textoBotao}>+ de 30min/dia</Text>
      </TouchableOpacity>

      <Image
        source={Esquilo}
        style={style.imagem}
        resizeMode="contain"
      />

    </View>
  );
}

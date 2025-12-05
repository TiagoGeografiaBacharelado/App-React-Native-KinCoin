import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./style/StyleTelaPerguntas3";

export default function TelaPerguntas3({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={{ position: "absolute", left: 20, top: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="#FFF" />
      </TouchableOpacity>

      <Text style={styles.titulo}>
        Qual o seu Objetivo{"\n"}Financeiro?
      </Text>

      <TouchableOpacity style={[styles.botao, styles.btnLaranja]}>
        <Ionicons name="time-outline" size={20} color="#FFF" />
        <Text style={styles.textoBotao}>Planejar Aposentadoria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.btnLaranja]}>
        <MaterialIcons name="search" size={20} color="#FFF" />
        <Text style={styles.textoBotao}>Controle de Gastos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.btnLaranja]}>
        <Ionicons name="happy-outline" size={20} color="#FFF" />
        <Text style={styles.textoBotao}>Aprender a investir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.btnLaranja]}>
        <Ionicons name="ellipsis-horizontal" size={20} color="#FFF" />
        <Text style={styles.textoBotao}>Conquistar Algo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.btnLaranja]}>
        <FontAwesome5 name="star" size={18} color="#FFF" />
        <Text style={styles.textoBotao}>Investir</Text>
      </TouchableOpacity>

    </View>
  );
}

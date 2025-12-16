import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import style from "./style/StyleTelaQuestoes1";
import Esquilo from "../assets/images/EsquiloSentado.png";

export default function TelaQuestoes1({ navigation }) {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  function confirmarResposta() {
    if (respostaSelecionada === null) return;

    navigation.goBack();
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </TouchableOpacity>

        <Text style={style.headerTitulo}>Módulo 1</Text>

        <View style={{ width: 22 }} />
      </View>

      <View style={style.perguntaArea}>
        <Text style={style.perguntaTexto}>O que é inflação?</Text>
      </View>

      <Image source={Esquilo} style={style.esquilo} resizeMode="contain" />

      <View style={style.alternativas}>
        {[
          "O aumento geral e contínuo dos preços de bens e serviços",
          "A diminuição do valor do salário mínimo",
          "O aumento do valor do dólar em relação ao real",
          "O ato de guardar dinheiro no banco",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              style.opcao,
              respostaSelecionada === index && style.opcaoSelecionada,
            ]}
            onPress={() => setRespostaSelecionada(index)}
          >
            <Text style={style.opcaoTexto}>
              {String.fromCharCode(65 + index)}) {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={[
          style.botaoConfirmar,
          respostaSelecionada === null && style.botaoDesabilitado,
        ]}
        onPress={confirmarResposta}
        disabled={respostaSelecionada === null}
      >
        <Text style={style.botaoTexto}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

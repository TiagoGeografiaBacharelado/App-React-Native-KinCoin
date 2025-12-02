import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { style } from "./style/StyleTelaPerguntas";
import EsquiloAndandoEsquerda from "../assets/images/EsquiloAndandoEsquerda.png";

export default function TelaPerguntas({ navigation }) {
  function escolherTema(tema) {
    console.log("Tema escolhido:", tema);

    navigation.navigate("TelaPerguntas2", {
      temaSelecionado: tema,
    });
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
      <TouchableOpacity
        style={style.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={style.iconeVoltar}>{"<"}</Text>
      </TouchableOpacity>

      <View style={style.topo}>
        <View style={style.balao}>
          <Text style={style.textoBalao}>
            Vamos começar sua jornada!!{"\n"}
            Sobre o que você gostaria de aprender
          </Text>
        </View>

        <Image
          source={EsquiloAndandoEsquerda}
          style={style.mascote}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        style={style.botaoPergunta}
        onPress={() => escolherTema("Investimentos")}
      >
        <Text style={style.textoBotao}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.botaoPergunta}
        onPress={() => escolherTema("Educação Financeira")}
      >
        <Text style={style.textoBotao}>Educação Financeira</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.botaoPergunta}
        onPress={() => escolherTema("Controle de gastos")}
      >
        <Text style={style.textoBotao}>Controle de gastos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

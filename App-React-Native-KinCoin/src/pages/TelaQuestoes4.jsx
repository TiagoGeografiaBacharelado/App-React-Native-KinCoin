import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import style from "./style/StyleTelaQuestoes1";
import Esquilo from "../assets/images/EsquiloSentado.png";
import useTelaQuestoes4 from "./script/ScriptTelaQuestoes4";

export default function TelaQuestoes4({ navigation }) {
  const {
    perguntaAtual,
    respostaSelecionada,
    setRespostaSelecionada,
    confirmado,
    acaoBotao,
  } = useTelaQuestoes4(navigation);

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
        <Text style={style.perguntaTexto}>{perguntaAtual.pergunta}</Text>
      </View>

      <Image source={Esquilo} style={style.esquilo} resizeMode="contain" />

      <View style={style.alternativas}>
        {perguntaAtual.alternativas.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              style.opcao,
              confirmado &&
                index === perguntaAtual.correta &&
                style.opcaoCorreta,
              confirmado &&
                index === respostaSelecionada &&
                index !== perguntaAtual.correta &&
                style.opcaoErrada,
              respostaSelecionada === index &&
                !confirmado &&
                style.opcaoSelecionada,
            ]}
            onPress={() => !confirmado && setRespostaSelecionada(index)}
          >
            <Text style={style.opcaoTexto}>
              {String.fromCharCode(65 + index)}) {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {confirmado && (
        <View style={style.feedback}>
          {respostaSelecionada === perguntaAtual.correta ? (
            <Text style={style.textoCorreto}>🎉 Parabéns! Você acertou!</Text>
          ) : (
            <Text style={style.textoErrado}>❌ {perguntaAtual.explicacao}</Text>
          )}
        </View>
      )}

      <TouchableOpacity
        style={[
          style.botaoConfirmar,
          respostaSelecionada === null &&
            !confirmado &&
            style.botaoDesabilitado,
        ]}
        onPress={acaoBotao}
        disabled={respostaSelecionada === null && !confirmado}
      >
        <Text style={style.botaoTexto}>
          {confirmado ? "Continuar" : "Confirmar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

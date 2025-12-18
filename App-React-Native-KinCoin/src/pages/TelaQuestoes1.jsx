import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import style from "./style/StyleTelaQuestoes1";
import Esquilo from "../assets/images/EsquiloSentado.png";
import useTelaQuestoes1 from "./script/ScriptTelaQuestoes1";

export default function TelaQuestoes1({ navigation }) {
  const {
    perguntaAtual,
    respostaSelecionada,
    setRespostaSelecionada,
    confirmado,
    acaoBotao,
  } = useTelaQuestoes1(navigation);

  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </TouchableOpacity>

        <Text style={style.headerTitulo}>Módulo 1</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Pergunta */}
      <View style={style.perguntaArea}>
        <Text style={style.perguntaTexto}>{perguntaAtual.pergunta}</Text>
      </View>

      <Image source={Esquilo} style={style.esquilo} resizeMode="contain" />

      {/* Alternativas */}
      <View style={[style.alternativas, { marginBottom: 20 }]}>
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

      {/* Feedback */}
      {confirmado && (
        <View style={style.feedback}>
          {respostaSelecionada === perguntaAtual.correta ? (
            <Text style={style.textoCorreto}>🎉 Parabéns! Você acertou!</Text>
          ) : (
            <Text style={style.textoErrado}>❌ {perguntaAtual.explicacao}</Text>
          )}
        </View>
      )}

      {/* Botão */}
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

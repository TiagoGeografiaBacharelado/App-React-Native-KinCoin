import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import style from "./style/StyleTelaPrincipal";
import Esquilo from "../assets/images/EsquiloSentado.png";

export default function TelaPrincipal({ navigation }) {
  const [progresso, setProgresso] = useState(1);

  useFocusEffect(
    useCallback(() => {
      carregarProgresso();
    }, [])
  );

  async function carregarProgresso() {
    const valor = await AsyncStorage.getItem("@progresso");
    setProgresso(valor ? Number(valor) : 1);
  }

  const modulos = [
    {
      id: 1,
      ativo: progresso >= 1,
      deslocamento: 0,
      tela: "TelaQuestoes1",
    },
    {
      id: 2,
      ativo: progresso >= 2,
      deslocamento: 40,
      tela: "TelaQuestoes2",
    },
    {
      id: 3,
      ativo: progresso >= 3,
      deslocamento: -40,
      tela: "TelaQuestoes3",
    },
    {
      id: 4,
      ativo: progresso >= 4,
      deslocamento: 40,
      tela: "TelaQuestoes4",
    },
    {
      id: 5,
      ativo: progresso >= 5,
      deslocamento: -40,
      tela: "TelaConclusao",
    },
  ];

  function abrirModulo(item) {
    if (!item.ativo) return;
    navigation.navigate(item.tela);
  }

  return (
    <View style={style.container}>
      {/* Header */}
      <TouchableOpacity style={style.header}>
        <Text style={style.headerTexto}>
          Módulo 1 - Nossa relação com o dinheiro
        </Text>
        <AntDesign name="down" size={18} color="#FFF" />
      </TouchableOpacity>

      {/* Conteúdo */}
      <ScrollView
        contentContainerStyle={style.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.colunaCentro}>
          {modulos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                item.ativo ? style.pontoAtivo : style.pontoInativo,
                { marginLeft: item.deslocamento },
              ]}
              disabled={!item.ativo}
              onPress={() => abrirModulo(item)}
            >
              <AntDesign name="star" size={14} color="#FFF" />
            </TouchableOpacity>
          ))}

          <Feather
            name="chevron-down"
            size={28}
            color="#F6A623"
            style={style.seta}
          />
        </View>

        <Image source={Esquilo} style={style.esquilo} resizeMode="contain" />
      </ScrollView>

      <View style={style.footer}>
        {/* MÓDULOS ATIVO */}
        <TouchableOpacity style={style.footerBotaoAtivo}>
          <AntDesign name="star" size={18} color="#FFF" />
          <Text style={style.footerTextoAtivo}>Módulos</Text>
        </TouchableOpacity>

        {/* PERFIL INATIVO */}
        <TouchableOpacity
          style={style.footerBotao}
          onPress={() => navigation.navigate("TelaPerfil")}
        >
          <AntDesign name="user" size={18} color="#999" />
          <Text style={style.footerTexto}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

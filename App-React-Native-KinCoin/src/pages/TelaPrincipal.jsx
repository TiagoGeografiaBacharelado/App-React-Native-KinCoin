import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./style/StyleTelaPrincipal";
import Esquilo from "../assets/images/EsquiloSentado.png";

export default function TelaPrincipal({ navigation }) {
  const [fase1Concluida, setFase1Concluida] = useState(false);

  useEffect(() => {
    carregarProgresso();
  }, []);

  async function carregarProgresso() {
    const fase1 = await AsyncStorage.getItem("@fase1Concluida");
    setFase1Concluida(fase1 === "true");
  }

  const modulos = [
    {
      id: 1,
      ativo: true,
      deslocamento: 0,
      tela: "TelaQuestoes1",
    },
    {
      id: 2,
      ativo: fase1Concluida,
      deslocamento: 40,
      tela: "TelaQuestoes2", // próxima atividade
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

      {/* Footer */}
      <View style={style.footer}>
        <TouchableOpacity style={style.footerBotaoAtivo}>
          <AntDesign name="star" size={18} color="#FFF" />
          <Text style={style.footerTextoAtivo}>Módulos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.footerBotao}>
          <AntDesign name="user" size={18} color="#999" />
          <Text style={style.footerTexto}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

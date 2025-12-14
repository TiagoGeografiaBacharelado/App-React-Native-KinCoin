import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import style from "./style/StyleTelaPrincipal";
import Esquilo from "../assets/images/EsquiloSentado.png";
import ScriptTelaPrincipal from "./script/ScriptTelaPrincipal";

export default function TelaPrincipal({ navigation }) {
  const { modulos, abrirModulo } = ScriptTelaPrincipal(navigation);
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.header}>
        <Text style={style.headerTexto}>
          Módulo 1 - Nossa relação com o dinheiro
        </Text>
        <AntDesign name="down" size={18} color="#FFF" />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={style.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.colunaCentro}>
          {modulos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={item.ativo ? style.pontoAtivo : style.pontoInativo}
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

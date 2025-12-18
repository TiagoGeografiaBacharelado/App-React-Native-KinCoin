import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "./style/StyleTelaPerfil";
import useExperiencia from "./script/ScriptUseExperiencia";

export default function TelaPerfil({ navigation }) {
  const { nivel, xpAtual, xpNecessario } = useExperiencia();

  const [nome, setNome] = useState("Usuário");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {
    const nomeSalvo = await AsyncStorage.getItem("@perfil_nome");
    const fotoSalva = await AsyncStorage.getItem("@perfil_foto");

    if (nomeSalvo) setNome(nomeSalvo);
    if (fotoSalva) setFoto(fotoSalva);
  }

  return (
    <View style={style.container}>
      {/* HEADER */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </TouchableOpacity>

        <Text style={style.headerTitulo}>Perfil</Text>

        <TouchableOpacity>
          <AntDesign name="edit" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* AVATAR */}
      <Image
        source={foto ? { uri: foto } : require("../assets/images/avatar.png")}
        style={style.avatar}
      />

      {/* NOME */}
      <Text style={style.nome}>{nome}</Text>

      {/* XP */}
      <View style={style.xpContainer}>
        <View style={style.xpHeader}>
          <Text style={style.levelText}>Level {nivel}</Text>
          <Text style={style.xpText}>
            {xpAtual}/{xpNecessario} XP
          </Text>
        </View>

        <View style={style.barraXP}>
          <View
            style={[
              style.xpFill,
              { width: `${(xpAtual / xpNecessario) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* FOOTER */}
      <View style={style.footer}>
        {/* MÓDULOS INATIVO */}
        <TouchableOpacity
          style={style.footerBotao}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <AntDesign name="star" size={18} color="#999" />
          <Text style={style.footerTexto}>Módulos</Text>
        </TouchableOpacity>

        {/* PERFIL ATIVO */}
        <TouchableOpacity style={style.footerBotaoAtivo}>
          <AntDesign name="user" size={18} color="#FFF" />
          <Text style={style.footerTextoAtivo}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

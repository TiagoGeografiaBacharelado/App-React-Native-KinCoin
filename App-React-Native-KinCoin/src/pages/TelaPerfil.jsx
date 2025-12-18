import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import style from "./style/StyleTelaPerfil";
import useExperiencia from "./script/ScriptUseExperiencia";

export default function TelaPerfil({ navigation }) {
  const { nivel, xpAtual, xpNecessario } = useExperiencia();

  const [nome, setNome] = useState("Usuário");
  const [foto, setFoto] = useState(null);

  useFocusEffect(
    useCallback(() => {
      carregarPerfil();
    }, [])
  );

  async function carregarPerfil() {
    const nomeSalvo = await AsyncStorage.getItem("@perfil_nome");
    const fotoSalva = await AsyncStorage.getItem("@perfil_foto");

    if (nomeSalvo) setNome(nomeSalvo);
    if (fotoSalva) setFoto(fotoSalva);
  }

  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </TouchableOpacity>

        <Text style={style.headerTitulo}>Perfil</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("TelaPerfilEditar")}
        >
          <AntDesign name="edit" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <Image
        source={foto ? { uri: foto } : require("../assets/images/avatar.png")}
        style={style.avatar}
      />

      <Text style={style.nome}>{nome}</Text>

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
    </View>
  );
}

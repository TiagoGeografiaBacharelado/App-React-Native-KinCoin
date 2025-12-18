import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "../style/StyleTelaPerfil";
import useExperiencia from "../script/ScriptUseExperiencia";

export default function TelaPerfil() {
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
      <Image
        source={
          foto ? { uri: foto } : require("../assets/images/avatarPadrao.png")
        }
        style={style.avatar}
      />

      <Text style={style.nome}>{nome}</Text>

      <View style={style.levelContainer}>
        <Text style={style.levelText}>Level {nivel}</Text>

        <View style={style.barraXP}>
          <View
            style={[
              style.xpFill,
              { width: `${(xpAtual / xpNecessario) * 100}%` },
            ]}
          />
        </View>

        <Text style={style.xpText}>
          {xpAtual}/{xpNecessario} XP
        </Text>
      </View>
    </View>
  );
}

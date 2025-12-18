import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import style from "./style/StyleTelaPerfilEditar";

export default function TelaEditarPerfil({ navigation }) {
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    const nomeSalvo = await AsyncStorage.getItem("@perfil_nome");
    const fotoSalva = await AsyncStorage.getItem("@perfil_foto");

    if (nomeSalvo) setNome(nomeSalvo);
    if (fotoSalva) setFoto(fotoSalva);
  }

  async function escolherFoto() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setFoto(uri);
    }
  }

  async function salvarPerfil() {
    await AsyncStorage.setItem("@perfil_nome", nome);
    if (foto) {
      await AsyncStorage.setItem("@perfil_foto", foto);
    }

    navigation.goBack();
  }

  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </TouchableOpacity>

        <Text style={style.headerTitulo}>Editar Perfil</Text>

        <TouchableOpacity onPress={salvarPerfil}>
          <AntDesign name="check" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={escolherFoto}>
        <Image
          source={foto ? { uri: foto } : require("../assets/images/avatar.png")}
          style={style.avatar}
        />
        <Text style={style.trocarFoto}>Alterar foto</Text>
      </TouchableOpacity>

      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu apelido"
        placeholderTextColor="#999"
        style={style.input}
      />
    </View>
  );
}

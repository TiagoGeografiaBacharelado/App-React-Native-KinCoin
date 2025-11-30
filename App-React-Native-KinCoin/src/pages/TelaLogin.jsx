import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import style from "./style/StyleTelaLogin";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Esquilo from "../assets/images/EsquiloAndandoDireita.png";

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <View style={style.container}>
      <Image source={Esquilo} style={style.logo} resizeMode="contain" />

      <Text style={style.welcomeText}>Que bom te ver por aqui novamente!</Text>

      <TextInput
        style={style.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={style.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate("RecuperacaoSenha")}>
        <Text style={style.forgotPassword}>Esqueceu a sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
        <Text style={style.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={style.signupText}>
        Não tem uma conta? <Text style={style.signupLink}>Cadastre-se</Text>
      </Text>

      <Text style={style.orText}>Logar com</Text>

      <View style={style.socialContainer}>
        <TouchableOpacity style={style.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialButton}>
          <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialButton}>
          <AntDesign name="apple1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

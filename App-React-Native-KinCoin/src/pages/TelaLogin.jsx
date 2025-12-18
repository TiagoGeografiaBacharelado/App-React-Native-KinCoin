import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./style/StyleTelaLogin";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Esquilo from "../assets/images/EsquiloAndandoDireita.png";

// 🔥 Firebase
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function TelaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha e-mail e senha");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro ao entrar", error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={Esquilo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.welcomeText}>Que bom te ver por aqui novamente!</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
      </Text>

      <Text style={styles.orText}>Logar com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="apple1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

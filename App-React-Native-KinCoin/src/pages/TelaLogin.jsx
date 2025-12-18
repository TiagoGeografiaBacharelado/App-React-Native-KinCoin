// TelaLogin.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Esquilo from "../assets/images/EsquiloAndandoDireita.png";
import { style } from "./style/StyleTelaLogin";
import { ScriptTelaLogin } from "./script/ScriptTelaLogin";

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleLogin = () => {
    // Usa o ScriptTelaLogin para validar os campos
    const erro = ScriptTelaLogin({ email, senha });

    // Limpa erros anteriores
    setErroEmail("");
    setErroSenha("");

    if (erro) {
      // Identifica qual campo contém o erro e seta a mensagem
      if (erro.toLowerCase().includes("e-mail")) {
        setErroEmail(erro);
      } else if (erro.toLowerCase().includes("senha")) {
        setErroSenha(erro);
      } else {
        // Para erro genérico, aplica aos dois campos
        setErroEmail(erro);
        setErroSenha(erro);
      }
      return; // Não navega se houver erro
    }

    // Se não houver erro, navega
    console.log("Email:", email);
    console.log("Senha:", senha);
    navigation.navigate("TelaPerguntas");
  };

  return (
    <View style={style.container}>
      <Image source={Esquilo} style={style.logo} resizeMode="contain" />

      <Text style={style.welcomeText}>Que bom te ver por aqui novamente!</Text>

      <TextInput
        style={[style.input, erroEmail ? { borderColor: "red" } : null]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {erroEmail ? <Text style={style.erroTexto}>{erroEmail}</Text> : null}

      <TextInput
        style={[style.input, erroSenha ? { borderColor: "red" } : null]}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {erroSenha ? <Text style={style.erroTexto}>{erroSenha}</Text> : null}

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

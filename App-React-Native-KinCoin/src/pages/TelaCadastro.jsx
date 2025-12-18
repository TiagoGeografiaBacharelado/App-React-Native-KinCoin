import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { style } from "./style/StyleTelaCadastro";
import { ScriptTelaCadastro } from "./script/ScriptTelaCadastro";

// 🔥 Firebase
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function TelaCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  async function avancar() {
    // 1️⃣ Validação local
    const erro = ScriptTelaCadastro({
      nome,
      email,
      senha,
      confirmarSenha,
      dia,
      mes,
      ano,
    });

    if (erro) {
      Alert.alert("Erro no cadastro", erro);
      return;
    }

    try {
      // 2️⃣ Criar usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const uid = userCredential.user.uid;

      // 3️⃣ Salvar dados no Firestore
      await setDoc(doc(db, "users", uid), {
        nome,
        email,
        dataNascimento: {
          dia,
          mes,
          ano,
        },
        kincoins: 0,
        criadoEm: serverTimestamp(),
      });

      Alert.alert("Sucesso!", "Cadastro realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro no Firebase", error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.progressoContainer}>
        <View style={style.progressoAtivo} />
        <View style={style.progressoInativo} />
        <View style={style.progressoInativo} />
      </View>

      <Text style={style.titulo}>Seja bem-vindo ao KinCoin!</Text>

      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        placeholder="Insira o nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={style.label}>E-mail</Text>
      <TextInput
        style={style.input}
        placeholder="Insira o e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={style.label}>Senha</Text>
      <TextInput
        style={style.input}
        placeholder="Insira a senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={style.label}>Confirmar Senha</Text>
      <TextInput
        style={style.input}
        placeholder="Confirme a senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Text style={style.label}>Data de nascimento:</Text>
      <View style={style.dataContainer}>
        <TextInput
          style={[style.inputData, { width: "25%" }]}
          placeholder="Dia"
          keyboardType="numeric"
          maxLength={2}
          value={dia}
          onChangeText={(t) => setDia(t.replace(/[^0-9]/g, ""))}
        />
        <TextInput
          style={[style.inputData, { width: "45%" }]}
          placeholder="Mês"
          keyboardType="numeric"
          maxLength={2}
          value={mes}
          onChangeText={(t) => setMes(t.replace(/[^0-9]/g, ""))}
        />
        <TextInput
          style={[style.inputData, { width: "25%" }]}
          placeholder="Ano"
          keyboardType="numeric"
          maxLength={4}
          value={ano}
          onChangeText={(t) => setAno(t.replace(/[^0-9]/g, ""))}
        />
      </View>

      <TouchableOpacity style={style.botao} onPress={avancar}>
        <Text style={style.textoBotao}>Avançar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

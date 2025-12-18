import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style/StyleRecuperacaoSenha";
import { ScriptRecuperacaoSenha } from "./script/ScriptRecuperacaoSenha";

export default function RecuperacaoSenha({ navigation }) {
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const handleContinuar = () => {
    const erro = ScriptRecuperacaoSenha({ email });

    setErroEmail("");

    if (erro) {
      setErroEmail(erro);
      return;
    }

    // Se não houver erro, navega para a próxima tela
    navigation.navigate("RecuperacaoSenha2");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de senha</Text>

      <Text style={styles.description}>
        Para conseguir recuperar sua senha, informe o e-mail cadastrado no nosso
        sistema e enviaremos o código de confirmação.
      </Text>

      <TextInput
        style={[styles.input, erroEmail ? { borderColor: "red" } : null]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {erroEmail ? <Text style={styles.erroTexto}>{erroEmail}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleContinuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

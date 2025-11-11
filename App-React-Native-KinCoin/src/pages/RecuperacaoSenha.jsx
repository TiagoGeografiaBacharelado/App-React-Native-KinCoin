import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style/StyleRecuperacaoSenha"; 

export default function RecuperacaoSenha({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Recuperação de senha</Text>

      <Text style={styles.description}>
        Para conseguir recuperar sua senha, informe o e-mail cadastrado no nosso 
        sistema e enviaremos o código de confirmação.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

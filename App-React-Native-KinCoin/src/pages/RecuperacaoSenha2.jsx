import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style/StyleRecuperacaoSenha2";

export default function RecuperacaoSenha2({ navigation }) {
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  const alterarDigito = (valor, indice) => {
    const novoCodigo = [...codigo];
    novoCodigo[indice] = valor;
    setCodigo(novoCodigo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de senha</Text>

      <Text style={styles.description}>
        Insira o código que enviamos para o e-mail: ***nha@***.com
      </Text>

      <View style={styles.codeContainer}>
        {codigo.map((digito, indice) => (
          <TextInput
            key={indice}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            value={digito}
            onChangeText={(valor) => alterarDigito(valor, indice)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TelaPerguntas")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancel}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

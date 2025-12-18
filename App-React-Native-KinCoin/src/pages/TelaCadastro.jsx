import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { style } from "./style/StyleTelaCadastro";

export default function TelaCadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  // Estados para mensagens de erro
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");
  const [erroData, setErroData] = useState("");

  // Função para validar campos individualmente
  function validarCampo(campo) {
    let valido = true;

    // Resetar todos erros antes
    setErroNome("");
    setErroEmail("");
    setErroSenha("");
    setErroConfirmarSenha("");
    setErroData("");

    // Valida nome
    if ((campo === "nome" || campo === "todos") && !nome.trim()) {
      setErroNome("O nome é obrigatório!");
      valido = false;
    }

    // Valida email
    if ((campo === "email" || campo === "todos") && !email.trim()) {
      setErroEmail("O e-mail é obrigatório!");
      valido = false;
    } else if (
      (campo === "email" || campo === "todos") &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setErroEmail("E-mail inválido!");
      valido = false;
    }

    // Valida senha
    if ((campo === "senha" || campo === "todos") && !senha) {
      setErroSenha("A senha é obrigatória!");
      valido = false;
    } else if ((campo === "senha" || campo === "todos") && senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres!");
      valido = false;
    }

    // Valida confirmar senha
    if ((campo === "confirmarSenha" || campo === "todos") && !confirmarSenha) {
      setErroConfirmarSenha("Confirme a senha!");
      valido = false;
    } else if (
      (campo === "confirmarSenha" || campo === "todos") &&
      senha !== confirmarSenha
    ) {
      setErroConfirmarSenha("As senhas não coincidem!");
      valido = false;
    }

    // Valida data
    if (campo === "data" || campo === "todos") {
      const diaNum = parseInt(dia);
      const mesNum = parseInt(mes);
      const anoNum = parseInt(ano);
      const anoAtual = new Date().getFullYear();

      if (!dia || !mes || !ano) {
        setErroData("Preencha todos os campos da data!");
        valido = false;
      } else if (isNaN(diaNum) || diaNum < 1 || diaNum > 31) {
        setErroData("Dia inválido!");
        valido = false;
      } else if (isNaN(mesNum) || mesNum < 1 || mesNum > 12) {
        setErroData("Mês inválido!");
        valido = false;
      } else if (isNaN(anoNum) || anoNum < 1900 || anoNum > anoAtual) {
        setErroData("Ano inválido!");
        valido = false;
      }
    }

    return valido;
  }

  function avancar() {
    const todosValidos = validarCampo("todos");
    if (!todosValidos) return;

    navigation.navigate("TelaCadastro2");
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.progressoContainer}>
        <View style={style.progressoAtivo} />
        <View style={style.progressoInativo} />
      </View>

      <Text style={style.titulo}>Seja bem-vindo, ao KinCoin!</Text>

      <Text style={style.label}>Nome</Text>
      <TextInput
        style={[style.input, erroNome ? { borderColor: "red" } : null]}
        placeholder="Insira o nome"
        value={nome}
        onChangeText={setNome}
        onBlur={() => validarCampo("nome")}
      />
      {erroNome ? <Text style={style.erroTexto}>{erroNome}</Text> : null}

      <Text style={style.label}>E-mail</Text>
      <TextInput
        style={[style.input, erroEmail ? { borderColor: "red" } : null]}
        placeholder="Insira o e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        onBlur={() => validarCampo("email")}
      />
      {erroEmail ? <Text style={style.erroTexto}>{erroEmail}</Text> : null}

      <Text style={style.label}>Senha</Text>
      <TextInput
        style={[style.input, erroSenha ? { borderColor: "red" } : null]}
        placeholder="Insira a senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        onBlur={() => validarCampo("senha")}
      />
      {erroSenha ? <Text style={style.erroTexto}>{erroSenha}</Text> : null}

      <Text style={style.label}>Confirmar Senha</Text>
      <TextInput
        style={[
          style.input,
          erroConfirmarSenha ? { borderColor: "red" } : null,
        ]}
        placeholder="Confirme a senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        onBlur={() => validarCampo("confirmarSenha")}
      />
      {erroConfirmarSenha ? (
        <Text style={style.erroTexto}>{erroConfirmarSenha}</Text>
      ) : null}

      <Text style={style.label}>Data de nascimento:</Text>
      <View style={style.dataContainer}>
        <TextInput
          style={[
            style.inputData,
            { width: "25%" },
            erroData ? { borderColor: "red" } : null,
          ]}
          placeholder="Dia"
          keyboardType="numeric"
          maxLength={2}
          value={dia}
          onChangeText={(t) => setDia(t.replace(/[^0-9]/g, ""))}
          onBlur={() => validarCampo("data")}
        />
        <TextInput
          style={[
            style.inputData,
            { width: "45%" },
            erroData ? { borderColor: "red" } : null,
          ]}
          placeholder="Mês"
          keyboardType="numeric"
          maxLength={2}
          value={mes}
          onChangeText={(t) => setMes(t.replace(/[^0-9]/g, ""))}
          onBlur={() => validarCampo("data")}
        />
        <TextInput
          style={[
            style.inputData,
            { width: "25%" },
            erroData ? { borderColor: "red" } : null,
          ]}
          placeholder="Ano"
          keyboardType="numeric"
          maxLength={4}
          value={ano}
          onChangeText={(t) => setAno(t.replace(/[^0-9]/g, ""))}
          onBlur={() => validarCampo("data")}
        />
      </View>
      {erroData ? <Text style={style.erroTexto}>{erroData}</Text> : null}

      <TouchableOpacity style={style.botao} onPress={avancar}>
        <Text style={style.textoBotao}>Avançar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

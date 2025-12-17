import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./src/pages/TelaInicial";
import TelaCadastro from "./src/pages/TelaCadastro";
import TelaLogin from "./src/pages/TelaLogin";
import TelaCadastro2 from "./src/pages/TelaCadastro2";
import RecuperacaoSenha from "./src/pages/RecuperacaoSenha";
import RecuperacaoSenha2 from "./src/pages/RecuperacaoSenha2";
import TelaPerguntas from "./src/pages/TelaPerguntas";
import TelaPerguntas2 from "./src/pages/TelaPerguntas2";
import TelaPerguntas3 from "./src/pages/TelaPerguntas3";
import TelaPerguntas4 from "./src/pages/TelaPerguntas4";
import TelaPrincipal from "./src/pages/TelaPrincipal";
import TelaQuestoes1 from "./src/pages/TelaQuestoes1";
import TelaConclusao from "./src/pages/TelaConclusao";
import TelaQuestoes2 from "./src/pages/TelaQuestoes2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ title: "KinCoin - Início" }}
        />
        <Stack.Screen
          name="TelaLogin"
          component={TelaLogin}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="TelaCadastro2"
          component={TelaCadastro2}
          options={{ title: "Cadastro - Continuação" }}
        />
        <Stack.Screen
          name="RecuperacaoSenha"
          component={RecuperacaoSenha}
          options={{ title: "Recuperação de Senha" }}
        />
        <Stack.Screen
          name="RecuperacaoSenha2"
          component={RecuperacaoSenha2}
          options={{ title: "Código de Verificação" }}
        />
        <Stack.Screen
          name="TelaPerguntas"
          component={TelaPerguntas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaPerguntas2"
          component={TelaPerguntas2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaPerguntas3"
          component={TelaPerguntas3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaPerguntas4"
          component={TelaPerguntas4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaQuestoes1"
          component={TelaQuestoes1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaQuestoes2"
          component={TelaQuestoes2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TelaConclusao"
          component={TelaConclusao}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./src/pages/TelaInicial";
import TelaCadastro from "./src/pages/TelaCadastro";
import TelaLogin from "./src/pages/TelaLogin";
import TelaCadastro2 from "./src/pages/TelaCadastro2";
import RecuperacaoSenha from "./src/pages/RecuperacaoSenha";
import RecuperacaoSenha2 from "./src/pages/RecuperacaoSenha2";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

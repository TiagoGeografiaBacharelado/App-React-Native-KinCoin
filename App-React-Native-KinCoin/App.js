import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./src/pages/TelaInicial";
import TelaCadastro from "./src/pages/TelaCadastro";
import TelaLogin from "./src/pages/TelaLogin";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

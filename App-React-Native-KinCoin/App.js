import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORTA O QUIZ CERTO
import QuizScreen from "./src/pages/QuizScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
      
        <Stack.Screen
          name="Quiz"
          component={QuizScreen} // <-- AQUI O CERTO
          options={{ title: "Quiz" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

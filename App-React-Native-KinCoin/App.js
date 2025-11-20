import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaDeQuestao from "./src/pages/TelaDeQuestao";
import TelaFinal from "./src/pages/TelaFinal"; // ✅ Faltava ISSO

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questao">
        <Stack.Screen
          name="Questao"
          component={TelaDeQuestao}
          options={{ title: "Questão" }}
        />
        <Stack.Screen
          name="Final"
          component={TelaFinal}
          options={{ title: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

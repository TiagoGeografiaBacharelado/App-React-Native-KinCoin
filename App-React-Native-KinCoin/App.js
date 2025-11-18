import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORTA O QUIZ CERTO
import TelaDeQuestao from "./src/pages/TelaDeQuestao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Questao">
      
        <Stack.Screen
          name="Questao"
          component={TelaDeQuestao} // <-- AQUI O CERTO
          options={{ title: "Questão" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

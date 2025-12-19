import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaResultado({ route, navigation }) {

  const { correct, total } = route.params;

  const wrong = total - correct;
  const percent = Math.round((correct / total) * 100);

  function getStars() {
    if (percent === 100) return "⭐⭐⭐";
    if (percent >= 70) return "⭐⭐";
    if (percent >= 40) return "⭐";
    return "Nenhuma estrela 😢";
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>
        Lição Concluída!
      </Text>

      <Text style={{ fontSize: 20, marginTop: 24 }}>
        Acertos: {correct}
      </Text>

      <Text style={{ fontSize: 20 }}>
        Erros: {wrong}
      </Text>

      <Text style={{ fontSize: 20, marginTop: 12 }}>
        Desempenho: {percent}%
      </Text>

      <Text style={{ fontSize: 32, marginTop: 20, textAlign: "center" }}>
        {getStars()}
      </Text>

      <Button
        mode="contained"
        style={{ marginTop: 30 }}
        onPress={() => navigation.replace("TelaDeQuestao")}
      >
        Voltar ao início
      </Button>

    </SafeAreaView>
  );
}

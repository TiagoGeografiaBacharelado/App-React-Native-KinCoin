// TelaDeQuestao.jsx
import { useEffect, useState } from "react";
import { Alert, Image, ScrollView, View } from "react-native";
import { Appbar, Button, Card, ProgressBar, RadioButton, Text, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style/StyleTelaDeQuestao";

// IMPORTANDO JSON LOCAL
import questionsLocal from "./script/modulo1.json";

export default function TelaDeQuestao({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // Embaralhar opções
  function shuffleOptions(optionsObj) {
    const keys = Object.keys(optionsObj);
    const arr = keys.map((k) => ({ id: k, label: optionsObj[k] }));
    return arr.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    setLoading(true);

    const base = questionsLocal;

    const ready = base.map((q) => ({
      ...q,
      optionsShuffled: shuffleOptions(q.options),
    }));

    setQuestions(ready);
    setLoading(false);
  }, []);

  function handleConfirm() {
    if (!selected) return;

    setAnswered(true);

    const isCorrect = selected === questions[index].correct;

    Alert.alert(
      "Resultado",
      isCorrect ? "Resposta correta!" : "Resposta errada!"
    );
  }

  function handleNext() {
    const next = index + 1;

    if (next < questions.length) {
      setIndex(next);
      setSelected(null);
      setAnswered(false);
      setProgress((next + 1) / questions.length);
    } else {
      Alert.alert("Fim", "Você completou todas as questões!");
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={style.center}>
        <Text>Carregando questões...</Text>
      </SafeAreaView>
    );
  }

  const q = questions[index];

  return (
    <SafeAreaView style={style.container}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Questão" />
      </Appbar.Header>

      <View style={style.progressContainer}>
        <ProgressBar progress={progress} style={style.progress} />
        <Text>{Math.round(progress * 100)}%</Text>
      </View>

      <ScrollView contentContainerStyle={style.scrollContent}>
        <Card style={style.card}>
          <Card.Content>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {q.question}
            </Text>

            {q.image ? (
              <Image source={{ uri: q.image }} style={style.questionImage} />
            ) : null}

            {/* OPÇÕES */}
            <RadioButton.Group
              onValueChange={(value) => {
                if (!answered) setSelected(value);
              }}
              value={selected ?? ""}
            >
              {q.optionsShuffled.map((opt) => {
                let backgroundColor = "white";
                let textColor = "black";

                if (answered) {
                  if (opt.id === q.correct) {
                    backgroundColor = "#58CC02"; // VERDE
                    textColor = "white";
                  } else if (
                    opt.id === selected &&
                    selected !== q.correct
                  ) {
                    backgroundColor = "#D90004"; // VERMELHO
                    textColor = "white";
                  }
                }

                return (
                  <Card
                    key={opt.id}
                    style={[style.optionCard, { backgroundColor }]}
                  >
                    <Card.Content style={style.optionRow}>
                      <RadioButton value={opt.id} />
                      <Text style={[style.optionLabel, { color: textColor }]}>
                        {opt.id}) {opt.label}
                      </Text>
                    </Card.Content>
                  </Card>
                );
              })}
            </RadioButton.Group>

            {/* EXPLICAÇÃO */}
            {answered && (
              <Card
                style={{
                  marginTop: 12,
                  backgroundColor: "#FFF3C4",
                }}
              >
                <Card.Content>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Explicação:
                  </Text>
                  <Text style={{ marginTop: 4 }}>
                    {q.explanation || "Sem explicação cadastrada."}
                  </Text>
                </Card.Content>
              </Card>
            )}

            {/* BOTÕES */}
            {!answered ? (
              <Button
                mode="contained"
                onPress={handleConfirm}
                disabled={!selected}
                style={style.confirmButton}
              >
                Confirmar
              </Button>
            ) : (
              <Button
                mode="contained"
                onPress={handleNext}
                style={style.confirmButton}
              >
                Próxima
              </Button>
            )}
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}


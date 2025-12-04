// TelaDeQuestao.jsx
import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { Appbar, Button, Card, ProgressBar, RadioButton, Snackbar, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./style/StyleTelaDeQuestao";

// JSON local
import questionsLocal from "./script/modulo1.json";

/* ---------- Utilidades (fora do componente) ---------- */
export function shuffleOptions(optionsObj) {
  const keys = Object.keys(optionsObj);
  const arr = keys.map((k) => ({ id: k, label: optionsObj[k] }));
  return arr.sort(() => Math.random() - 0.5);
}

function getOptionColors(optId, selected, correct, answered) {
  if (!answered) return { backgroundColor: "white", textColor: "black" };
  if (optId === correct) return { backgroundColor: "#58CC02", textColor: "white" };
  if (optId === selected && selected !== correct) return { backgroundColor: "#D90004", textColor: "white" };
  return { backgroundColor: "white", textColor: "black" };
}

/* ---------- Componentes pequenos ---------- */
function ProgressHeader({ progress }) {
  return (
    <View style={style.progressContainer}>
      <ProgressBar progress={progress} style={style.progress} />
      <Text>{Math.round(progress * 100)}%</Text>
    </View>
  );
}

const OptionItem = React.memo(function OptionItem({ opt, selected, onSelect, answered, correct }) {
  const { backgroundColor, textColor } = getOptionColors(opt.id, selected, correct, answered);
  return (
    <Pressable onPress={() => !answered && onSelect(opt.id)}>
      <Card style={[style.optionCard, { backgroundColor }]}>
        <Card.Content style={style.optionRow}>
          <RadioButton value={opt.id} status={selected === opt.id ? "checked" : "unchecked"} />
          <Text style={[style.optionLabel, { color: textColor }]}>{opt.id}) {opt.label}</Text>
        </Card.Content>
      </Card>
    </Pressable>
  );
});

/* ---------- Componente principal ---------- */
export default function TelaDeQuestao({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  // carregar e preparar questões só uma vez
  useEffect(() => {
    setLoading(true);
    const base = Array.isArray(questionsLocal) ? questionsLocal : [];
    const ready = base.map((q) => ({
      ...q,
      optionsShuffled: shuffleOptions(q.options),
    }));
    setQuestions(ready);
    setLoading(false);
  }, []);

  // progress é derivado
  const progress = questions.length ? (index + 1) / questions.length : 0;

  if (loading) {
    return (
      <SafeAreaView style={style.center}>
        <Text>Carregando questões...</Text>
      </SafeAreaView>
    );
  }

  if (!questions.length) {
    return (
      <SafeAreaView style={style.center}>
        <Text>Nenhuma questão encontrada.</Text>
      </SafeAreaView>
    );
  }

  const q = questions[index];

  function handleConfirm() {
    if (selected === null) return; // checagem robusta

    setAnswered(true);
    const isCorrect = selected === q.correct;
    if (isCorrect) setCorrectCount((c) => c + 1);

    // feedback não-modal
    setSnackMessage(isCorrect ? "Resposta correta!" : "Resposta errada!");
    setShowSnackbar(true);
  }

  function handleNext() {
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
      setSelected(null);
      setAnswered(false);
      setShowSnackbar(false);
    } else {
      // navegar para tela de resultado com dados
      navigation.navigate("TelaResultado", { correct: correctCount, total: questions.length });
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} accessibilityLabel="Voltar" />
        <Appbar.Content title="Questão" />
      </Appbar.Header>

      <ProgressHeader progress={progress} />

      <ScrollView contentContainerStyle={style.scrollContent}>
        <Card style={style.card}>
          <Card.Content>
            <Text style={style.questionTitle}>{q.question}</Text>

            {q.image ? <Image source={{ uri: q.image }} style={style.questionImage} /> : null}

            <RadioButton.Group onValueChange={(value) => { if (!answered) setSelected(value); }} value={selected ?? ""}>
              {q.optionsShuffled.map((opt) => (
                <OptionItem
                  key={opt.id}
                  opt={opt}
                  selected={selected}
                  onSelect={setSelected}
                  answered={answered}
                  correct={q.correct}
                />
              ))}
            </RadioButton.Group>

            {answered && (
              <Card style={style.explanationCard}>
                <Card.Content>
                  <Text style={style.explanationTitle}>Explicação:</Text>
                  <Text style={style.explanationText}>{q.explanation || "Sem explicação cadastrada."}</Text>
                </Card.Content>
              </Card>
            )}

            {!answered ? (
              <Button mode="contained" onPress={handleConfirm} disabled={selected === null} style={style.confirmButton}>
                Confirmar
              </Button>
            ) : (
              <Button mode="contained" onPress={handleNext} style={style.confirmButton}>
                {index + 1 < questions.length ? "Próxima" : "Finalizar"}
              </Button>
            )}
          </Card.Content>
        </Card>
      </ScrollView>

      <Snackbar visible={showSnackbar} onDismiss={() => setShowSnackbar(false)} duration={1500}>
        {snackMessage}
      </Snackbar>
    </SafeAreaView>
  );
}
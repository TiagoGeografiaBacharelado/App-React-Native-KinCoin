// QuizScreen.jsx
import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, StyleSheet, Alert } from "react-native";
import {
  Appbar,
  Button,
  Card,
  Paragraph,
  ProgressBar,
  RadioButton,
  Text,
  Title
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// Firebase
/*import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
*/

// Para buscar JSON local
import questionsLocal from "./questions.json";

export default function QuizScreen() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // EMBARALHAR OPÇÕES
  function shuffleOptions(optionsObj) {
    const keys = Object.keys(optionsObj);

    // transforma em array de {id, label}
    const arr = keys.map(k => ({ id: k, label: optionsObj[k] }));

    // embaralhar
    return arr.sort(() => Math.random() - 0.5);
  }

  // BUSCAR QUESTÕES DO FIREBASE
  async function loadQuestionsFirebase() {
    try {
      const querySnap = await getDocs(collection(db, "quiz"));
      const list = [];

      querySnap.forEach(doc => {
        list.push({ ...doc.data(), id: doc.id });
      });

      return list;
    } catch (err) {
      console.log("Erro Firebase:", err);
      return null; // Continua com JSON local
    }
  }

  // CARREGAR QUESTÕES (Firebase > JSON > fallback)
  useEffect(() => {
    async function load() {
      setLoading(true);

      const firebaseData = await loadQuestionsFirebase();

      const base = firebaseData && firebaseData.length > 0
        ? firebaseData
        : questionsLocal;

      // Adicionar opções embaralhadas
      const ready = base.map(q => ({
        ...q,
        optionsShuffled: shuffleOptions(q.options)
      }));

      setQuestions(ready);
      setLoading(false);
    }

    load();
  }, []);

  function handleConfirm() {
    if (!selected) return;

    const isCorrect = selected === questions[index].correct;

    Alert.alert(
      "Resultado",
      isCorrect ? "Resposta correta!" : "Resposta errada!"
    );

    // ir para a próxima questão
    const next = index + 1;

    if (next < questions.length) {
      setIndex(next);
      setSelected(null);
      setProgress((next + 1) / questions.length);
    } else {
      Alert.alert("Fim", "Você completou o quiz!");
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Carregando questões...</Text>
      </SafeAreaView>
    );
  }

  const q = questions[index];

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Quiz" />
      </Appbar.Header>

      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} style={styles.progress} />
        <Text>{Math.round(progress * 100)}%</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{q.question}</Title>

            {q.image ? (
              <Image source={{ uri: q.image }} style={styles.questionImage} />
            ) : null}

            <RadioButton.Group
              onValueChange={value => setSelected(value)}
              value={selected ?? ""}
            >
              {q.optionsShuffled.map(opt => (
                <Card key={opt.id} style={styles.optionCard}>
                  <Card.Content style={styles.optionRow}>
                    <RadioButton value={opt.id} />
                    <Text style={styles.optionLabel}>
                      {opt.id}) {opt.label}
                    </Text>
                  </Card.Content>
                </Card>
              ))}
            </RadioButton.Group>

            <Button
              mode="contained"
              onPress={handleConfirm}
              disabled={!selected}
              style={styles.confirmButton}
            >
              Confirmar
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  progressContainer: {
    padding: 16,
    alignItems: "center",
  },
  progress: { height: 8, width: "90%" },
  scrollContent: { padding: 16 },
  card: { marginTop: 8, paddingBottom: 8 },
  questionImage: { width: "100%", height: 150, marginVertical: 8 },
  optionCard: { marginVertical: 6 },
  optionRow: { flexDirection: "row", alignItems: "center" },
  optionLabel: { marginLeft: 6, flex: 1 },
  confirmButton: { marginTop: 16 },
});


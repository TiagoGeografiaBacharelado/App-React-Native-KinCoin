import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021F35",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* PROGRESS */
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },

  progress: {
    flex: 1,
    height: 10,
    borderRadius: 8,
  },

  /* SCROLL */
  scrollContent: {
    padding: 16,
  },

  /* QUESTÃO */
  card: {
    padding: 12,
    backgroundColor: "#07264E",
    borderRadius: 12,
  },

  questionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  questionImage: {
    width: "100%",
    height: 160,
    marginVertical: 10,
    borderRadius: 12,
  },

  /* OPÇÕES */
  optionCard: {
    marginVertical: 6,
    borderRadius: 10,
    padding: 4,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },

  optionLabel: {
    marginLeft: 6,
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
  },

  /* EXPLICAÇÃO */
  explanationCard: {
    marginTop: 12,
    padding: 10,
    backgroundColor: "#FFF3C4",
    borderRadius: 12,
  },

  explanationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },

  explanationText: {
    fontSize: 15,
    color: "#333",
  },

  /* BOTÃO */
  confirmButton: {
    marginTop: 16,
    borderRadius: 12,
    paddingVertical: 10,
    width: "100%",
  },
});

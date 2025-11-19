import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    padding: 16,
    alignItems: "center",
  },
  progress: {
    height: 8,
    width: "90%",
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    marginTop: 8,
    paddingBottom: 8,
  },
  questionImage: {
    width: "100%",
    height: 150,
    marginVertical: 8,
  },
  optionCard: {
    marginVertical: 6,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionLabel: {
    marginLeft: 6,
    flex: 1,
  },
  confirmButton: {
    marginTop: 16,
  },
});
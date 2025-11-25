//StyleTelaDeQuestao.ts
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#07264E",
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
    width: "100%",
    borderRadius: 8,
    //backgroundColor: "#F28B2D",
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    marginTop: 8,
    paddingBottom: 8,
    //backgroundColor: "#021F35",
  },
  questionImage: {
    width: "100%",
    height: 160,
    marginVertical: 10,
    borderRadius: 12,
  },
  questionText: {
  fontSize: 20,
  fontWeight: "bold",
  color: "white",
  },
  optionCard: {
    marginVertical: 6,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "#0A3A5E",
  },
  optionLabel: {
    marginLeft: 6,
    flex: 1,
  },
  confirmButton: {
  marginTop: 16,
  borderRadius: 12,
  paddingVertical: 8,
  
  width: "100%",
},

});


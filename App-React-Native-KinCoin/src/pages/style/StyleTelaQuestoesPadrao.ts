import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1E2F",
    paddingHorizontal: 20,
  },

  /* Header */
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  headerTitulo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  /* Pergunta */
  perguntaArea: {
    backgroundColor: "#2A2E4A",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 30,
  },

  perguntaTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },

  /* Esquilo */
  esquilo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    marginBottom: 30,
  },

  /* Alternativas */
  alternativas: {
    gap: 14,
  },

  opcao: {
    backgroundColor: "#3A3E5C",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  opcaoSelecionada: {
    borderWidth: 2,
    borderColor: "#F6A623",
  },

  opcaoCorreta: {
    backgroundColor: "#4CAF50",
  },

  opcaoErrada: {
    backgroundColor: "#F44336",
  },

  opcaoTexto: {
    color: "#FFFFFF",
    fontSize: 14,
  },

  /* Feedback */
  feedback: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  textoCorreto: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  textoErrado: {
    color: "#F44336",
    fontSize: 15,
    textAlign: "center",
  },

  /* Botão */
  botaoConfirmar: {
    marginTop: "auto",
    backgroundColor: "#7B7EFF",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },

  botaoDesabilitado: {
    opacity: 0.5,
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});

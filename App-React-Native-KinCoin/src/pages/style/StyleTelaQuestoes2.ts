import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2E",
    padding: 16,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  headerTitulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* Pergunta */
  perguntaArea: {
    backgroundColor: "#2A2A40",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  perguntaTexto: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },

  /* Esquilo */
  esquilo: {
    width: "100%",
    height: 160,
    marginVertical: 12,
  },

  /* Alternativas */
  alternativas: {
    flex: 1,
    justifyContent: "center",
  },

  opcao: {
    backgroundColor: "#3A3A55",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  opcaoSelecionada: {
    backgroundColor: "#5050FF",
  },

  opcaoCorreta: {
    backgroundColor: "#2ECC71",
  },

  opcaoErrada: {
    backgroundColor: "#E74C3C",
  },

  opcaoTexto: {
    color: "#FFF",
    fontSize: 14,
  },

  /* Feedback */
  feedback: {
    marginVertical: 8,
    alignItems: "center",
  },

  textoCorreto: {
    color: "#2ECC71",
    fontWeight: "bold",
  },

  textoErrado: {
    color: "#E74C3C",
    textAlign: "center",
  },

  /* Botão */
  botaoConfirmar: {
    backgroundColor: "#5050FF",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  botaoDesabilitado: {
    backgroundColor: "#777",
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

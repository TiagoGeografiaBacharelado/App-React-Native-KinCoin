import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061B2E",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  headerTitulo: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  perguntaArea: {
    backgroundColor: "#FFF",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  perguntaTexto: {
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
  },

  esquilo: {
    width: 110,
    height: 110,
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  alternativas: {
    gap: 14,
  },

  opcao: {
    backgroundColor: "#FFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
  },

  opcaoSelecionada: {
    borderWidth: 2,
    borderColor: "#F6A623",
  },

  opcaoTexto: {
    color: "#000",
    fontSize: 14,
  },

  botaoConfirmar: {
    marginTop: "auto",
    backgroundColor: "#B0B0B0",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 30,
  },

  botaoDesabilitado: {
    opacity: 0.6,
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
  },
});

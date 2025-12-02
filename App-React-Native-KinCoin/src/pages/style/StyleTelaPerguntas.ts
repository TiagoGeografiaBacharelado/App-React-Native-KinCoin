import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#001B2E",
    padding: 20,
    paddingTop: 40,
  },

  botaoVoltar: {
    marginBottom: 20,
  },

  iconeVoltar: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  balao: {
    backgroundColor: "#F7931A",
    padding: 16,
    borderRadius: 12,
    maxWidth: "70%",
  },

  textoBalao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 20,
  },

  mascote: {
    width: 80,
    height: 80,
  },

  botaoPergunta: {
    backgroundColor: "#66D100",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

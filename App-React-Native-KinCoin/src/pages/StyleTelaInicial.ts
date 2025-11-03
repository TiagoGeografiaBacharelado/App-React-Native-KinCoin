import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#021F35",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },

  textoBemVindo: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
  },

  botao: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },

  botaoLogin: {
    backgroundColor: "#6B6B6B",
  },

  botaoCadastrar: {
    backgroundColor: "#F7941D",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
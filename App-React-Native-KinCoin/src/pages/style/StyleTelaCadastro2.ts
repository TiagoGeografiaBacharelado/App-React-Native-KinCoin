import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#001B2E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  progressoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  progressoAtivo: {
    width: 50,
    height: 6,
    backgroundColor: "#F7931A",
    borderRadius: 10,
    marginHorizontal: 5,
  },

  progressoInativo: {
    width: 50,
    height: 6,
    backgroundColor: "#16324A",
    borderRadius: 10,
    marginHorizontal: 5,
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  imagem: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: "contain",
  },

  textoCentral: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  botao: {
    backgroundColor: "#F7931A",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

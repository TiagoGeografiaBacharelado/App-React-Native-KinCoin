import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B2E",
    alignItems: "center",
    paddingTop: 60,
  },

  titulo: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 35,
    lineHeight: 30,
  },

  linha: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  botao: {
    height: 52,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  btnLaranjaPequeno: {
    width: "47%",
    backgroundColor: "#FF9E00",
  },

  btnLaranja: {
    width: "80%",
    backgroundColor: "#FF9E00",
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  imagem: {
    width: 180,
    height: 180,
    marginTop: 40,
  },
});

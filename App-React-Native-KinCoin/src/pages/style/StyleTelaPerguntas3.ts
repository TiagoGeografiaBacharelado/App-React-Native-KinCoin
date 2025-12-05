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

  botao: {
    width: "80%",
    height: 55,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    gap: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  btnVerde: {
    backgroundColor: "#66E01B",
  },

  btnLaranja: {
    backgroundColor: "#FF9E00",
  },

  btnVermelho: {
    backgroundColor: "#FF4545",
  },

  btnRoxo: {
    backgroundColor: "#C77DFF",
  },

  imagem: {
    width: 180,
    height: 180,
    marginTop: 30,
  },
});

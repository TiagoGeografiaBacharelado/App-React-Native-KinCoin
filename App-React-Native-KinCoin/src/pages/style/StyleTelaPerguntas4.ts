import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041527",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 32,
  },

  botao: {
    width: "100%",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* CORES DOS BOTÕES */
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
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061B2E",
  },

  header: {
    backgroundColor: "#F6A623",
    margin: 16,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTexto: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },

  conteudo: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  colunaCentro: {
    alignItems: "center",
  },

  pontoAtivo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6A623",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  pontoInativo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#9B9B9B",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  seta: {
    marginTop: 10,
  },

  esquilo: {
    width: 180,
    height: 180,
    marginTop: 20,
  },

  footer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    margin: 16,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },

  footerBotaoAtivo: {
    flexDirection: "row",
    backgroundColor: "#F6A623",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
  },

  footerTextoAtivo: {
    color: "#FFF",
    marginLeft: 6,
    fontWeight: "600",
  },

  footerBotao: {
    flexDirection: "row",
    alignItems: "center",
  },

  footerTexto: {
    color: "#999",
    marginLeft: 6,
  },
});

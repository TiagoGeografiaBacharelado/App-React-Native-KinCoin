import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061B2E",
    alignItems: "center",
  },

  /* HEADER */
  header: {
    width: "100%",
    backgroundColor: "#F6A623",
    margin: 16,
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitulo: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
  },

  /* AVATAR */
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 10,
  },

  nome: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },

  /* XP */
  xpContainer: {
    width: "85%",
    backgroundColor: "#0D2A45",
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
  },

  xpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  levelText: {
    color: "#F6A623",
    fontWeight: "bold",
  },

  xpText: {
    color: "#FFF",
    fontSize: 12,
  },

  barraXP: {
    width: "100%",
    height: 10,
    backgroundColor: "#1B3A57",
    borderRadius: 10,
    overflow: "hidden",
  },

  xpFill: {
    height: "100%",
    backgroundColor: "#F6A623",
  },

  /* FOOTER (IGUAL AO PRINCIPAL) */
  footer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    margin: 16,
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "90%",
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

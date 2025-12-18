import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#061B2E",
  },

  /* HEADER */
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

  headerTitulo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  /* PERFIL */
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  nome: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },

  /* XP */
  xpContainer: {
    marginHorizontal: 24,
    backgroundColor: "#0E2A44",
    borderRadius: 20,
    padding: 16,
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
    height: 10,
    backgroundColor: "#1B3A57",
    borderRadius: 10,
    overflow: "hidden",
  },

  xpFill: {
    height: "100%",
    backgroundColor: "#F6A623",
  },
});

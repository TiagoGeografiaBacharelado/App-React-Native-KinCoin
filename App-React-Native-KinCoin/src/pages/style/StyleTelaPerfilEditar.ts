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
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitulo: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    alignSelf: "center",
  },

  trocarFoto: {
    color: "#F6A623",
    marginTop: 8,
    textAlign: "center",
    fontWeight: "500",
  },

  input: {
    backgroundColor: "#1B3A57",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#FFF",
    width: "80%",
    alignSelf: "center",
    marginTop: 30,
    fontSize: 15,
  },
});

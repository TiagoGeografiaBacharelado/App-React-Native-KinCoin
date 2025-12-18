import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
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

  container: {
    flexGrow: 1,
    backgroundColor: "#001B2E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  label: {
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: 10,
    fontWeight: "500",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },

  inputErro: {
    borderColor: "red",
  },

  erroTexto: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
  },

  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },

  inputData: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#fff",
  },

  botao: {
    backgroundColor: "#F7931A",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

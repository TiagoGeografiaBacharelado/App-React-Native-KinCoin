import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B2E",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  description: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },

  erroTexto: {
    color: "red",
    marginBottom: 10,
    marginLeft: 5,
  },

  button: {
    width: "100%",
    backgroundColor: "#F7931A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancel: {
    color: "#F7931A",
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
  },
});

export default styles;

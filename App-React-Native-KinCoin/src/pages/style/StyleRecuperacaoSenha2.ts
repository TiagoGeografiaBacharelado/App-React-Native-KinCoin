import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F3D",
    paddingHorizontal: 20,
    paddingTop: 80,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  description: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  codeInput: {
    width: 48,
    height: 55,
    backgroundColor: "white",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancel: {
    color: "white",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});

export default styles;

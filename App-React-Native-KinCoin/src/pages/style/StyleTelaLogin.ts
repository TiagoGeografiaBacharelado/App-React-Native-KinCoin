import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B2E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  welcomeText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
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
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: 5,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#F7931A",
    marginBottom: 20,
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#F7931A",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  signupText: {
    color: "#fff",
    marginBottom: 15,
  },

  signupLink: {
    color: "#F7931A",
    fontWeight: "bold",
  },

  orText: {
    color: "#fff",
    marginBottom: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },

  socialButton: {
    backgroundColor: "#16324A",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;

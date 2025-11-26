import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1F3D",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  welcomeText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#A0A0A0",
    marginBottom: 20,
  },

  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF8C00",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  signupText: {
    color: "white",
    marginBottom: 20,
  },

  signupLink: {
    color: "#FF8C00",
    fontWeight: "bold",
  },

  orText: {
    color: "white",
    marginBottom: 10,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },

  socialButton: {
    backgroundColor: "#3b5998",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;

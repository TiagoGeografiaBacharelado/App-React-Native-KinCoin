
import { Image, Text, View } from "react-native";

import Logo from "../assets/ImgTelaCarregamento.png";
import { style } from "./style/StyleTelaDeCarregamento";

export default function TelaDeCarregamento() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo}
        resizeMode="contain" >
        </Image>
        <Text style={style.TextAguarde}> Aguarde...</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.TextPrincipal}> Aprenda finanças e investimento de forma simples e divertida!</Text>
      </View>
    </View> 
  );
}
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor: "#021F35",
        flex:1,
        alignItems:"center",justifyContent:"center",    
    },

    boxTop:{
        height: Dimensions.get("window").height / 3,
        alignItems:"center",
        justifyContent:"center",
        width: "100%",  
        
    },

    boxMid:{
                height: Dimensions.get("window").height / 4,
        width: "100%",  
        
    },

    boxBottom:{
                height: Dimensions.get("window").height / 3,
        width: "100%",  
        
    },

    logo:{ 
        marginTop: 0, 
        width: 170,
        height: 170,
    },

    TextAguarde:{
        fontWeight: "bold",
        fontSize: 16,
        color: "#b0b0b0ff",
    },

    TextPrincipal:{  
        fontWeight: "bold",
        fontSize: 20,
        color: "#ffffffff",
        textAlign: "center",
        marginHorizontal: 20,
    }
})
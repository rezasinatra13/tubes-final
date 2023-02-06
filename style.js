import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
    },
    content:{
        width: "100%",
        alignItems: "center"
    },  
    action:{
        width: "80%",
        borderWidth: 5,
        marginTop: 10,
        padding: 10,
        flexDirection:"row",
        borderRadius:100,

    },
    login:{
        marginTop: 25,
        width: "80%",
        backgroundColor: "Chocolate",
        padding: 12,
        alignItems: "center",
        borderWidth : 3,
        borderRadius : 40,
        borderColor : "pink"

    },
    textLogin: {
        fontSize: 20,
        color: "black",
        fontWeight: "700",  
    },
    header: {
        width: "100%",
        height: 70,
        backgroundColor: "bisque",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 4,
        borderBottomColor: "black",
        flexDirection:"row-reverse",
        paddingHorizontal:30,
      },
      menu:{
        padding: 12,
        marginBottom: 100,
      },
      listMenu:{
        padding: 10,
      },
      textMenu:{
        fontSizea: 16,
        fontWeight: "700",
      },
      textContent:{
        fontSize: 30,
        fontWeight: "800",
        marginLeft: 10,
      },
      textHeader:{
        color:"purple",
        fontWeight:"800",
        fontSize:24,
      },
      textInput:{
        color: "#000",
        fontSize:18,
        fontWeight:"500"
      }
});

export default styles;
import { Text, View, StatusBar, Image, TouchableOpacity,Alert, TextInput } from "react-native";
import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import { db } from "./config";
import styles from "./style";
import { doc, deleteDoc, getDocs, query, collection, where } from "@firebase/firestore";
import { Ionicons      } from "@expo/vector-icons";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:  props.route.params.user,
        id:  props.route.params.id,
        username:"",
        password:"",
        item:{},
        itemKey:[]
    };
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    getDocs(query(collection(db, "users"), where("username", "==", this.state.user))).then((docSnap) => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      this.setState({
        item: users,
        itemKey: Object.keys(users),
        username: users[0].username,
      });
      console.log("Kontaks Key: ", this.state.username);
      // console.log("Kontaks : ", this.state.item);
      });
  }

  deleteData = (id) => {
    Alert.alert("Info", "Anda Yakin Menghapus Data User", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          deleteDoc(doc(db, "users", id));
          Alert.alert("Hapus Data Berhasil");
          this.props.navigation.dispatch(StackActions.replace("Login"));
        },
      },
    ]);
  };


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffdead", alignItems:"center", paddingVertical:20}}>
            <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(StackActions.replace("Login"))}>
            <Ionicons name="exit-outline" size={24} color="black" />
            </TouchableOpacity>
        
          <Text style={styles.textHeader}>Profile</Text>
        </View>
        <View style={{  justifyContent:"center", alignItems:"center",padding: 15,
        width:"80%",
            backgroundColor: "pink",
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            marginBottom:100,
            marginTop:100,
            }}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate("Update", {user:this.state.username})} style={{backgroundColor:"bisque", 
            width:"80%", height:80, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center", 
            borderWidth:4, 
            borderColor:"black", 
            borderRadius:10, 
            elevation:10,
            }}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"purple"}}>Edit Account</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => this.deleteData(this.state.username)} style={{backgroundColor:"bisque", 
            width:"80%", height:80, 
            margin: 8, 
            justifyContent:"center", 
            alignItems:"center", 
            borderWidth:4, 
            borderColor:"black", 
            borderRadius:10, 
            elevation:10,
            }}>
            <Text style={{fontSize:20, fontWeight:"bold", color:"purple"}}>Delete Account</Text>
             </TouchableOpacity>
        </View>
        <View style={styles.action}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="purple"
                style={styles.textInput}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                editable={false}
              />
            </View>
            
            
      </View>
    );
  }
}

export default About;
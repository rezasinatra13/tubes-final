import {Text,View,TouchableOpacity,Image,TextInput,StatusBar, Alert,} from "react-native";
  import React, { Component } from "react";
  import { db } from "./config";
  import { setDoc, doc,updateDoc,getDocs,collection,query,where } from "@firebase/firestore";
  import styles from "./style";

  export default class Update extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user:  props.route.params.user,
        username: "",
        password: "",
        id:"",
        check_textInputChange: false,
        secureTextEntry: true,
        modalVisible: false,
        modalNotVisible: false,
      };
    }
  
    insertNewUser = () => {
      var user = this.state.username;
      var password = this.state.password;
      console.log(this.state.user);
      console.log(password);
  
      if (
        user.length === 0 ||
        password.length === 0
      ) {
        alert("HARAP ISI DATA DENGAN BENAR !!!");
      } else {
        updateDoc(doc(db, "users", this.state.id), {
          username: user,
          password: password,
        })
          .then(() => {
            console.log("data submitted");
            Alert.alert("Berhasil")
            this.props.navigation.navigate("Profile");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  
    // function ketika button icon eye diklik
    updateSecureTextEntry() {
      // disini kita merubah setState yaitu ketika nilainya true maka akan menjadi false dan sebaliknya
      this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry,
      });
    }
    componentDidMount(){
      this.getData();
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
        password: users[0].password,
        id:users[0].id
      });
    //   console.log("Kontaks Key: ", users[0].alamat);
    //   console.log("Kontaks : ", this.state.item);
      });
  }
    

    
  
    render() {
        console.log(this.state.id)
      return (
        <View style={styles.container}>
          <StatusBar barStyle="pink" backgroundColor="black" />
          <View style={{
            backgroundColor: "pink", 
            width: "100%", 
            padding:15,
            justifyContent:"center",
            alignItems:"center",
            marginBottom:100,
            }}>
            <Text style={{color: "purple", fontWeight: "bold"}}>
                Update Account
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.action}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </View>
            
            <View style={styles.action}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                value={this.state.password}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={styles.login}
            >
              <Text style={styles.textLogin}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
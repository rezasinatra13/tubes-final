import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    StatusBar,
  } from "react-native";
  import React, { Component } from "react";
  import { db } from "./config";
  import { setDoc, doc } from "@firebase/firestore";
  import styles from "./style";
  
  export default class RegisScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        modalVisible: false,
        modalNotVisible: false,
      };
    }
  
    insertNewUser = () => {
      var user = this.state.user;
      var password = this.state.password;
      var id = user + Math.floor(Math.random() * 999999);
      console.log(user);
  
      if (
        user.length === 0 ||
        password.length === 0
      ) {
        alert("HARAP ISI DATA DENGAN BENAR !!!");
      } else {
        setDoc(doc(db, "users", user), {
          username: user,
          password: password,
        })
          .then(() => {
            console.log("data submitted");
            this.props.navigation.navigate("Login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  
    updateSecureTextEntry() {
      this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry,
      });
    }
  
    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="pink" />
          <View style={styles.content}>
            <View style={styles.action}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#990000"
                style={styles.textInput}
                onChangeText={(user) => this.setState({ user })}
              />
            </View>
            
            
            <View style={styles.action}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#990000"
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={this.state.secureTextEntry ? true : false}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={styles.login}
            >
              <Text style={styles.textLogin}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  
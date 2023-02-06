import { TextInput, Text, StyleSheet, View, Alert, Image, TouchableOpacity, StatusBar} from "react-native";
import React, { Component } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "./config";
import logo from "./MV.png";
import styles from "./style";
import { StackActions } from "@react-navigation/native";


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      user: "",
      password: "",
      dbuser: "",
      dbpassword: "",
      check_textInputChange: false,
      secureTextEntry: true,
      modalVisible: false,
      modalNotVisible: false,
    };
  }

  readData = () => {
    var Username = this.state.user;
    var Password = this.state.password;
    if (Username.length === 0 || Password.length === 0) {
      alert("HARAP ISI FORM !!!");
    } else if (this.state.user === "Guest" && this.state.password === "Guest") {
      Alert.alert("Selamat Masuk");
      console.log(this.state.user);
      this.props.navigation.navigate("BottomNavigator");
    } else {
      getDocs(query(collection(db, "users"), where("username", "==", Username))).then((docSnap) => {
        let users = [];
        docSnap.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          dbpassword: users[0].password,
          dbuser: users[0].username,
          id: users[0].id,
        });
        this.validasiDB();
      });
    }
  };


  validasiDB = () => {
    if (this.state.user === this.state.dbuser && this.state.password === this.state.dbpassword) {
        Alert.alert("Selamat Datang");
      console.log("Login Berhasil");
      this.props.navigation.dispatch(StackActions.replace("BottomNavigator", {user: this.state.user, id:this.state.id}));
    } else {
      Alert.alert("Login Gagal");

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
        <Image source={logo} style={{width:300, height:300}} resizeMode="contain" />
        <View style={[styles.content, styles.content2]}>
          <View style={styles.action}>
            <Image  style={styles.icon} />
            <TextInput placeholder="Username" placeholderTextColor="purple" style={styles.textInput} onChangeText={(user) => this.setState({ user })} />
          </View>
          <View style={styles.action}>
            <Image  style={styles.icon} />
            <TextInput placeholder="Password" placeholderTextColor="purple" style={styles.textInput} onChangeText={(password) => this.setState({ password })} secureTextEntry={this.state.secureTextEntry ? true : false} />
            {/* <TouchableOpacity onPress={this.updateSecureTextEntry.bind(this)}>{this.state.secureTextEntry ? <Feather name="eye-off" color="grey" size={24} /> : <Feather name="eye" color="crimson" size={24} />}</TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={() => this.readData()} style={styles.login}>
            <Text style={styles.textLogin} >
                Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Regis")} style={styles.login}>
            <Text style={styles.textLogin} >
                Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
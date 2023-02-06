import { Text, View, StatusBar, Image, TouchableOpacity,} from "react-native";
import React, { Component, useState } from "react";
import styles from "./style";
import logo1 from "./assets/img1.jpg";
import logo2 from "./assets/img2.jpg";
import logo3 from "./assets/img3.jpg";
import logo4 from "./assets/img4.jpg";
import logo5 from "./assets/img5.jpg";
import logo6 from "./assets/img6.jpg";
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      user: props.route.params.user,
      id: props.route.params.id,
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle="pink" backgroundColor="black" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile", {user: this.state.user, id:this.state.id})}>
            <Ionicons name="md-person-circle-outline" size={24} color="black" />
            </TouchableOpacity>
        
          <Text style={styles.textHeader}>Pilihan Dekor</Text>
        </View>
        <View style={{flexDirection:"row", flex:1, backgroundColor:"pink" , flexWrap:"wrap", justifyContent:"center",}} >

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "12.000.000"})}  style={{padding:10,backgroundColor:"pink", width:150, height:190, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo1} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 1</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"Black"}}>Prize Rp.12.000.000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "17.000.000"})}  style={{padding:10,backgroundColor:"pink", width:150, height:190, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo2} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 2</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"Black"}}>Prize Rp.17.000.000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "14.000.000"})} style={{padding:10,backgroundColor:"pink", width:150, height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo3} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 3</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"Black"}}>Prize Rp.14.000.000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "13.000.000"})} style={{padding:10,backgroundColor:"pink", width:150, height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo4} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 4</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"black"}}>Prize Rp.13.000.000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "18.000.000"})} style={{padding:10,backgroundColor:"pink", width:150, height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo5} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 5</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"black"}}>Prize Rp.18.000.000</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Order", {harga: "11.000.000"})} style={{padding:10,backgroundColor:"pink", width:150, height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={logo6} style={{width: "90%", height:"70%", flex:1,borderRadius:3}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:15, fontWeight:"700", color:"#fff"}}>Venue 6</Text>
            <Text style={{fontSize:10, fontWeight:"700", color:"black"}}>Prize Rp.11.000.000</Text>
          </View>
          </TouchableOpacity>
        
        </View>
        {/* <TouchableOpacity style={{flex:.1, backgroundColor:"green", justifyContent:"center", alignItems:"center" }}>
          <Text style={{fontSize:20, fontWeight:"800", color:"#fff"}}>Registrasi</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
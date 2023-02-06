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
  import DateTimePicker  from "@react-native-community/datetimepicker";
  
  export default class OrderScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        harga: props.route.params.harga,
        
        nama:"",
        alamat:"",
        tanggal:"",
        telpon:"",

        check_textInputChange: false,
        secureTextEntry: true,
        modalVisible: false,
        modalNotVisible: false,

        showWaktu:false,
        date: new Date()
      };
    }
    
    showWaktuF= () => {
        this.state.showWaktu === false
        ? this.setState({showWaktu: true})
        : this.setState({showWaktu: false}) 
    }

    insertNewUser = () => {
      var nama = this.state.nama;
      var alamat = this.state.alamat;
      var telpon = this.state.telpon;
      var tanggal = this.state.tanggal;
      var harga = this.state.harga;

  
      if (
        nama.length === 0 ||
        alamat.length === 0 || tanggal.length === 0 || harga.length === 0 || telpon.length === 0
      ) {
        alert("HARAP ISI DATA DENGAN BENAR !!!");
      } else {
        setDoc(doc(db, "order", nama), {
            nama : nama,
            alamat:alamat,
            telpon:telpon,
            tanggal:tanggal,
            harga:harga,
        })
          .then(() => {
            console.log("data submitted");
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

    onChangeDate = (event, selectDate) => {
        const currentDate = selectDate || this.state.date;
        this.setState({
          show: Platform.OS === "android",
          date: currentDate,
        });
    
        let dt = new Date(currentDate);
        let getTanggal = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    
        this.setState({
          tanggal: getTanggal,
          showTanggal: false,
        });
      };
  
    render() {
        console.log(this.state.harga)
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="pink" />
          <View style={styles.content}>
            <View style={styles.action}>
              <TextInput
                placeholder="Nama Lengkap"
                placeholderTextColor="#990000"
                style={styles.textInput}
                onChangeText={(nama) => this.setState({ nama })}
              />
            </View>
            
            
            <View style={styles.action}>
              <TextInput
                placeholder="Alamat Lengkap"
                placeholderTextColor="#990000"
                style={styles.textInput}
                onChangeText={(alamat) => this.setState({ alamat})}
              />
            </View>

            
            <View style={styles.action}>
              <TextInput
                placeholder="nomor hp"
                placeholderTextColor="#990000"
                color="#990000"
                style={styles.textInput}
                onChangeText={(telpon) => this.setState({ telpon})}
              />
            </View>

            <View style={styles.action}>
              <TextInput
                editable= {false}
                placeholder="Tanggal"
                placeholderTextColor="#990000"
                color="#990000"
                style={styles.textInput}
                onChangeText={(tanggal) => this.setState({ tanggal})}
                value={this.state.tanggal}
              />
              <TouchableOpacity 
                onPress={this.showWaktuF}
                style={{marginLeft:180}}
              >
                <Text style={{fontSize:20, fontWeight:"800"}} >~</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.action}>
              <TextInput
                editable= {false}
                placeholder="harga"
                placeholderTextColor="#990000"
                color="#990000"
                style={styles.textInput}
                onChangeText={(harga) => this.setState({ harga})}
                value={this.state.harga}
              />
            </View>
            
            {this.state.showWaktu && <DateTimePicker testID="dateTimePicker" value={this.state.date} mode="date" is24Hour={true} display="default" onChange={this.onChangeDate} />}

            <TouchableOpacity
              onPress={() => this.insertNewUser()}
              style={styles.login}
            >
              <Text style={styles.textLogin}>PESAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  
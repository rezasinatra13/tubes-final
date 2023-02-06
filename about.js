import react, {Component} from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./style";
import logo from "./MV.png";

export default class About extends Component{


    render(){
        return(
            
            <View style={{flex:1,justifyContent:"flex-start", alignItems:"center"}} >

                 <View style={styles.header}>
          <Text style={styles.textHeader}>About</Text>
        </View>
        <Image source={logo} style={{width:250, height:300}} resizeMode="contain" />

             <Text style={{fontSize:20, fontWeight:"700", color:"Black",marginBottom:10}}>Anaoucement!</Text>
                <Text>Ini adalah Aplikasi untuk Pemesanan Venue dekor</Text>
                <Text>Jika ingin order silahkan pilih menu sesuai kebutuhan.</Text>
                

                <TouchableOpacity 
                    style={{padding:20, backgroundColor:"pink", borderRadius:20, marginTop:100}}
                    onPress={() => this.props.navigation.navigate("Maps")}
                >
                <Text style={{fontSize:20, fontWeight:"700", color:"Black"}}>Alamat kami</Text>
                </TouchableOpacity>
                
            </View>
            
        )
    }
}
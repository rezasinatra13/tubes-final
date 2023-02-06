import react, {Component} from "react";
import { View, Text, Image } from "react-native";
import logo from "./MyVenue.png";
import { StackActions } from "@react-navigation/native";

export default class Front extends Component{


    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace("Login"));
        },2000);
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}} >
                <Image source={logo} resizeMode="cover" style={{width:"100%", height:"100%"}} />
            </View>
        )
    }
}
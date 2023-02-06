import react, { Component } from "react";
import { Text,View } from "react-native";
import MapView,{Marker}from "react-native-maps";


export default class MapsScreen extends Component{
    render(){
    return(
        <View style={{flex:1}}>

        <MapView
            style={{flex:1}}
            initialRegion={{
              latitude: -7.323996416464922,
              longitude: 112.8021618495323,
              latitudeDelta: 0.007,
              longitudeDelta: 0.007,
            }}
          >
            <Marker
              coordinate={{
                latitude: -7.323996416464922,
                longitude: 112.8021618495323,
              }}
            />
          </MapView>
        </View>

    )
    }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { PermissionsAndroid } from 'react-native';


export default class App extends Component {


  componentWillMount(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
       
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          i: this.state.i+1,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

  }


  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    latitude:null,
    longitude:null,
    i:0
  };
  render() {
    return (
      
      <View>
      <Text>{this.state.latitude}--{this.state.i}</Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }

});
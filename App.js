import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "fe7a37cd92c9374d695dc0f74214aba6";

const lat = "37.422";
const lgt = "126.93";

export default class extends React.Component {
  state = {
    //for real
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data : {main : {temp}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    //console.log(data);
    this.setState({isLoading : false, condition : weather[0].main, temp });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();  

      this.getWeather(latitude, longitude);
      //console.log(coords.latitude, coords.longitude);

      // Send to API and get Weather
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
    
    
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition , temp } = this.state;
    return isLoading?<Loading />:<Weather temp={ Math.round(temp)} condition = {condition}/>;
  }
}  
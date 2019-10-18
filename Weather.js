import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze : {
        iconName : "weather-hail",
        gradient : ["#4DA0b0","#D39D38"],
        title : "안개",  subtitle : "밖에 나가지 마세요~"
    },    
    Thunderstorm : { iconName : "weather-lightning", gradient : ["#373B44","#4286F4"],title : "천둥/번개",  subtitle : "천둥 번개가 치는 날씨에요~ 조심하세요"},
    Drizzle : { iconName : "weather-hail", gradient : ["#89F7FE","#66A6FF"],title : "이슬비",  subtitle : "이슬비가 내리네요~ 우산 준비하세요"},
    Rain : { iconName : "weather-rainy", gradient : ["#00C6FB","#005BEA"],title : "비",  subtitle : "비오는 날씨"},
    Snow : { iconName : "weather-snowy", gradient : ["#7DE2FC","#B9B6E5"],title : "눈",  subtitle : "눈오는 날씨"},
    Atmosphere : { iconName : "weather-hail", gradient : ["#89F7FE","#66A6FF"],title : "Atmosphere",  subtitle : "Atmosphere"},
    Clear : { iconName : "weather-sunny", gradient : ["#FF7300","#FFE253"],title : "맑음",  subtitle : "화창한 맑은 날씨에요"},
    Clouds : { iconName : "weather-cloudy", gradient : ["#D7D2CC","#304352"],title : "구름",  subtitle : "구름낀 흐린 날입니다"},
    Dust : { iconName : "weather-cloudy", gradient : ["#4DA0B0","#D39D38"],title : "먼지",  subtitle : "먼지가 많으니 외출시 주의하세요"},
    Mist : { iconName : "weather-fog", gradient : ["#4DA0B0","#D39D38"],title : "옅은 안개",  subtitle : "옅은 안개가 끼고 있어요~"}
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container }>         
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName}  color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer,...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View> 
            </LinearGradient>                
        );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Dust",
        "Mist"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp : {
        fontSize : 42,
        color : "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color : "white",
        fontSize : 44,
        fontWeight : "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontWeight : "600",
        fontSize : 24
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"
    }
});
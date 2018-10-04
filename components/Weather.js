import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Forecast from './Forcast'
import { red } from 'ansi-colors';
export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: '-', description: '-', temp: 0
    }
    }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
        this.setState(
        {
        forecast: {
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        }
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        componentDidUpdate = (prevProps) => {
            if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
            }
            }
           
        componentDidMount = () => this.fetchData()
       
    render() {
    return (
    <View style={styles.container}>
    <ImageBackground source={require('../image/bg2.jpg')} style={styles.backdrop}>
        <View style={styles.topcon}>
    <Text style={styles.Text}>Zip code is {this.props.zipCode}.</Text>
    <Forecast {...this.state.forecast} />
    </View>
    </ImageBackground>
    </View>
    );
    }
   }
   const styles = StyleSheet.create({
    Text:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20, 
        color:'white',
       
    },
    topcon:{
        height:200,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        //paddingRight:100, 
        backgroundColor:'black', 
        opacity:0.5,
    },
    container: {  },
    backdrop: { width: '100%', height: '100%',
    alignItems:'center'},
   });
   
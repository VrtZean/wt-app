import React from 'react';
<<<<<<< HEAD
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';
=======
import Weather from './components/Weather'
import WeatherScreen from'./components/WeatherScreen'
import ZipCodeScreen from'./components/ZipCodeScreen'
>>>>>>> 82c63c62fbede188765518f31a4f40db7ab58ec5
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
 Weather: WeatherScreen,
 ZipCode: ZipCodeScreen
},{
    initialRouteName: 'Weather',
    initialRouteParams: {zipCode: '90110'}
   })
   
export default class App extends React.Component {
 render() {
 return (
 <RootStack/>
 );
 }
}
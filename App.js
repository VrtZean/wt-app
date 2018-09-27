import React from 'react';
import Weather from './components/Weather'
import WeatherScreen from'./components/WeatherScreen'
import ZipCodeScreen from'./component/ZipCodeScreen'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
 Weather: WeatherScreen,
 ZipCode: ZipCodeScreen
},{
 initialRouteName: 'ZipCode',
})
export default class App extends React.Component {
 render() {
 return (
 <RootStack/>
 );
 }
}
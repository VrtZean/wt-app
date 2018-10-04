import React from 'react';
//import ZipCodeScreen from'/ZipCodeScreen'
import Weather from './Weather'
<<<<<<< HEAD
import {  Text,Button } from 'react-native';
    export default class WeatherScreen extends React.Component {
        static navigationOptions = ({navigation}) => {
            return {
            headerTitle: (<Text>Weather</Text>),
            headerRight: (
            <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}
            />
            )
            }
           }
        render() {
            const zipCode = this.props.navigation.getParam('zipCode')
            return (<Weather zipCode={zipCode}/>);
            
           }
           
=======
    export default class WeatherScreen extends React.Component {
        static navigationOptions = ({navigation}) => {
        return {
        headerTitle: (<Text>Weather</Text>),
        }
        }
        render() {
        return (
        <Weather zipCode="90110"/>
        );
        }
>>>>>>> 82c63c62fbede188765518f31a4f40db7ab58ec5
        }
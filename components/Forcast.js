import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Forecast extends React.Component {

    render() {
    return (
    <View style={styles.container}>
    <Text style={styles.Text}>{this.props.main}</Text>
    <Text style={styles.Text2}>{this.props.description}</Text>
    <View style={styles.container2}>
    <Text style={styles.Text}>{this.props.temp}</Text>
    <Text style={styles.Text2}>°C</Text>
    </View>
    </View>
    );
    }
   }
   const styles = StyleSheet.create({
    Text:{     
        fontSize:40, 
        color:'white',
    },
    Text2:{
        fontSize:20, 
        color:'white',
    },
    container2:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    container: { paddingTop: 25 ,
        flexDirection:
        'column',
        
        justifyContent:
        'center',
        alignItems:
        'center',
        },
    backdrop: { width: '100%', height: '100%'},
   });
   
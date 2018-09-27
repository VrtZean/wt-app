import React from 'react';
import WeatherScreen from'WeatherScreen'
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { StyleSheet, FlatList, View, Text,
    TouchableHighlight } from 'react-native';
    const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
    ]
    const ZipItem = ({place, code, navigate}) => (
     <View style={styles.zipItem}>
     <Text style={styles.zipPlace}>{place}</Text>
     <Text style={styles.zipCode}>{code}</Text>
     </View>
     )
     const styles = StyleSheet.create({
       
        zipItem:{ flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        },
        zipPlace:{ fontSize:20, 
                color:'white',},
        zipCode:{ fontSize:20, 
                    color:'white',},
    
       });
  
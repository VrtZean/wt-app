import React from 'react';
//import WeatherScreen from'./WeatherScreen'
import { StyleSheet, FlatList, View, Text,
    TouchableHighlight,ImageBackground } from 'react-native';
import { black } from 'ansi-colors';
    const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
    ]
    const ZipItem = ({place, code, navigate}) => (
<<<<<<< HEAD
        <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>
        <View style={styles.zipItem}>
        <Text style={styles.zipPlace}>{place}</Text>
        <Text style={styles.zipCode}>{code}</Text>
        </View>
        </TouchableHighlight>
       )
       
=======
     <View style={styles.zipItem}>
     <Text style={styles.zipPlace}>{place}</Text>
     <Text style={styles.zipCode}>{code}</Text>
     </View>
     )
>>>>>>> 82c63c62fbede188765518f31a4f40db7ab58ec5
     const _keyExtractor = item => item.code
     export default class ZipCodeScreen extends React.Component {
      static navigationOptions = ({navigation}) => {
      return {
      headerTitle: (<Text>Choose a zip code</Text>),
      }
      }
      render() {
      const { navigate } = this.props.navigation;
      return (
      <View>
<<<<<<< HEAD
      <ImageBackground source={require('../image/bg3.jpg')} style={styles.backdrop}>
      <View style={styles.topcon}>
    
=======
>>>>>>> 82c63c62fbede188765518f31a4f40db7ab58ec5
      <FlatList
      data={availableZipItems}
      keyExtractor={_keyExtractor}
      renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
      />
<<<<<<< HEAD
       </View>
      </ImageBackground>
=======
>>>>>>> 82c63c62fbede188765518f31a4f40db7ab58ec5
      </View>
      );
      }
     }
     
     const styles = StyleSheet.create({
       
        zipItem:{ 
           //flex:1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingTop:20,

        },
        zipPlace:{ //flex:2,
            fontSize:20, 
            paddingLeft:25,
            color:'white',
               
            },
        zipCode:{ //flex:1,
            fontSize:20,
            color:'green',},
        backdrop: { width: '100%', height: '100%',
                    alignItems:'center',    
                },
        topcon:{
                        height:200,
                        width:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        backgroundColor:'black', 
                        opacity:0.6,
                    },
       });
  
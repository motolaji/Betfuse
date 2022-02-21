import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Tips</Text>
        <Image style={styles.image}
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',}}/>
      </View>
      <View style={styles.box}>
        <View style={styles.circle1}>
        <Image style={styles.image1}
           source={{
             uri: 'https://i.ibb.co/zP4VT56/image.png',}}/>
          </View>
          <Text style={styles.versus}>VS</Text>
          <View style={styles.circle2}>
          <Image style={styles.image2}
           source={{
             uri: 'https://i.ibb.co/PzyvTKC/image.png',}}/>
          </View>
        
      </View>
      <View style={styles.bannerContainer}>
          
         </View>
      <View>
         <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
           <Text style={styles.buttonText}>Home</Text>
           </TouchableOpacity>     
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  text:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white', 
    marginLeft: 10,
  },
  bannerContainer:{
   justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container:{
    paddingTop: 70,
   // paddingHorizontal: 20,
    backgroundColor: '#59147F',
    height: '100%',
    
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  box:{
    width: '100%',
    backgroundColor: "#FDD200",
    width: 390,
    height: 340,
    borderRadius: 16,
    marginTop: 38,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
   // marginLeft: -15,
  },
  button: {
    width: 370,
    height: 72,
    backgroundColor: "#F72585",
   // padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  image: {
    marginLeft: 50,
    resizeMode: "contain",
    width: 100,
    height: 50,
    borderRadius: 1000,
  },
  circle1:{
   // backgroundColor: "white",
    height:114,
    width: 114,
    borderRadius: 80,
    margin: 10,
  },
  circle2:{
    //backgroundColor: "red",
    height:114,
    width: 114,
    borderRadius: 80,
    margin: 10,
  },
  versus:{
    color: "white",
    fontSize: 25,
    fontWeight: '700',
  },
  image1:{
    height: 114,
    width: 114,
    borderRadius: 80,
    overflow: "hidden",
  },
  image2:{
    height: 114,
    width: 114,
    borderRadius: 80,
    overflow: "hidden",
    
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
    return ( 
     <View style={styles.container}>
        <Title />
        <View style={styles.bannerContainer}>
          <Image
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',
}}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Bet")} style={styles.button}>
          <Text style={styles.buttonText}>Stake And Win </Text>
        </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
 
  banner: {
    height: 300,
    width: 300,
    
   
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  
  },
  container: {
    paddingTop: 70,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: "#59147F",
  },
  button:{
    width: '100%',
    backgroundColor: "#F72585",
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
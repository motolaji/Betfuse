import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
import { Datalog} from '../components/data';

const Bet = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Tips</Text>
        <Image style={styles.image}
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',}}/>
      </View>
      <View style={styles.dateBox}>
        <Text style={styles.dateText}>20</Text>
        <Text style={styles.dateText}>21</Text>
        <Text style={styles.dateTextM}>Today</Text>
        <Text style={styles.dateText}>24</Text>
        <Text style={styles.dateText}>25</Text>
      </View>
      <ScrollView style={styles.options}>
      {Datalog.map((item) => {
        return (
        <TouchableOpacity key={item.key} style={styles.game} onPress={()=>navigation.navigate('Result')}>
        <View style={styles.gameM} key={item.key}>
        <View style={styles.circle1}>
            <Image style={styles.image1} source={item.club1}/>
            </View>
            <Text style={styles.scoreBoard}>{item.score1}-{item.score2}</Text>
            <View style={styles.circle2}>
            <Image style={styles.image2} source={item.club2}/>
            </View>
        </View>
        </TouchableOpacity>
        );
      })}
      </ScrollView>
      <View style={styles.bottom}>
      <TouchableOpacity>
     <Text>SKIP</Text>
   </TouchableOpacity>
    <TouchableOpacity>
    <Text>NEXT</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate("Result")}>
    <Text>
      END
    </Text>
  </TouchableOpacity>
      </View>
    </View>
     
  );
};

export default Bet;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    paddingTop: 70,
      //paddingHorizontal: 20,
    backgroundColor: '#59147F',
    
  },
  top: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    marginVertical: 16,
   flex: 1,
   backgroundColor: '#59147F',
    },
    bottom: {
      marginBottom: 12,
      paddingVertical: 16,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    image: {
      marginLeft: 50,
      resizeMode: "contain",
      width: 100,
      height: 50,
      borderRadius: 1000,
    },   
    text:{
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white', 
      marginLeft: 10,
    },
    dateBox: {
      width: '100%',
      backgroundColor: "#FFFFFF",
     // width: 390,
      height: 74,
      borderRadius: 16,
      marginTop: 38,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      //marginLeft: -22,
    },
    dateText: {
      padding: 30,
      fontSize: 20,
      fontWeight: '800',
    },
    dateTextM: {
      paddingTop: 8,
      fontSize: 20,
      fontWeight: '800',
      color: "#FDD200",
    },
    game: {
      backgroundColor: "#FDD200",
      width: "100%", //370
      height: "15%",
      borderRadius: 16,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
     // marginLeft: 10,
      // marginBottom: -10,
    },
    gameM: {
      width: '100%',
      height: "70%",
      backgroundColor: "#59147F",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    circle1:{
     // backgroundColor: "white",
       height:60,
       width: 60,
       borderRadius: 80,
       margin: 10,
     },
     circle2:{
      // backgroundColor: "red",
       height:60,
       width: 60,
       borderRadius: 80,
       margin: 10,
     },
     image1:{
      height: 60,
      width: 60,
      borderRadius: 80,
      overflow: "hidden",
    },
    image2:{
      height: 60,
      width: 60,
      borderRadius: 80,
      overflow: "hidden",
    },
    scoreBoard:{
      color: "white",
      fontSize: 25,
      fontWeight: '700',
    },
});

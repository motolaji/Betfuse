import firestore from '@react-native-firebase/firestore';
// import getDocs from '@react-native-firebase/firestore';
import {Image, StyleSheet, Text, TouchableOpacity, View, FlatList, } from 'react-native';
import { ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Datalog} from '../components/data';
import mobileAds from 'react-native-google-mobile-ads';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType,  } from 'react-native-google-mobile-ads';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from '../screens/Today';
import Future from '../screens/Future';
import Previous from '../screens/Previous';
import { useWindowDimensions } from 'react-native';
import { Dimensions } from "react-native";





//ca-app-pub-3940256099942544/6300978111 banner
//ca-app-pub-3940256099942544/1033173712 interstitial
//ca-app-pub-3940256099942544/8691691433 interstitial video


mobileAds()
  .initialize()
  .then((adapterStatuses) => {
    // Initialization complete!
  });
   const adUnitIds = __DEV__? TestIds.BANNER : 'ca-app-pub-3940256099942544/6300978111';   //const adUnitIds = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2600707325739955/1594244540';
  
  const adUnitId = __DEV__? TestIds.INTERSTITIAL : 'ca-app-pub-2600707325739955/3531417831';

  
  




  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
    // keywords: ['fashion', 'clothing'],
  });










  const Tab = createMaterialTopTabNavigator();


const Bet = ({navigation}) => {

  const { height, width } = useWindowDimensions();
  const totalWidth = Dimensions.get("screen").width;

  const [loaded, setLoaded] = useState(false);
  
  const [Tips, setTips] = useState([]); 



  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
      if (type === AdEventType.CLOSED) {
        console.log("ad closed");
        setLoaded(false);
       
        //reload ad 
        interstitial.load();
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
    
  }, []);
  
  // No advert ready to show yet
 

  
  useEffect(() => {
  const getAssets = async () =>{

    try {
       const list = [];
      
      await firestore().collection("Tips").get()
       .then((querySnapshot) =>{
          querySnapshot.forEach((doc) =>{
             list.push({...doc.data(), id: doc.id});
          });
         setTips(list);
       });
       console.log('see', setTips); 
    } catch (e) {
       setErrors("Failed To Load Data");
    } 
 };
 getAssets(); 
}, [setTips]); 




  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Text style={styles.text}>Tips</Text>
     <Image style={styles.image}
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',}}/>
     </View>
     <Tab.Navigator style={styles.tabs}
          screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight:'bold',justifyContent: 'center', alignItems: 'center', },
          tabBarItemStyle: { width: totalWidth / 3, justifyContent: 'center', alignItems: 'center',},
          tabBarStyle: { backgroundColor: '#59147F',borderBottomRightRadius:12, borderBottomLeftRadius:12,justifyContent:'center', shadowColor: "#000000",shadowOpacity: 0.8,shadowRadius: 2,shadowOffset: {  height: 1,  width: 1}},
          tabBarIndicatorStyle:{ color:'red', width: 0.1,},
          tabBarActiveTintColor:'#FDD200', ///
          tabBarInactiveTintColor:'#FFF',
          }}>
        <Tab.Screen  name="Yesterday" component={Previous}  />
        <Tab.Screen  name="Today" component={Today} />
        <Tab.Screen  name="Tomorrow" component={Future} />
      </Tab.Navigator> 
     <View style={styles.footer}>
     <BannerAd unitId={adUnitIds}
     size={BannerAdSize.FULL_BANNER}
     requestOptions={{
        requestNonPersonalizedAdsOnly: false,}} />
     </View>
    </View>
  );
  }


export default Bet;

const styles = StyleSheet.create({
container: {
height:'100%',
},
header: {
  flexDirection: 'row',
  backgroundColor:'#59147F',
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  // borderBottomRightRadius:10,
  // borderBottomLeftRadius:10,
},
footer: {
  backgroundColor:'#59147F',
  flex:0.2,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  
},
navContainer:{
  height:'100%',
  backgroundColor:'red',
},
tabs: {
  flex: 5,
},
text: {
  marginRight:70,
  color: 'white',
  fontSize: 28,
  fontWeight:'bold'
},
image: {
  resizeMode: "contain",
  width: 100,
  height: 50,
  borderRadius: 200,
},   
});

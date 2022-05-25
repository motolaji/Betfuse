import firestore from '@react-native-firebase/firestore';
// import getDocs from '@react-native-firebase/firestore';
import {Image, StyleSheet, Text, TouchableOpacity, View, FlatList, RefreshControl } from 'react-native';
import { ScrollView, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Datalog} from '../components/data';
import mobileAds from 'react-native-google-mobile-ads';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType,  } from 'react-native-google-mobile-ads';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




//ads

//ca-app-pub-3940256099942544/6300978111 banner
//ca-app-pub-3940256099942544/1033173712 interstitial
//ca-app-pub-3940256099942544/8691691433 interstitial video


mobileAds()
  .initialize()
  .then((adapterStatuses) => {
    // Initialization complete!
  });
   const adUnitIds = __DEV__? TestIds.BANNER : 'ca-app-pub-2600707325739955/1594244540';   //const adUnitIds = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2600707325739955/1594244540';
  
  const adUnitId = __DEV__? TestIds.INTERSTITIAL : 'ca-app-pub-2600707325739955/3531417831';

  
  




  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
    // keywords: ['fashion', 'clothing'],
  });


const Future = ({navigation}) => {
    // pull to refresh
    const [refreshing, setRefreshing] = React.useState(false);
//for firebase
    const [loaded, setLoaded] = useState(false);
  
    const [Tips, setTips] = useState([]); 
    const [loading, setLoading] = useState(true);
  
  
  //for ads
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
  var today = new Date();
//   today.setDate(today.getDate()- 1); 
  var future = (function(d){ d.setDate(d.getDate()+0); return d})(new Date)
      try {
        setLoading(true);
         
        
        await firestore().collection("Tips").where('Date', '>=',  future).onSnapshot
         ((querySnapshot) =>{ const list = [];
            querySnapshot.forEach((doc) =>{
               list.push({...doc.data(), id: doc.id});
            });
           setTips(list);
           if (loading) { setLoading(false); }
         });
         
         console.log('see', setTips); 
      } catch (e) {
         setErrors("Failed To Load Data");
         alert (e);
      } 
   };
   getAssets(); 
  }, [setTips]); 
  
  //pull to refresh
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false)); 
  }, []);

  // loading firebase data
  if(loading) {return <ActivityIndicator />}// use loading to cover whole screen ;)
  
  return (
    <View>
    <ScrollView style={styles.options}
      refreshControl={
        <RefreshControl
    refreshing={refreshing}
    onRefresh={onRefresh}
    
                />}>
      {Tips.map((item) => { 
        return (
      <TouchableOpacity style={styles.game} key={item.id} onPress={()=>{interstitial.show();navigation.navigate('Result', {item})}}>
        <View style={styles.gameM} >
        <View style={styles.circle1}>
             <Image style={styles.image1} source={{uri: item.ClubLogo1}}/>     
            </View>
            <Text style={styles.clubname}>{item.Club1}</Text>  
            <Text style={styles.scoreBoard}>VS</Text>
            <Text style={styles.clubname2}>{item.Club2}</Text>  
            <View style={styles.circle2}>
            <Image style={styles.image2} source={{uri: item.ClubLogo2}}/>
            </View>
        </View>
        </TouchableOpacity>
        ); 
      })}
      </ScrollView>
      
      
     
    </View>
  )
}

export default Future


const styles = StyleSheet.create({
    clubname:{color:'green',},
    container: {
      padding: 12,
      height: '100%',
      paddingTop: 45,
        //paddingHorizontal: 20,
      backgroundColor: '#59148f',
      
    },
    secondcont: {
      height: '100%',
       marginVertical: '5%',
      backgroundColor: 'green',
      // height: '100%',
    },
    top: {
  
      marginVertical: '-5%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    scrollbox: {
        height: '100%',
      
    },
    options: {
      paddingLeft:10,
      paddingRight:10,
        textAlign:'end',
      paddingBottom: 350,
      // add color
      backgroundColor: "#F2F2F2",
      
      },
      bottom: {
      width: '100%',
      backgroundColor: "#F72585",
      alignItems: 'center',
      marginBottom: 260,
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
        height: '10%',
        borderRadius: 16,
        marginTop: 38,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //marginLeft: -22,
      },
      dateText: {
        paddingLeft: 30,
        paddingRight: 20,
        fontSize: 20,
        fontWeight: '800',
        justifyContent: 'space-between'
      },
      dateTextM: {
        paddingTop: 0,
        fontSize: 20,
        fontWeight: '800',
        color: "#FDD200",
      },
      game: {
          
        textAlign:'start',
        // flexGrow:1,
        backgroundColor: "#FDD200",
        width: "100%", //370
        height: 120,
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
       // marginLeft: 10,
        // marginBottom: -10,
      },
      gameM: {
          position: 'relative',
          textAlign:'right',
        width: '100%',
        height: "70%",
        backgroundColor:"#59147F",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        
      },
      circle1:{
       // backgroundColor: "white",
         height:50,
         width: 50,
         borderRadius: 80,
         right: '5%',
        // paddingRight: 10,
        // paddingRight: '50%',
        position: "absolute"
       },
       circle2:{
        // backgroundColor: "red",
         height:50,
         width: 50,
         borderRadius: 80,
         //margin: 10,
         //marginLeft: '25%',
         left: '5%',
         position: "absolute",
         },
       image1:{
        height: 50,
        width: 50,
        borderRadius: 80,
        overflow: "hidden",
        position: "absolute"
      },
      image2:{
        height: 50,
        width: 50,
        borderRadius: 80,
        overflow: "hidden",
        position: "absolute"
      },
      scoreBoard:{
        color: "white",
        fontSize: 15,
        fontWeight: '700',
        position: "absolute"
      },
      clubname:{
          textAlign: "left",
        color: "white",
        fontSize: 17,
        fontWeight: '700',
        right: '55%',
        position: "absolute"
      },
      clubname2:{
        textAlign: "left", 
        color: "white",
        fontSize: 17,
        fontWeight: '700',
        left: '55%',
        position: "absolute"
      },
  });
  
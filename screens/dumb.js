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
    {/* <View style={styles.header}> */}
      <View style={styles.top}>
        <Text style={styles.text}>Tips</Text>
        <Image style={styles.image}
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',}}/>
      </View>
      <Tab.Navigator style={styles.screennav}
        screenOptions={{
          tabBarLabelStyle: { flex:1, fontSize: 14, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', textAlign: 'center', alignContent:'center', display: 'flex',},
          tabBarItemStyle: {width: 120, justifyContent: 'center',},
          tabBarStyle: { backgroundColor: '#59149f', borderRadius: 12, height: 70, justifyContent: 'center', textAlign: 'center', flexDirection:'column', }, //*** */
          tabBarIndicatorStyle:{ color:'red', width: 0.1,},
          tabBarActiveTintColor:'#FDD200',
          tabBarInactiveTintColor:'#FFF',
        }}>
        <Tab.Screen  name="Yesterday" component={Previous}  />
        <Tab.Screen  name="Today" component={Today} />
        <Tab.Screen  name="Tomorrow" component={Future} />
      </Tab.Navigator>
      {/* </View> */}
      {/* <View style={styles.secondcont}> */}
      {/* <View style={styles.scrollbox}> */}
      {/* <FlatList style={styles.options}
      data={Tips}
      renderItem={({item}) => 
      <TouchableOpacity style={styles.game} onPress={()=>{interstitial.show();navigation.navigate('Result', {item})}}>
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
      }/> */}
      {/* </View> */}
     
      {/* </View> */}
      <View style={styles.bottom}>
     <BannerAd unitId={adUnitIds}
     size={BannerAdSize.FULL_BANNER}
     requestOptions={{
        requestNonPersonalizedAdsOnly: true,}} />
     </View>
    </View>
     
  );
  }


export default Bet;

const styles = StyleSheet.create({

  container: {
    padding: 0,
    height: '100%',
    paddingTop: 0,
     //paddingHorizontal: 20,
    backgroundColor: '#F2F2F2', //#59149f   #EBEBEa
    justifyContent: 'center',
    // alignItems: 'center'
  },
  secondcont: {
    height: '72.5%',
     marginVertical: '5%',
    backgroundColor: 'green',
    // height: '100%',
  },
  header:{
    backgroundColor: 'yellow'
  },
  top: {
    paddingTop: 100,
    backgroundColor: 'green',
    marginBottom: '-12%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollbox: {},
  options: {
    paddingBottom: 350,
    
    },
     bottom: {
     width: '100%',
    // backgroundColor: "#F72585",
    alignItems: 'center',
    // marginBottom: -7,

     },
    image: {
      marginLeft: 50,
      resizeMode: "contain",
      width: 100,
      height: 50,
      borderRadius: 200,
    },   
    text:{
      fontSize: 35,
      fontWeight: 'bold',
      color: '#59149f', 
      marginLeft: 10,
    },
    dateBox: {
      width: '100%',
      backgroundColor: "red",
     // width: 390,
      height: '10%',
      borderRadius: 16,
      marginTop: 38,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      //marginLeft: -22,
    },
    screennav:{
      // width: '100%',
      // height: '50%',
      marginTop: 38,
      fontSize: 35,
      fontWeight: 'bold',
      justifyContent: 'center',
      // alignItems: 'center',
      flex: 1,
      
      // borderRadius: 206,
      
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
      flexGrow:1,
      backgroundColor: "#FDD200",
      width: "100%", //370
      height: 150,
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
      backgroundColor:"#59147F",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      
      
      
    },
    circle1:{
     // backgroundColor: "white",
       height:60,
       width: 60,
       borderRadius: 80,
       right: '45%'
      // marginRight: '25%',
      // paddingRight: '50%',
     },
     circle2:{
      // backgroundColor: "red",
       height:60,
       width: 60,
       borderRadius: 80,
       //margin: 10,
       //marginLeft: '25%',
       left: '45%'
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
      fontSize: 15,
      fontWeight: '500',
    },
    clubname:{
      color: "white",
      fontSize: 17,
      fontWeight: '700',
      right: '30%',
    },
    clubname2:{
      color: "white",
      fontSize: 17,
      fontWeight: '700',
      left: '30%',
    },
});

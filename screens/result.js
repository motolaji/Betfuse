import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Result = ({ route, navigation}) => {
  const {item} =route.params;
  // const {item.accuracy}(percent) {
  //   return parseFloat(percent) / 100;
  // };
  const data = {
    labels: [], // optional
    data: [, (item.Accuracy)/100]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Info</Text>
        <Image style={styles.image}
           source={{
             uri: 'https://i.ibb.co/HBr0Tyc/betfuse.jpg',}}/>
      </View>
      <View style={styles.box}>
        <View style={styles.circle1}>
        <Image style={styles.image1} source={{uri: item.ClubLogo1}}/>
          </View>
          <Text style={styles.scoreBoard}>{item.score1}-{item.score2}</Text>
          {/*successfully passed map data to next screen now implementation */}
          <View style={styles.circle2}>
          <Image style={styles.image2} source={{uri: item.ClubLogo2}}/>
          </View>
        
      </View>
      <View style={styles.bannerContainer}>
    <Text style={styles.infotext}>League : {item.League}</Text>
    <Text style={styles.infotext1}>Odds: {item.Odds}</Text>
    
    <Text style={styles.infotext2}>Accuracy :</Text>
    <ProgressChart
  data={data}
  width={screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
  style={styles.chart}
/> 
         </View>
      <View style={styles.bottomcontainer}>
         <TouchableOpacity onPress={()=>navigation.navigate("Bet")} style={styles.button}>
           <Text style={styles.buttonText}>Return to Tips</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', 
    marginLeft: 10,
  },
  bannerContainer:{
    color: 'white',
   justifyContent: 'center',
    alignItems: 'flex-start',
    height: '30%',
    fontSize: 25,
    backgroundColor: '#59147F',
    flex:0.7,
  },
  chart: {borderRadius:12,},
  infotext:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    // left: 10,
    paddingBottom:10,
    // position: 'absolute',
    paddingLeft: 10,

  },
  infotext1:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    // left: 10,
    // position: 'absolute',
    paddingLeft: 10,
    paddingBottom: 10,
    
  },
  infotext2:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    // left: 10,
    // position: 'absolute',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  container:{
    position: 'relative',
   // paddingHorizontal: 20,
    backgroundColor: '#59147F',   ////#59147F
    flex:1, 
    color: 'white',
  },
  top:{
    flex:0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: '100%',
    backgroundColor: '#FDD200',
    height: 140,
    borderRadius: 16,
    flex:0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //marginLeft: 10,
  },
  bottomcontainer:{
    alignItems: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: "#F72585",
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
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
    height:70,
    width: 70,
    borderRadius: 80,
    margin: 10,
  },
  circle2:{
    //backgroundColor: "red",
    height:70,
    width: 70,
    borderRadius: 80,
    margin: 10,
  },
  versus:{
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
  },
  image1:{
    height: 70,
    width: 70,
    borderRadius: 80,
    overflow: 'hidden',
  },
  image2:{
    height: 70,
    width: 70,
    borderRadius: 80,
    overflow: 'hidden',
  },
  scoreBoard:{
    color: "white",
    fontSize: 25,
    fontWeight: '700',
  },
});

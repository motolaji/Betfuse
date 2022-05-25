import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/home';
import Bet from './screens/bet';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react/cjs/react.development';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, [])
  return (
    
<NavigationContainer>
  <MyStack />
</NavigationContainer>

 /* <Home /> */
      /* <Bet /> */
     /* <Result/> */

  );
};

export default App;

const styles = StyleSheet.create({
container:{
paddingTop: 40,
paddingHorizontal: 16,},
});

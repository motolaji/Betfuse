import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './screens/home';
import Bet from './screens/bet';
import Result from './screens/result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
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

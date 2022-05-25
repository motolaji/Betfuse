import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Bet from '../screens/bet';
import Result from '../screens/result';
import Today from '../screens/Today';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} screenOptions={{gestureEnabled:false}} />
      <Stack.Screen name="Bet" component={Bet} options={{headerShown:false}} screenOptions={{gestureEnabled:false}} />
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}} screenOptions={{gestureEnabled:false}} />
      <Stack.Screen name="Today" component={Today} options={{headerShown:false}} screenOptions={{gestureEnabled:false}} />
    {/*  <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
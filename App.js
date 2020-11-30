import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default function App() {
  return (
    <Appcontainer/>
  );
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  BottomTab:AppTabNavigator
})
const Appcontainer = createAppContainer(SwitchNavigator);
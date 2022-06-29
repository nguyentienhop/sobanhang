/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './Screen/Login';
import Verification from './Screen/Verification';
import ThuChi from './Screen/ThuChi';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ThuChi />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{headerShown: false}}
    //     initialRouteName="Login">
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Verification" component={Verification} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

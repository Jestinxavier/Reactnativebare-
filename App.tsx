/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Home from './Screens/Home';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style ={{backgroundColor:"#ffffff",height:"100%"}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
          
      <ScrollView
      style ={{backgroundColor:"#ffffff"}}
        contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.spacing}>
            <Home />
          </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  spacing:{
    paddingHorizontal: 24,
    marginTop: 5,
  },
  sectionContainer: {
    marginTop: 3,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Screens/Homescreen';
import DetailsScreen from './Screens/DetailsScreen';

// import '../src/Config/Notifications';

const App = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    DetailsScreen: {
      screen: DetailsScreen,
    },
  },
  { initialRouteName: 'HomeScreen' },
);
//const App = Homescreen;

export default App;

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from "./components/HomeScreen";
import { MobsListScreen } from "./components/MobsListScreen";


export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        MobsList: {
            screen: MobsListScreen,
        },
    },
    {
      initialRouteName: 'Home',
    }
);
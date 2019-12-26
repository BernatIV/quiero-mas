import React, {Component, Animated} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import TabBar from './BottomTab.js';
import HomeScreen from '../screens/Home/home';
import ProfileScreen from '../screens/Profile/profile';
import QrScreen from '../screens/QrScreen/QrScreen';

const iconColor = 'rgba(47,107,125,1.0)';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({}) => (
          <AntDesign name="home" color={iconColor} size={25} />
        ),
      },
    },
    Qr: {
      screen: QrScreen,
      navigationOptions: {
        tabBarIcon: ({}) => (
          <AntDesign name="qrcode" color={iconColor} size={30} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({}) => (
          <AntDesign name="user" color={iconColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
      inactiveTintColor: 'rgba(47,107,125,0.7)',
      activeBackgroundColor: 'rgba(47,107,125,0.8)',
      inactiveBackgroundColor: 'rgba(47,107,125,0.22)',
    },
  },
);

const UserNavigator = createAppContainer(TabNavigator);

export default UserNavigator;

import React from 'react';

import LoginScreen from '../screens/login';
import SignInScreen from '../screens/signIn';
import UserNavigator from '../../user/navigation/UserNavigator';
import WaiterHome from '../../waiter/screens/waiterHome';
import ScanQr from '../../waiter/screens/ScanQr';
import UserScannedScreen from '../../waiter/screens/userScanned';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    SignIn: {screen: SignInScreen},
    AppNavigator: {screen: UserNavigator}, // USER
    Waiter: {screen: WaiterHome},
    QrScanning: {screen: ScanQr},
    UserScanned: {screen: UserScannedScreen},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const LoginNavigator = createAppContainer(MainNavigator);

export default LoginNavigator;

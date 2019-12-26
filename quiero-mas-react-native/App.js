import React, {Component} from 'react';
import LoginNavigator from './src/components/login/navigation/loginNavigator';

global.userModel = 'hello global foo';
global.userScanned = 'user scanned';

export default class App extends Component {
  render() {
    return <LoginNavigator />;
  }
}

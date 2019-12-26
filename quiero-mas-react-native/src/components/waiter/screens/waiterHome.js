import React, {Component} from 'react';

import styles from './waiterHomeStyle';
import {Image, View, Button} from 'react-native';
// import {Button} from 'react-native-elements';

export default class WaiterHome extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};
  }

  static navigationOptions = {
    title: 'Waiter',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.viewScanButton}>
          <Button
            title="Scan"
            color="#2f6b7d"
            onPress={() => this.onScanPress()}
          />
        </View>
      </View>
    );
  }
  onScanPress() {
    this.props.navigation.navigate('QrScanning');
  }
}

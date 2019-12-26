import React, {Component} from 'react';

import styles from './userScannedStyle';
import {Alert, Button, Text, TextInput, View} from 'react-native';

export default class WaiterHome extends Component {
  constructor(props) {
    super(props);
    this.state = {price: ''};
    this.state.firstTime = true;
  }

  static navigationOptions = {
    title: 'Waiter',
  };

  render() {
    this.getUserScanned();
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.textContent}>
          <Text style={styles.textUsername}>{global.userScanned.username}</Text>
          <Text style={styles.textBalance}>
            {global.userScanned.currentBalance}€
          </Text>
          <TextInput
            placeholder="Price"
            style={styles.priceTextInput}
            onChangeText={price => this.setState({price})}
            value={this.state.price}
          />
          <Button
            title="Accumulate"
            color="#2f6b7d"
            onPress={() => this.onAccumulatePress()}
          />
          <View style={styles.separatorButton} />

          <View>
            <Button
              title="Discount"
              color="#2f6b7d"
              onPress={() => this.onDiscountPress()}
            />
          </View>
        </View>
      </View>
    );
  }

  getUserScanned() {
    if (this.state.firstTime) {
      this.state.firstTime = false;

      fetch(
        'http://ec2-35-180-152-11.eu-west-3.compute.amazonaws.com:8080/getUserScanned/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userQrCode: this.props.navigation.getParam('barcode', null),
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          global.userScanned = responseJson;
          console.log(global.userScanned);
        })
        .catch(error => {
          Alert.alert('Qr scanning failed', 'Error fetching user data');
        });
    }
  }

  onDiscountPress() {
    fetch(
      'http://ec2-35-180-152-11.eu-west-3.compute.amazonaws.com:8080/discountUserBalance/',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: null,
          transactionAmount: this.state.price,
          user: {
            id: global.userModel.id,
          }
        }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        global.userScanned = responseJson;
        console.log(global.userScanned);
      })
      .catch(error => {
        Alert.alert('Qr scanning failed', 'Error fetching user data');
      });
  }

  onAccumulatePress() {}
}

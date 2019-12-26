import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {styles} from '../../../../share/user/GeneralStyle';

import {homeStyles} from './homeStyles.js';
import {TransactionList} from './TransactionList.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={homeStyles.balanceView}>
          <Text style={homeStyles.balanceText}>Balance</Text>
          <Text style={homeStyles.balanceAmount}>5.35 €</Text>
        </View>
        <View style={homeStyles.listView}>
          <TransactionList />
        </View>
      </View>
    );
  }
}

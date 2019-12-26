import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Style} from 'react-native';

import styles from './QrScreenStyle';
import QRCode from 'react-native-qrcode-svg';

export default class QrScreen extends React.Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Text style={styles.qrText}>"Your QR code"</Text>
        <View style={styles.qrImageView}>
          <QRCode size={160} value={global.userModel.userQrCode} />
        </View>
      </View>
    );
  }
}

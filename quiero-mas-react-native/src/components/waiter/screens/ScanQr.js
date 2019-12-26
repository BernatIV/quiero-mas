import React, {Component} from 'react';

import {RNCamera} from 'react-native-camera';

import styles from './ScanQrStyle';
import {View} from 'react-native';

export default class ScanQr extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};
  }

  static navigationOptions = {
    title: 'Waiter',
  };

  barcodeRecognized = ({barcodes}) => {
    // barcodes.forEach(barcode => console.warn(barcode.data));

    this.props.navigation.navigate('UserScanned', {
      barcode: barcodes[0].data,
    });

    this.props.navigation.pop('QrScanning');
    /**
     * Cal tancar aquesta screen després d'anar a UserScanned perquè la càmera segueix oberta i escanejant
     */
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        />
      </View>
    );
  }
}

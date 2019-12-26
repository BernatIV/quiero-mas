import React, {Component, useState} from 'react';

import styles from './loginStyle';
import {
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Divider, SocialIcon} from 'react-native-elements';
import md5 from 'md5';

const appId = '1047121222092614';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.state = {password: ''};
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.containerView}>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.logoImage}
                  source={require('../../../assets/Octopus.png')}
                />
              </View>
              {/*<Text style={share.logoText}>Quiero Más</Text>*/}
              <TextInput
                placeholder="Username"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={username => this.setState({username})}
                value={this.state.username}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="LOGIN"
              />
              <View style={styles.socialViewsTitle}>
                <View style={styles.socialViewDivider} />
                <Text style={styles.socialTextTitle}> OR CONNECT WITH </Text>
                <View style={styles.socialViewDivider} />
                <Divider style={{backgroundColor: '#000'}} />
              </View>
              <View style={styles.socialViews}>
                <SocialIcon
                  style={styles.fbLoginButton}
                  title="Facebook"
                  button
                  type="facebook"
                />
                <SocialIcon
                  style={styles.fbLoginButton}
                  title="Google"
                  button
                  type="google"
                />
              </View>
              <Divider style={{backgroundColor: '#8d8d8d'}} />
              <TouchableOpacity
                style={styles.signInVew}
                onPress={() => navigate('SignIn', {name: 'Jane'})}>
                <Text style={styles.signInText}>
                  Don't have an account? Sign in!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  /**
   * Login button
   */
  onLoginPress() {
    if (this.state.username !== '' && this.state.password !== '') {
      fetch(
        'http://ec2-35-180-152-11.eu-west-3.compute.amazonaws.com:8080/getLogin/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: md5(this.state.password),
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.loginContext.id === 1) {
            this.state.userModel = responseJson;
            global.userModel = responseJson;

            console.log(global.userModel);

            this.props.navigation.navigate('AppNavigator', {
              userModel: this.state.userModel,
            });
          } else {
            // Alert.alert('Hello ' + this.state.username, "You're a Waiter ");
            this.props.navigation.navigate('Waiter', {
              name: this.state.username,
            });
          }

          return responseJson.username;
        })
        .catch(error => {
          Alert.alert('User not found', "We could't find any results");
          // console.error(error);
        });
    } else {
      Alert.alert('Empty fields', 'Please fill up the fields');
    }
  }
}

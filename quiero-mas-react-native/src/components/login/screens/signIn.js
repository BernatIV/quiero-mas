import React, {Component} from 'react';

import styles from './signInStyle';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {signUpUsername: ''};
    this.state = {signUpPassword: ''};
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
                onChangeText={signUpUsername => this.setState({signUpUsername})}
                value={this.state.signUpUsername}
              />
              <TextInput
                placeholder="Password"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
                onChangeText={signUpPassword => this.setState({signUpPassword})}
                value={this.state.signUpPassword}
                secureTextEntry={true}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onSignUpPress()}
                title="SIGN IN"
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
                onPress={() => navigate('Login', {name: 'Jane'})}>
                <Text style={styles.signInText}>
                  Already have an account? Login!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  onSignUpPress() {
    if (this.state.signUpUsername !== '' && this.state.signUpPassword !== '') {
      fetch(
        'http://ec2-35-180-152-11.eu-west-3.compute.amazonaws.com:8080/createUser/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: null,
            username: this.state.signUpUsername,
            password: md5(this.state.signUpPassword),
            loginContext: {
              id: 1,
            },
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          Alert.alert('Hello ' + this.state.signUpUsername, 'Welcome, really');
          this.props.navigation.navigate('Home', {
            name: this.state.signUpUsername,
          });
          return responseJson.username;
        })
        .catch(error => {
          Alert.alert(
            'The username already exists',
            'The username must be unique',
          );
          // console.error(error);
        });
    } else {
      Alert.alert('Empty fields', 'Please fill up the fields');
    }
  }
}

const React = require('react-native');

const {StyleSheet} = React;

export default {
  containerView: {
    flex: 1,
    backgroundColor: 'rgba(47,107,125,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    fontSize: 22,
    color: '#8d8d8d',
  },
  loginScreenContainer: {
    flex: 1,
  },
  qrImageView: {
    marginTop: 8,
    marginBottom: 30,
  },
  logoImage: {
    width: 200,
    height: 110,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'rgba(47,107,125,0.2)',
    backgroundColor: 'rgba(47,107,125,0.00)',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'rgba(47,107,125,1)',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  socialViewsTitle: {
    height: 48,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialTextTitle: {
    fontSize: 13,
    color: '#8d8d8d',
  },
  socialViewDivider: {
    height: 1,
    width: 80,
    backgroundColor: '#8d8d8d',
  },
  socialViews: {
    flex: 1,
    flexDirection: 'row',
  },
  fbLoginButton: {
    height: 45,
    width: 150,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#1b525b',
  },
  signInVew: {
    height: 48,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    textAlign: 'center',
    color: '#8d8d8d',
  },
};

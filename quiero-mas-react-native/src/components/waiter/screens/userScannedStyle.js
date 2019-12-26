const React = require('react-native');

const {StyleSheet} = React;

export default {
  container: {
    flex: 1,
    backgroundColor: 'rgba(47,107,125,0.13)',
  },
  textContent: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    height: 20,
  },
  textUsername: {
    fontSize: 22,
    //color: '#696969',
  },
  textBalance: {
    marginTop: 8,
    fontSize: 40,
    //color: '#696969',
  },
  priceTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'rgba(47,107,125,0.2)',
    backgroundColor: 'rgba(255,255,255,1)',
    marginTop: 40,
    marginBottom: 20,
  },
  horizontalButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  separatorButton: {
    height: 20,
  },

  avatar: {
    width: 130,
    height: 130,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  viewScanButton: {
    marginTop: 450,
    color: '#2f6b7d',
  },
  nameBis: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },



  containerView: {
    flex: 1,
    backgroundColor: 'rgb(245,241,238)',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
  },
};

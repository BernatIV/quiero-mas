import React from 'react';
import{StyleSheet} from 'react-native';

const  homeStyles = StyleSheet.create({
  balanceView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: "center",
  },
  balanceText:{
    paddingBottom: 20,
    fontFamily:'sans-serif',
    fontSize: 20,
    fontStyle:'italic',
    color:'rgba(0,0,2,0.4)'
  },
  balanceAmount: {
    paddingBottom: 40,
    fontFamily:'sans-serif-thin',
    fontSize: 80,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'rgba(0,0,2,0.7)'
  },
  listView: {
    flex: 2
  }
})

export {homeStyles}

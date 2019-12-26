import React, { Component } from 'react';
import {
        FlatList,
        StyleSheet,
        Text,
        View,
        TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from './TransactionListData.js';


export class TransactionList extends React.Component {
    shit(){
      <Text style={textStyles.amountText}>SShit</Text>
    }
    render(){
      const iconColor = "rgba(47,107,125,1)"
      const plusIcon  = <AntDesign
        name="pluscircle"
        color= {iconColor}
        />
      const minusIcon = <AntDesign
        name="minuscircle"
        color= {iconColor}
        />
      const walletIcon = <AntDesign
          name="wallet"
          color= {iconColor}
          />


      return(
        <FlatList
          data= {[
            {id: "1",date: 'Nov 11', amount: -2, currentBalance: 7.35 },
            {id: "2",date: 'Nov 12', amount: -11.33, currentBalance: 30},
            {id: "3",date: 'Nov 3', amount: 5, currentBalance: 30},
            {id: "4",date: 'Oct 28', amount:  2, currentBalance: 30},
            {id: "5",date: 'Oct 20', amount: -1, currentBalance: 30},
            {id: "6",date: 'Oct 17', amount: 0.58, currentBalance: 30},
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <TouchableOpacity style={(item.id%2 == 0) ? styles.itemContainerDark : styles.itemContainerPale }>
            <Text style={textStyles.dateText}>
              {item.date}
            </Text>

              <View style={styles.amountView}>

                {(item.amount >= 0) ? plusIcon: minusIcon}

                <Text style={textStyles.amountText}>
                  {Math.abs(item.amount)}
                </Text>

                {walletIcon}


                <Text style={textStyles.amountText}>
                  {item.currentBalance}
                </Text>
              </View>


          </TouchableOpacity>
          }
        />
    );
  }
}
const containerMargin = 15
const containerPadding = 5

const styles = StyleSheet.create({

  itemContainerDark: {
    margin: containerMargin,
    padding: containerPadding,
    borderRadius: 10,
    backgroundColor: "rgba(47,107,125,0.6)",
  },
  itemContainerPale: {
    margin: containerMargin,
    padding: containerPadding,
    borderRadius: 10,
    backgroundColor: "rgba(47,107,125,0.22)",
  },
  iconView : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  amountView : {
    flex : 1,
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent:'space-around',
    position: 'relative',
  }
});
const textStyles = StyleSheet.create({
  dateText: {
    paddingLeft: 20,
    fontFamily: 'Cochin',
    fontSize:13,
    fontStyle:'italic',
    letterSpacing: 5,
    color: "rgba(0,0,2,0.5)",
  },
  amountText: {
    paddingLeft: -50,
    flexDirection: 'row',
    fontSize: 20,
    width: 60,
    color: "rgba(47,107,125,1)",
  },
  balanceText: {
    flexDirection: 'row',
    fontSize: 20,
    color: "rgba(47,107,125,1)",
  },
})

// <TouchableOpacity style={(item.id%2 == 0) ? share.itemContainerDark : share.itemContainerPale }>
//   <Text style={textStyles.dateText}>
//     {item.date}
//   </Text>
//   <View style={share.iconView}>
//     {(item.amount >= 0) ? plusIcon: minusIcon}
//   </View>
//   <View style={share.amountView}>
//     <Text style={textStyles.amountText}>
//       {item.amount}
//     </Text>
//   </View>
// </TouchableOpacity>

import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Style} from 'react-native';

// import {styles} from '../../share/GeneralStyle';

export default class ProfileScreen extends React.Component {
  render() {
    return <View />;
  }
}

// export default class ProfileScreen extends React.Component{
//   render(){
//     const {navigate} = this.props.navigation
//     return(
//       <View style={{flex: 2,alignItems: 'center',justifyContent: 'center',backgroundColor:'red'}}>
//         <Text>Profile Screen</Text>
//         <Button
//             title="Go to Details... again"
//             onPress={() => this.props.navigation.push('Profile')}
//           />
//         <View style={share.container2}>
//           <Button
//               title="Go to Home"
//               color="black"
//               onPress={() => this.props.navigation.navigate('Home')}
//           />
//         </View>
//         <View style={{flexDirection: 'row',height: 100,backgroundColor:'black',flex:1}}>
//           <Button
//             style={share.alternativeLayoutButtonContainer}
//             title="Go Back"
//             color= {share.alternativeLayoutButtonContainer.colo}
//             onPress={() => this.props.navigation.goBack()}
//             />
//         </View>
//       </View>
//     );
//   }
// }

import React from 'react';
import posed from 'react-native-pose';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const tabWidth = windowWidth / 3;
const SpotLight = posed.View({
  route0: {x: 0},
  route1: {x: tabWidth},
  route2: {x: tabWidth * 2},
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    backgroundColor: 'rgba(47,107,125,0.4)',
    //elevation: 2
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotLight: {
    //left: 60,
    //justifyContent: 'center',
    alignItems: 'center',
    width: tabWidth,
    height: '100%',
    backgroundColor: 'rgba(47,107,125,0.6)',
    borderRadius: 8,
  },
});

const TabBar = props => {
  const {
    showLabel,
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`} />
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            {renderIcon({route, focused: isRouteActive, tintColor})}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

//<Text>{getLabelText({ route })}</Text>

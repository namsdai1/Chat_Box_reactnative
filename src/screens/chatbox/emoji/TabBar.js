import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const TabBar = ({navigationState, position, setIndex, setTextInput, text}) => {
  const inputRange = navigationState.routes.map((x, i) => i);
  return (
    <View style={styles.container}>
      {navigationState.routes.map((route, index) => {
        // const opacity = position.interpolate({
        //   inputRange,
        //   outputRange: inputRange.map(inputIndex =>
        //     inputIndex === index ? 1 : 0.5,
        //   ),
        // });
        return (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => {
              // setIndex(index);
              if (index !== navigationState.routes.length - 1) {
                setIndex(index);
              } else {
                setTextInput(currentxt => currentxt.slice(0, -1));
              }
            }}>
            <Animated.Text style={{color: '#ffffff', fontSize: 18}}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
});

export default TabBar;

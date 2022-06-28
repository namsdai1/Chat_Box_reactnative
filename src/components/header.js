import {View, Text} from 'react-native';
import React from 'react';

export default function Header(props) {
  const {style} = props;
  return (
    <View
      style={[
        {backgroundColor: 'blue', height: 50, width: '100%', ...style},
      ]}></View>
  );
}

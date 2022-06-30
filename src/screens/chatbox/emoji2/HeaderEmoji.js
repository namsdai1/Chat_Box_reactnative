import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import listEmoji from './../../../data/emoji/categories';
const HeaderEmoji = () => {
  const {list, tabs} = listEmoji;
  return (
    <View
      style={{
        height: 50,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {tabs.map((item, index) => (
        <TouchableOpacity onPress={() => console.log('aa')}>
          <Text style={{color: '#ffffff', fontSize: 18}}>{item.tabLabel}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HeaderEmoji;

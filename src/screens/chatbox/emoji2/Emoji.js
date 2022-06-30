import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import listEmoji from './../../../data/emoji/categories';
import shortnameToUnicode from './../../../helper/shortnameToUnicode';
import {emojisByCategory} from './../../../data/emoji/emoji';
export default function Emoji() {
  const {list, tabs} = listEmoji;
  const [name, setName] = useState('');
  const [listEmojiData, setListEmojiData] = useState([]);
  useEffect(() => {
    if (name) {
      setListEmojiData(emojisByCategory[name]);
    }
  }, [name]);

  return (
    <View style={{height: 300, backgroundColor: 'red'}}>
      {/* header tab */}
      <View
        style={{
          height: 50,
          backgroundColor: 'yellow',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {tabs.map((item, index) => (
          <TouchableOpacity onPress={() => setName(item.category)}>
            <Text style={{color: '#ffffff', fontSize: 18}}>
              {item.tabLabel}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          height: 250,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={listEmojiData}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                console.log(shortnameToUnicode[`:${item}:`], 'item', item)
              }
              style={{marginHorizontal: 9}}>
              <Text style={{fontSize: 25, color: '#ffffff'}}>
                {shortnameToUnicode[`:${item}:`]}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          numColumns={8}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

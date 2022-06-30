import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';

import shortnameToUnicode from '../../../helper/shortnameToUnicode';

const Emoji = ({item, setTextInput}) => {
  return (
    <Pressable
      onPress={() =>
        setTextInput(currenText => currenText + shortnameToUnicode[`:${item}:`])
      }
      style={styles.emojiContainer}>
      <Text style={styles.emoji}>{shortnameToUnicode[`:${item}:`]}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    marginHorizontal: 9,
  },
  emoji: {
    fontSize: 25,
    color: '#ffffff',
  },
});

export default Emoji;

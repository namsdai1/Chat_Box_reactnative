import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Chats from '../../data/Chats';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import EmojiPicker from './emoji/EmojiPicker';
const {width, height} = Dimensions.get('window');
export default function ChatBox() {
  const userId = 'u1';
  const [keyBoard, setKeyBoard] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      // setKeyboardStatus('Keyboard Shown');
      console.log('KeyBoard Shown');
      setKeyBoard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      // setKeyboardStatus('Keyboard Hidden');
      console.log('KeyBoard Hidden');
      setKeyBoard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <View style={{backgroundColor: '#f1f1f1', height: '50%'}}>
      <FlatList
        data={Chats.messages}
        keyExtractor={item => item.id}
        inverted={true}
        renderItem={({item, index}) => {
          const value = item;
          var indexPrev = 0;
          var index2 = 0;
          var dateTime = '';

          if (index !== Chats.messages.length - 1) {
            index2 = index + 1;
          }
          if (index !== 0) {
            indexPrev = index - 1;
          }
          console.log(index, 'i', value);
          // if (value.user.id === Chats.messages[index2].user.id) {
          // if(new Date(value.createdAt).getTime){

          // }
          const getDay = new Date(value.createdAt).getDate();
          const getMonth = new Date(value.createdAt).getMonth() + 1;
          const getYear = new Date(value.createdAt).getFullYear();
          const getHour = new Date(value.createdAt).getHours();
          const getMinutes = new Date(value.createdAt).getMinutes();
          var data = new Date().getTime() - new Date(value.createdAt).getTime();
          var comparePrevDate =
            new Date(value.createdAt).getTime() -
            new Date(Chats.messages[index2].createdAt).getTime();
          if (data / 1000 > 15 * 60) {
            console.log(comparePrevDate, 'comparePrevDate', data);
            if (
              comparePrevDate / 1000 > 5 * 60 ||
              index === Chats.messages.length - 1
            ) {
              if (
                getDay === new Date().getDate() &&
                getMonth === new Date().getMonth() + 1 &&
                getYear === new Date().getFullYear()
              ) {
                dateTime = getHour + ':' + getMinutes;
              } else {
                dateTime =
                  getDay +
                  '/' +
                  getMonth +
                  '/' +
                  getYear +
                  ' luc' +
                  getHour +
                  ':' +
                  getMinutes;
              }
            }
            // }
          } else if (index === Chats.messages.length - 1) {
            dateTime = getHour + ':' + getMinutes;
          }
          return (
            <View>
              {dateTime && (
                <Text style={{textAlign: 'center'}}>{dateTime}</Text>
              )}
              {value.user.id !== userId ? (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom:
                      value.user.id === Chats.messages[indexPrev].user.id
                        ? 4
                        : 10,
                  }}>
                  {value.user.id !== Chats.messages[indexPrev].user.id ||
                  index === 0 ? (
                    <View style={{justifyContent: 'flex-end'}}>
                      <Image
                        // source={{
                        //   uri: 'https://reactjs.org/logo-og.png',
                        // }}
                        resizeMode="cover"
                        style={{
                          borderRadius: 100,
                        }}
                        source={{
                          uri: Chats.users[0].imageUri,
                          width: 30,
                          height: 30,
                        }}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        width: 30,
                        height: 30,
                      }}></View>
                  )}

                  <View style={{width: width * 0.7, alignItems: 'flex-start'}}>
                    <View
                      style={{
                        marginHorizontal: 10,
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        borderRadius: 10,
                      }}>
                      <Text>{value.content}</Text>
                    </View>
                  </View>
                  {index == 0 ? (
                    <View
                      style={{
                        alignItems: 'flex-end',
                        //alignItems: 'flex-end',
                        width: width * 0.3 - 30,
                        alignSelf: 'flex-end',
                      }}>
                      <Image
                        // source={{
                        //   uri: 'https://reactjs.org/logo-og.png',
                        // }}
                        resizeMode="cover"
                        style={{
                          borderRadius: 100,
                        }}
                        source={{
                          uri: Chats.users[0].imageUri,
                          width: 23,
                          height: 23,
                        }}
                      />
                    </View>
                  ) : null}
                </View>
              ) : (
                <View
                  style={{
                    justifyContent: 'flex-end',
                    marginBottom:
                      value.user.id === Chats.messages[indexPrev].user.id
                        ? 4
                        : 10,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: width * 0.7,
                      alignItems: 'flex-end',
                    }}>
                    <View
                      style={{
                        marginHorizontal: 10,
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        borderRadius: 10,
                      }}>
                      <Text>{value.content}</Text>
                    </View>
                  </View>
                  {index == 0 ? (
                    <View style={{justifyContent: 'flex-end'}}>
                      <Image
                        // source={{
                        //   uri: 'https://reactjs.org/logo-og.png',
                        // }}
                        resizeMode="cover"
                        style={{
                          borderRadius: 100,
                        }}
                        source={{
                          uri: Chats.users[0].imageUri,
                          width: 23,
                          height: 23,
                        }}
                      />
                    </View>
                  ) : (
                    <View style={{width: 23, height: 23}}></View>
                  )}
                </View>
              )}
            </View>
          );
        }}
      />

      <BottomChat keyBoard={keyBoard} />
      {/* <View
        style={{
          backgroundColor: 'white',
          width: width,
          height: 300,
        }}></View> */}
      <EmojiPicker />
    </View>
  );
}

const BottomChat = ({keyBoard}) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderWidth: 0.1,
        borderTopColor: 'back',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign name="like1" color={'black'} size={20} />
      </View>
      {!keyBoard && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="like1" color={'black'} size={20} />
        </View>
      )}

      {!keyBoard && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="like1" color={'black'} size={20} />
        </View>
      )}
      <View
        style={{
          flex: 4,
          backgroundColor: 'green',
          width: '50%',
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextInput style={{width: '80%'}} multiline />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign name="like1" color={'black'} size={20} />
      </View>
    </View>
  );
};

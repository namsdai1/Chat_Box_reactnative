import React, {useEffect, useRef, useState, memo} from 'react';
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
  Animated,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import Chats from '../../data/Chats';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import EmojiPicker from './emoji/EmojiPicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const {width, height} = Dimensions.get('window');
const userId = 'u1';

function ChatBox() {
  const [keyBoard, setKeyBoard] = useState(false);
  const [messages, setMessages] = useState(Chats.messages);
  const scrollRef = useRef(null);
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
  useEffect(() => {
    console.log('Messages cap nhat');
  }, [messages]);

  return (
    <>
      <View style={{backgroundColor: '#f1f1f1', height: '100%'}}>
        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current.scrollToEnd({animated: false})
          }>
          {messages.map((value, index) => {
            // const value = item;
            var indexPrev = 0;
            var index2 = 0;
            var dateTime = '';

            if (index !== messages.length - 1) {
              index2 = index + 1;
            }
            if (index !== 0) {
              indexPrev = index - 1;
            }
            console.log(index, 'i', indexPrev, 'indexPrev', index2);
            // if (value.user.id === Chats.messages[index2].user.id) {
            // if(new Date(value.createdAt).getTime){

            // }
            const getDay = new Date(value.createdAt).getDate();
            const getMonth = new Date(value.createdAt).getMonth() + 1;
            const getYear = new Date(value.createdAt).getFullYear();
            const getHour = new Date(value.createdAt).getHours();
            const getMinutes = new Date(value.createdAt).getMinutes();
            var data =
              new Date().getTime() - new Date(value.createdAt).getTime();
            var comparePrevDate =
              new Date(value.createdAt).getTime() -
              new Date(messages[indexPrev].createdAt).getTime();
            if (data / 1000 > 15 * 60) {
              console.log(comparePrevDate, 'comparePrevDate', data);
              if (comparePrevDate / 1000 > 10 * 60) {
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
            } else if (comparePrevDate / 1000 > 10 * 60) {
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
                        value.user.id === messages[index2].user.id ? 4 : 10,
                    }}>
                    {value.user.id !== messages[index2].user.id ||
                    index === messages.length - 1 ? (
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

                    <View
                      style={{width: width * 0.7, alignItems: 'flex-start'}}>
                      <View
                        style={{
                          marginHorizontal: 10,
                          backgroundColor: 'white',
                          paddingHorizontal: 10,
                          paddingVertical: 8,
                          borderRadius: 10,
                          backgroundColor: 'pink',
                        }}>
                        <Text style={{color: 'gray', fontSize: 16}}>
                          {value.content}
                        </Text>
                      </View>
                    </View>
                    {index == messages.length - 1 ? (
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
                        value.user.id === messages[index2].user.id ? 4 : 10,
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
                        <Text style={{color: 'gray', fontSize: 16}}>
                          {value.content}
                        </Text>
                      </View>
                    </View>
                    {index == messages.length - 1 ? (
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
          })}
        </ScrollView>
        {/* <FlatList
          data={messages}
          keyExtractor={item => item.id}
          inverted={false}
          renderItem={({item, index}) => }
        /> */}

        <BottomChat
          keyBoard={keyBoard}
          setMessages={setMessages}
          messages={messages}
        />

        {/* <View
        style={{
          backgroundColor: 'white',
          width: width,
          height: 300,
        }}></View> */}
      </View>
    </>
  );
}

const BottomChat = ({keyBoard, setMessages, messages}) => {
  const [txtMessages, setTxtMessages] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const textInputRef = useRef(null);
  const [fastEmoji, setFastEmoji] = useState('🖤');
  const emojiRef = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (showEmoji && !keyBoard) moveAnimation();
    else if (keyBoard) {
      setShowEmoji(false);
      moveAnimation();
    } else {
      moveAnimation();
    }
  }, [showEmoji, keyBoard]);
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const moveAnimation = () => {
    console.log('aa');
    Animated.timing(emojiRef, {
      toValue: !keyBoard && showEmoji ? 300 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    // emojiRef.stopAnimation();
  };
  const _setMessages = () => {
    console.log('aaavb');
    let item = {
      id: 'm3',
      content: txtMessages ? txtMessages : fastEmoji,
      createdAt: new Date().getTime(),
      user: {
        id: userId,
        name: 'Vadim',
      },
    };
    let data = [];
    data.push(...messages, item);
    // console.log(JSON.stringify(data));
    setMessages(data);
    textInputRef.current.clear();
    setTxtMessages('');
  };
  const launchImageLibraryRN = () => {
    console.log('vv');
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const launchCameraRN = () => {
    requestCameraPermission();
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        // this.setState({
        //   filePath: response,
        //   fileData: response.data,
        //   fileUri: response.uri,
        // });
      }
    });
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 5,
          borderWidth: 0.1,
          borderTopColor: 'back',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign name="like1" color={'black'} size={22} />
        </View>
        {!keyBoard && (
          <TouchableOpacity
            onPress={() => {
              launchCameraRN();
            }}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="like1" color={'black'} size={22} />
          </TouchableOpacity>
        )}

        {!keyBoard && (
          <TouchableOpacity
            onPress={() => {
              launchImageLibraryRN();
            }}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name="like1" color={'black'} size={22} />
          </TouchableOpacity>
        )}
        <View
          style={{
            flex: 4,
            paddingHorizontal: 4,
            backgroundColor: '#e0e0d1',
            width: '50%',
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TextInput
              ref={textInputRef}
              onChangeText={text => setTxtMessages(text)}
              style={{width: '80%', fontSize: 18}}
              multiline
              placeholder="Aa"
              clearButtonMode="always"

              // value={}
            >
              <Text>{`${txtMessages}`}</Text>
            </TextInput>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                setShowEmoji(!showEmoji);
                // moveAnimation();
              }}>
              <FontAwesome5 name="smile" color={'black'} size={22} />
            </TouchableOpacity>
          </View>
        </View>
        <Pressable
          onPress={_setMessages}
          style={{
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {txtMessages ? (
            <Ionicons name="send" color={'black'} size={25} />
          ) : (
            <Text style={[styles.fontSize, {fontSize: 22}]}>{fastEmoji}</Text>
          )}
        </Pressable>
      </View>
      <Animated.View style={{height: emojiRef}}>
        <EmojiPicker setTextInput={setTxtMessages} />
      </Animated.View>

      {/* <Animated.View ref={emojiRef} style={{height: emojiRef}}>
       
      </Animated.View> */}
    </>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    color: 'gray',
  },
});
export default memo(ChatBox);

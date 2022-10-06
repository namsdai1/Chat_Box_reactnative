import React, {
  useEffect,
  useRef,
  useState,
  memo,
  useMemo,
  useCallback,
} from 'react';
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
  TouchableWithoutFeedback,
  SafeAreaView,
  LayoutAnimation,
  UIManager,
} from 'react-native';

//font
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//emoji
import EmojiPicker from './emoji/EmojiPicker';
import styles from './Styles/styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const {width, height} = Dimensions.get('window');

const ChatBox = ({
  onPressSend,
  messages,
  user,
  customer,
  styleUser,
  styleCustomer,
  styleTextDate,
  backgroundContainer,
  onPressCamera,
  onPressLibrary,
  onLongPressItem,
  txtSendEmoji,
  colorBottomInput,
  colorInput,
  iconColor,
}) => {
  const [keyBoard, setKeyBoard] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [txtMessages, setTxtMessages] = useState('');

  const scrollRef = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      // setKeyboardStatus('Keyboard Shown');
      scrollRef.current.scrollToEnd({animated: true});
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
    if (showEmoji) {
      const timeout = setTimeout(() => {
        scrollRef.current.scrollToEnd({animated: true});
        clearTimeout(timeout);
      }, 200);
    }
  }, [showEmoji]);

  const isEmoji = str => {
    var regex =
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    if (str.match(regex)) {
      const check = str.replace(regex, '');
      if (check == '') return true;
      else {
        return false;
      }
    } else {
      return false;
    }
  };

  const checkNumberTime = number => {
    return parseInt(number) >= 10 ? number : '0' + number;
  };

  const listDataMess = useMemo(() => {
    return (
      <View>
        {messages.map((value, index) => {
          // const value = item;
          var indexPrev = 0;
          var index2 = 0;
          var dateTime = '';
          const checkEmoji = isEmoji(value.content);

          if (index !== messages.length - 1) {
            index2 = index + 1;
          }
          if (index !== 0) {
            indexPrev = index - 1;
          }

          const getDay = new Date(value.createdAt).getDate();
          const getMonth = new Date(value.createdAt).getMonth() + 1;
          const getYear = new Date(value.createdAt).getFullYear();
          const getHour = new Date(value.createdAt).getHours();
          const getMinutes = new Date(value.createdAt).getMinutes();
          var data = new Date().getTime() - new Date(value.createdAt).getTime();
          var comparePrevDate =
            new Date(value.createdAt).getTime() -
            new Date(messages[indexPrev].createdAt).getTime();
          if (data / 1000 > 15 * 60) {
            if (comparePrevDate / 1000 > 10 * 60) {
              if (
                getDay === new Date().getDate() &&
                getMonth === new Date().getMonth() + 1 &&
                getYear === new Date().getFullYear()
              ) {
                dateTime =
                  checkNumberTime(getHour) + ':' + checkNumberTime(getMinutes);
              } else {
                dateTime =
                  checkNumberTime(getDay) +
                  '/' +
                  checkNumberTime(getMonth) +
                  '/' +
                  getYear +
                  ' ' +
                  checkNumberTime(getHour) +
                  ':' +
                  checkNumberTime(getMinutes);
              }
            }
            // }
          } else if (comparePrevDate / 1000 > 10 * 60) {
            dateTime =
              checkNumberTime(getHour) + ':' + checkNumberTime(getMinutes);
          }
          return (
            <ItemChat
              onLongPressItem={onLongPressItem}
              styleUser={styleUser}
              styleCustomer={styleCustomer}
              index2={index2}
              styleTextDate={styleTextDate}
              user={user}
              customer={customer}
              index={index}
              dateTime={dateTime}
              value={value}
              checkEmoji={checkEmoji}
              messages={messages}
            />
          );
        })}
      </View>
    );
  }, [messages]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowEmoji(false);
        }}>
        <View style={{backgroundColor: '#f1f1f1', flex: 1}}>
          <ScrollView
            style={{zIndex: 2}}
            ref={scrollRef}
            onContentSizeChange={() =>
              scrollRef.current.scrollToEnd({animated: false})
            }>
            {listDataMess}
          </ScrollView>

          <BottomChat
            iconColor={iconColor}
            colorInput={colorInput}
            colorBottomInput={colorBottomInput}
            setTxtMessages={setTxtMessages}
            txtMessages={txtMessages}
            scrollRef={scrollRef}
            keyBoard={keyBoard}
            messages={messages}
            ref={refBottom}
            showEmoji={showEmoji}
            setShowEmoji={setShowEmoji}
            onPressSend={onPressSend}
            onPressCamera={onPressCamera}
            onPressLibrary={onPressLibrary}
            txtSendEmoji={txtSendEmoji}
          />
          <View style={styles.backgroundContainer}>
            {backgroundContainer && backgroundContainer()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const BottomChat = (
  {
    keyBoard,
    scrollRef,
    setShowEmoji,
    showEmoji,
    onPressSend,
    onPressLibrary,
    onPressCamera,
    setTxtMessages,
    txtMessages,
    txtSendEmoji,
    colorBottomInput,
    colorInput,
    iconColor,
  },
  ref,
) => {
  var CustomLayoutLinear = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };

  const textInputRef = useRef(null);
  const [fastEmoji, setFastEmoji] = useState('' + txtSendEmoji);
  const emojiRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showEmoji && !keyBoard)
      scrollRef.current.scrollToEnd({animated: false});
    else if (keyBoard) {
      setShowEmoji(false);
    }
    moveAnimation();
  }, [showEmoji, keyBoard]);

  const moveAnimation = () => {
    Animated.timing(emojiRef, {
      toValue: !keyBoard && showEmoji ? 300 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    // emojiRef.stopAnimation();
  };

  const _setMessages = () => {
    onPressSend(txtMessages ? txtMessages : fastEmoji),
      textInputRef.current.clear();
    setTxtMessages('');
    setShowEmoji(false);
  };

  return (
    <View style={{zIndex: 2}}>
      <View
        style={[
          styles.containerBottomChat,
          {backgroundColor: colorBottomInput},
        ]}>
        {onPressCamera && !(keyBoard || showEmoji) && (
          <TouchableOpacity onPress={() => {}} style={styles.iconBtnBottomChat}>
            <FontAwesome name="camera" color={iconColor} size={22} />
          </TouchableOpacity>
        )}

        {onPressLibrary && !(keyBoard || showEmoji) && (
          <TouchableOpacity
            onPress={() => {
              scrollRef.current.scrollToEnd({animated: false});
              // launchImageLibraryRN();
            }}
            style={styles.iconBtnBottomChat}>
            <FontAwesome name="picture-o" color={iconColor} size={22} />
          </TouchableOpacity>
        )}

        <Animated.View
          style={{
            flex: 4,
            marginLeft: 4,
            paddingHorizontal: 3,
            backgroundColor: colorInput
              ? colorInput.backgroundColor
              : '#e0e0d1',
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
              style={{flex: 1, fontSize: 18, paddingVertical: 12}}
              multiline
              placeholder="Nhap chat"
              clearButtonMode="always"

              // value={}
            >
              <Text>{`${txtMessages}`}</Text>
            </TextInput>
            <TouchableOpacity
              style={styles.paddingRight}
              onPress={() => {
                Keyboard.dismiss();
                setShowEmoji(!showEmoji);
                LayoutAnimation.configureNext(CustomLayoutLinear);
                // moveAnimation();
              }}>
              <FontAwesome5 name="smile" color={'black'} size={22} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Pressable
          onPress={_setMessages}
          style={{
            width: '12%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {txtMessages ? (
            <Ionicons name="send" color={'black'} size={25} />
          ) : (
            <Text style={[{color: '#FFF', fontSize: 22}]}>{fastEmoji}</Text>
          )}
        </Pressable>
      </View>
      <Animated.View style={{height: emojiRef}}>
        <EmojiPicker setTextInput={setTxtMessages} />
      </Animated.View>
    </View>
  );
};

//avoid re-rendering the list when adding
const areEqual = ({message: prevMessage}, {message}) => {
  console.log(prevMessage == message, 'ckeck');
  return message == prevMessage;
};

const ItemChat = React.memo(
  ({
    styleUser,
    styleCustomer,
    index2,
    dateTime,
    value,
    checkEmoji,
    index,
    styleTextDate,
    user,
    customer,
    messages,
    onLongPressItem,
  }) => {
    return (
      <View style={{zIndex: 2}} key={`keyExtractorIndex${index}`}>
        {dateTime && (
          <Text
            style={[
              styles.txtDate,
              {
                color: '#1A1A1A',
              },
              styleTextDate,
            ]}>
            {dateTime}
          </Text>
        )}
        {value.user.id !== user.id ? (
          <View
            style={{
              ...styles.boxCustomerItem,
              marginBottom: value.user.id === messages[index2].user.id ? 4 : 10,
            }}>
            {value.user.id !== user.id || index === messages.length - 1 ? (
              <View style={{justifyContent: 'flex-end'}}>
                <Image
                  resizeMode="cover"
                  style={{
                    borderRadius: 100,
                  }}
                  source={{
                    uri: customer.imageUri,
                    ...styles.imageCustomer,
                  }}
                />
              </View>
            ) : (
              <View style={styles.imageCustomer}></View>
            )}

            <View style={{width: width * 0.7, alignItems: 'flex-start'}}>
              <TouchableOpacity
                onLongPress={() => onLongPressItem(value)}
                style={[
                  styles.btnItemMessage,
                  {
                    backgroundColor: checkEmoji
                      ? null
                      : styleCustomer
                      ? styleCustomer?.backgroundColor
                      : 'pink',

                    paddingVertical: 8,
                  },
                ]}>
                <Text
                  style={{
                    color: styleCustomer ? styleCustomer.color : 'gray',
                    fontSize: checkEmoji ? 24 : 16,
                  }}>
                  {value.content}
                </Text>
              </TouchableOpacity>
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
                    uri: user.imageUri,
                    ...styles.imageUser,
                  }}
                />
              </View>
            ) : null}
          </View>
        ) : (
          <View
            style={{
              ...styles.boxUserItem,
              marginBottom: value.user.id === messages[index2].user.id ? 4 : 10,
            }}>
            <View
              style={{
                width: width * 0.7,
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onLongPress={() => onLongPressItem(value)}
                style={[
                  styles.btnItemMessage,
                  {
                    backgroundColor: checkEmoji
                      ? null
                      : styleUser
                      ? styleUser?.backgroundColor
                      : 'white',
                    paddingVertical: checkEmoji ? 2 : 8,
                  },
                ]}>
                <Text
                  style={{
                    color: styleUser ? styleUser?.color : 'gray',
                    fontSize: checkEmoji ? 24 : 16,
                    textAlign: 'right',
                  }}>
                  {value.content}
                </Text>
              </TouchableOpacity>
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
                    uri: user.imageUri,
                    ...styles.imageUser,
                  }}
                />
              </View>
            ) : (
              <View style={styles.imageUser}></View>
            )}
          </View>
        )}
      </View>
    );
  },
);

export default memo(ChatBox);

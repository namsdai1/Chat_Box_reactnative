import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';

import ChatBox from 'rn-custom-chat';

const App = () => {
  const user = {
    id: 'u1',
    name: 'Vadim',
    imageUri:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
  };
  const customer = {
    id: 'u2',
    name: 'Elon Musk',
    imageUri:
      'https://static-images.vnncdn.net/files/publish/ty-phu-elon-musk-vua-chi-44-ty-usd-de-mua-lai-twitter-9ff465ee3a124118b8fc9b8e8c9bcb4a.jpg',
  };
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      type: 'text',
      content: 'How are you, Elon!',
      createdAt: '2020-10-02T12:48:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm2',
      type: 'text',
      content: 'I am good, good',
      createdAt: '2020-10-03T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm3',
      type: 'text',
      content: 'What about you?',
      createdAt: '2020-10-04T14:49:40.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm4',
      type: 'text',
      content: 'Good as well, preparing for the stream now.',
      createdAt: '2020-10-07T14:47:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm5',
      type: 'text',
      content: 'How is SpaceX doing?',
      createdAt: '2020-10-07T14:48:00.000Z',
      user: {
        id: 'u1',
        name: 'Vadim',
      },
    },
    {
      id: 'm6',
      type: 'text',
      content: 'going to the Moooooon',
      createdAt: '2020-10-07T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm6',
      type: 'text',
      content: 'going to the Moooooon',
      createdAt: '2020-10-07T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm6',
      type: 'text',
      content: 'going to the Moooooon',
      createdAt: '2020-10-07T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm7',
      type: 'text',
      content: 'btw, SpaceX is interested in buying notJust.dev!',
      createdAt: 1656497877769,
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm7',
      type: 'text',
      content: 'btw, SpaceX is interested in buying notJust.dev!',
      createdAt: 1656497877769,
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm7',
      type: 'image',
      content: 'btw, SpaceX is interested in buying notJust.dev!',
      createdAt: 1656497877769,
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
  ]);

  const onPressSend = value => {
    let item = {
      id: 'm1',
      type: 'text',
      content: value,
      createdAt: new Date().getTime(),
      user: {
        ...user,
      },
    };
    let data = [];
    data.push(...messages, item);
    // console.log(JSON.stringify(data));
    setMessages(data);
  };

  const backgroundContainer = () => {
    return (
      <Image
        style={{width: '100%', height: '100%'}}
        source={{
          uri: 'https://1.bp.blogspot.com/-Re1cd2wUahw/Xp3BVxbXN0I/AAAAAAAAh2w/jGx30lNaoIUkmtkj4GQR8VY0iE1qeLlBACLcBGAsYHQ/s1600/Hinh-nen-hoa-cuc-dep%2B%25282%2529.jpg',
        }}
      />
    );
  };

  return (
    <ChatBox
      messages={messages}
      user={user}
      customer={customer}
      styleUser={{color: 'red', backgroundColor: 'blue'}}
      styleCustomer={{color: 'blue', backgroundColor: 'black'}}
      styleTextDate={{color: 'white', fontSize: 16}}
      backgroundContainer={() => backgroundContainer()}
      onPressSend={onPressSend}
      onPressCamera={() => {}}
      onLongPressItem={() => {}}
      txtSendEmoji={'👍'}
      colorBottomInput={'white'}
      colorInput={'#e0e0d1'}
      iconColor={'blue'}
      onPressLibrary={() => {}}
    />
  );
};

export default App;

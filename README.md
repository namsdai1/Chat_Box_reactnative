
# rn-custom-chat

Easy custom messages with rn-custom-chat 

## Installation

Install rn-custom-chat with npm

```bash
  npm install rn-custom-chat

```

Install rn-custom-chat with yarn

```bash
  yarn add rn-custom-chat

```
## Screenshots

https://postimg.cc/0bZq3zx7


## Usage/Examples

```javascript
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

```


## Properties

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `messages` @required | `Array` | Messages to display |
| `user` @required| `Object` | Infomation user { id: Any, name: string,imageUri: string  }|
| `customer` @required| `Object` | customer user { id: Any, name: string,imageUri: string  }|
| `styleUser` | `Object` | User display messages  {color:`text color`,backgroundColor:`text crossword color`}|
| `styleTextDate` | `Object` | Custom style for textDate `<Text>`|
| `backgroundContainer` | `Function` | Picture for the message |
| `onPressSend` @required| `Function` | Callback when the Action button is pressed (The function to return the content of the text message)|
| `onPressCamera` | `Function` | Callback when the Action button is pressed (Note:no camera just empty function) if onPressCamera not available |
| `onPressLibrary` | `Function` | Callback when the Action button is pressed (Note:no library just empty function) if onPressLibrary not available |
| `onLongPressItem` @required| `Function` | Call on Hold and return message information|
| `txtSendEmoji`  @required | `string` | Send text Emoji { avoid text } 👍 |
| `colorBottomInput` | `string` | Color for bottom chat |
| `colorInput` | `string` | Color for input chat |
| `iconColor` @required | `string` | Color icon camera and library|




## 🔗 Links
[![github](https://img.shields.io/badge/my_github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/namsdai1)

## 🚀 About Me
I'm a Mobile developer...






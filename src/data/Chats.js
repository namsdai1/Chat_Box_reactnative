export default {
  id: '1',
  users: [
    {
      id: 'u1',
      name: 'Vadim',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
    },
    {
      id: 'u2',
      name: 'Elon Musk',
      imageUri:
        'https://cdnimg.vietnamplus.vn/uploaded/xpcwvovt/2022_06_06/ttxvn_elon_musk.jpg',
    },
  ],
  messages: [
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
  ],
};

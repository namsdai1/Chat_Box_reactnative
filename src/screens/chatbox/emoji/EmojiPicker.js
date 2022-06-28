import React, {useState, memo} from 'react';
import {View, Text, useWindowDimensions, Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';

import categories from '../../../data/emoji/categories';

import EmojiCategory from './EmojiCategory';
import TabBar from './TabBar';
const {width, height} = Dimensions.get('window');
const EmojiPicker = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(
    categories.tabs.map(tab => ({key: tab.category, title: tab.tabLabel})),
  );

  const renderScene = ({route}) => <EmojiCategory category={route.key} />;

  return (
    <View style={{height: height / 2}}>
      <TabView
        renderTabBar={props => <TabBar setIndex={setIndex} {...props} />}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default memo(EmojiPicker);

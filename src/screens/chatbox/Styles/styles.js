import {StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  txtDate: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 14,
    color: '#1A1A1A',
  },
  paddingRight: {
    paddingRight: 5,
  },
  btnItemMessage: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  containerBottomChat: {
    paddingVertical: 10,
    borderWidth: 0.1,
    borderTopColor: 'back',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconBtnBottomChat: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    zIndex: 1,
    opacity: 1,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  imageUser: {
    width: 23,
    height: 23,
  },
  imageCustomer: {
    width: 30,
    height: 30,
  },
  boxCustomerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boxUserItem: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
export default styles;

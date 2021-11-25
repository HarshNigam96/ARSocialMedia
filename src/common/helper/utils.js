import {Dimensions, Linking} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const getResponsiveHeight = per => {
  return (HEIGHT * per) / 100;
};

export const getResponsiveWidth = per => {
  return (WIDTH * per) / 100;
};

export const statusBarHeight = getStatusBarHeight();

export const bottomSpaceHeight = getBottomSpace();

export const handleClickURL = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

import {StyleSheet} from 'react-native';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
export default StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  mainImage: {},
  componentContainer: {
    alignSelf: 'center',
    paddingHorizontal: getResponsiveWidth(10.7),
  },
  Logo: {
    alignSelf: 'center',
    marginTop: getResponsiveHeight(50),
    width: getResponsiveWidth(33.6),
    height:getResponsiveWidth(14)
  },
  Text: {
    textAlign: 'center',
    fontSize: Fonts.FONT_20,
    fontFamily: Fonts.INTER_MEDIUM,
    opacity:0.6,
    lineHeight:getResponsiveHeight(4),
    marginTop: getResponsiveHeight(4),
  },
});

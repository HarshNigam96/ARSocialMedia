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
  mainImage: {
    flex:1,
    justifyContent:"center"
  },
  componentContainer: {
    alignSelf: 'center',
    paddingHorizontal: getResponsiveWidth(10.7),
  },
  Logo: {
    alignSelf: 'center',
    marginTop: getResponsiveHeight(45),
    fontWeight: 'bold',
    fontSize: Fonts.FONT_35,
  },
  Text: {
    textAlign: 'center',
    fontSize: Fonts.FONT_20,
    fontFamily: Fonts.MULISH_LIGHT,
    marginTop: getResponsiveHeight(4),
  },
});

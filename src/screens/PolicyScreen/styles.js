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
    backgroundColor: Colors.WHITE,
  },
  listContainer: {
    paddingHorizontal: getResponsiveWidth(7.5),
  },
  Title: {
    fontSize: Fonts.FONT_26,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.BLUE,
  },
  Content: {
    textAlign: 'justify',
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.INTER_REGULAR,
    lineHeight: getResponsiveHeight(4),
  },
  Heading: {
    marginTop: getResponsiveHeight(3),
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: Fonts.FONT_16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

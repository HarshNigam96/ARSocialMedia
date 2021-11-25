import { StyleSheet } from 'react-native';
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
  contentContainerStyle: {
    flexGrow: 1,
  },
  mainImage: {},
  backButton: {
    margin: getResponsiveHeight(1),
    height: getResponsiveHeight(2.5),
    width: getResponsiveWidth(5),
  },
  componentContainer: {
    paddingHorizontal: getResponsiveWidth(9.5),
  },
  Logo: {
    alignSelf: 'center',
    marginTop: getResponsiveHeight(5),
    width: getResponsiveWidth(33.6),
    height: getResponsiveWidth(12.5),
  },
  WelcomeText: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: getResponsiveHeight(5),
    fontSize: Fonts.FONT_24,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  orTextContainer: {
    flexDirection: 'row',
    marginTop: getResponsiveHeight(5),
    alignSelf: 'center',
  },
  Separator: {
    borderBottomWidth: 0.5,
    width: getResponsiveWidth(32),
    opacity: 0.3,
  },
  orText: {
    alignSelf: 'center',
    opacity: 0.3,
    top: getResponsiveHeight(1),
    fontSize: Fonts.FONT_12,
    fontFamily: Fonts.MANROPE_MEDIUM,
    paddingHorizontal: getResponsiveWidth(4.5),
  },
  haveAccountContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: getResponsiveHeight(3.8),
  },
  policyOptionsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: getResponsiveHeight(4)
  },
  coloredTxt: {
    color: Colors.BLUE, fontSize: Fonts.FONT_14,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  policyText: {
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.MANROPE_MEDIUM,
    opacity: 0.6
  },
  textDecoration: {
    textDecorationLine: "underline",
    textDecorationColor: Colors.BLUE
  }
});

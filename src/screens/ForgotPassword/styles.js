import { StyleSheet, StatusBar, Platform } from 'react-native';
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
    paddingHorizontal: getResponsiveWidth(8),
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
  },
  btnAndLogoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  backButtonContainer: {
    position: "absolute",
    left: 0,
    bottom: getResponsiveHeight(1.5),
  },
  backArrow: {
    height: getResponsiveHeight(2),
    width: getResponsiveWidth(5),
  },
  Logo: {
    width: getResponsiveWidth(20),
    height: getResponsiveWidth(8)
  },
  ForgotPWText: {
    marginTop: getResponsiveHeight(6.5),
    fontSize: Fonts.FONT_20,
    fontFamily: Fonts.MULISH_BOLD,
  },
  RecoverdPW: {
    marginTop: getResponsiveHeight(1.2),
    opacity: 0.5,
    fontFamily: Fonts.MULISH_REGULAR,
    fontSize: Fonts.FONT_15,
  },
  codePicker: {
    marginTop: getResponsiveHeight(5.5),
    flexDirection: "row",
    alignItems: "center"
  },
  chevronIcon: {
    height: getResponsiveWidth(4),
    width: getResponsiveWidth(4),
    marginLeft: getResponsiveWidth(1)
  },
  OTPInputContainer: {
    marginTop: getResponsiveHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OTPInputField: {
    textAlign: 'center',
    borderWidth: 1,
    height: Platform.OS === 'android' ? getResponsiveWidth(12) : getResponsiveWidth(12),
    width: getResponsiveWidth(17.5),
    borderRadius: getResponsiveWidth(2),
    color: Colors.BLUE,
    fontSize: Fonts.FONT_20,
    fontWeight: 'bold',
  },
});

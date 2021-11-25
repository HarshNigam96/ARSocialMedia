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
    paddingHorizontal: getResponsiveWidth(9),
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between',
  },
  Logo: {
    height: getResponsiveWidth(35),
    width: getResponsiveWidth(50),
    alignSelf: 'center',
  },
  EnterNumber: {
    marginTop: getResponsiveHeight(2.5),
    fontSize: Fonts.FONT_20,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  sentCodeText: {
    textAlign: 'center',
    marginTop: getResponsiveHeight(2.8),
    fontSize: Fonts.FONT_15,
    color: Colors.DARK_GREY,
    lineHeight:25,
  },
  textDecoration: {
    textDecorationLine: 'underline',
    color: Colors.BLUE,
    opacity: 1
  },
  resendCodeContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: getResponsiveHeight(8),
  },
  resendCodeText: {
    textDecorationColor: Colors.BLUE,
    textDecorationLine: 'underline',
    color: Colors.BLUE,
    fontSize: Fonts.FONT_18,
  },
  resendCodeTouchable: { marginTop: getResponsiveHeight(2) },
  codePicker: {
    marginTop: getResponsiveHeight(3),
    marginBottom: getResponsiveHeight(2.4),
  },
  OTPInputContainer: {
    marginTop: getResponsiveHeight(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OTPInputField: {
    width: getResponsiveWidth(17.5),
    borderWidth: 0.5,
    textAlign: "center",
    padding: Platform.OS === "android" ? getResponsiveHeight(-1) : 0,
    height: Platform.OS === "android" ? getResponsiveHeight(8) : getResponsiveHeight(5.5),
    fontSize: Fonts.FONT_30,
    borderRadius: getResponsiveWidth(2),
    fontWeight: 'bold',
    color: Colors.BLUE,
  },
  receievedCodeTxt: {
    fontSize: Fonts.FONT_15,
    color: Colors.DARK_GREY
  }
});

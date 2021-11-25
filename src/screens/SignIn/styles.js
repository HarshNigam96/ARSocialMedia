import { StyleSheet, StatusBar } from 'react-native';
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
    marginTop: StatusBar.currentHeight,
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
  LoginText: {
    marginTop: getResponsiveHeight(3.6),
    fontSize: Fonts.FONT_30,
    fontFamily: Fonts.MANROPE_BOLD,
  },
  ProvideDetails: {
    marginTop: getResponsiveHeight(2),
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.POPPINS_REGULAR,
    opacity: 0.5,
  },
  labels: {
    fontSize: Fonts.FONT_12,
    fontFamily: Fonts.MANROPE_MEDIUM,
    opacity: 0.5,
    marginTop: getResponsiveHeight(1.6),
  },
  TickIcon: {
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(5),
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getResponsiveHeight(3.4),
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeButton: {
    height: getResponsiveWidth(4),
    width: getResponsiveWidth(4),
  },
  rememberMeText: {
    marginLeft: getResponsiveWidth(2),
    opacity: 0.5,
    fontFamily: Fonts.MANROPE_MEDIUM,
    fontSize: Fonts.FONT_12,
  },
  ForgotPasswordButton: {
    color: Colors.BLUE,
    fontFamily: Fonts.MANROPE_MEDIUM,
    fontSize: Fonts.FONT_12,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: getResponsiveHeight(4.5),
  },
  Separator: {
    borderBottomWidth: 0.5,
    opacity: 0.3,
    width: getResponsiveWidth(40),
  },
  orText: {
    alignSelf: 'center',
    opacity: 0.3,
    top: getResponsiveHeight(0.8),
    paddingHorizontal: getResponsiveWidth(2),
    fontSize: Fonts.FONT_12,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },
  socialLoginButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getResponsiveHeight(4),
  },
  socialButtonLogoContainer: {
    borderRadius: getResponsiveWidth(100),
    height: getResponsiveWidth(14),
    width: getResponsiveWidth(14),
    justifyContent: "center",
    alignItems: "center"
  },
  socialButtonLogo: {
    height: getResponsiveWidth(6.5),
    width: getResponsiveWidth(6),
    marginVertical: getResponsiveHeight(2.5),
    marginHorizontal: getResponsiveWidth(5.3),
  },
  createAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: getResponsiveHeight(5),
    marginBottom: getResponsiveHeight(10),
  },
  text: {
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.MANROPE_MEDIUM,
  },

});

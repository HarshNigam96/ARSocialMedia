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
  ResetPWHeading: {
    marginTop: getResponsiveHeight(7.2),
    fontSize: Fonts.FONT_22,
    fontFamily: Fonts.MULISH_BOLD,
  },
  ResetPWString: {
    marginTop: getResponsiveHeight(1.2),
    opacity: 0.5,
    fontFamily: Fonts.MULISH_REGULAR,
    fontSize: Fonts.FONT_15,
  },
  visibleIcon: {
    marginRight: getResponsiveWidth(2),
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(6),
  },
  transparentBg: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  modal: {
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: getResponsiveWidth(8),
    borderTopLeftRadius: getResponsiveWidth(8),
    paddingHorizontal: getResponsiveWidth(10),
  },
  modalImage: {
    alignSelf: 'center',
    height: getResponsiveHeight(15),
    width: getResponsiveWidth(50),
    marginTop: getResponsiveHeight(5),
  },
  resetPasswordSuccess: {
    textAlign: 'center',
    marginTop: getResponsiveHeight(4),
    fontSize: Fonts.FONT_17,
    fontFamily: Fonts.MULISH_REGULAR,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.1)'
  },
});

import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Fonts from '../../common/constants/fonts';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.OFF_WHITE,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.OFF_WHITE
  },
  ComponentContainer: {
    marginTop: getResponsiveHeight(3.5),
    paddingLeft: getResponsiveWidth(8),
    paddingRight: getResponsiveWidth(5)
  },
  HeadLineText: {
    marginTop: getResponsiveHeight(3.5),
    fontSize: Fonts.FONT_22,
    fontFamily: Fonts.MULISH_BOLD,
  },
  info: {
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.MULISH_SEMIBOLD,
  },
  toggleContainer: {
    paddingRight: getResponsiveWidth(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: getResponsiveHeight(2)
  },
  hideLocationTxt: {
    fontFamily: Fonts.MULISH_SEMIBOLD,
    fontSize: Fonts.FONT_18,
  },
  selected: {
    marginTop: getResponsiveHeight(3),
    padding: getResponsiveHeight(1.4),
    borderRadius: getResponsiveHeight(1),
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    paddingRight: getResponsiveWidth(5),
  },
  closeButtonImg: {
    height: getResponsiveHeight(3),
    width: getResponsiveWidth(6),
  },
  modalOptions: {
    paddingLeft: getResponsiveWidth(5),
    padding: getResponsiveHeight(2),
  },
  dropDown: {
    position: "absolute",
    height: getResponsiveWidth(6),
    width:  getResponsiveWidth(6),
    right: getResponsiveWidth(10),
    bottom: 10,
  },
});

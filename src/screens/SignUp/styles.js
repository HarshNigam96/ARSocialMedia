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
    backgroundColor: Colors.WHITE,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progressBarContainer: {
    paddingHorizontal:getResponsiveWidth(8)
  },
  progressBar: {
    height: getResponsiveHeight(0.6),
    borderRadius: 30
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  ComponentContainer: {
    marginTop: getResponsiveHeight(3.5),
    paddingHorizontal: getResponsiveWidth(8),
  },
  HeadLineText: {
    fontSize: Fonts.FONT_21,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  ProvideDetails: {
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  codePicker: {
    marginTop: getResponsiveHeight(5.5),
    flexDirection: "row",
    alignItems: "center"
  },
  InputContainer: {
    marginTop: getResponsiveHeight(3.5),
  },
  ButtonContainer: {
    paddingHorizontal: getResponsiveWidth(8),
  },
  visibleIcon: {
    marginRight: getResponsiveWidth(2),
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(6),
  },
  label: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.FONT_14,
    opacity: 0.5,
  },
  chevronIcon: {
    height: getResponsiveWidth(4),
    width: getResponsiveWidth(4),
    marginLeft: getResponsiveWidth(1)
  },
  dropDown: {
    position: "absolute",
    height: getResponsiveHeight(2),
    width: getResponsiveWidth(4),
    right: getResponsiveWidth(4),
    bottom: 15,
  },
  optionalTextStyle: {
    color: Colors.BLUE,
    alignSelf: 'flex-end',
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.FONT_12,
    marginTop: getResponsiveHeight(1.5)
  },
  modalOptions: {
    paddingLeft: getResponsiveWidth(5),
    padding: getResponsiveHeight(2),
  },
  selected: {
    marginTop: getResponsiveHeight(0.5),
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
});

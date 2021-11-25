import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.OFF_WHITE
  },
  SecondContainer: {
    flex: 1,
    paddingLeft: getResponsiveWidth(10),
    paddingRight: getResponsiveWidth(8),
  },
  normalText: {
    marginTop: getResponsiveHeight(2.8),
    textAlign: "justify",
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.MULISH_REGULAR,
    lineHeight: getResponsiveHeight(5.5)
  },
  boldText: {
    marginTop: getResponsiveHeight(5),
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.MULISH_BOLD
  },
  buttonContainer: {
    paddingHorizontal: getResponsiveWidth(18),
    marginBottom: getResponsiveHeight(1)
  },
  label: {
    marginTop: getResponsiveHeight(3),
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.FONT_13,
    opacity: 0.5,
  },
  selected: {
    marginTop: getResponsiveHeight(0.5),
    paddingLeft: getResponsiveWidth(4),
    paddingRight: getResponsiveWidth(3),
    height: getResponsiveWidth(12),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: getResponsiveHeight(1),
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    paddingRight: getResponsiveWidth(5),
  },
  modalOptions: {
    padding: getResponsiveHeight(2),
  },
  closeButtonImg: {
    height: getResponsiveHeight(3),
    width: getResponsiveWidth(6),
  },
  chooseCategoryTxt: {
    marginTop: getResponsiveHeight(3),
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.MULISH_REGULAR
  },
  dropDown: {
    height: getResponsiveWidth(5),
    width: getResponsiveWidth(5)
  },
  selectContainer: {
    paddingRight: getResponsiveWidth(5),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  selectButton: {
    backgroundColor: Colors.PURPLE,
    paddingHorizontal: getResponsiveWidth(2.5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height:getResponsiveWidth(6),
    width: getResponsiveWidth(8),
},
disabled: {
    backgroundColor: Colors.GREY,
    opacity: 0.3,
    paddingHorizontal: getResponsiveWidth(2.5),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: getResponsiveWidth(8),
    height:getResponsiveWidth(6)
},
TickIcon: {
    height: getResponsiveWidth(3),
    width: getResponsiveWidth(3),
    tintColor: Colors.BLUE
}
})
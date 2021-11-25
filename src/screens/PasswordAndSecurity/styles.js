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
    backgroundColor: Colors.OFF_WHITE,
    paddingLeft: getResponsiveWidth(9),
    paddingRight: getResponsiveWidth(8)
  },
  buttonContainer: {
    alignSelf: "center"
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.1)'
  },
  headTitle: {
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: getResponsiveHeight(1.5)
  },
  instruction: {
    marginTop: getResponsiveHeight(1),
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  inputContainer: {
    marginTop: getResponsiveHeight(3.5)
  },
  toggleContainer: {
    marginTop: getResponsiveHeight(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toggleText: {
    width: 210,
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.POPPINS_REGULAR
  },
  modal: {
    backgroundColor: Colors.WHITE,
    marginHorizontal:getResponsiveWidth(8),
    borderRadius:20
  },
  modalImage: {
    alignSelf: 'center',
    height: getResponsiveWidth(25),
    width: getResponsiveWidth(25),
    marginTop: getResponsiveHeight(4),
  },
  successText: {
    textAlign: 'center',
    marginTop:getResponsiveHeight(1.5),
    fontSize: Fonts.FONT_20,
    fontFamily: Fonts.MULISH_REGULAR,
  },
  transparentBg: {
    flex: 1,
    justifyContent: 'center',
  },
  tochableTxtBtn:{
     alignSelf: "center", 
     marginTop: getResponsiveHeight(2), 
     marginBottom: getResponsiveHeight(3) 
    },
    btnTxt:{
      color: Colors.BLUE,
      fontFamily: Fonts.MULISH_REGULAR,
      fontSize: Fonts.FONT_18
  }
});

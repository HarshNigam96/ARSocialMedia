import { StyleSheet } from 'react-native';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.OFF_WHITE
  },
  Direction: {
    flexDirection: 'row',
  },
  profileImage: {
    width: getResponsiveWidth(9.5),
    height: getResponsiveHeight(5),
    borderRadius: getResponsiveHeight(5),
  },
  cardStyle: {
    backgroundColor: Colors.OFF_WHITE,
    marginHorizontal: getResponsiveWidth(3)
  },
  postDate: {
    fontSize: Fonts.FONT_11,
    fontFamily:Fonts.MULISH_REGULAR,
    opacity: 0.7,
  },
  totalComments: {
    marginTop: getResponsiveHeight(1.2),
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.MULISH_SEMIBOLD,
  },
  Separator: {
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    opacity: 0.2,
    width: getResponsiveWidth(100),
    marginLeft: getResponsiveHeight(2.5),
  },
  CommentsContainer: {
    paddingLeft: getResponsiveWidth(8),
  },
  commentSection: {
    marginTop: getResponsiveHeight(2.5),
  },
  nameAndCommentText: {
    flexDirection: 'row',
    maxWidth: getResponsiveWidth(77)
  },
  commenterName: {
    marginLeft: getResponsiveWidth(2.5),
    fontSize: Fonts.FONT_14,
  },
  inputContainer: {
    marginBottom: getResponsiveHeight(4),
    marginHorizontal: getResponsiveWidth(7.5),
    borderRadius: getResponsiveWidth(50),
    borderWidth: 0.3,
    borderColor: Colors.BLUE,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.WHITE,
    alignSelf: "center",
    height: getResponsiveWidth(13.6),
    width: getResponsiveWidth(85)
  },
  textInput: {
    paddingLeft:getResponsiveWidth(3),
    width: getResponsiveWidth(58),
    color:Colors.BLACK,
    fontFamily:Fonts.NUNITO_SANS_REGULAR
  },
  align: {
    alignSelf: 'center',
  },
  smileIcon: {
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(8),
  },
  sendIcon: {
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(8),
    marginRight: getResponsiveWidth(5),
  },
  emptyCommentImage: {
    height: getResponsiveHeight(12),
    alignSelf: 'center',
    width: getResponsiveWidth(40),
  },
  addNewCommentText: {
    textAlign: 'center',
    marginTop: getResponsiveHeight(2.5),
    fontSize: Fonts.FONT_14,
    fontFamily: Fonts.MULISH_REGULAR,
    opacity: 0.5,
  },
  emptyImageContainer: {
    marginVertical: getResponsiveHeight(8),
    alignSelf: 'center',
  },
  transparentBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  ModalContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: getResponsiveHeight(4),
    borderTopRightRadius: getResponsiveWidth(8),
    borderTopLeftRadius: getResponsiveWidth(8),
  },
  verticalPadding: {
    paddingHorizontal: getResponsiveWidth(8),
  },
  MediumFonts: {
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.MULISH_SEMIBOLD,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getResponsiveHeight(5),
  },
  doneButton: {
    alignSelf: 'flex-end',
    marginTop: getResponsiveHeight(4),
  },
  reportUserOptionText: {
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.MULISH_SEMIBOLD,
    marginVertical: getResponsiveHeight(1),
  },
});

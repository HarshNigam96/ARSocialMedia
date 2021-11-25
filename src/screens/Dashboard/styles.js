import {StyleSheet} from 'react-native';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:Colors.OFF_WHITE
  },
  emptyListContainer: {
    flex: 1,
    backgroundColor: Colors.OFF_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: getResponsiveWidth(10),
  },
  noFeedText: {
    fontSize: Fonts.FONT_35,
    fontFamily: Fonts.DM_SANS_BOLD,
  },
  startPostingText: {
    textAlign: 'center',
    marginTop: getResponsiveHeight(2.5),
    fontSize: Fonts.FONT_17,
    fontFamily: Fonts.MULISH_LIGHT,
  },
});

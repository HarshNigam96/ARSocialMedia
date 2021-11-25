import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    sectionTitleContainer: {
        paddingHorizontal: getResponsiveWidth(9.2),
    },
    title: {
        fontSize: Fonts.FONT_22,
        fontFamily: Fonts.MULISH_BOLD
    },
    titleMargin: {
        marginTop: getResponsiveHeight(4)
    },
    settingOptionContainer: {
        paddingHorizontal: getResponsiveWidth(7.5),
        marginBottom:getResponsiveHeight(4)
    },
    TouchableContainer: {
        backgroundColor: Colors.WHITE,
        marginTop: getResponsiveHeight(3),
        paddingLeft: getResponsiveWidth(5),
        borderRadius: 10,
        flexDirection: "row",
        height: getResponsiveWidth(12),
        alignItems:"center",
        justifyContent: "space-between",
        paddingRight: getResponsiveWidth(5.5)
    },
    settingOptionTxt: {
        fontFamily: Fonts.MULISH_SEMIBOLD,
        fontSize: Fonts.FONT_16
    },
    icon: {
        width: getResponsiveWidth(7.5),
        height: getResponsiveWidth(7)
    }
})
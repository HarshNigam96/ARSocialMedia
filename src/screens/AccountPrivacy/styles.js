import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    optionsContainer: {
        paddingHorizontal: getResponsiveWidth(10),
        marginTop: getResponsiveHeight(5),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    optionTxtStyle: {
        fontSize: Fonts.FONT_22,
        fontFamily: Fonts.MULISH_REGULAR
    },
    transparentBg: {
        flex: 1,
        justifyContent: "flex-end"
    },
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.1)'
    },
    modalContainer: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: getResponsiveWidth(4)
    },
    info: {
        lineHeight: getResponsiveHeight(5.5),
        marginTop: getResponsiveWidth(10),
        textAlign: "center",
        fontFamily: Fonts.MULISH_MEDIUM,
        fontSize: Fonts.FONT_18
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(8)
    }
})

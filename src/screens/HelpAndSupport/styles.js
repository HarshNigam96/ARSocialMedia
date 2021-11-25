import { StyleSheet,Platform } from 'react-native'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    contentContainer: {
        flexGrow: 1
    },
    messageText: {
        opacity: 0.5,
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: Fonts.FONT_13
    },
    messageTextInputField: {
        fontSize: Fonts.FONT_14,
        fontFamily: Fonts.INTER_REGULAR,
        paddingLeft: getResponsiveWidth(5),
        borderRadius: 10,
        marginTop: getResponsiveHeight(0.5),
        height:Platform.OS==="android"?getResponsiveHeight(18):getResponsiveHeight(12),
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(10)
    },
    greet: {
        marginTop: getResponsiveHeight(6),
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: Fonts.FONT_18
    },
    dropMessageText: {
        fontSize: Fonts.FONT_14
    },
    hoursText: {
        fontFamily: Fonts.POPPINS_SEMIBOLD
    },
    inputContainer: {
        marginTop: getResponsiveHeight(3.5),
    },
    transparentBg: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContainer: {
        backgroundColor: Colors.WHITE
    },
    image: {
        alignSelf: "center",
        height: getResponsiveWidth(30),
        width: getResponsiveWidth(30),
        marginTop: getResponsiveHeight(2.5)
    },
    textContainer: {
        marginTop: getResponsiveHeight(2.4),
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: getResponsiveWidth(15)
    },
    ticketSentTxt: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: Fonts.FONT_24,
        color: Colors.BLUE
    },
    thanksText: {
        textAlign: "center",
        marginTop: getResponsiveHeight(2.5),
        fontSize: Fonts.FONT_14,
        fontFamily: Fonts.MULISH_REGULAR
    },
    separator: {
        borderBottomWidth: 1,
        marginVertical: getResponsiveHeight(2.5),
        opacity: 0.1
    },
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor:'rgba(52, 52, 52, 0.1)'
    },

})
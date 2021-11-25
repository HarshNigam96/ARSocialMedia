import { StyleSheet, Platform } from 'react-native'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'

export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "space-between"
    },
    SafeArea: {
        marginTop: Platform.OS === "android" ? getResponsiveHeight(6) : 0
    },
    Direction: {
        flexDirection: "row",
        alignItems: "center"
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: getResponsiveWidth(5),
        alignItems: "center"
    },
    menuIcon: {
        height: getResponsiveWidth(6.5),
        width: getResponsiveWidth(6.5)
    },
    menuContainer: {
        paddingVertical: getResponsiveHeight(2.2),
        paddingHorizontal: getResponsiveWidth(4),
        borderRadius: 8,
        backgroundColor: Colors.WHITE,
        top: 50,
        right: getResponsiveWidth(0.9),
        position: "absolute"
    },
    menuOptions: {
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.MULISH_SEMIBOLD
    },
    backArrow: {
        tintColor: Colors.WHITE,
        height: getResponsiveWidth(4),
        width: getResponsiveWidth(2)
    },
    profilePic: {
        marginLeft: getResponsiveWidth(3),
        height: getResponsiveWidth(12),
        width: getResponsiveWidth(12),
        borderRadius: 100
    },
    userNameContainer: {
        marginLeft: getResponsiveWidth(4)
    },
    userNameTxt: {
        color: Colors.WHITE,
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    captionContentContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: getResponsiveWidth(12),
        justifyContent: "center",
        alignItems: "center",
    },
    captionText: {
        color: Colors.WHITE,
        fontFamily: Fonts.NUNITO_SANS_SEMIBOLD
    },
    transparentBGContainer: {
        paddingHorizontal: getResponsiveWidth(10),
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        justifyContent: "center",
        height: getResponsiveHeight(12.5),
    },
    inputContainer: {
        flexDirection: "row",
        paddingHorizontal: getResponsiveWidth(5),
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textInput: {
        color: Colors.WHITE,
        maxWidth: getResponsiveWidth(60),
        height: getResponsiveHeight(5.8),
        fontFamily: Fonts.NUNITO_SANS_REGULAR
    },
    sendIcon: {
        tintColor: Colors.WHITE,
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    },
    options: {
        position: "absolute",
        right: getResponsiveWidth(5.5),
        bottom: getResponsiveHeight(13),
        alignItems: "center"
    },
    Icon: {
        width: getResponsiveWidth(7),
        height: getResponsiveWidth(7)
    },
    postDetails: {
        color: Colors.WHITE,
        fontSize: Fonts.FONT_13,
        fontFamily: Fonts.NUNITO_SANS_SEMIBOLD,
        marginBottom: getResponsiveHeight(2)
    },
    modalTransparentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: Colors.WHITE,
        maxHeight: getResponsiveHeight(70)
    },
    commentsHeader: {
        alignSelf: "center",
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.MULISH_SEMIBOLD
    },
    closeButtonContainer: {
        position: "absolute",
        right: getResponsiveWidth(5),
    },
    closeIcon: {
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(5)
    },
    commentsContainer: {
        marginTop: getResponsiveHeight(2),
        paddingLeft: getResponsiveWidth(2.5),
    },
    commenterName: {
        color: Colors.GREY,
        fontSize: Fonts.FONT_13,
        fontWeight: "600"
    },
    userComment: {
        fontSize: Fonts.FONT_13,
        fontWeight: "400",
        marginTop: getResponsiveHeight(0.5),
        maxWidth: getResponsiveWidth(60),
        lineHeight: getResponsiveHeight(3)
    },
    viewReplyTxt: {
        color: Colors.GREY,
        fontSize: Fonts.FONT_13,
        fontWeight: "600",
        marginTop: getResponsiveHeight(1.5)
    }
})
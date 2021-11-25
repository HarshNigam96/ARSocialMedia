import { Platform, StyleSheet } from 'react-native'
import Colors from '../../common/constants/colors'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Fonts from '../../common/constants/fonts'
export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    coverImage: {
        height: getResponsiveHeight(27)
    },
    backBtnContainer: {

        marginLeft: getResponsiveWidth(5)
    },
    backButton: {
        marginTop: Platform.OS === 'android' ? getResponsiveHeight(5) : 0,
        paddingLeft: getResponsiveWidth(8),
        height: getResponsiveHeight(3),
    },
    profilePicContainer: {
        height: getResponsiveWidth(32),
        width: getResponsiveWidth(32),
        borderRadius: 100,
        borderWidth: 2.5,
        bottom: -60,
        position: "absolute",
        alignItems: "center",
        alignSelf: "center",
        borderColor: Colors.WHITE,
    },
    profilePic: {
        height: getResponsiveWidth(31),
        width: getResponsiveWidth(31),
        borderRadius: 100,
    },
    details: {
        alignSelf: "center",
    },
    userNameText: {
        fontSize: Fonts.FONT_20,
        textAlign: "center",
        fontFamily: Fonts.MULISH_BOLD,
    },
    userProfessionText: {
        fontSize: Fonts.FONT_12,
        textAlign: "center",
        fontFamily: Fonts.MULISH_REGULAR
    },
    contactInfoTxt: {
        marginTop: getResponsiveHeight(0.8), fontFamily: Fonts.MULISH_REGULAR,
        fontSize: Fonts.FONT_12,
        alignSelf: "center",
        color: Colors.BLUE
    },
    userIdText: {
        fontSize: Fonts.FONT_12,
        textAlign: "center",
        fontFamily: Fonts.POPPINS_REGULAR,
        opacity: 0.7
    },
    Direction: {
        flexDirection: "row",
    },
    followingDetailContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: getResponsiveHeight(1.8)
    },
    labels: {
        fontSize: Fonts.FONT_12,
        fontFamily: Fonts.NUNITO_SANS_REGULAR,
        marginLeft: getResponsiveWidth(2),
        opacity: 0.5,
        top: getResponsiveHeight(0.2)
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(32)
    },
    LockIcon: {
        alignSelf: "center",
        marginTop: getResponsiveHeight(6),
        height: getResponsiveWidth(30),
        width: getResponsiveWidth(30),
    },
    PrivateAccountText: {
        textAlign: "center",
        fontFamily: Fonts.MULISH_BOLD,
        fontSize: Fonts.FONT_20
    },
    followAccountText: {
        textAlign: "center",
        fontFamily: Fonts.MULISH_REGULAR,
        fontSize: Fonts.FONT_14
    },
    transparentBg: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        alignItems: "center"
    },
    modalContainer: {
        borderRadius: 10,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: getResponsiveWidth(10),
        width: getResponsiveWidth(90),
    },
    reqSendTxt: {
        marginTop: getResponsiveHeight(6),
        alignSelf: "center",
        fontSize: Fonts.FONT_24,
        fontFamily: Fonts.MULISH_BOLD
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: getResponsiveHeight(4.5),
        marginBottom: getResponsiveHeight(6)
    },
    modalButtonText: {
        color: Colors.BLUE,
        fontSize: Fonts.FONT_22,
        fontFamily: Fonts.MULISH_SEMIBOLD
    },
    cameraLogo: {
        height: getResponsiveWidth(9),
        width: getResponsiveWidth(9),
        alignSelf: "center",
        marginLeft: getResponsiveWidth(20),
        bottom: getResponsiveHeight(2)
    },
    editBtn: {
        backgroundColor: Colors.BLUE,
        alignSelf: "flex-end",
        marginTop: getResponsiveHeight(1.5),
        marginRight: getResponsiveWidth(12),
        borderRadius: 8
    }
})
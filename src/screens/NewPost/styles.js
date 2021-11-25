import { StyleSheet, Platform } from 'react-native';
import Colors from '../../common/constants/colors'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Fonts from '../../common/constants/fonts'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    safeAreaContainer: {
        flexGrow: 1
    },
    uploadedImg: {
        height: getResponsiveWidth(80),
        marginHorizontal: getResponsiveWidth(5),
        borderRadius: 20,
        marginTop: getResponsiveHeight(1.2)
    },
    componentContainer: {
        marginTop: getResponsiveHeight(3.8),
        paddingHorizontal: getResponsiveWidth(5),
        marginBottom:getResponsiveHeight(5)
    },
    label: {
        opacity: 0.5,
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: Fonts.FONT_13
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: getResponsiveHeight(2.5)
    },
    toggleText: {
        fontFamily: Fonts.POPPINS_REGULAR,
        fontSize: Fonts.FONT_18
    },
    inputContainer: {
        marginTop: getResponsiveHeight(2.3)
    },
    touchable: {
        borderRadius: 5,
        padding: getResponsiveHeight(1.8),
        backgroundColor: Colors.ALICE_BLUE,
        borderWidth: 0.5,
        borderColor: Colors.CYAN_BLUE,
        marginTop: getResponsiveHeight(0.8)
    },
    dropDown: {
        position: "absolute",
        right: getResponsiveWidth(5),
        marginTop: 15,
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(5)
    },
    captionTextInput: {
        backgroundColor: Colors.ALICE_BLUE,
        borderWidth: 1,
        borderColor: Colors.CYAN_BLUE,
        color:Colors.BLACK,
        fontSize: Fonts.FONT_14,
        fontFamily: Fonts.INTER_REGULAR,
        paddingLeft: getResponsiveWidth(5),
        borderRadius: 10,
        marginTop: getResponsiveHeight(0.5),
        height: Platform.OS === "android" ? getResponsiveHeight(14) : getResponsiveHeight(10),
    }
})
import { StyleSheet } from 'react-native'
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
    secondContainer: {
        paddingHorizontal: getResponsiveWidth(10),
    },
    profilePicContainer: {
        marginTop: getResponsiveHeight(2.8),
        alignSelf: "center",
    },
    CameraIcon: {
        height: getResponsiveWidth(12),
        width: getResponsiveWidth(12),
        alignSelf:"flex-end",
        bottom:45
    },
    profilePic: {
        marginTop: getResponsiveHeight(2.8),
        height: getResponsiveWidth(42),
        width: getResponsiveWidth(42),
        borderRadius: 100
    },
    personalDetailText: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: Fonts.FONT_16
    },
    inputContainer: {
        marginTop: getResponsiveHeight(2.6)
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(16)
    }
})
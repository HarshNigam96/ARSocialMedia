import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Fonts from '../../common/constants/fonts'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE,
    },
    boldTxt: {
        marginTop: getResponsiveHeight(1),
        paddingLeft: getResponsiveWidth(8.5),
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    emptyListContainer: {
        paddingHorizontal: getResponsiveWidth(10),
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bellImage: {
        height: getResponsiveWidth(25),
        width: getResponsiveWidth(25)
    },
    emptyNotificationTxt: {
        fontSize: Fonts.FONT_24,
        fontFamily: Fonts.NUNITO_SANS_BOLD,
        textAlign: "center",
        marginTop: getResponsiveHeight(2.5)
    },
    info: {
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.NUNITO_SANS_REGULAR,
        textAlign: "center",
        marginTop: getResponsiveHeight(2.5),
        opacity: 0.6
    }
})
import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    listItemContainer: {
        paddingHorizontal: getResponsiveWidth(10),
        marginTop: getResponsiveHeight(5),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    languageTxtStyle: {
        fontSize: Fonts.FONT_22,
        fontFamily: Fonts.MULISH_REGULAR
    },
    selectButton: {
        backgroundColor: Colors.PURPLE,
        paddingHorizontal: getResponsiveWidth(2.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    disabled: {
        backgroundColor: Colors.GREY,
        opacity: 0.3,
        paddingHorizontal: getResponsiveWidth(2.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: getResponsiveWidth(9)
    },
    TickIcon: {
        height: getResponsiveWidth(4),
        width: getResponsiveWidth(4),
        tintColor: Colors.BLUE
    }
})

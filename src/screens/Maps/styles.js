import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../common/constants/colors'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE,
    },
    mapContainer: {
        flexGrow: 1
    },
    map: {
        flex: 1
    },
    marker: {
        alignItems: "center",
        height: getResponsiveWidth(18),
        width: getResponsiveWidth(14)
    },
    markerDynamicImage: {
        height: getResponsiveWidth(11),
        width: getResponsiveWidth(11),
        borderRadius: getResponsiveWidth(100),
        marginTop: getResponsiveHeight(.5)
    },
    Touchable: {
        width: getResponsiveWidth(13.5)
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        marginHorizontal: getResponsiveWidth(5),
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        top: getResponsiveHeight(1)
    },
    backArrow: {
        height: getResponsiveWidth(3),
        width: getResponsiveWidth(3)
    },
    inputContainer: {
        flex: 1,
        borderRadius: 100,
        marginLeft: getResponsiveWidth(4),
        backgroundColor: Colors.WHITE,
        height: getResponsiveWidth(11.5),
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon: {
        marginLeft: getResponsiveWidth(4),
        height: getResponsiveWidth(4),
        width: getResponsiveWidth(4)
    },
    textInput: {
        marginLeft: getResponsiveWidth(3),
        maxWidth: getResponsiveWidth(70)
    },
    optionContainer: {
        position: "absolute",
        bottom: getResponsiveWidth(3),
        right: getResponsiveWidth(3)
    },
    image: {
        height: getResponsiveWidth(12.5),
        width: getResponsiveWidth(12.5),
        borderRadius: 100,
    },
    touchable: {
        alignItems: "center",
        justifyContent: "center",
        height: getResponsiveWidth(11.5),
        width: getResponsiveWidth(11.5),
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 100,
        marginTop: getResponsiveHeight(2)
    },
    optionIcon: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    }
})
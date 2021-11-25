import { StyleSheet, Platform, StatusBar } from 'react-native'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE,
    },
    FollowingContainer: {
        flex: 1,
        paddingLeft: getResponsiveWidth(9),
        paddingRight: getResponsiveWidth(8)
    },
    searchContainer: {
        marginTop: StatusBar.currentHeight,
        flexDirection: "row",
        alignItems: "center"
    },
    backArrow: {
        marginLeft: getResponsiveWidth(6),
        marginTop: Platform.OS === "android" ? 0 : getResponsiveWidth(5),
        height: getResponsiveWidth(4),
        width: getResponsiveWidth(4)
    },
    inputContainer: {
        marginTop: Platform.OS === "android" ? 0 : getResponsiveHeight(2),
        borderWidth: 1,
        borderRadius: 30,
        borderColor: Colors.BLUE,
        flexDirection: "row",
        alignItems: "center",
        width: getResponsiveWidth(75),
        marginRight: getResponsiveWidth(8),
        marginLeft: getResponsiveWidth(5),
        backgroundColor: Colors.WHITE
    },
    searchIcon: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6),
        marginVertical: getResponsiveHeight(1),
        marginLeft: getResponsiveWidth(5)
    },
    listItemContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputField: {
        color: Colors.BLACK,
        paddingLeft: getResponsiveWidth(4),
        maxWidth:getResponsiveWidth(60)
    },
    userDetails: {
        flexDirection: "row",
        alignItems: "center"
    },
    profilePic: {
        height: getResponsiveWidth(12.5),
        width: getResponsiveWidth(12.5),
        borderRadius: 100
    },
    nameContainer: {
        marginLeft: getResponsiveWidth(4)
    },
    nameText: {
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    userIdText: {
        fontSize: Fonts.FONT_14,
        fontFamily: Fonts.NUNITO_SANS_REGULAR,
        opacity: 0.5
    },
    placeListContainer: {
        flexDirection: "row",
        paddingLeft: getResponsiveWidth(8),
        alignItems: "center",
        marginTop: getResponsiveHeight(2.5)
    },
    placeNameTxt: {
        marginLeft: getResponsiveWidth(3),
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    accountListContainer: {
        flexGrow: 1,
    },
    indicatorContainer: {
        backgroundColor: Colors.OFF_WHITE
    },
    indicatorStyle: {
        backgroundColor: Colors.BLUE
    },
    tabLabels: {
        fontFamily: Fonts.NUNITO_SANS_BOLD,
        fontSize: Fonts.FONT_16
    },
    emptyImage: {
        height: getResponsiveWidth(30),
        width: getResponsiveWidth(30),
        alignSelf: "center"
    },
    sorryTxt: {
        textAlign: "center",
        fontSize: Fonts.FONT_20,
        fontFamily: Fonts.MULISH_BOLD
    },
    resultTxt: {
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.MULISH_REGULAR,
        textAlign: "center",
        marginTop: getResponsiveHeight(1)
    },
    emptyListContainer: {
        flexGrow: 1,
        justifyContent: "center"
    }
})
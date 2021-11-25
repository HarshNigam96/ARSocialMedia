import { StyleSheet, Platform } from 'react-native'
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
    inputContainer: {
        marginTop: Platform.OS === "android" ? 0 : getResponsiveHeight(2),
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GREY,
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6),
        marginBottom: Platform.OS === 'android' ? 0 : getResponsiveHeight(1.2),
        tintColor: "grey"
    },
    listItemContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
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
    }
})
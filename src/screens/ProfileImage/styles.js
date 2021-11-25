import { StyleSheet } from 'react-native'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#232324"
    },
    backIconContainer: {
        marginLeft: getResponsiveWidth(5),
        marginTop: getResponsiveHeight(8),
        backgroundColor: "#686869",
        height: getResponsiveWidth(12),
        width: getResponsiveWidth(12),
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    backArrowImage: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    },
    coverPic: {
        height: getResponsiveWidth(100),
        marginTop: getResponsiveHeight(8)
    },
    profilePic:{
        borderRadius:getResponsiveWidth(100),
        height: getResponsiveWidth(90),
        marginTop: getResponsiveHeight(8)
    }
})
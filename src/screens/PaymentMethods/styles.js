import React, { Component } from 'react'
import {
    StyleSheet,
} from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    titleContainer: {

        paddingHorizontal: getResponsiveWidth(7),
        marginTop: getResponsiveHeight(2)
    },
    titleText: {
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: Fonts.FONT_18
    },
    carouselContainer: {
        marginTop: getResponsiveHeight(2.4),
    },
    carousel: {
        aspectRatio: Platform.OS === 'android' ? 2 : 1.8,
    },
    item: {
        flex: 1,
        elevation: 3,
    },
    imageBackground: {
        flex: 1,
        borderRadius: 10,
    },
    paymentMethodContainer: {
        marginTop: getResponsiveHeight(1)
    },
    methodsLogo: {
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(10)
    },
    touchableContainer: {
        paddingHorizontal: getResponsiveWidth(4),
        marginTop: getResponsiveHeight(1.8),
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.WHITE,
        padding: getResponsiveHeight(1),
        alignItems: "center",
        borderRadius: 5
    },
    arrowIcon: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    }
});
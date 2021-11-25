import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    imageBackground: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: "space-between"
    },
    backbtnContainer: {
        marginTop: StatusBar.currentHeight,
    },
    backButton: {
        height: getResponsiveWidth(8),
        width: getResponsiveWidth(8),
        marginLeft: getResponsiveWidth(5),
        marginTop: getResponsiveHeight(1)
    },
    userDetailContainer: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: getResponsiveWidth(7),
        borderTopRightRadius: getResponsiveWidth(7),
        borderTopLeftRadius: getResponsiveWidth(7),
    },
    userNameTxt: {
        fontSize: Fonts.FONT_24,
        marginTop: getResponsiveHeight(3)
    },
    detailContainer: {
        marginBottom: getResponsiveHeight(5)
    },
    detailAlignment: {
        flexDirection: "row",
        marginTop: getResponsiveHeight(2),
        alignItems: "center"
    },
    placeHoderTxt: {
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.MULISH_REGULAR
    },
    detail: {
        fontSize: Fonts.FONT_17,
        fontFamily: Fonts.MULISH_BOLD,
    }
})
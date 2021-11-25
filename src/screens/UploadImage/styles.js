import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    BigImage: {
        height: getResponsiveHeight(65),
        borderRadius: 10,
        marginTop: getResponsiveHeight(1.8),
        marginLeft: getResponsiveWidth(6),
        marginRight: getResponsiveWidth(5)
    },
    textComponentContainer: {
        marginTop: getResponsiveHeight(2.4),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: getResponsiveWidth(6),
        paddingRight: getResponsiveWidth(5)
    },
    galleryContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    galleryText: {
        fontFamily: Fonts.MULISH_REGULAR,
        fontSize: Fonts.FONT_14
    },
    dropDownIcon: {
        marginLeft: getResponsiveWidth(0.6),
        height: getResponsiveWidth(3.5),
        width: getResponsiveWidth(3.5),
    },
    longPressTxt: {
        fontFamily: Fonts.MULISH_REGULAR,
        fontSize: Fonts.FONT_12
    },
    imageList: {
        flexDirection: "row",
        marginLeft: getResponsiveWidth(6),
        marginBottom: getResponsiveHeight(5)
    },
    cameraIconContainer: {
        borderColor: Colors.BLUE,
        alignItems: "center",
        justifyContent: "center",
        height: getResponsiveWidth(23.5),
        width: getResponsiveWidth(23.5),
        borderRadius: 10,
        marginTop: getResponsiveHeight(1.8),
        marginRight: getResponsiveHeight(0.8),
        borderWidth: 2
    },
    cameraIcon: {
        tintColor: Colors.BLUE,
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    },
    imageBackground: {
        height: getResponsiveWidth(23.5),
        width: getResponsiveWidth(23.5),
        borderRadius: 10,
        marginTop: getResponsiveHeight(1.8),
        margin: getResponsiveHeight(0.8),
    },
    transparentBG: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 10,
        height: getResponsiveWidth(23.5),
        width: getResponsiveWidth(23.5),
        alignItems: "center",
        justifyContent: "center",
    },
    tickIcon: {
        tintColor: Colors.WHITE,
        height: getResponsiveWidth(4),
        width: getResponsiveWidth(5)
    },
    imageStyle: {
        borderRadius: 10
    }
})
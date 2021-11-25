import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveWidth, getResponsiveHeight } from '../../common/helper/utils'

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE
    },
    ComponentContainer: {
        flexGrow: 1,
        paddingHorizontal: getResponsiveWidth(8),
        marginTop: getResponsiveHeight(1)
    },
    userDetail: {
        flexDirection: "row",
        alignItems: "center",
    },
    profilePic: {
        height: getResponsiveWidth(12.5),
        width: getResponsiveWidth(12.5),
        borderRadius: 100
    },
    nameTxt: {
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    userIdTxt: {
        fontSize: Fonts.FONT_14,
        fontFamily: Fonts.NUNITO_SANS_REGULAR,
        opacity: 0.5
    }
})
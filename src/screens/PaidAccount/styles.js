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
    textContainer: {
        paddingLeft: getResponsiveWidth(10),
        marginTop: getResponsiveHeight(2.8),
        paddingRight: getResponsiveWidth(8),
    },
    fillInfoTxt: {
        marginTop: getResponsiveHeight(2.5),
        fontFamily: Fonts.MULISH_REGULAR,
        fontSize: Fonts.FONT_18
    },
    labels: {
        marginTop: getResponsiveHeight(2.5),
        marginBottom: getResponsiveHeight(1),
        opacity: 0.4
    },
    CurrencyPickerContainer: {
        justifyContent: "center"
    },
    currencyPickerTouchable: {
        backgroundColor: Colors.ALICE_BLUE,
        paddingVertical: getResponsiveHeight(1.8),
        borderWidth: 1,
        borderColor: Colors.CYAN_BLUE,
        borderRadius: 5
    },
    currencyCodeStyle: {
        color: Colors.BLACK,
        fontFamily: Fonts.INTER_REGULAR,
        fontSize: Fonts.FONT_14,
        fontWeight: "100"
    },
    dropDown: {
        position: "absolute",
        right: getResponsiveWidth(3),
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(5)
    },
    selected: {
        marginTop: getResponsiveHeight(0.5),
        padding: getResponsiveHeight(1.8),
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 5,
        alignItems: "center"
    },
    normalText: {
        marginTop: getResponsiveHeight(2.8),
        textAlign: "justify",
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.MULISH_REGULAR,
        lineHeight: getResponsiveHeight(5.5)
    },
    boldText: {
        marginTop: getResponsiveHeight(5),
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.MULISH_BOLD
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(18),
        marginBottom: getResponsiveHeight(1)
    },
    closeBtnContainer: {
        alignSelf: 'flex-end',
        paddingRight: getResponsiveWidth(5),
    },
    closeBtnImage: {
        height: getResponsiveHeight(3),
        width: getResponsiveWidth(6),
    },
    options: {
        paddingLeft: getResponsiveWidth(5),
        margin: getResponsiveHeight(1.5)
    }
})
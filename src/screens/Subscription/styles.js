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
    contentContainer: {
        flexGrow: 1,
        marginTop: getResponsiveHeight(2.5)
    },
    textContentContainer: {
        paddingLeft: getResponsiveWidth(8),
        paddingRight: getResponsiveWidth(5),
        marginBottom: getResponsiveHeight(5)
    },
    fillFormText: {
        fontSize: Fonts.FONT_16,
        fontFamily: Fonts.MULISH_REGULAR
    },
    textContent: {
        paddingLeft: getResponsiveWidth(8.5),
        paddingRight: getResponsiveWidth(3),
        fontSize: Fonts.FONT_18,
        fontFamily: Fonts.MULISH_REGULAR
    },
    buttonContainer: {
        alignSelf: "center"
    },
    componentContainer: {
        marginTop: getResponsiveHeight(4)
    },
    pickerContainer: {
        borderRadius: 5,
        padding: getResponsiveHeight(1.8),
        backgroundColor: Colors.ALICE_BLUE,
        borderWidth: 0.5,
        borderColor: Colors.CYAN_BLUE,
        marginTop: getResponsiveHeight(0.8)
    },
    dropDownIcon: {
        position: "absolute",
        right: getResponsiveWidth(5),
        marginTop: 22,
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(5)
    },
    countryPicker: {
        marginTop: getResponsiveHeight(2.5)
    },
    labels: {
        fontSize: Fonts.FONT_13,
        fontFamily: Fonts.POPPINS_REGULAR,
        opacity: 0.5
    },
    locationPickerContainer: {
        marginTop: getResponsiveHeight(2.5)
    },
    closeBtnContainer: {
        alignSelf: 'flex-end',
        paddingRight: getResponsiveWidth(5),
    },
    closeBtn: {
        height: getResponsiveHeight(3),
        width: getResponsiveWidth(6),
    },
    options: {
        paddingLeft: getResponsiveWidth(5),
        margin: getResponsiveHeight(1.5)
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pleaseWaitTxt: {
        fontSize: Fonts.FONT_24,
        fontFamily: Fonts.POPPINS_MEDIUMF
    }
})
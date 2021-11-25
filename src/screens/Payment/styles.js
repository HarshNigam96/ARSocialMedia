import React, { Component } from 'react'
import {
    StyleSheet,
    Platform
} from 'react-native';
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
        justifyContent: "space-between"
    },
    addCardImg: {
        width: getResponsiveWidth(30)
    },
    titleContainer: {
        alignSelf: "center",
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
    inputComponentsContainer: {
        paddingLeft: getResponsiveWidth(6),
        paddingRight: getResponsiveWidth(4.5),
    },
    textFieldContainer: {
        marginTop: getResponsiveHeight(2)
    },
    HorizontalFieldsContainer: {
        marginTop: getResponsiveHeight(2),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    labels: {
        opacity: 0.5,
        marginBottom: getResponsiveHeight(1)
    },
    width: {
        width: getResponsiveWidth(42)
    },
    HorizontalFields: {
        paddingLeft: getResponsiveWidth(5),
        borderWidth: 1,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.GREY,
        borderRadius: 5,
        height: Platform.OS === "android" ? getResponsiveWidth(14) : getResponsiveWidth(12)
    },
    buttonContainer: {
        paddingHorizontal: getResponsiveWidth(15)
    },
    mainModal: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: getResponsiveWidth(4)
    },
    spinnerContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    pleaseWaitTxt: {
        fontSize: Fonts.FONT_24,
        fontFamily: Fonts.POPPINS_MEDIUMF
    }
});
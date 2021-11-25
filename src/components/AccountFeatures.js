import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils'
import Fonts from '../common/constants/fonts'
export default class AccountFeatures extends Component {

    render() {
        const { information, headTitle, points } = this.props
        return (
            <View>
                <Text style={styles.normalText}>{information}</Text>
                <Text style={styles.boldText}>{headTitle}</Text>
                <Text style={[styles.normalText, { opacity: 0.5 }]}>{points}</Text>
                <Text style={[styles.normalText, { opacity: 0.5 }]}>{points}</Text>
                <Text style={[styles.normalText, { opacity: 0.5 }]}>{points}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    normalText: {
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
})

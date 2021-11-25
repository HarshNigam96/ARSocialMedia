import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import IMAGES from '../../common/constants/images'
import { WIDTH } from '../../common/helper/utils';
import styles from './styles';
import { CardView, } from "react-native-credit-card-input";
import stripe from 'tipsi-stripe'
import demoCardFormParameters from '../../../demodata/demodata'

stripe.setOptions({
    publishableKey: "pk_test_51JNXUESAOjOiZE3BKDSHPrDcttIAVTGfT7DfInK8WdutqJ8RoaoFBDpMVnfILiAxEqWfqhU831x0UKMTFGTHzDlp00ouWp7gRE"
})
export default class PaymentMethods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            loading: false,
            paymentMethod: null,
        }
    }
    handleCardPayPress = async () => {
        try {
            this.setState({ loading: true, paymentMethod: null })

            const paymentMethod = await stripe.paymentRequestWithCardForm({
                theme: {
                    primaryBackgroundColor: 'white',
                    secondaryBackgroundColor: 'white',
                    primaryForegroundColor: 'black',
                    secondaryForegroundColor: 'black',
                    accentColor: 'blue',
                    errorColor: 'red',
                },
                demoCardFormParameters
            })
            this.setState({ loading: false, paymentMethod })
        } catch (error) {
            this.setState({ loading: false })
        }
    }
    render() {
        const data = [
            {
                cardHolderName: "Sameul",
                brand: "diners-club",
                number: "4747 4747 4747 4747", expiry: "07/21", cvc: "123"
            },
            {
                cardHolderName: "Andy",
                brand: "visa",
                number: "1234 1234 1234 1234", expiry: "02/21", cvc: "567"
            },
            {
                cardHolderName: "Charls",
                brand: "jcb",
                number: "5678 5678 4567 4568",
                expiry: "12/21",
                cvc: "300"
            },
            {
                cardHolderName: "endy",
                brand: "master-card",
                number: "5678 5678 4567 4568",
                expiry: "12/21",
                cvc: "300"
            },
        ];
        const handleCarouselScrollEnd = (item, index) => {
            this.setState({
                currentIndex: index
            })
        }

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Payment")}>
                    <CardView
                        name={item.cardHolderName}
                        number={item.number}
                        expiry={item.expiry}
                        cvc={item.cvc}
                        focused={this.state.onFocus}
                        placeholder={
                            number = item.number,
                            name = item.cardHolderName,
                            expiry = item.expiry,
                            cvc = item.cvc
                        }
                        autoFocus
                        brand={item.brand}
                        display={true}
                        clickable
                        flipDirection="v"
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.Container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Master Card</Text>
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel
                        style={styles.carousel}
                        data={data}
                        renderItem={renderItem}
                        itemWidth={Platform.OS === "ios" ? 0.7 * WIDTH : 0.8 * WIDTH}
                        inActiveOpacity={0.8}
                        containerWidth={WIDTH}
                        onScrollEnd={handleCarouselScrollEnd}
                        ref={"carouselRef"}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Other payment methods</Text>
                    <View style={styles.paymentMethodContainer}>
                        <TouchableOpacity style={styles.touchableContainer}>
                            <Image resizeMode="contain" style={styles.methodsLogo} source={IMAGES.VISA_LOGO} />
                            <Image resizeMode="contain" style={styles.arrowIcon} source={IMAGES.FORWARD_ARROW} />
                        </TouchableOpacity>
                        <TouchableOpacity
                             onPress={this.handleCardPayPress}
                            style={styles.touchableContainer}>
                            <Image resizeMode="contain" style={styles.methodsLogo} source={IMAGES.STRIPE} />
                            <Image resizeMode="contain" style={styles.arrowIcon} source={IMAGES.FORWARD_ARROW} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableContainer}>
                            <Image resizeMode="contain" style={styles.methodsLogo} source={IMAGES.PAYPAL} />
                            <Image resizeMode="contain" style={styles.arrowIcon} source={IMAGES.FORWARD_ARROW} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
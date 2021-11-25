import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import Strings from '../../common/constants/Strings'
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import CurrencyPicker from "react-native-currency-picker"
import InputComponent from '../../components/InputComponent'
import IMAGES from '../../common/constants/images'
import AccountFeatures from '../../components/AccountFeatures';
export default class PaidAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currencyPicker: false,
      currency: "USD",
      subscriptionPattern: "Monthly",
      subscriptionModal: false,
      data: [{ type: "Monthly" }, { type: "Weekly" }],
    }
  }

  onSelect = (val, id) => {
    this.setState({
      subscriptionModal: false,
      subscriptionPattern: val.type,
    });
  };

  onPress = () => {
    this.setState({
      currencyPicker: true
    })
    this.state.currencyPicker ? this.props.navigation.navigate("PaymentMethods") : null
  }
  render() {
    const { currencyPicker, currency, subscriptionPattern, subscriptionModal, data } = this.state
    return (
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            {currencyPicker
              ? <View style={{ paddingHorizontal: getResponsiveWidth(8) }}>
                <Text style={styles.fillInfoTxt}>Please fill in the information below to proceed</Text>
                <Text style={styles.labels}>Currency</Text>
                <View style={styles.CurrencyPickerContainer}>
                  <CurrencyPicker
                    enable={true}
                    currencyCode={currency}
                    showFlag={false}
                    showCurrencyName={false}
                    showCurrencyCode={true}
                    onSelectCurrency={(data) => this.setState({
                      currency: data.code
                    })}
                    onOpen={() => { console.log("Open") }}
                    onClose={() => { console.log("Close") }}
                    showNativeSymbol={false}
                    showSymbol={false}
                    containerStyle={{
                      container: styles.currencyPickerTouchable,
                      currencyCodeStyle: styles.currencyCodeStyle,
                    }}
                    modalStyle={{
                      container: {
                        backgroundColor: Colors.WHITE
                      },
                      searchStyle: {
                        backgroundColor: Colors.WHITE
                      },
                      tileStyle: {
                        backgroundColor: Colors.WHITE
                      },
                      itemStyle: {
                        itemContainer: {
                          backgroundColor: Colors.WHITE,
                        },
                        currencyCodeStyle: {
                          color: Colors.BLACK
                        },
                        currencyNameStyle: {
                          color: Colors.BLACK
                        },
                        symbolStyle: {
                          color: Colors.BLACK
                        },
                        symbolNativeStyle: {
                          color: Colors.BLACK
                        }
                      }
                    }}
                    title={"Currency"}
                    searchPlaceholder={"Search"}
                    showCloseButton={true}
                    showModalTitle={true}
                  />
                  <Image resizeMode="contain"
                    style={styles.dropDown} source={IMAGES.DROPDOWN} />
                </View>
                <Text style={styles.labels}>Subscription Pattern</Text>
                <TouchableOpacity
                  style={[
                    {
                      borderColor:
                        subscriptionPattern != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                      backgroundColor:
                        subscriptionPattern != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                      borderWidth: subscriptionPattern != '' ? 1 : 2,
                    },
                    styles.selected,
                  ]}
                  onPress={() => this.setState({ subscriptionModal: !subscriptionModal })}>
                  <Text>{subscriptionPattern}</Text>
                  <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
                </TouchableOpacity>
                <InputComponent
                  labelFontSize={Fonts.FONT_14}
                  labelColor={Colors.BLACK}
                  bordered
                  opacity={0.5}
                  disabled={false}
                  borderWidth={this.state.currency != '' ? 1 : 2}
                  borderColor={this.state.currency != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                  labelFontFamily={Fonts.POPPINS_REGULAR}
                  bgColor={this.state.currency != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                  mtop={getResponsiveHeight(2)}
                  paddingLeft={getResponsiveWidth(5)}
                  InputTextFontFamily={Fonts.INTER_REGULAR}
                  InputTextSize={Fonts.FONT_14}
                  value={currency}
                  onChange={val => this.setState({
                    currency: val
                  })}
                />
              </View>
              :
              <View style={styles.textContainer}>
                <AccountFeatures
                  information={Strings.LOREM_IPSUM}
                  headTitle="Business Account Features"
                  points={Strings.LOREM_IPSUM_LINE}
                />
              </View>
            }
            <Modal visible={this.state.subscriptionModal}>
              <SafeAreaView>
                <TouchableOpacity
                  style={styles.closeBtnContainer}
                  onPress={() =>
                    this.setState({
                      subscriptionModal: !this.state.subscriptionModal,
                    })
                  }>
                  <Image
                    resizeMode="contain"
                    style={styles.closeBtnImage}
                    source={IMAGES.CLOSE}
                  />
                </TouchableOpacity>
                <FlatList
                  data={this.state.data}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => this.onSelect(item, index)}>
                      <Text style={styles.options}>{item.type}</Text>
                    </TouchableOpacity>
                  )}
                />
              </SafeAreaView>
            </Modal>
          </View>
        </ScrollView>
        <SafeAreaView>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              onPress={this.onPress}
              text={currencyPicker ? "Proceed" : "Subscribe Now"}
              mbottom={getResponsiveHeight(3.8)}
              mtop={getResponsiveHeight(1)}
              textColor={Colors.WHITE}
              ButtonColor={Colors.BLUE}
              fontSize={Fonts.FONT_18}
              height={getResponsiveWidth(12.5)}
              fontFamily={Fonts.MULISH_MEDIUM}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

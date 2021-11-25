import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity, Modal, FlatList, ActivityIndicator } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts';
import styles from './styles'
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Strings from '../../common/constants/Strings'
import AccountFeatures from '../../components/AccountFeatures'
import InputComponent from '../../components/InputComponent'
import CountryPicker from 'react-native-country-picker-modal';
import IMAGES from '../../common/constants/images'
import AccountActivate from '../../components/AccountActivate'
export default class RequestToken extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: false,
      country: "India",
      location: "No. 24 Mumbai Street",
      subscriptionPattern: "Monthly",
      subscriptionModal: false,
      data: [{ type: "Monthly" }, { type: "Weekly" }],
      spinner: false,
      modalVisible: false
    }
  }

  makePayment = () => {
    this.setState({
      modalVisible: true,
      spinner: true
    })
    setTimeout(() => {
      this.setState({
        spinner: false
      })
    }, 3000)
  }
  onSelect = (val, id) => {
    this.setState({
      subscriptionModal: false,
      subscriptionPattern: val.type,
    });
  };

  componentDidMount() {
    console.log(this.props.route.params)
  }
  onPress = () => {
    this.props.navigation.navigate("Dashboard")
  }
  makeRequest = () => {
    this.setState({
      form: true
    })
  }
  render() {
    const { form, country, location, subscriptionPattern, subscriptionModal, data, spinner, modalVisible } = this.state
    const { information = "", featureTitle = "", features = "" } = this.props.route.params
    return (
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {information === "" ?
            <Text style={styles.textContent}>{Strings.LOREM_IPSUM}</Text>
            :
            <View style={styles.textContentContainer}>
              {form
                ?
                <View>
                  <Text style={styles.fillFormText}>Please fill in the information below to proceed</Text>
                  <View style={styles.componentContainer}>
                    <View>
                      <Text style={styles.labels}>Country</Text>
                      <View>
                        <CountryPicker
                          containerButtonStyle={styles.pickerContainer}
                          placeholder={country}
                          withFilter
                          withCallingCode
                          onSelect={val =>
                            this.setState({
                              country: val.name
                            })
                          }
                        />
                        <Image source={IMAGES.DROPDOWN}
                          style={styles.dropDownIcon}
                        />
                      </View>
                    </View>
                    <View style={styles.locationPickerContainer}>
                      <Text style={styles.labels}>Business Location</Text>
                      <View>
                        <TouchableOpacity
                          style={styles.pickerContainer}
                          onPress={() => this.setState({ subscriptionModal: !subscriptionModal })}>
                          <Text>{location}</Text>
                          <Image style={[styles.dropDownIcon, { marginTop: 15 }]} source={IMAGES.DROPDOWN} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <InputComponent
                      labelFontSize={Fonts.FONT_14}
                      labelColor={Colors.BLACK}
                      bordered
                      disabled={false}
                      borderWidth={0.5}
                      borderColor={Colors.CYAN_BLUE}
                      labelFontFamily={Fonts.POPPINS_REGULAR}
                      bgColor={Colors.ALICE_BLUE}
                      mtop={getResponsiveHeight(1)}
                      paddingLeft={getResponsiveWidth(5)}
                      InputTextFontFamily={Fonts.INTER_REGULAR}
                      InputTextSize={Fonts.FONT_18}
                    />
                  </View>
                  <View style={styles.componentContainer}>
                    <Text style={styles.labels}>Subscription Pattern</Text>
                    <View>
                      <TouchableOpacity
                        style={styles.pickerContainer}
                        onPress={() => this.setState({ subscriptionModal: !subscriptionModal })}>
                        <Text>{subscriptionPattern}</Text>
                        <Image style={[styles.dropDownIcon, { marginTop: 15 }]} source={IMAGES.DROPDOWN} />
                      </TouchableOpacity>
                    </View>
                    <InputComponent
                      labelFontSize={Fonts.FONT_14}
                      labelColor={Colors.BLACK}
                      bordered
                      disabled={false}
                      borderWidth={0.5}
                      borderColor={Colors.CYAN_BLUE}
                      labelFontFamily={Fonts.POPPINS_REGULAR}
                      bgColor={Colors.ALICE_BLUE}
                      mtop={getResponsiveHeight(1)}
                      paddingLeft={getResponsiveWidth(5)}
                      InputTextFontFamily={Fonts.INTER_REGULAR}
                      InputTextSize={Fonts.FONT_18}
                    />
                  </View>
                </View>
                :
                <AccountFeatures
                  information={information}
                  headTitle={featureTitle}
                  points={features}
                />
              }
              <Modal visible={subscriptionModal}>
                <SafeAreaView>
                  <TouchableOpacity
                    style={styles.closeBtnContainer}
                    onPress={() =>
                      this.setState({
                        subscriptionModal: !subscriptionModal,
                      })
                    }>
                    <Image
                      resizeMode="contain"
                      style={styles.closeBtn}
                      source={IMAGES.CLOSE}
                    />
                  </TouchableOpacity>
                  <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity onPress={() => this.onSelect(item, index)}>
                        <Text style={styles.options}>{item.type}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </SafeAreaView>
              </Modal>
              <Modal visible={modalVisible} animationType="slide">
                {spinner ?
                  <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="large" color={Colors.BLUE} />
                    <Text style={styles.pleaseWaitTxt}>Please wait....</Text>
                  </View>
                  : <AccountActivate
                    TokenId
                    Token="189VVYV"
                    title="Request Completed"
                    description="You have sucessfully requested for speacial AR tokens, you will be notified when activated, your subscription starts when it is activated."
                  />}
                {spinner ? null
                  :
                  <SafeAreaView>
                    <View style={styles.buttonContainer}>
                      <ButtonComponent
                        text="Home"
                        onPress={() => this.setState({
                          modalVisible: false
                        }) ||
                          this.props.navigation.navigate("Dashboard")}
                        mbottom={getResponsiveHeight(3.8)}
                        textColor={Colors.WHITE}
                        ButtonColor={Colors.BLUE}
                        fontSize={Fonts.FONT_18}
                        height={getResponsiveWidth(12.5)}
                        width={getResponsiveWidth(70)}
                        fontFamily={Fonts.MULISH_MEDIUM}
                      />
                    </View>
                  </SafeAreaView>
                }

              </Modal>
            </View>
          }
        </ScrollView>
        <SafeAreaView style={styles.buttonContainer}>
          <ButtonComponent
            onPress={information === "" ? this.onPress : form ? this.makePayment : this.makeRequest}
            text={information === "" ? "Request" : form ? "Make Payment" : "Make Request"}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_18}
            mtop={getResponsiveHeight(1.5)}
            mbottom={getResponsiveHeight(4)}
            height={getResponsiveWidth(12.5)}
            width={getResponsiveWidth(80)}
            fontFamily={Fonts.MULISH_MEDIUM}
          />
        </SafeAreaView>
      </View>
    );
  }
}

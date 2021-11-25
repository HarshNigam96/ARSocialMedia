import React, { Component } from 'react';
import { Text, View, Image, FlatList, ScrollView, Modal, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import Strings from '../../common/constants/Strings'
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import IMAGES from '../../common/constants/images'
import InputComponent from '../../components/InputComponent'
import AccountFeatures from '../../components/AccountFeatures';
import AccountActivate from '../../components/AccountActivate';
export default class BusinessAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: false,
      mainModal: false,
      selectCategory: false,
      selectCategoryIndex: 0,
      publicBusinessAccount: false,
      selectCategoryModal: false,
      addressModal: false,
      accountType: "Restaurent",
      data: [{ type: "Restaurent" }, { type: "Clothing" }],
      address: "Dallas Texas",
      businessAddress: [{ address: "Dallas Texas" }, { address: "Chicago" }],
      email: "",
      mobileNumber: "",
    }
  }

  onSelect = (val, id) => {
    this.setState({
      selectCategoryIndex: id,
      selectCategoryModal: false,
      accountType: val.type,
    });
  };

  SelectAddress = (val, id) => {
    this.setState({
      addressModal: false,
      address: val.address,
    });
  };

  render() {
    const { mainModal, selectCategory, accountType, selectCategoryModal, data, businessAddress, publicBusinessAccount, address, addressModal, email, mobileNumber } = this.state
    return (
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.SecondContainer}>
            {selectCategory ? <>
              <Text style={styles.boldText}>Select a category</Text>
              <Text style={styles.chooseCategoryTxt}>Choose a category that best describes your business and its activities</Text>
              <Text style={styles.label}>Business category</Text>
              <View style={{ paddingRight: getResponsiveWidth(8) }}>
                <TouchableOpacity
                  style={[
                    {
                      borderColor:
                        accountType != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                      backgroundColor:
                        accountType != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                      borderWidth: accountType != '' ? 1 : 2,
                    },
                    styles.selected,
                  ]}
                  onPress={() => this.setState({ selectCategoryModal: !selectCategoryModal })}>
                  <Text style={styles.ProvideDetails}>{accountType}</Text>
                  <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
                </TouchableOpacity>
              </View>
              <Modal visible={selectCategoryModal}>
                <SafeAreaView>
                  <TouchableOpacity
                    style={styles.closeButtonContainer}
                    onPress={() =>
                      this.setState({
                        selectCategoryModal: !selectCategoryModal,
                      })
                    }>
                    <Image
                      resizeMode="contain"
                      style={styles.closeButtonImg}
                      source={IMAGES.CLOSE}
                    />
                  </TouchableOpacity>
                  <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        style={styles.selectContainer}
                        onPress={() => this.onSelect(item, index)}>
                        <Text style={styles.modalOptions}>{item.type}</Text>
                        {this.state.selectCategoryIndex === index
                          ? <View style={styles.selectButton}>
                            <Image source={IMAGES.TICK} style={styles.TickIcon} />
                          </View>
                          : <View style={styles.disabled} />}
                      </TouchableOpacity>
                    )}
                  />
                </SafeAreaView>
              </Modal>
            </>
              :
              publicBusinessAccount
                ? <>
                  <Text style={styles.boldText}>Public business Information</Text>
                  <Text style={styles.chooseCategoryTxt}>This information makes it easir for people to contact you directly from your profile page.</Text>
                  <View style={{ paddingRight: getResponsiveWidth(8) }}>
                    <View style={{ marginTop: getResponsiveHeight(3) }}>
                      <InputComponent
                        label="Business Email"
                        placeholder="email"
                        labelFontSize={Fonts.FONT_14}
                        labelColor={Colors.BLACK}
                        bordered
                        opacity={0.5}
                        disabled={false}
                        borderWidth={email != '' ? 1 : 2}
                        borderColor={email != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                        labelFontFamily={Fonts.POPPINS_REGULAR}
                        bgColor={email != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                        mtop={getResponsiveHeight(0.5)}
                        paddingLeft={getResponsiveWidth(5)}
                        InputTextFontFamily={Fonts.INTER_REGULAR}
                        InputTextSize={Fonts.FONT_14}
                        value={email}
                        onChange={val => this.setState({
                          email: val
                        })}
                      />
                    </View>
                    <View style={{ marginTop: getResponsiveHeight(3) }}>
                      <InputComponent
                        label="Business Phone Number"
                        placeholder="phone nnumber"
                        keyType="numeric"
                        labelFontSize={Fonts.FONT_14}
                        labelColor={Colors.BLACK}
                        bordered
                        opacity={0.5}
                        disabled={false}
                        borderWidth={mobileNumber != '' ? 1 : 2}
                        borderColor={mobileNumber != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                        labelFontFamily={Fonts.POPPINS_REGULAR}
                        bgColor={mobileNumber != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                        mtop={getResponsiveHeight(0.5)}
                        paddingLeft={getResponsiveWidth(5)}
                        InputTextFontFamily={Fonts.INTER_REGULAR}
                        InputTextSize={Fonts.FONT_14}
                        value={mobileNumber}
                        onChange={val => this.setState({
                          mobileNumber: val
                        })}
                      />
                    </View>
                    <Text style={styles.label}>Business Address</Text>
                    <TouchableOpacity
                      style={[
                        {
                          borderColor:
                            address != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                          backgroundColor:
                            address != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                          borderWidth: address != '' ? 1 : 2,
                        },
                        styles.selected,
                      ]}
                      onPress={() => this.setState({ addressModal: !addressModal })}>
                      <Text style={styles.ProvideDetails}>{address}</Text>
                      <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
                    </TouchableOpacity>
                    <Modal visible={addressModal}>
                      <TouchableOpacity
                        style={styles.closeButtonContainer}
                        onPress={() =>
                          this.setState({
                            addressModal: !addressModal,
                          })
                        }>
                        <Image
                          resizeMode="contain"
                          style={styles.closeButtonImg}
                          source={IMAGES.CLOSE}
                        />
                      </TouchableOpacity>
                      <FlatList
                        data={businessAddress}
                        renderItem={({ item, index }) => (
                          <TouchableOpacity onPress={() => this.SelectAddress(item, index)}>
                            <Text style={styles.modalOptions}>{item.address}</Text>
                          </TouchableOpacity>
                        )}
                      />
                    </Modal>
                  </View>
                </>
                : <>
                  {this.state.spinner
                    ?
                    <ActivityIndicator color={Colors.BLUE} size="large" />
                    :
                    <View style={{ marginTop: getResponsiveHeight(2.8) }}>
                      <AccountFeatures
                        information={Strings.LOREM_IPSUM}
                        headTitle="Business Account Features"
                        points={Strings.LOREM_IPSUM_LINE}
                      />
                    </View>
                  }
                </>
            }
            <Modal animationType="slide" visible={mainModal}>
              <AccountActivate
                title={Strings.WELCOME_TO_BUSINESS}
                description={Strings.SWITCH_TO_BUSINESS}
              />
              <View style={styles.buttonContainer}>
                <ButtonComponent
                  text="Home"
                  onPress={() => this.setState({
                    mainModal: false
                  }) ||
                    this.props.navigation.navigate("RequestToken", {
                      information: "",
                    })}
                  mbottom={getResponsiveHeight(3.8)}
                  textColor={Colors.WHITE}
                  ButtonColor={Colors.BLUE}
                  fontSize={Fonts.FONT_18}
                  height={getResponsiveWidth(12.5)}
                  fontFamily={Fonts.MULISH_MEDIUM}
                />
              </View>
            </Modal>
          </View>

        </ScrollView>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            text={publicBusinessAccount ? "Next" : "Continue"}
            onPress={() => this.setState({
              selectCategory: !selectCategory,
              publicBusinessAccount: selectCategory ? true : null,
              mainModal: publicBusinessAccount ? true : null
            })}
            mbottom={getResponsiveHeight(3.8)}
            mtop={getResponsiveHeight(1)}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_18}
            height={getResponsiveWidth(12.5)}
            fontFamily={Fonts.MULISH_MEDIUM}
          />
        </View>
      </View>
    );
  }
}

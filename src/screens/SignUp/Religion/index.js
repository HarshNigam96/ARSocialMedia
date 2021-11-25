import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView
} from 'react-native';
import styles from '../styles';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../common/helper/utils';
import CountryPicker from 'react-native-country-picker-modal';
import IMAGES from '../../../common/constants/images';
import Colors from '../../../common/constants/colors';
import ButtonComponent from '../../../components/ButtonComponent';
import { showMessage } from 'react-native-flash-message';
import Fonts from '../../../common/constants/fonts'

export default class Religion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      religion: 'Christianiity',
      data: [
        { religion: 'African' },
        { religion: 'Animism' },
        { religion: 'Buddhism' },
        { religion: 'Cao Dai' },
        { religion: 'Chinese traditional religion' },
        { religion: 'Christianity' },
        { religion: 'Druze' },
        { religion: 'Ethic ' },
        { religion: 'Hinduism' },
        { religion: 'Islam' },
        { religion: 'Jaininsm' },
        { religion: 'Judaism' },
        { religion: 'New-paganism' },
        { religion: 'Rastafari' },
        { religion: 'Shinto' },
        { religion: 'Sikhism' },
        { religion: 'Spiritism' },
        { religion: 'Tenrikyo' },
        { religion: 'Unitarian Universalism' },
        { religion: 'Zoroastrianism' },
      ],
      modal: false,
      selectedIndex: 0,
    };
  }

  onSelect = (val, id) => {
    this.setState({
      modal: false,
      selectedIndex: id,
      religion: val.religion,
    });
    this.props.selectedReligion(val.religion);
  };
  onPress = (val) => {
    if ((this.state.religion === "")) {
      showMessage({
        type: "danger", message: "error",description:"please select your Religion"
      })
    } else {
      this.props.onPress(val);
    }
  };

  render() {
    const { religion, modal, data, selectedIndex } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>Choose your Religion</Text>
          <Text style={styles.ProvideDetails}>
            Please pick your religion to help curate Ads for you
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <Text style={styles.label}>Religion</Text>
              <TouchableOpacity
                style={[
                  {
                    borderColor:
                      religion != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                    backgroundColor:
                      religion != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                    borderWidth: religion != '' ? 1 : 2,
                  },
                  styles.selected,
                ]}
                onPress={() => this.setState({ modal: !modal })}>
                <Text style={styles.ProvideDetails}>{religion}</Text>
              </TouchableOpacity>
              <Modal visible={modal}>
                <SafeAreaView>
                <TouchableOpacity
                  style={styles.closeButtonContainer}
                  onPress={() =>
                    this.setState({
                      modal: !modal,
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
                    <TouchableOpacity onPress={() => this.onSelect(item, index)}>
                      <Text style={styles.modalOptions}>{item.religion}</Text>
                    </TouchableOpacity>
                  )}
                />
                </SafeAreaView>
              </Modal>
              <Image
                resizeMode="contain"
                style={styles.dropDown}
                source={IMAGES.DROPDOWN}
              />
            </View>
              <Text style={styles.optionalTextStyle}>(optional)</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonComponent
            text="Next"
            onPress={(val) => this.onPress(val)}
            mbottom={getResponsiveHeight(3.8)}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_18}
            height={getResponsiveWidth(13.5)}
            fontFamily={Fonts.POPPINS_MEDIUM}
          />
        </View>
      </SafeAreaView>
    );
  }
}

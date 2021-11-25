import React, { Component } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
import ButtonComponent from '../../components/ButtonComponent';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import styles from './styles';
import UserName from './UserName';
import CreateUserName from './CreateUserName';
import DOB from './DOB';
import SelectCountry from './SelectCountry';
import Religion from './Religion';
import CreatePassword from './CreatePassword';
import PhoneNumber from './PhoneNumber';
import { showMessage } from 'react-native-flash-message';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      DOB: "",
      country: '',
      religion: '',
      password: '',
      confirmedPassword: '',
      mobileNumber: "",
      countryCode: "",
      progressStatus: 14,
    };
  }

  render() {
    const { socialLogin } = this.props.route.params;
    const {
      progressStatus,
    } = this.state;

    const show = () => {
      switch (progressStatus) {
        case 14:
          return (
            <UserName
              firstName={val =>
                this.setState({
                  firstName: val,
                })
              }
              lastName={val =>
                this.setState({
                  lastName: val,
                })
              }
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
            />
          );
        case 28:
          return (
            <CreateUserName
              userName={val =>
                this.setState({
                  userName: val,
                })
              }
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
            />
          );
        case 42:
          return <DOB
            birth={val => this.setState({
              DOB: val
            })}
            onPress={() => {
              if (this.state.progressStatus === this.state.progressStatus) {
                this.setState({
                  progressStatus: this.state.progressStatus + 14,
                });
              }
            }} />
        case 56:
          return (
            <SelectCountry
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
              selectedCountry={val =>
                this.setState({
                  country: val,
                })
              }
            />
          );
        case 70:
          return (
            <Religion
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
              selectedReligion={val =>
                this.setState({
                  religion: val,
                })
              }
            />
          );
        case 84:
          return (
            <CreatePassword
              password={val =>
                this.setState({
                  password: val,
                })
              }
              confirmedPassword={val =>
                this.setState({
                  confirmPassword: val,
                })
              }
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
            />
          );
        case 98:
          return (
            <PhoneNumber
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}

              mobileNumber={val => this.setState({
                mobileNumber: val
              })}
              countryCode={(val => this.setState({
                countryCode: val
              }))}
            />
          );
        default:
          return this.props.navigation.navigate("VerificationScreen")
      }
    };

    const ViaSocial = () => {
      switch (progressStatus) {
        case 14:
          return (
            <UserName
              firstName={val =>
                this.setState({
                  firstName: val,
                })
              }
              lastName={val =>
                this.setState({
                  lastName: val,
                })
              }
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
            />
          );
        case 28:
          return (
            <CreateUserName
              userName={val =>
                this.setState({
                  userName: val,
                })
              }
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
            />
          );
        case 42:
          return <DOB
            birth={val => this.setState({
              DOB: val
            })}
            onPress={() => {
              if (this.state.progressStatus === this.state.progressStatus) {
                this.setState({
                  progressStatus: this.state.progressStatus + 14,
                });
              }
            }} />
        case 56:
          return (
            <SelectCountry
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
              selectedCountry={val =>
                this.setState({
                  country: val,
                })
              }
            />
          );
        case 70:
          return (
            <Religion
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}
              selectedReligion={val =>
                this.setState({
                  religion: val,
                })
              }
            />
          );
        case 84:
          return (
            <PhoneNumber
              onPress={() => {
                if (this.state.progressStatus === this.state.progressStatus) {
                  this.setState({
                    progressStatus: this.state.progressStatus + 14,
                  });
                }
              }}

              mobileNumber={val => this.setState({
                mobileNumber: val
              })}
              countryCode={(val => this.setState({
                countryCode: val
              }))}
            />
          );
          default:
            return this.props.navigation.navigate("Home")
      }
    };

    return (
      <View style={styles.Container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                {
                  backgroundColor: Colors.LIGHT_GREY,
                },
              ]}>
              <View
                style={[
                  styles.progressBar,
                  {
                    backgroundColor: Colors.BLUE,
                    width: progressStatus.toFixed(0) + '%',
                  },
                ]}
              />
            </View>
          </View>
          {socialLogin ? ViaSocial() : show()}
        </ScrollView>
      </View>
    );
  }
}

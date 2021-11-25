import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import Navigator from './src/navigation';

LogBox.ignoreAllLogs();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
          <FlashMessage position="bottom" duration={2000} />
        </PersistGate>
      </Provider>
    );
  }
}

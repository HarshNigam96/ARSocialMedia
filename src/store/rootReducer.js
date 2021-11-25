import {combineReducers} from 'redux';
import {persistReducer, purgeStoredState} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {device} from './device/device.reducers';
import {auth} from './auth/auth.reducers';

const storage = AsyncStorage;

const persistConfig = {
  key: 'root',
  storage,
};

const deviceConfig = {
  key: 'device',
  storage,
};

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  device: persistReducer(deviceConfig, device),
  auth: persistReducer(authConfig, auth),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const purgeStore = () => {
  purgeStoredState(persistConfig);
};

export default persistedReducer;

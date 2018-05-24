//todo - support for iOS and android

import { NotificationsAndroid } from 'react-native-notifications';
import { AsyncStorage } from 'react-native';

NotificationsAndroid.setRegistrationTokenUpdateListener(deviceToken => {
  console.log('Device Registered for Push-Notifications:', deviceToken);
  if (deviceToken != null) {
    AsyncStorage.setItem('deviceToken', deviceToken);
  }
});

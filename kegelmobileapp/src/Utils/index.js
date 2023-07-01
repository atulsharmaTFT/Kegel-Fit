import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {Linking} from 'react-native';
import Share from 'react-native-share';
import {findIndex, truncate} from 'lodash';
import {PermissionsAndroid, Platform} from 'react-native';
export const ASYNC_STORAGE_KEY = {
  USER_DATA: 'USER_DATA',
  INITIAL_CHILD: 'INITIAL_CHILD',
  PLAYER_ID: 'PLAYER_ID',
  PERMISSIONS_GRANTED: 'PERMISSIONS_GRANTED',
};
export const toastMessage = (message, duration) => {
  setTimeout(() => {
    if (message) {
      ToastAndroid.show(message, duration ?? 3000);
    }
  });
};
export const convertToSmallCase = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};
export const Capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const storeData = async (key, data) => {
  try {
    console.log('data saved===>>>', key, JSON.stringify(data));
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return JSON.parse(value);
    } else return false;
  } catch (error) {
    return false;
  }
};

export const deleteKey = async key => {
  try {
    const value = await AsyncStorage.removeItem(key);
    if (value !== null) {
      // We have data!!
    }
  } catch (error) {}
};

//Catch API Error

export function catchError(error) {
  if (error?.code === 'ERR_NETWORK') {
    toastMessage('Please check your Internet connnection!', 3000);
  } else if (
    error?.code === 'ERR_BAD_REQUEST' &&
    error?.response?.data?.message
  ) {
    toastMessage(error?.response?.data?.message, 3000);
  } else {
    toastMessage('Something went wrong!', 3000);
  }
}

export function copyToClipboard(data) {
  Clipboard.setString(data);
  toastMessage('Code Coppied', 500);
}

export function checkfutureDate(value) {
  var now = new Date();
  var target = new Date(value);
  if (target.getFullYear() > now.getFullYear()) return true;
  else if (target.getFullYear() == now.getFullYear()) {
    if (target.getMonth() > now.getMonth()) return true;
    else if (target.getMonth() == now.getMonth()) {
      if (target.getDate() > now.getDate()) return true;
      else return false;
    }
  } else return false;
}

export function changeTimeformate(s) {
  let minutes = 0,
    seconds = 0,
    time;
  minutes = Math.floor(s / 60);
  seconds = s % 60;
  time = minutes + ' Min ' + seconds + ' Sec';
  return time;
}
export function getTimeStamp(date) {
  let hours = date.substring(11, 13);
  let min = date.substring(14, 16);
  if (min > 59) {
    min = min % 60;
    min = min < 10 ? `0${min}` : `${min}`;
    hours++;
  }
  let type = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  return `${hours}:${min} ${type}`;
}

export const getAllAsyncStoreData = async () => {
  try {
    await AsyncStorage.getAllKeys().then(keys =>
      AsyncStorage.multiGet(keys).then(data => console.log(data)),
    );
  } catch (error) {
    console.error(error, 'getAllAsyncData');
  }
};

export async function removeDataFromAsync(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (exception) {
    console.log(exception, 'Error');
  }
}

export const clearAsyncData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};

export const sendMail = (sub, body) => {
  let subject = sub ? sub : 'Support Required';
  Linking.openURL(
    `mailto:sharma.atul@tftus.com?subject=${subject}&body=${body}`,
  );
};

let isDisabled = false;
export const shareHelper = async (op, url) => {
  try {
    if (isDisabled) return;
    isDisabled = true;
    const ShareOptions = {
      title: 'Title',
      message: 'Message',
      url: url,
      failOnCancel: false,
      ...op,
    };
    await Share.open(ShareOptions);
    isDisabled = false;
  } catch (error) {
    isDisabled = false;
  }
};

export function trunc(msg, length = 50) {
  return (
    ': \n\n ' +
    truncate(msg, {
      length,
      separator: /,?\.* +/,
    }) +
    `\n\n "JoinUs`
  );
}
export const checkForEmpty = (
  text,
  errorMessage = 'This is a required field',
) => {
  if (text.length === 0) {
    return errorMessage;
  }
  return '';
};
export const checkForPassword = (
  text,
  errorMessage = 'This is a required field',
) => {
  if (text.length === 0) {
    return errorMessage;
  }
  if (text.length < 8) {
    return 'Password must be of 8 digit';
  }
  return '';
};
export const checkValidDateRange = (
  date,
  errorMessage = 'This is a required field',
) => {
  if (!date) return errorMessage;
  if (date) {
    let today = new Date().getFullYear();
    let difference = today - new Date(date).getFullYear();
    if (difference > 20 || difference <= 6) return '';
    if (difference < 6) return (errorMessage = 'Age should be between 5 to 20');
    if (difference > 20)
      return (errorMessage = 'Age should be between 5 to 20');
    else return;
  }
};
export const validateConfirmPassword = (
  password1,
  password2,
  errorMessage = 'Password does not match',
) => {
  if (password2.trim().length === 0) {
    return 'This is a required field';
  }
  if (password1 === password2) {
    return '';
  }
  return errorMessage;
};
export const validateEmail = (
  text,
  errorMessage = 'This is a required field',
) => {
  if (text.trim().length === 0) {
    return errorMessage;
  }

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text) ? '' : 'Please enter valid email.';
};
export const validatePassword = (
  text,
  errorMessage = 'This is a required field',
) => {
  if (text.trim().length === 0) {
    return errorMessage;
  }
  let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return reg.test(text)
    ? ''
    : 'Password Must contain at least one number and one uppercase and lowercase letter';
};

export async function requestPushNotificationPermission() {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Push Notification Permission',
          message: 'This app requires access to push notifications.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Push notification permission granted');
      } else {
        console.log('Push notification permission denied');
      }
    }
  } catch (err) {
    console.error(err);
  }
}

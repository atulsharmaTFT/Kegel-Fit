import {TYPES} from '../../Utils/appStrings';
import {Post} from '../../Utils/request';
import {PATH} from '../../Utils/apiPath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE_KEY, toastMessage, catchError} from '../../Utils';
export const setUser = payload => ({type: TYPES.user, payload});

//API Calls

//Register API
export const registerUser =
  (data, navigate, path) => async (dispatch, getState) => {
    try {
      const res = await Post(PATH.register, data);
      const dispatchData = {
        role: data?.role,
        token: res?.headers?.authorization,
        user: res?.data?.payload?.data,
      };
      if (res?.status == 200 || res?.status == 201) {
        if (data?.role === 'child') {
        }
        toastMessage(`${data?.role} registered successfully.`, 3000);
        dispatch(setUser(dispatchData));
        await AsyncStorage.setItem(
          ASYNC_STORAGE_KEY.USER_DATA,
          JSON.stringify(dispatchData),
        );
        navigate(path, path === 'addChild' && {isInitialChild: true});
      }
      return res;
    } catch (error) {
      catchError(error);
      console.log(error);
    }
  };
//Login API
export const signIn = data => async (dispatch, getState) => {
  try {
    const res = await Post(PATH.login, data);
    const dispatchData = {
      role: res?.data?.payload?.role,
      token: res?.data?.payload?.token,
      user: res?.data?.payload,
    };
    if (res?.status == 200 || res?.status == 201) {
      toastMessage(`${dispatchData?.role} login successfully.`, 3000);
      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEY.USER_DATA,
        JSON.stringify(dispatchData),
      );
      dispatch(setUser(dispatchData));
    }
    return res;
  } catch (error) {
    catchError(error);
    console.log(error, 'Error from login');
  }
};

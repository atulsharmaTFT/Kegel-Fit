import axios from 'axios';
import store from '../Store';
import {BASE_URL} from './apiPath';

axios.defaults.timeout = 60000;
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Access-Control-Allow-Headers'] =
  'Content-Type, Authorization';

axios.interceptors.request.use(
  async function (config) {
    const {token} = store.getState()?.user;
    if (token !== '') {
      if (token) config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

export async function Post(path, body, params) {
  try {
    const res = await axios.post(path, body, params);
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      if (res.data) return res;
    }
  } catch (error) {
    throw error;
  }
}

export async function get(path, params) {
  try {
    const res = await axios.get(path, params);
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      if (res.data) return res;
    }
  } catch (error) {
    throw error;
  }
}

export async function put(path, body, params) {
  try {
    const res = await axios.put(path, body, params);
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      if (res.data) return res;
    }
  } catch (error) {
    throw error;
  }
}
export async function Patch(path, body, params) {
  try {
    const res = await axios.patch(path, body, params);
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      if (res.data) return res;
    }
  } catch (error) {
    throw error;
  }
}
export async function deleteData(path, params) {
  try {
    const res = await axios.delete(path, params);
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      if (res.data) return res;
    }
  } catch (error) {
    throw error;
  }
}

import moment from 'moment';
import { Alert, Linking, ToastAndroid } from 'react-native';
import { DeviceUtils } from './deviceUtils';

export const logger = {
  log: (...params: any) => {
    /* eslint-disable no-console */
    if (__DEV__) console.log(...params);
  },
  info: (...params: any) => {
    logger.log('[INFO]:', ...params);
  },
  error: (...params: any) => {
    logger.log('[ERROR]:', ...params);
  },
};

export const alertMessage = (message: string) => {
  if (!message || typeof message !== 'string') return;

  if (DeviceUtils.isIOS) {
    Alert.alert('', message);
  } else {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  }
};

export const phoneDevice = {
  call: async (phone?: number | string) => {
    if (!phone) return;

    try {
      const url = `tel:${phone}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        alertMessage('Số điện thoại không hợp lệ');
      }
    } catch (error) {
      logger.error(error);
    }
  },
  sms: async (phone?: number | string, message = '') => {
    if (!phone) return;

    try {
      const separator = DeviceUtils.isIOS ? '&' : '?';
      const url = `sms:${phone}${separator}body=${message}`;
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        alertMessage('Số điện thoại không hợp lệ');
      }
    } catch (error) {
      logger.error(error);
    }
  },
};

export const delay = (time = 500) => new Promise<void>((resolve) => setTimeout(resolve, time));

export const handleError = (error: any, path = 'message') => {
  let message = error?.[path] || 'Mất kết nối đến hệ thống.';

  if (message === 'null') {
    message = 'Mất kết nối đến hệ thống.';
  }
  if (message === 'Network Error') {
    message = 'Kết nối không khả dụng.';
  }

  // if (message === General.MESS_IGNORE) return;
  return message;
};

export const makeResponseList = <T = any>(data: T, total?: number, page?: number) => {
  return { data, total: total || 0, page: page || 1 };
};

const intlNF = new Intl.NumberFormat('es-US'); //es-US: English
const vndIntlNF = new Intl.NumberFormat('vi-VN'); //vi-VN: Vietnamese
export const numberFormat = (num?: number | string, type: 'vnd' | 'en' = 'en', subfix = '0'): string => {
  if (!num) return subfix;

  let number = 0;
  if (typeof num === 'number') {
    number = num;
  } else if (typeof num === 'string') {
    number = Number.parseFloat(num);
  } else {
    return subfix;
  }

  if (Number.isNaN(number)) return subfix;

  if (type === 'vnd') {
    return vndIntlNF.format(number);
  }
  return intlNF.format(number);
};

export const numberFormatValue = (num?: number | string, type: 'vnd' | 'en' = 'en'): string => {
  if (!num) return '';
  if (typeof num === 'number') return num.toString();

  if (type === 'vnd') {
    return num.replace(/./g, '').replace(/,/g, '.');
  }
  return num.replace(/,/g, '');
};

export const numberFixed = (num?: number, fractionDigits = 2) => {
  if (!num) return 0;
  if (typeof num !== 'number') return 0;

  return Number.parseFloat(num.toFixed(fractionDigits));
};

export const dateTimeFormat = (time: any, formatOut: string, formatIn?: string): string => {
  if (!time) return '';
  if (typeof time === 'number' && time < 0) return '';

  try {
    const dateTime = moment(time, formatIn).format(formatOut);
    return dateTime !== 'Invalid date' ? dateTime : '';
  } catch {
    return '';
  }
};

export const capitalizeString = (str: string): string => {
  if (!str) return '';
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};

export const normalizeString = (value: any): string => {
  if (!value) return '';
  if (typeof value !== 'string') return '';

  return value.replace(/\s\s/g, ' ');
};

export const normalizeStringTrim = (value: any): string => {
  if (!value) return '';
  if (typeof value !== 'string') return '';

  return value.trim();
};

export const makeJoinString = (arrs: (string | null | undefined)[], separator = ',') => {
  return arrs.filter((x) => !!x).join(separator);
};

export const isEmptyString = (value: string | null | undefined) => {
  if (!value) return true;
  return value.trim().length === 0;
};

export const removeAccents = (str: string | undefined): string => {
  if (!str || typeof str !== 'string') return '';

  const accentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];

  for (let i = 0; i < accentsMap.length; i++) {
    const re = new RegExp('[' + accentsMap[i].substring(1) + ']', 'g');
    const char = accentsMap[i][0];
    str = str.replace(re, char);
  }

  return str;
};

export const generateUUID = () => {
  let d = new Date().getTime();
  let d2 = 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16;
    if (d > 0) {
      // eslint-disable-next-line no-bitwise
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      // eslint-disable-next-line no-bitwise
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    // eslint-disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

/**
 *
 * @param path path of image
 * @param type resize (when use lib resize) ; photo (when use lib take picture) ; base64 (when use make image by base64)
 * @default type = photo
 * @returns uri
 */
export const makeUriImage = (path: string, type: 'resize' | 'photo' | 'base64' = 'photo') => {
  if (type === 'photo') return 'file://' + path;
  if (type === 'base64') return `data:image/jpeg;base64,${path}`;
  if (type === 'resize') return DeviceUtils.isIOS ? path.replace('file://', '') : path;

  return path;
};

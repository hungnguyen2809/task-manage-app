import { Dimensions, PixelRatio, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const pixelDensity = PixelRatio.get();
const { height: H, width: W } = Dimensions.get('screen');

const metricsNumber = () => {
  const density = pixelDensity * 160;
  const x = Math.pow((W * pixelDensity) / density, 2);
  const y = Math.pow((H * pixelDensity) / density, 2);
  const screenInches = Math.sqrt(x + y) + 1.6;
  return screenInches;
};

export class DeviceUtils {
  public static width = W;
  public static height = H;
  public static isIOS = Platform.OS === 'ios';
  public static isAndroid = Platform.OS === 'android';
  public static isTablet = DeviceInfo.isTablet();
  public static hasNotch = DeviceInfo.hasNotch();
  public static appVersion = DeviceInfo.getVersion();
  public static deviceId = DeviceInfo.getDeviceId();
  public static uniqueId = DeviceInfo.getUniqueId();
  public static deviceName = DeviceInfo.getDeviceName();
  public static appName = DeviceInfo.getApplicationName();
  public static isLargerAndroid11 = parseInt(DeviceInfo.getSystemVersion(), 10) > 11;

  public static scale(size: number) {
    const ratio = (metricsNumber() + pixelDensity) / 10;
    const value = size * Number(ratio.toFixed(1));
    return Number(value.toFixed(1));
  }

  public static fontScale(size: number, lineHeight?: boolean) {
    if (lineHeight) {
      return scale(size) * 1.4;
    }
    return scale(size);
  }

  public static setHeight(h: number) {
    return (H / 100) * h;
  }

  public static setWidth(w: number) {
    return (W / 100) * w;
  }

  public static safeNotch(num: number) {
    return this.hasNotch ? num : num + 10;
  }

  public static isSimulator() {
    return DeviceInfo.isEmulator();
  }
}

export const scale = DeviceUtils.scale;
export const fontScale = DeviceUtils.fontScale;
export const setWidth = DeviceUtils.setWidth;
export const setHeight = DeviceUtils.setHeight;
export const safeNotch = DeviceUtils.safeNotch;

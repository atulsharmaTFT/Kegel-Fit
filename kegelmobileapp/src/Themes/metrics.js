import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {isIphoneX, isTablet} from './iphoneX';

const {width, height} = Dimensions.get('window');

const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

function rfp(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
function RFValue(fontSize, standardScreenHeight = 680) {
  const size = 375;
  const wid = width < height ? width : height;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  let res = isTablet() ? heightPercent.toFixed(2) : wid / (size / fontSize);
  return Number(res);
}

const wd = val => {
  const elemWidth = typeof val === 'number' ? val : parseFloat(val);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};
const hd = val => {
  const elemHeight = typeof val === 'number' ? val : parseFloat(val);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

const Metrics = {
  width: width < height ? width : height,
  height: height < width ? width : height,
  screenWidth: width < height ? width : height,
  screenHeight: height < width ? width : height,
  wp: w => wd(w),
  hp: h => hd(h),
  rfp: rfp,
  rfv: RFValue,
};
export default Metrics;

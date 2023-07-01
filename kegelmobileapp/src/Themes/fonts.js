import { Platform } from "react-native";
import Metrics from "./metrics";
const { rfv } = Metrics;

var Fonts = {
  one: rfv(1), // Metrics.width / 375,
  two: rfv(2), // Metrics.width / 187.5,
  three: rfv(3), //  Metrics.width / 125,
  four: rfv(4), // Metrics.width / 94,
  five: rfv(5), // Metrics.width / 75,
  six: rfv(6), //  Metrics.width / 62.2,
  seven: rfv(7), // Metrics.width / 53.58,
  eight: rfv(8), // Metrics.width / 46.88,
  nine: rfv(9), // Metrics.width / 41.67,
  ten: rfv(10), //  Metrics.width / 37.5,
  eleven: rfv(11), //  Metrics.width / 34.1,
  twelve: rfv(12), // Metrics.width / 31.25,
  thirteen: rfv(13), //  Metrics.width / 28.85,
  fourteen: rfv(14), // Metrics.width / 26.785,
  fifteen: rfv(15), // Metrics.width / 25,
  sixteen: rfv(16), // Metrics.width / 23.4375,
  seventeen: rfv(17), // Metrics.width / 22.05,
  eighteen: rfv(18), // Metrics.width / 20.843,
  nineteen: rfv(19), // Metrics.width / 19.73,
  twenty: rfv(20), // Metrics.width / 18.75,
  twenty1: rfv(21), // Metrics.width / 17.857,
  twenty2: rfv(22), // Metrics.width / 17.045,
  twenty3: rfv(23), // Metrics.width / 16.3,
  twenty4: rfv(24), // Metrics.width / 15.62,
  twenty5: rfv(25), // Metrics.width / 15,
  twenty6: rfv(26), // Metrics.width / 14.42,
  twenty7: rfv(27), // Metrics.width / 13.88,
  twenty8: rfv(28), // Metrics.width / 13.39,
  twenty9: rfv(29), // Metrics.width / 12.93,
  thirty: rfv(30), // Metrics.width / 12.44,
  minusTen: -(Metrics.width / 37.5),
};

export const FontType = {
   bold: "Assistant-Bold", //used for headings
   extraBold: "Assistant-ExtraBold",
   boldLight: "Assistant-ExtraLight",
   light: "Assistant-Light",
   medium: "Assistant-Medium",
   regular: "Assistant-Regular",
  semiBold: "Assistant-SemiBold",
  // dailyScreen: "RobotoSlab-Light",
};

export default Fonts;

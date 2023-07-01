import {Metrics, FontType} from '../Themes';

export const options = {
  headerLeftContainerStyle: {
    paddingLeft: Metrics.rfv(5),
  },
  headerRightContainerStyle: {
    paddingRight: Metrics.rfv(15),
  },
  headerTitleStyle: {
    fontFamily: FontType.extraBold,
    fontSize: Metrics.rfv(30),
  },
};

export const tabOptions = {
  headerLeftContainerStyle: {
    paddingLeft: Metrics.rfv(5),
  },
  headerRightContainerStyle: {
    paddingRight: Metrics.rfv(15),
  },
  headerShadowVisible: false,
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontFamily: FontType.extraBold,
    fontSize: Metrics.rfv(28),
  },
  headerStyle: {
    elevation: 0,
    height: Metrics.rfv(90),
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
};
export const headerTitle = title => ({
  title: title || '',
  headerLeftContainerStyle: {
    paddingLeft: Metrics.rfv(10),
  },
  headerRightContainerStyle: {
    paddingRight: Metrics.rfv(15),
  },
});

export const hideHeader = {headerShown: false};
export const hideHeaderForNote = {
  headerShown: false,
  presentation: 'fullScreenModal',
};

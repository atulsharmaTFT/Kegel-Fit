import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 0.95,
  },
  indexContainer: {flex: 0.1, alignItems: 'center', justifyContent: 'center'},
  indexText: {fontWeight: '600', fontSize: 15},
  continueButton: {color: 'white', backgroundColor: 'rgb(29,233,182)'},
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonTitle: {color: 'white'},
  //genderTab
  genderContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderIconContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
  },
  genderImage: {
    height: 140,
    width: 140,
    opacity: 0.3,
  },
  selectedGenderImage: {
    height: 140,
    width: 140,
  },
  genderButtonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherButtonContainer: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

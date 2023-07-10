import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {flex: 1},
  heading: {
    fontSize: 70,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Roboto',
  },
  content: {
    color: 'white',
    marginTop: 20,
    width: '70%',
    textAlign: 'center',
    fontSize: 15,
  },
  topContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  continueButton: {},
  continueButtonTitle: {
    fontWeight: '600',
    color: 'black',
  },
});

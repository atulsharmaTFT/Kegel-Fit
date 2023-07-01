import {StyleSheet} from 'react-native';
import {Metrics} from '.';
import Colors from './colors';

export const Styles = StyleSheet.create({
  //Screen Container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  //heading
  heading: {
    fontSize: Metrics.rfv(40),
    color: '#373737',
    fontWeight: '600',
    margin: Metrics.rfv(20),
    marginTop: 0,
  },
  //Button styling
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.rfv(304),
    height: Metrics.rfv(60),
    borderRadius: Metrics.rfv(10),
    backgroundColor: Colors.primary,
    margin: Metrics.rfv(10),
  },
  buttonText: {
    color: Colors.headingText,
    fontWeight: '600',
    fontSize: Metrics.rfv(20),
    lineHeight: Metrics.rfv(26),
    textAlign: 'center',
    justifyContent: 'center',
  },

  //Input Styles
  inputView: {
    height: Metrics.rfv(48),
    width: Metrics.rfv(326),
    borderRadius: Metrics.rfv(10),
    borderColor: '#E0E0E0',
    borderWidth: Metrics.rfv(0),
    padding: Metrics.rfv(15),
    color: Colors.black,
    borderBottomWidth:Metrics.rfv(2),
    backgroundColor:Colors.white
  },
  inputErrorText: {
    fontSize: Metrics.rfv(14),
    // margin:5,
    position: 'absolute',
    top: Metrics.rfv(50),
    left: Metrics.rfv(5),
    color: Colors.red,
  },
  inputContainer: {
    alignItems: 'flex-start',
    margin: Metrics.rfv(10),
    marginVertical: Metrics.rfv(15),
  },
  //Input Label
  inputLabel: {
    fontSize: Metrics.rfv(16),
    fontWeight: '400',
    color: Colors.text1,
  },
  //Parent child card Style
  parentSelection: {
    height: Metrics.rfv(140),
    width: Metrics.rfv(320),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.rfv(10),
    // borderWidth: 1,
    // borderColor: 'grey',
    margin: Metrics.rfv(10),
  },
  passwordInputIcon: {
    position: 'absolute',
    top: -35,
    color: 'gray',
    right: 15,
  },
});

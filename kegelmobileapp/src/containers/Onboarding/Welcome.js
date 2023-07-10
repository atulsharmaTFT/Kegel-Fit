import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/UI/Button/Button';
import {Styles} from '../../stylesheets/Welcome';

const Background = require('../../assets/Welcome.png');
export const Welcome = () => {
  return (
    <ImageBackground style={Styles.container} source={Background}>
      <View style={Styles.topContainer}>
        <Text style={Styles.heading}>Kegel-Fit</Text>
        <Text style={Styles.content}>
          "Empower Your Core, Elevate Your Confidence!"
        </Text>
      </View>
      <View style={Styles.buttonContainer}>
        <Button
          titleStyle={Styles.continueButtonTitle}
          style={Styles.continueButton}
          title={'Continue'}></Button>
      </View>
    </ImageBackground>
  );
};

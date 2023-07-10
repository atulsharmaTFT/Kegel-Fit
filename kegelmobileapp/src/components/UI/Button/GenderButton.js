import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const GenderButton = ({gender, handlePress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress('male')}
        style={gender === 'male' ? styles.selectedButton : styles.button}>
        <Text
          style={
            gender === 'male' ? styles.selectedbuttonText : styles.buttonText
          }>
          Male
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={gender === 'female' ? styles.selectedButton : styles.button}
        onPress={() => handlePress('female')}>
        <Text
          style={
            gender === 'female' ? styles.selectedbuttonText : styles.buttonText
          }>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderButton;
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '80%',
    backgroundColor: 'rgba(10,10,10,0.05)',
    flexDirection: 'row',
    borderRadius: 35,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'rgb(29,233,182)',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
  selectedbuttonText: {fontSize: 20, fontWeight: '600', color: 'white'},
});

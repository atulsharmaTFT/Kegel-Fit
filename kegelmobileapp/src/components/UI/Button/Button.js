import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({title, style, onPress, titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[titleStyle, styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

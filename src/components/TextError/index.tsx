import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextComp } from '..';

type TextErrorProp = {
  message?: string;
  style?: StyleProp<TextStyle>;
};

export const TextError: React.FC<TextErrorProp> = ({ message, style }) => {
  return message ? <TextComp style={[styles.text, style]}>{message}</TextComp> : <></>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

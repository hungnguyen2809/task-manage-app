import { Colors } from '@/constants';
import { fontScale, scale } from '@/utils';
import React from 'react';
import { ColorValue, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { TextComp } from '..';

type TagCompProps = {
  title?: string | number;
  color?: ColorValue;
  bgColor?: ColorValue;
  viewStyle?: ViewStyle;
  titleStye?: TextStyle;
  borderRadius?: number;
};

export const TagComp: React.FC<TagCompProps> = ({ title, bgColor, color, viewStyle, titleStye, borderRadius }) => {
  return (
    <View
      style={[
        styles.container,
        !!borderRadius && { borderRadius },
        !!bgColor && { backgroundColor: bgColor },
        viewStyle,
      ]}>
      <TextComp style={[styles.text, !!color && { color: color }, titleStye]}>{title}</TextComp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: scale(4),
    paddingHorizontal: scale(10),
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.white,
    fontSize: fontScale(14),
    lineHeight: fontScale(15, true),
  },
});

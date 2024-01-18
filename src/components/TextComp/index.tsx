import { Colors, FontSize, Fonts } from '@/constants';
import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export const TextComp = forwardRef<Text, TextProps>(({ children, style, ...props }, ref) => {
  return (
    <Text ref={ref} style={[styles.main, style]} allowFontScaling={false} numberOfLines={1} {...props}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  main: {
    color: Colors.text,
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.DEFAUTL,
  },
});

import { Colors, FontSize, FontStyle, Fonts, FontsMap } from '@/constants';
import { fontScale } from '@/utils';
import React, { forwardRef, useMemo } from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';

type TextCompProps = TextProps & {
  size?: number;
  font?: FontStyle;
  color?: ColorValue;
  text?: React.ReactNode;
  children?: React.ReactNode;
};

export const TextComp = forwardRef<Text, TextCompProps>(
  ({ children, text, style, color = Colors.text, size = FontSize.DEFAULT, font = 'normal', ...props }, ref) => {
    const fontSize = useMemo(() => fontScale(size), [size]);
    const fontFamily = useMemo(() => FontsMap[font], [font]);
    const lineHeight = useMemo(() => fontScale(size, true), [size]);

    return (
      <Text
        ref={ref}
        allowFontScaling={false}
        style={[styles.main, { color, fontSize, fontFamily, lineHeight }, style]}
        {...props}>
        {children ?? text}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  main: {
    color: Colors.text,
    fontFamily: Fonts.REGULAR,
    fontSize: fontScale(FontSize.DEFAULT),
    lineHeight: fontScale(FontSize.DEFAULT, true),
  },
});

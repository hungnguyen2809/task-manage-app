import { Colors, FontSize, FontStyle, Fonts, FontsMap } from '@/constants';
import { fontScale } from '@/utils';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TextCompProps = TextProps & {
  children: React.ReactNode;
  fontStyle?: FontStyle;
};

export const TextComp = forwardRef<Text, TextCompProps>(({ children, style, fontStyle = 'normal', ...props }, ref) => {
  const fontFamily = useMemo(() => FontsMap[fontStyle], [fontStyle]);

  return (
    <Text ref={ref} style={[styles.main, { fontFamily }, style]} allowFontScaling={false} {...props}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  main: {
    color: Colors.text,
    fontFamily: Fonts.REGULAR,
    fontSize: fontScale(FontSize.DEFAUTL),
    lineHeight: fontScale(FontSize.DEFAUTL, true),
  },
});

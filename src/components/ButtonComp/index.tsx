import { Colors, FontSize, Fonts } from '@/constants';
import { fontScale, scale } from '@/utils';
import React, { forwardRef, useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TextComp } from '..';

export interface ButtonCompProp extends TouchableOpacityProps {
  title?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  type?: 'primary' | 'outline';
}

export const ButtonComp = forwardRef<TouchableOpacity, ButtonCompProp>(
  ({ children, icon, titleStyle, style, title, activeOpacity = 0.6, type, ...restProps }, ref) => {
    const isOutline = useMemo(() => type === 'outline', [type]);

    return (
      <TouchableOpacity
        ref={ref}
        role="button"
        activeOpacity={activeOpacity}
        style={[styles.button, isOutline && styles.btnOutline, style, restProps.disabled && styles.disabled]}
        {...restProps}>
        {children ? (
          children
        ) : (
          <>
            {icon ? icon : null}
            <TextComp style={[styles.title, isOutline && styles.titleOutline, !!icon && styles.hasIcon, titleStyle]}>
              {title || 'title'}
            </TextComp>
          </>
        )}
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(15),
    paddingHorizontal: scale(15),
    backgroundColor: Colors.blue,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.SEMI,
    fontSize: fontScale(FontSize.DEFAULT),
    lineHeight: fontScale(FontSize.DEFAULT, true),
  },
  hasIcon: {
    marginLeft: scale(10),
  },
  btnOutline: {
    // borderWidth: 1,
    // borderColor: Colors.PRIMARY,
    // backgroundColor: Colors.BG_OUTLIGHT,
  },
  titleOutline: {
    // color: Colors.PRIMARY,
  },
  disabled: {
    opacity: 0.5,
  },
});

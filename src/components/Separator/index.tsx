import { DeviceUtils } from '@/utils';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SeparatorProps extends Omit<ViewStyle, 'children'> {
  safeTop?: boolean;
  safeBottom?: boolean;
}

export const Separator: React.FC<SeparatorProps> = ({ height, width, safeTop, safeBottom, ...extraProps }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        width,
        height: safeTop
          ? insets.top + (DeviceUtils.hasNotch ? 0 : 10)
          : safeBottom
          ? Math.max(insets.bottom, 10)
          : height,
        ...extraProps,
      }}
    />
  );
};

Separator.defaultProps = {
  width: 0,
  height: 0,
};

import React, { PropsWithChildren } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface BlockProps extends ViewStyle {
  hStack?: boolean;
  vStack?: boolean;
  style?: ViewStyle;
  _props?: Omit<ViewProps, 'children' | 'style'>;
}

export const Block: React.FC<PropsWithChildren<BlockProps>> = ({
  vStack,
  hStack,
  style,
  children,
  _props,
  ...rest
}) => {
  return (
    <View {..._props} style={[vStack && { flexDirection: 'column' }, hStack && { flexDirection: 'row' }, style, rest]}>
      {children}
    </View>
  );
};

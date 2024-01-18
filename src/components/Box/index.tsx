import { Styles } from '@/constants';
import React, { PropsWithChildren, useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

type VariantType = 'main' | 'separator';
type StyleVariant = { [T in VariantType]: ViewStyle };

const MapVariant: StyleVariant = {
  main: Styles.main,
  separator: Styles.separator,
};

interface BlockProps extends ViewStyle {
  hStack?: boolean;
  vStack?: boolean;
  style?: ViewStyle;
  variant?: VariantType;
  _props?: Omit<ViewProps, 'children' | 'style'>;
}

export const Box: React.FC<PropsWithChildren<BlockProps>> = ({
  vStack,
  hStack,
  style,
  variant,
  children,
  _props,
  ...rest
}) => {
  const _style = useMemo(() => (variant ? MapVariant[variant] : {}), [variant]);

  return (
    <View
      {..._props}
      style={[vStack && { flexDirection: 'column' }, hStack && { flexDirection: 'row' }, _style, style, rest]}>
      {children}
    </View>
  );
};

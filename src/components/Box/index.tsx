import { Styles } from '@/constants';
import React, { PropsWithChildren, useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

type VariantType = 'main' | 'card' | 'separator';
type StyleVariant = { [T in VariantType]: ViewStyle };

const MapVariant: StyleVariant = {
  main: Styles.main,
  card: Styles.card,
  separator: Styles.separator,
};

type BoxProps = ViewStyle & {
  hStack?: boolean;
  vStack?: boolean;
  variant?: VariantType;
  style?: StyleProp<ViewStyle>;
  _props?: Omit<ViewProps, 'children' | 'style'>;
};

export const Box: React.FC<PropsWithChildren<BoxProps>> = ({
  vStack,
  hStack,
  style,
  variant,
  children,
  _props,
  ...rest
}) => {
  const _style = useMemo(() => (variant ? MapVariant[variant] : {}), [variant]);
  const flexRow = useMemo((): ViewStyle => (hStack ? { flexDirection: 'row' } : {}), [hStack]);
  const flexCol = useMemo((): ViewStyle => (vStack ? { flexDirection: 'column' } : {}), [vStack]);

  return (
    <View {..._props} style={[flexRow, flexCol, _style, rest, style]}>
      {children}
    </View>
  );
};

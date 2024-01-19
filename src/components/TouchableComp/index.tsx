import React, { PropsWithChildren, useMemo } from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

type TouchableCompProps = ViewStyle & {
  hStack?: boolean;
  vStack?: boolean;
  style?: StyleProp<ViewStyle>;
  _props?: Omit<TouchableOpacityProps, 'children' | 'style'>;
};

export const TouchableComp: React.FC<PropsWithChildren<TouchableCompProps>> = ({
  vStack,
  hStack,
  style,
  children,
  _props,
  ...rest
}) => {
  const flexRow = useMemo((): ViewStyle => (hStack ? { flexDirection: 'row' } : {}), [hStack]);
  const flexCol = useMemo((): ViewStyle => (vStack ? { flexDirection: 'column' } : {}), [vStack]);

  return (
    <TouchableOpacity role="button" activeOpacity={0.6} style={[flexRow, flexCol, rest, style]} {..._props}>
      {children}
    </TouchableOpacity>
  );
};

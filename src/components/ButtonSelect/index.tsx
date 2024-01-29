import { Colors } from '@/constants';
import { fontScale, scale } from '@/utils';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Box, TextComp } from '..';
import { TextError } from '../TextError';

interface ButtonSelectProps extends TouchableOpacityProps {
  title?: string;
  placeholder?: string;
  titleStyle?: TextStyle;
  errorText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  title,
  style,
  placeholder,
  titleStyle,
  errorText,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[style, {}]}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.container,
          containerStyle,
          errorText ? styles.errorField : {},
          props.disabled ? { backgroundColor: Colors.gray } : {},
        ]}
        {...props}>
        {props.children ? (
          props.children
        ) : (
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            {title ? (
              <TextComp style={titleStyle} numberOfLines={1}>
                {title}
              </TextComp>
            ) : (
              <TextComp numberOfLines={1} style={{ color: Colors.gray }}>
                {placeholder}
              </TextComp>
            )}
            <Ionicons name="chevron-down-outline" color={Colors.gray} size={scale(15)} />
          </Box>
        )}
      </TouchableOpacity>
      {errorText && (
        <View style={styles.wrapTextError}>
          <TextError style={{ fontSize: fontScale(13) }} message={errorText} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 0.5,
    paddingVertical: scale(12),
    paddingHorizontal: scale(15),
    borderColor: Colors.semiGray,
    backgroundColor: Colors.drakGray,
  },
  errorField: {
    borderColor: Colors.red,
  },
  wrapTextError: {
    marginTop: scale(3),
    marginHorizontal: scale(5),
  },
});

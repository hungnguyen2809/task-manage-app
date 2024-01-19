import { Colors, Fonts } from '@/constants';
import { DeviceUtils, fontScale, isEmptyString, scale } from '@/utils';
import React, { ReactNode, forwardRef } from 'react';
import {
  Button,
  InputAccessoryView,
  Keyboard,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Box, TextComp } from '..';
import { TextError } from '../TextError';

export interface TextInputCompProps extends TextInputProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  errorText?: string;
  placeholderView?: ReactNode;
  useInputAccessoryView?: boolean;
  contentInputAccessoryView?: ReactNode;
  buttonInputAccessoryView?: { title?: string; onPress: () => void };
  normalize?: (value: any) => any;
  transform?: (value: any) => string;
}

export const TextInputComp = forwardRef<TextInput, TextInputCompProps>(
  (
    {
      value,
      style,
      iconLeft,
      iconRight,
      errorText,
      inputStyle,
      containerStyle,
      placeholderView,
      inputAccessoryViewID,
      useInputAccessoryView,
      contentInputAccessoryView,
      buttonInputAccessoryView,
      normalize,
      transform,
      onChangeText,
      ...restProps
    },
    ref,
  ) => {
    if (useInputAccessoryView && !inputAccessoryViewID) {
      // eslint-disable-next-line no-console
      console.warn('TextInputComp: useInputAccessoryView = true but inputAccessoryViewID is null');
    }

    const handleChangeText = (text: string) => {
      onChangeText?.(normalize ? normalize(text) : text);
    };

    const _value = transform ? transform(value) : value;

    return (
      <View style={[styles.container, style]}>
        <View
          style={[
            styles.inputContainer,
            containerStyle,
            errorText ? styles.errorField : {},
            restProps.editable === false ? { backgroundColor: '#F2F2F2' } : {},
          ]}>
          <View style={styles.inputSubContainer}>
            {iconLeft ? iconLeft : null}
            {placeholderView && isEmptyString(_value) ? (
              <View style={styles.inputPlaceholderView}>{placeholderView}</View>
            ) : null}
            <TextInput
              ref={ref}
              value={_value}
              selectionColor={Colors.gray}
              onChangeText={handleChangeText}
              placeholderTextColor={Colors.gray}
              inputAccessoryViewID={inputAccessoryViewID}
              style={[styles.input, restProps.multiline ? styles.inputMultiline : {}, inputStyle]}
              {...restProps}
            />
            {iconRight ? iconRight : null}
          </View>
        </View>

        {errorText && (
          <View style={styles.wrapTextError}>
            <TextError style={{ fontSize: fontScale(13) }} message={errorText} />
          </View>
        )}

        {DeviceUtils.isIOS && useInputAccessoryView ? (
          <InputAccessoryView nativeID={inputAccessoryViewID}>
            {contentInputAccessoryView ? (
              contentInputAccessoryView
            ) : (
              <Box
                borderTopWidth={0.5}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                borderTopColor={Colors.gray}
                backgroundColor={Colors.white}>
                <Box width={50} />
                <TextComp numberOfLines={1} style={styles.textPlaceholder}>
                  {restProps.placeholder}
                </TextComp>
                <Button
                  title={buttonInputAccessoryView?.title || 'Done'}
                  onPress={buttonInputAccessoryView?.onPress ? buttonInputAccessoryView?.onPress : Keyboard.dismiss}
                />
              </Box>
            )}
          </InputAccessoryView>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    borderRadius: 8,
    borderWidth: 0.6,
    justifyContent: 'center',
    borderColor: Colors.semiGray,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    height: scale(25),
    fontSize: fontScale(15),
    color: Colors.textBlack,
    textAlignVertical: 'center',
    fontFamily: Fonts.REGULAR,
  },
  inputPlaceholderView: {
    position: 'absolute',
  },
  textPlaceholder: {
    flex: 1,
    fontSize: fontScale(12),
    textAlign: 'center',
  },
  inputMultiline: {
    minHeight: scale(50),
    maxHeight: scale(50),
    textAlignVertical: 'top',
  },
  errorField: {
    borderColor: Colors.red,
  },
  wrapTextError: {
    marginTop: scale(3),
    marginHorizontal: scale(5),
  },
});

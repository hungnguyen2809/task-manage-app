import React from 'react';
import { Control, Path, useController } from 'react-hook-form';
import { TextInputComp, TextInputCompProps } from './..';

interface TextInputFieldProps<T extends Record<string, any>> extends TextInputCompProps {
  name: Path<T>;
  control: Control<T>;
}

export const TextInputField = <T extends Record<string, any>>({ name, control, ...props }: TextInputFieldProps<T>) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <TextInputComp
      ref={field.ref}
      value={field.value}
      onBlur={field.onBlur}
      onChangeText={field.onChange}
      errorText={fieldState.error?.message}
      {...props}
    />
  );
};

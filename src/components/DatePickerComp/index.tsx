import React from 'react';
import RNDatePicker, { DatePickerProps as RNDatePickerProps } from 'react-native-date-picker';

interface DatePickerProps extends Omit<RNDatePickerProps, 'onDateChange' | 'modal'> {}

export const DatePickerComp: React.FC<DatePickerProps> = ({ onConfirm, ...props }) => {
  const handleConfirm = (date: Date) => {
    onConfirm?.(date);
    props.onCancel?.();
  };

  return (
    <RNDatePicker
      modal
      locale="vi"
      mode="date"
      title="Chọn ngày"
      cancelText="Hủy"
      confirmText="Xác nhận"
      onConfirm={handleConfirm}
      androidVariant="nativeAndroid"
      {...props}
    />
  );
};

import React, { forwardRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Container = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

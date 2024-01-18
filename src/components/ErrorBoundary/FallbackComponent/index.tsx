import { Fonts } from '@/constants';
import { fontScale, scale } from '@/utils';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Props = { error: Error; resetError: () => void };

const FallbackComponent: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.subtitle}>Đã có lỗi xảy ra !</Text>
        <Text style={styles.error}>{props.error.toString()}</Text>

        <TouchableOpacity style={styles.button} onPress={props.resetError}>
          <Text style={styles.buttonText}>Thử lại</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    marginHorizontal: scale(16),
  },
  title: {
    color: '#000',
    fontSize: fontScale(48),
    paddingBottom: scale(16),
    fontFamily: Fonts.REGULAR,
  },
  subtitle: {
    color: '#000',
    fontSize: fontScale(32),
    fontFamily: Fonts.BOLD,
  },
  error: {
    paddingVertical: scale(16),
    fontFamily: Fonts.REGULAR,
  },
  button: {
    borderRadius: 50,
    padding: scale(15),
    fontSize: fontScale(15),
    backgroundColor: '#2196f3',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.SEMI,
  },
});

export default FallbackComponent;

import { Colors, Fonts } from '@/constants';
import { fontScale } from '@/utils';
import React from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

type ProgressCircleProps = Progress.CirclePropTypes & {
  size?: number;
  progress?: number;
  textSize?: number;
  textColor?: ColorValue;
};

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  size,
  progress,
  textSize,
  textColor,
  textStyle,
  ...restProps
}) => {
  return (
    <Progress.Circle
      showsText
      size={size}
      thickness={6}
      borderWidth={0}
      strokeCap="round"
      progress={progress}
      unfilledColor={Colors.semiGray}
      textStyle={{
        ...styles.textProgress,
        ...(textColor ? { color: textColor } : {}),
        ...(textSize ? { fontSize: textSize } : {}),
        ...textStyle,
      }}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  textProgress: {
    color: Colors.white,
    fontFamily: Fonts.BOLD,
    fontSize: fontScale(16),
  },
});

import { Colors } from '@/constants';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, ProgressCircle, TagComp, TextComp } from './../';

type CardProgressProps = {
  title?: string;
  titleSub?: string;
  progress?: number;
  dateTime?: string;
};

export const CardProgress: React.FC<CardProgressProps> = ({ title, titleSub, dateTime, progress = 0 }) => {
  return (
    <Box variant="card" style={styles.container}>
      <Box vStack gap={3} alignItems="flex-start">
        <TextComp size={17} font="semi" numberOfLines={1}>
          {title}
        </TextComp>
        <TextComp size={13} color={Colors.gray}>
          {titleSub}
        </TextComp>

        <TagComp title={dateTime} bgColor={Colors.blue} borderRadius={15} />
      </Box>

      <Box width={75} vStack justifyContent="center" alignItems="flex-end">
        <ProgressCircle size={70} progress={progress} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

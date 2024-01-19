import { Colors } from '@/constants';
import { scale } from '@/utils';
import { Edit } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Box, TextComp, TouchableComp } from '..';

type CardTaskProps = {
  title: string;
  description?: string;
  dueDate?: string;
  progress?: number;
};

export const CardTask: React.FC<CardTaskProps> = ({ dueDate, title, description, progress }) => {
  return (
    <Box variant="card" borderRadius={15}>
      <Box style={styles.wrapBtnEdit}>
        <TouchableComp style={styles.btnEdit}>
          <Edit size="20" color={Colors.white} />
        </TouchableComp>
      </Box>

      <Box gap={5}>
        <TextComp size={20} font="bold" numberOfLines={1}>
          {title}
        </TextComp>
        {description ? <TextComp numberOfLines={3}>{description}</TextComp> : null}
      </Box>

      {progress !== null && progress !== undefined ? (
        <Box style={styles.space}>
          <Progress.Bar
            height={8}
            width={null}
            borderWidth={0}
            progress={progress}
            color={Colors.clearBlue}
            unfilledColor={Colors.semiGray}
          />

          <Box marginTop={5} hStack justifyContent="space-between">
            <TextComp color={Colors.lightGray}>Progress</TextComp>
            <TextComp font="bold">{(progress * 100).toFixed(0)} %</TextComp>
          </Box>
        </Box>
      ) : null}

      {dueDate ? (
        <TextComp style={styles.space} color={Colors.lightGray}>
          {dueDate}
        </TextComp>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  space: {
    marginTop: scale(30),
  },
  wrapBtnEdit: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: scale(15),
  },
  btnEdit: {
    borderRadius: 50,
    padding: scale(8),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

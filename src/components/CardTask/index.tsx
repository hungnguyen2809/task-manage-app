import { Colors, Styles } from '@/constants';
import { scale } from '@/utils';
import { Edit2 } from 'iconsax-react-native';
import React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { AvatarGroup, Box, TextComp, TouchableComp } from '..';

type CardTaskProps = {
  title: string;
  description?: string;
  dueDate?: string;
  bgColor?: string;
  progress?: number;
  progressSize?: number;
  progressColor?: string;
  progressUnfilledColor?: string;
  listUser?: ImageSourcePropType[];
};

export const CardTask: React.FC<CardTaskProps> = ({
  title,
  bgColor,
  description,
  listUser,
  dueDate,
  progress,
  progressSize = 6,
  progressColor = Colors.clearBlue,
  progressUnfilledColor = '#dcdde1',
}) => {
  return (
    <Box variant="card" borderRadius={15} style={!!bgColor && { backgroundColor: bgColor }}>
      <Box style={styles.wrapBtnEdit}>
        <TouchableComp style={styles.btnEdit}>
          <Edit2 size="20" color={Colors.white} />
        </TouchableComp>
      </Box>

      <Box gap={5}>
        <TextComp style={Styles.flex1} size={20} font="bold" numberOfLines={1}>
          {title}
        </TextComp>
        {description ? (
          <TextComp style={Styles.flex1} numberOfLines={3}>
            {description}
          </TextComp>
        ) : null}
      </Box>

      <Box style={styles.mt30}>
        {listUser?.length ? <AvatarGroup size={25} style={styles.mb10} of={listUser} /> : null}

        {progress !== null && progress !== undefined ? (
          <>
            <Progress.Bar
              width={null}
              borderWidth={0}
              progress={progress}
              color={progressColor}
              height={progressSize}
              unfilledColor={progressUnfilledColor}
            />
            <Box marginTop={5} hStack justifyContent="space-between">
              <TextComp color={Colors.lightGray}>Progress</TextComp>
              <TextComp font="bold">{(progress * 100).toFixed(0)}%</TextComp>
            </Box>
          </>
        ) : null}
      </Box>

      {dueDate ? (
        <TextComp style={styles.mt30} color={Colors.lightGray}>
          {dueDate}
        </TextComp>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  mt30: {
    marginTop: scale(30),
  },
  mb10: {
    marginBottom: scale(10),
  },
  wrapBtnEdit: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: scale(15),
  },
  btnEdit: {
    borderRadius: 50,
    padding: scale(8),
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});

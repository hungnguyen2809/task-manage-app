import {
  AppHeader,
  Box,
  ButtonComp,
  CardProgress,
  CardTask,
  Container,
  ProgressCircle,
  TextComp,
  TouchableComp,
} from '@/components';
import { Colors, ROUTES, Styles } from '@/constants';
import { navigationService } from '@/navigator';
import { fontScale, scale } from '@/utils';
import { AddCircle, Element4, Notification, SearchNormal1 } from 'iconsax-react-native';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fakeAvatar = [
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
  require('@/assets/images/avatar.jpeg'),
];

const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();

  const handleSearchTask = () => {
    navigationService.navigate(ROUTES.SearchTask);
  };

  const handleAddTask = () => {
    navigationService.navigate(ROUTES.AddTask);
  };

  return (
    <Container>
      <AppHeader
        iconLeft={<Element4 size="24" color={Colors.white} />}
        iconRight={<Notification size="24" color={Colors.white} />}
      />

      <ScrollView>
        <Box variant="main">
          <TextComp text="Hi, Jason" />
          <TextComp size={16} font="semi" text="Be production today" />
          <Box variant="separator" />

          <TouchableComp onPress={handleSearchTask} style={styles.btnSearch}>
            <TextComp color={Colors.lightGray}>Search task</TextComp>
            <SearchNormal1 size="20" color={Colors.lightGray} />
          </TouchableComp>
          <Box variant="separator" />

          <CardProgress title="Task Progress" titleSub="25/40 task done" progress={0.63} dateTime="Marh 22" />
          <Box variant="separator" />

          <Box hStack gap={16}>
            <Box flex={1}>
              <CardTask
                progress={0.7}
                progressSize={8}
                bgColor="#6c5ce7"
                title="UX Design"
                dueDate="Due: 24 Mar 2024"
                listUser={fakeAvatar}
                description="Task management mobile app"
              />
            </Box>
            <Box gap={16} flex={1}>
              <CardTask
                title="Api Payment"
                progress={0.4}
                bgColor="#4b7bec"
                progressColor="#44bd32"
                listUser={fakeAvatar}
              />
              <CardTask title="Update work" description="Revison home page" bgColor="#44bd32" />
            </Box>
          </Box>
          <Box variant="separator" />

          <TextComp size={18} font="semi" text="Ugrent Task" />
          <Box variant="card" hStack gap={15} alignItems="center">
            <ProgressCircle size={45} thickness={4} textSize={fontScale(13)} />
            <TextComp style={Styles.flex1} text="Write api for calc salary" numberOfLines={1} />
          </Box>
        </Box>

        <Box height={scale(100)} />
      </ScrollView>

      <Box style={[styles.wrapBtnAdd, { bottom: Math.max(styles.wrapBtnAdd.bottom, insets.bottom) }]}>
        <ButtonComp onPress={handleAddTask} title="Add new task" icon={<AddCircle size="18" color={Colors.white} />} />
      </Box>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  btnSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: scale(8),
    paddingVertical: scale(12),
    paddingHorizontal: scale(18),
    backgroundColor: Colors.drakGray,
  },
  wrapBtnAdd: {
    left: 0,
    width: '100%',
    bottom: scale(20),
    position: 'absolute',
    paddingHorizontal: scale(16),
  },
});

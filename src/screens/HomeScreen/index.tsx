import { AppHeader, Box, CardProgress, CardTask, Container, TextComp, TouchableComp } from '@/components';
import { Colors } from '@/constants';
import { scale } from '@/utils';
import { Element4, Notification, SearchNormal1 } from 'iconsax-react-native';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
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

          <TouchableComp style={styles.btnSearch}>
            <TextComp color={Colors.lightGray}>Search task</TextComp>
            <SearchNormal1 size="20" color={Colors.lightGray} />
          </TouchableComp>

          <Box variant="separator" />

          <CardProgress title="Task Progress" titleSub="25/40 task done" progress={25 / 40} dateTime="Marh 22" />

          <Box variant="separator" />

          <Box hStack gap={16}>
            <Box flex={1}>
              <CardTask
                progress={0.7}
                title="UX Design"
                description="Task management mobile app"
                dueDate="Due: 24 Mar 2024"
              />
            </Box>
            <Box gap={16} flex={1}>
              <CardTask title="Api Payment" progress={0.4} />
              <CardTask title="Update work" description="Revison home page" />
            </Box>
          </Box>
        </Box>
      </ScrollView>
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
});

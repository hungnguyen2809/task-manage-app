import { AppHeader, Box, Container, Each, TextComp } from '@/components';
import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <AppHeader title="Home" />

      <Box variant="main">
        <TextComp text="Hi, Jason" />
        <TextComp size={16} font="semi" text="Be production today" />

        <Box variant="separator" />

        <Each of={[1, 2, 3, 4, 5]} render={(item, idx) => <TextComp key={idx} text={item} />} />
      </Box>
    </Container>
  );
};

export default HomeScreen;

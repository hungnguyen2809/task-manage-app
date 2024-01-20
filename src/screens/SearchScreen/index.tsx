import { AppHeader, Container, TextComp } from '@/components';
import React from 'react';

const SearchScreen: React.FC = () => {
  return (
    <Container>
      <AppHeader showBack title="Search task" />

      <TextComp>SearchScreen</TextComp>
    </Container>
  );
};

export default SearchScreen;

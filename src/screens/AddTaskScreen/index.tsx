import { AppHeader, Container, TextComp } from '@/components';
import React from 'react';

const AddTaskScreen: React.FC = () => {
  return (
    <Container>
      <AppHeader showBack title="Add new task" />
      <TextComp>AddTaskScreen</TextComp>
    </Container>
  );
};

export default AddTaskScreen;

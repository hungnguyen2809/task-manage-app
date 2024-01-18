import { navLinking } from '@/constants';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { setNavigator } from '..';
import MainStack from '../MainStack';

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer linking={navLinking} ref={setNavigator}>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigation;

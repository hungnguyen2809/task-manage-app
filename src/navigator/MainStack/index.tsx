import { ROUTES, screenOptions } from '@/constants';
import AddTaskScreen from '@/screens/AddTaskScreen';
import HomeScreen from '@/screens/HomeScreen';
import SearchScreen from '@/screens/SearchScreen';
import SettingScreen from '@/screens/SettingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
      <Stack.Screen name={ROUTES.Setting} component={SettingScreen} />
      <Stack.Screen name={ROUTES.AddTask} component={AddTaskScreen} />
      <Stack.Screen name={ROUTES.SearchTask} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;

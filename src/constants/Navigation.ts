import { LinkingOptions } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const navLinking: LinkingOptions<any> = {
  prefixes: [],
};

export enum ROUTES {
  Home = 'Home',
  Setting = 'Setting',
}

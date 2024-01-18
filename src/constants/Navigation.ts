import { LinkingOptions } from '@react-navigation/native';

export const defaultOption = {
  headerShown: false,
};

export const navLinking: LinkingOptions<any> = {
  prefixes: [],
};

export enum ROUTES {
  Home = 'Home',
  Setting = 'Setting',
}

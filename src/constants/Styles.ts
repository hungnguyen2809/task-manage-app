import { scale } from '@/utils';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: scale(10),
    paddingHorizontal: scale(16),
  },
  separator: {
    height: scale(6),
    marginVertical: scale(10),
  },
  h10: {
    height: scale(10),
  },
  w10: {
    width: scale(10),
  },
  mh10: {
    marginHorizontal: scale(10),
  },
  mv10: {
    marginVertical: scale(10),
  },
});

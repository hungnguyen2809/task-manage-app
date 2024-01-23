import { scale } from '@/utils';
import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const Styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: scale(10),
    paddingHorizontal: scale(16),
  },
  separator: {
    height: scale(5),
    marginVertical: scale(10),
  },
  card: {
    borderRadius: 8,
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    backgroundColor: Colors.drakGray,
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
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
  mh16: {
    marginHorizontal: scale(16),
  },
  mv10: {
    marginVertical: scale(10),
  },
});

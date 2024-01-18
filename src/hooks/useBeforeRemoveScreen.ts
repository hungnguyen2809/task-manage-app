import { EventArg, useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';

type Event = EventArg<
  'beforeRemove',
  true,
  {
    action: Readonly<{
      type: string;
      payload?: object | undefined;
      source?: string | undefined;
      target?: string | undefined;
    }>;
  }
>;

export function useBeforeRemoveScreen(callback: (e: Event) => void): void {
  const navigation = useNavigation();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const listener = navigation.addListener('beforeRemove', (e) => {
      savedCallback.current(e);
    });

    return listener;
  }, [navigation]);
}

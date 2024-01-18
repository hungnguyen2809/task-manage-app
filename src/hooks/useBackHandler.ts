import { useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';

export function useBackHandler(callback: () => boolean): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', savedCallback.current);
    return () => backHandler.remove();
  }, []);
}

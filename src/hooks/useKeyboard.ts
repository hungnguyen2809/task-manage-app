import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, KeyboardStatic } from 'react-native';

/**
 * @returns keyboardOpen, keyboardHeight, Keyboard Instance
 */
export function useKeyboard(): readonly [boolean, number, KeyboardStatic] {
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    const keyboardDidShow = (event: KeyboardEvent) => {
      setKeyboardOpen(true);
      setKeyboardHeight(event.endCoordinates.height);
    };

    const keyboardDidHide = () => {
      setKeyboardOpen(false);
      setKeyboardHeight(0);
    };

    const listenerShow = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const listenerHide = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      listenerShow.remove();
      listenerHide.remove();
    };
  }, []);

  return [keyboardOpen, keyboardHeight, Keyboard] as const;
}

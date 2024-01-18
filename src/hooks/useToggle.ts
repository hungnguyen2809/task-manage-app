import { Dispatch, SetStateAction, useCallback, useState } from 'react';

/**
 * @param initState default: false
 */
export function useToggle(initState = false): readonly [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [open, setOpen] = useState(initState);

  const onToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return [open, onToggle, setOpen];
}

import React, { Children } from 'react';

type EachProps<T> = {
  of: T[];
  render: (item: T, index: number) => React.ReactNode;
};

export const Each = <T extends {}>({ of, render }: EachProps<T>) => {
  if (!Array.isArray(of) || typeof render !== 'function') return null;
  return Children.toArray(of.map(render));
};

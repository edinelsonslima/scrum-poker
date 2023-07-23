import { PropsWithChildren } from 'react';

export function Active({ children }: PropsWithChildren) {
  return <div className='active:brightness-75 transition-all'>{children}</div>;
}

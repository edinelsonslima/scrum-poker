import { PropsWithChildren } from 'react';

export function Hover({ children }: PropsWithChildren) {
  return <div className='hover:brightness-150 transition-all'>{children}</div>;
}

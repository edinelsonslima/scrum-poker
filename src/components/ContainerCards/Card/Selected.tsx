import { PropsWithChildren } from 'react';

import IconCheck from '@/Assets/icons/check';

export function Selected({
  children,
  isSelected,
}: PropsWithChildren<{ isSelected: boolean }>) {
  return (
    <div
      className={`border-2 relative ${
        isSelected ? 'border-gray-800' : 'border-transparent'
      } rounded-lg p-px`}
    >
      {children}
      <IconCheck
        className={`absolute bottom-2 right-2 stroke-green-400 z-10 ${
          isSelected ? 'block' : 'hidden'
        } transition-all`}
      />
    </div>
  );
}

import { PropsWithChildren } from 'react';
import { Active } from './Active';
import { Hover } from './Hover';
import { Selected } from './Selected';

interface CardProps {
  isSelected: boolean;
}

export function Card({ isSelected, children }: PropsWithChildren<CardProps>) {
  return (
    <Selected isSelected={isSelected}>
      <Hover>
        <Active>
          <p
            title={`Clique para marcar/desmarcar ${children}`}
            className='flex items-center justify-center w-20 h-28 text-xl font-bold text-center text-white bg-gray-800 rounded-lg shadow-lg cursor-pointer select-none'
          >
            {children}
          </p>
        </Active>
      </Hover>
    </Selected>
  );
}

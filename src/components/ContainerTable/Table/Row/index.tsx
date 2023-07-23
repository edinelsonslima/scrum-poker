import { IUser } from '@/types';
import { PropsWithChildren } from 'react';

interface RowProps extends Omit<IUser, 'id'> {
  showPoints: boolean;
}

export function Row({ name, point, showPoints }: RowProps) {
  return (
    <tr className='odd:bg-gray-100 even:bg-gray-200'>
      <Td>{name}</Td>
      <Td>{showPoints ? (point ? point : 'null') : '??'}</Td>
    </tr>
  );
}

function Td({ children }: PropsWithChildren) {
  return (
    <td className='p-2 text-center whitespace-nowrap'>
      <p className='leading-5 font-semibold text-gray-800'>{children}</p>
    </td>
  );
}

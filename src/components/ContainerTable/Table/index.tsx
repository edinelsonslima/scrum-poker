import { PropsWithChildren } from 'react';
import { Row } from './Row';

export { Row };

interface TableProps {
  showPoints: boolean;
}

export function Table({ children, showPoints }: PropsWithChildren<TableProps>) {
  return (
    <table className='min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-lg'>
      <thead className='bg-gray-500 text-white'>
        <tr>
          <th className='p-2'>Nome</th>
          <th className='p-2'>Story Points</th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>{children}</tbody>
    </table>
  );
}

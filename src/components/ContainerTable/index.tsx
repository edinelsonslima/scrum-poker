import { IRoom } from '@/types';
import { Actions } from './Actions';
import { Row, Table } from './Table';

export function ContainerTable({ room }: { room: IRoom }) {
  return (
    <div className='flex flex-col gap-2'>
      <Actions />

      <Table showPoints={false}>
        {room?.users?.map(({ id, name, point }) => (
          <Row
            key={id}
            name={name}
            point={point}
            showPoints={room?.showPoints}
          />
        ))}
      </Table>
    </div>
  );
}

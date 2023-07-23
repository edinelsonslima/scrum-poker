import { ContainerCards } from '@/components/ContainerCards';
import { ContainerTable } from '@/components/ContainerTable';
import { IRoom } from '@/types';

interface IPageParams {
  params: { id: string };
}

export default async function ScrumPoker({ params }: IPageParams) {
  const response = await fetch(`http://localhost:3000/api/room`, {
    body: JSON.stringify({ roomId: params.id }),
  });

  const room: IRoom = await response.json();

  return (
    <main className='grid gap-10 max-w-3xl px-2 mx-auto'>
      <ContainerCards />
      <ContainerTable room={room} />
    </main>
  );
}

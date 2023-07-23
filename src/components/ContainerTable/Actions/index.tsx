import IconCheck from '@/Assets/icons/check';
import IconTrash from '@/Assets/icons/trash';
import { Button } from './Button';

export function Actions() {
  return (
    <div className='flex justify-end gap-10'>
      <Button
        className='hover:text-red-700'
        title='Limpar todos os story points'
      >
        <IconTrash />
        Limpar
      </Button>

      <Button
        className='hover:text-green-700'
        title='Revelar todos os story points'
      >
        <IconCheck />
        Revelar
      </Button>
    </div>
  );
}

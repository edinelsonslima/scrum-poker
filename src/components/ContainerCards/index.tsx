'use client';

import { ScrumCard } from '@/components/ContainerCards/ButtonCard';
import { useState } from 'react';
import CARD_CONTENT from './contents';

export function ContainerCards() {
  const [scrumCardId, setScrumCardId] = useState('');

  return (
    <div className='mt-10 flex flex-wrap justify-around gap-5'>
      {CARD_CONTENT.map(({ content, id }) => (
        <ScrumCard
          id={id}
          key={id}
          onSelected={setScrumCardId}
          isSelected={id === scrumCardId}
        >
          {content}
        </ScrumCard>
      ))}
    </div>
  );
}

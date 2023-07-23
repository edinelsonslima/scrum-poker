'use client';

import { PropsWithChildren } from 'react';
import { Card } from '../Card';

interface ScrumCardProps {
  id: string;
  isSelected: boolean;
  onSelected: (isSelected: string) => void;
}

export function ScrumCard({
  id,
  children,
  isSelected,
  onSelected,
}: PropsWithChildren<ScrumCardProps>) {
  return (
    <button onClick={() => onSelected(id)}>
      <Card isSelected={isSelected}>{children}</Card>
    </button>
  );
}

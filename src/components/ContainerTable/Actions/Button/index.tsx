import { clsx } from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex items-center justify-center gap-1 transition-all active:scale-95',
        className
      )}
    >
      {children}
    </button>
  );
}

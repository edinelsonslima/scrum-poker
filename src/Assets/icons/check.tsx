import { SVGProps, memo } from 'react';

function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='lucide lucide-check-check'
      {...props}
    >
      <path d='M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16' />
    </svg>
  );
}

export default memo(IconCheck);

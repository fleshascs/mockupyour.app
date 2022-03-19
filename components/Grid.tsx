import { ReactNode } from 'react';

export function Row({ children }: { children: ReactNode }) {
  return <div className='flex flex-col lg:flex-row lg:space-x-4 pb-14'>{children}</div>;
}

export function Col({ children }: { children: ReactNode }) {
  return <div className='basis-1/2'>{children}</div>;
}

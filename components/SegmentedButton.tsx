import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';

const SegmentedButton = forwardRef<
  { el: any },
  { active: boolean; children: ReactNode; onClick: () => void }
>((props, ref) => {
  const { children, ...rest } = props;

  const elRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));

  return (
    <button
      ref={elRef}
      {...rest}
      className='uppercase flex text-center justify-center items-center appearance-none px-2 py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10 w-full flex relative duration-100 font-semibold rounded duration-0 text-sm h-7'
    >
      {children}
    </button>
  );
});

SegmentedButton.displayName = 'SegmentedButton';

export default SegmentedButton;

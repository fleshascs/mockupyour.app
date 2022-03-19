import React, { ReactNode, FC } from 'react';

interface SegmentedProps {
  children: ReactNode;
  activeButtonIndex?: number;
  childButtonsLength?: number;
}

const Segmented: FC<SegmentedProps> = (props) => {
  const { children, activeButtonIndex = undefined, childButtonsLength = undefined } = props;
  let buttonsLength = childButtonsLength;
  let activeIndex = activeButtonIndex;
  if (
    typeof activeIndex === 'undefined' &&
    children &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (children.length || children.type === React.Fragment)
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const elements = children.type === React.Fragment ? children.props.children : children;
    if (typeof buttonsLength === 'undefined') {
      buttonsLength = elements.length || 0;
    }

    const activeButton = elements.filter(
      (child) => child.props && (child.props.active || child.props.segmentedActive)
    )[0];
    activeIndex = elements.indexOf(activeButton);
  }

  const between = '4px';
  const padding = '2px';
  const highlightWidth = `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`;
  const highlightTranslate = `calc(${activeIndex} * 100% + ${activeIndex} * ${between})`;

  return (
    <div className='flex justify-center items-center overflow-hidden w-full rounded p-0.5 bg-black bg-opacity-5 space-x-1 relative dark:bg-white dark:bg-opacity-10'>
      {children}
      <span
        className='absolute left-0.5 top-0.5 bottom-0.5 !ml-0 pointer-events-none duration-200 rounded bg-white shadow dark:bg-opacity-15 dark:touch-ripple-white'
        style={{
          width: highlightWidth,
          transform: `translateX(${highlightTranslate})`
        }}
      ></span>
    </div>
  );
};

Segmented.displayName = 'Segmented';

export default Segmented;

import { FC } from 'react';

const Icon: FC<{ color?: 'string'; className?: string }> = (props) => {
  const { className, color } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={color ?? 'currentColor'}
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.1'
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 122.06 122.88'
      xmlSpace='preserve'
      className={className}
      stroke='currentColor'
    >
      <g>
        <path d='M82.61,108.56h17.77v14.32l-17.77,0V108.56L82.61,108.56L82.61,108.56z M14.32,22.37v17.77L0,40.14V22.37 L14.32,22.37L14.32,22.37z M18.93,3.9H36.7v18.48l54.67,0L113.84,0l8.22,8.27l-21.05,20.96v57.11l17.13,0v17.77H18.93V3.9 L18.93,3.9z M73.52,40.14H36.69V76.8L73.52,40.14L73.52,40.14z M43.63,86.33h39.61V46.91L43.63,86.33L43.63,86.33z' />
      </g>
    </svg>
  );
};

export default Icon;

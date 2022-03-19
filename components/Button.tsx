import { FC, ReactNode } from 'react';

export const Button: FC<{
  children: ReactNode;
  variant?: 'primary' | 'dashed';
  onClick?: () => void;
}> = ({ variant, children, ...rest }) => {
  let classes = 'space-x-3 px-4 py-2 flex items-center rounded-lg border ';
  switch (variant) {
    case 'dashed':
      classes += 'text-indigo-500 border-indigo-500 hover:bg-gray-100 border-dashed';
      break;
    default:
      classes +=
        'text-gray-600 transition-colors duration-200 transform hover:bg-gray-100 focus:outline-none';
      break;
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

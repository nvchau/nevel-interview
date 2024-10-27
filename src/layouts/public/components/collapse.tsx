import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { PropsWithChildren, useState } from 'react';

import { useWindowResize } from '@/hooks';

type Props = PropsWithChildren & {
  row: React.ReactNode;
};

export const Collapse = ({ row, children }: Props) => {
  const { isMobileScreen } = useWindowResize();
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center">
        {row}
        {isMobileScreen && (
          <>
            {!collapse ? (
              <PlusOutlined onClick={() => setCollapse(!collapse)} className="hover:text-black-1 focus:text-black-1 active:text-black-1" />
            ) : (
              <MinusOutlined onClick={() => setCollapse(!collapse)} className="hover:text-black-1 focus:text-black-1 active:text-black-1" />
            )}
          </>
        )}
      </div>
      {isMobileScreen ? (
        <div className={clsx('overflow-hidden transition-all duration-600 ease-in-out', collapse ? 'max-h-full opacity-100' : 'max-h-0 opacity-0')}>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
};

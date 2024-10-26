import { Typography as TypographyAntd } from 'antd';
import clsx from 'clsx';

import { TypographyProps } from './declare';

export const Typography = ({ children, className, size = 'normal' }: TypographyProps) => {
  return (
    <div className="custom-typography">
      <TypographyAntd className={clsx(size, className)}>{children}</TypographyAntd>
    </div>
  );
};

export const Paragraph = ({ children, className, size = 'normal' }: TypographyProps) => {
  return (
    <div className="custom-typography">
      <TypographyAntd.Paragraph className={clsx(size, className)}>{children}</TypographyAntd.Paragraph>
    </div>
  );
};

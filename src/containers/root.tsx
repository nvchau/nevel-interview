import { LAYOUT_TYPE } from '@/layouts/declare';
import { PrivateLayout } from '@/layouts/private';
import { PublicLayout } from '@/layouts/public';

type RootProps = {
  children: React.ReactNode;
  layout?: LAYOUT_TYPE;
};

export const Root = ({ children, layout }: RootProps) => {
  switch (layout) {
    case LAYOUT_TYPE.PUBLIC:
      return <PublicLayout>{children}</PublicLayout>;

    case LAYOUT_TYPE.PRIVATE:
      return <PrivateLayout>{children}</PrivateLayout>;

    default:
      return children;
  }
};

import { IconName } from '@/components/icons/constants';

export interface ProductCarouselProps {
  title?: string;
  filter?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  childrenClassName?: string;
}

export interface MultipleProductItemI {
  title: string;
  description: string;
  icon: IconName;
  className?: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  imageUrl5: string;
}

import { Button } from "antd";
import clsx from "clsx";
import { PropsWithChildren } from "react";

import { Typography } from "@/components";
import { NextIcon } from "@/components/icons/components/nextIcon";
import { PreIcon } from "@/components/icons/components/preIcon";
import { useWindowResize } from "@/hooks";

import { ProductCarouselProps } from "../../declare";

export const ProductCarousel = ({ title, children, className, titleClassName, childrenClassName, filter }: ProductCarouselProps & PropsWithChildren) => {
  const { isMobileScreen } = useWindowResize();

  return (
    <div className={clsx('product-carousel', className)}>
      <div className="flex justify-between">
        <Typography size="large" className={clsx('font-semibold title', titleClassName)}>
          {title}
        </Typography>
        <div className="flex">
          {!isMobileScreen && (
            <div className="flex sm:hidden load-more">
              <Button type="text">
                <PreIcon />
              </Button>
              <Button type="text">
                <NextIcon />
              </Button>
            </div>
          )}
          <div className="hidden sm:block">{filter}</div>
        </div>
      </div>
      <div className={clsx('content', childrenClassName)}>{children}</div>
    </div>
  );
};

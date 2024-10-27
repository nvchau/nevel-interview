import { Button } from "antd";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import React from "react";

import { Typography } from "@/components";
import { useWindowResize } from "@/hooks";

export const SingleProduct = ({ title, description, image, thumbnail }: { title: string, description: string, image: string, thumbnail: string }) => {
  const { t } = useTranslation('home');
  const { isMobileScreen } = useWindowResize();

  return (
    <div className="single-product">
      <div className="image h-[221px] sm:h-[180px] mb-[30px]">
        <Image src={thumbnail} alt={title} layout="fill" className="object-cover" />
      </div>
      <div className="flex items-center gap-5 sm:px-5">
        <Image src={image} alt={title} width={isMobileScreen ? 60 : 90} height={isMobileScreen ? 60 : 90} />
        <div>
          <Typography className="title">{title}</Typography>
          <Typography className="description">{description}</Typography>
        </div>
        <Button type="default" size="small" className="sm:hidden w-[75px] h-[28px] rounded-[3px] font-semibold">
          {t('hotGame.view')}
        </Button>
      </div>
      {isMobileScreen && (
        <div className="flex justify-between mt-6 px-5 pb-6">
          <div>
            <Typography className="title">{'MEDIUM'}</Typography>
            <Typography className="description">{'Volatility'}</Typography>
          </div>
          <div>
            <Typography className="title">{'95.01%'}</Typography>
            <Typography className="description">{'RTP'}</Typography>
          </div>
          <div>
            <Typography className="title">{'x5000'}</Typography>
            <Typography className="description">{'Maximum Win'}</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

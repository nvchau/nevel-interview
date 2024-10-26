import clsx from 'clsx';
import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import React, { useMemo } from 'react';

import { Icon, Typography } from '@/components';
import { useWindowResize } from '@/hooks';

import { bannerList, bannerMobileList } from '../constants';
import { Carousel } from 'antd';

export const Banner = () => {
  const { t } = useTranslation('common');
  const { isMobileScreen } = useWindowResize();

  const banners = useMemo(() => {
    return isMobileScreen ? bannerMobileList : bannerList;
  }, [isMobileScreen]);

  return (
    <div className="public-layout-banner">

      <Carousel
        dots
        autoplay
        draggable
        slidesToShow={1}
        slidesToScroll={1}
        className="slider"
        autoplaySpeed={10000}
      >
        {banners?.map((item, index) => (
          <div key={index} className="max-h-[576px] sm:max-h-[420px] sm:relative">
            <Image src={item.imageUrl} alt={item.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className={clsx('hidden sm:block banner-mobile-title')}>
              <Typography size="normal" className="title mb-5">
                {item?.title}
              </Typography>
              <div className="flex gap-1 items-center justify-center">
                <Typography className="!text-white !text-[14px]">
                  {t('banner.detail')}
                </Typography>
                <Icon
                  name="arrow-right"
                  color="fill-white"
                  width={12}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

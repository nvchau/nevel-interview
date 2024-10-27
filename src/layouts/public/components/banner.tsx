import clsx from 'clsx';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import React, { useMemo } from 'react';
import Slider from 'react-slick';

import { Icon, Typography } from '@/components';
import { useWindowResize } from '@/hooks';

import { bannerList, bannerMobileList } from '../constants';

export const Banner = () => {
  const { t } = useTranslation('common');
  const { isMobileScreen } = useWindowResize();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const banners = useMemo(() => {
    return isMobileScreen ? bannerMobileList : bannerList;
  }, [isMobileScreen]);

  return (
    <div className="public-layout-banner overflow-hidden">
      <Slider {...settings} className="slider">
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
                <Icon name="arrow-right" color="fill-white" width={12} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

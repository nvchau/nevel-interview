import clsx from 'clsx';
// import useTranslation from "next-translate/useTranslation";
import Image from 'next/image';
import React, { useMemo } from 'react';
import Slider from 'react-slick';

import { Typography } from '@/components';
import { useWindowResize } from '@/hooks';

import { bannerList, bannerMobileList } from '../constants';

export const Banner = () => {
  // const { t } = useTranslation('common');
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
    <div className="public-layout-banner">
      <Slider {...settings} className="slider">
        {banners?.map((item, index) => (
          <div key={index} className="max-h-[576px] sm:max-h-[420px]">
            <Image src={item.imageUrl} alt={item.title} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className={clsx('hidden sm:block')}>
              <Typography size="medium">{item?.title}</Typography>
              {/* <Button type="text" icon={<ArrowRightOutlined />} iconPosition="end" className={style['top_page_layout__slider--view_detail']}>
                {t('banner.viewDetail')}
              </Button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

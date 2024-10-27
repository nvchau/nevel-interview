import useTranslation from "next-translate/useTranslation";
import React, { useMemo } from "react";

import { Icon, Typography } from "@/components";

import { Collapse } from "./collapse";

export const Footer = () => {
  const { t } = useTranslation('common');

  const footerMap = useMemo(
    () => [
      {
        title: t('footer.webMap'),
        children: ['Home', 'Games', 'News', 'Math', 'Company', 'Events', 'Partners'],
      },
      {
        title: t('footer.aboutUs'),
        children: ['Licensing', 'Certification', 'Responsible Gaming', 'Exhibitions', 'Copyright Protection', 'Privacy Policy'],
      },
      {
        title: t('footer.event'),
        children: ['PG ICE 2017', 'PG ICE 2018', 'PG ICE 2019', 'About ICE'],
      },
      {
        title: t('footer.partners'),
        children: ['Relax Gaming', 'Leander Games'],
      },
    ],
    []
  );

  return (
    <div className="border-t border-solid border-gray2 sm:border-none">
      <div className="public-layout-footer">
        <div className="footer-inner">
          <div>
            <Icon name="nevel-tech-logo-2" width={53} height={31} color="fill-gray" />
            <Typography size="caption" className="whitespace-pre-line sm:whitespace-normal mt-4 !text-gray">
              {t('footer.address')}
            </Typography>
            <Typography size="caption" className="leading-4 !text-gray hidden sm:block sm:mt-5">
              {t('footer.copyRight')}
            </Typography>

            <div className="flex gap-[15px] mt-10">
              <Icon name="twitter" width={20} height={20} className="cursor-pointer" />
              <Icon name="youtube" width={20} height={20} className="cursor-pointer" />
              <Icon name="linkedin" width={20} height={20} className="cursor-pointer" />
            </div>
          </div>

          <div className="footer-map">
            {footerMap?.map((item, index) => (
              <div key={index} className="item">
                <Collapse
                  row={
                    <Typography size="body" className="font-semibold text-black uppercase sm:text-[13px] sm:leading-[14px]">
                      {item?.title}
                    </Typography>
                  }
                >
                  <div className="children">
                    {item?.children?.map((child, childIndex) => (
                      <Typography
                        key={`${index}-${childIndex}`}
                        size="caption"
                        className="leading-3 !text-gray item cursor-pointer"
                      >
                        {child}
                      </Typography>
                    ))}
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </div>

        <div className="copyright sm:hidden">
          <Typography size="caption" className="leading-[14px] !text-gray">
            {t('footer.copyRight')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

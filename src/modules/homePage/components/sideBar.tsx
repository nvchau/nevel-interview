import { FilterOutlined } from '@ant-design/icons';
import { Input } from "antd";
import useTranslation from "next-translate/useTranslation";
import React, { useMemo } from "react";

import { Icon, Typography } from "@/components";
import { AllGameIcon } from "@/components/icons/components/allGameIcon";
import { HomeIcon } from "@/components/icons/components/homeIcon";
import { SearchIcon } from "@/components/icons/components/searchIcon";
import { TimeLineIcon } from "@/components/icons/components/timeLineIcon";
import { useWindowResize } from "@/hooks";

export const SideBar = () => {
  const { t } = useTranslation('home');
  const { isMobileScreen } = useWindowResize();

  const menu: {
    icon: React.JSX.Element,
    label: string
  }[] = useMemo(
    () => [
      {
        icon: <HomeIcon />,
        label: isMobileScreen ? t('menuMobile.home') : t('menu.home'),
      },
      {
        icon: <TimeLineIcon />,
        label: isMobileScreen ? t('menuMobile.timeLine') : t('menu.timeLine'),
      },
      {
        icon: <AllGameIcon />,
        label: isMobileScreen ? t('menuMobile.allGame') : t('menu.allGame'),
      },
    ],
    [isMobileScreen]
  );

  return (
    <div className="side-bar">
      <div className="search sm:hidden">
        <Input
          size="small"
          className="input p-0"
          prefix={<Icon name="search" width={20} height={20} />}
          placeholder={t('placeholder.search')}
        />
      </div>
      <div className="menu">
        {menu.map((item, index) => (
          <div key={index} className="item">
            <span>{item.icon}</span>
            <Typography className="title" size="normal">
              {item?.label}
            </Typography>
          </div>
        ))}
        {isMobileScreen && (
          <>
            <div className="item">
              <SearchIcon />
              <Typography className="title" size="normal">
                {t('menu.search')}
              </Typography>
            </div>
            <div className="item border-l border-solid border-gray3">
              <FilterOutlined />
              <Typography className="title" size="normal">
                {t('menu.filter')}
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

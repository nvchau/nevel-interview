import clsx from 'clsx';
import React from 'react';
import { ReactSVG } from 'react-svg';

import { IconName } from './constants';

interface IconProps {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
  fill?: string;
  removeFill?: boolean;
  onClick?: () => void;
}

export const Icon = ({ name, onClick, className, fill, color = '', hoverColor = '', width = 32, height = 32, removeFill = true }: IconProps) => {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        if (color) {
          svg?.classList?.add(color);
          const paths = svg.getElementsByTagName('path');
          paths[0]?.classList.add(color);
        }

        if (hoverColor) {
          svg?.classList?.add(hoverColor);
        }

        svg?.setAttribute('width', width + 'px');
        svg?.setAttribute('height', height + 'px');
        fill && svg?.setAttribute('fill', fill);
        removeFill && svg?.querySelectorAll('rect')?.[1]?.removeAttribute('fill');
      }}
      style={{ width: width, height: height }}
      className={clsx('icon-wrapper', className)}
      onClick={onClick}
      src={`/icons/${name}.svg`}
      wrapper="span"
    />
  );
};

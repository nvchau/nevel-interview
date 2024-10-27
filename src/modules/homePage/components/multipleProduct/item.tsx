import clsx from "clsx";
import Image from "next/image";
import React from "react";

import { Icon, Typography } from "@/components";

import { MultipleProductItemI } from "../../declare";

export const ProductItem = ({ product }: { product: MultipleProductItemI }) => {
  return (
    <div className="box-content">
      <div>
        <div className={clsx('box-text', product?.className)}>
          <Icon name={product.icon} width={20} height={20} className="cursor-pointer" />
          <Typography className="title">{product.title}</Typography>
          <Typography size="body" className="description">
            {product.description}
          </Typography>
        </div>
        <div className="mt-5 sm:mt-4 flex gap-5 sm:gap-4 justify-between">
          <div className="relative w-full h-[90px] sm:h-[76px]">
            <Image src={product?.imageUrl1} alt={product.title} layout="fill" />
          </div>
          <div className="relative w-full h-[90px] sm:h-[76px]">
            <Image src={product?.imageUrl2} alt={product.title} layout="fill" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-5 sm:gap-4 justify-between">
          <div className="relative w-full h-[90px] sm:h-[76px]">
            <Image src={product?.imageUrl3} alt={product.title} layout="fill" />
          </div>
          <div className="relative w-full h-[90px] sm:h-[76px]">
            <Image src={product?.imageUrl4} alt={product.title} layout="fill" />
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden mt-5 sm:mt-4 relative w-full h-full">
          <Image src={product?.imageUrl5} alt={product.title} layout="fill" />
        </div>
      </div>
    </div>
  );
};

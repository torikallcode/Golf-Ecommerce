import React from "react";
import { Image } from "../../Elements/Gambar/Image";

export const LastArticleCard = ({ image, title, readmore, classname }) => {
  return (
    <div className={`${classname} mb-6`} >
      <Image src={image} classname="w-full mb-4"></Image>
      <h1 className="font-utama text-base font-medium sm:text-2xl mb-2 md:text-3xl lg:text-base">{title}</h1>
      <h2 className="font-utama text-sm font-medium sm:text-xl pb-2 border-b border-black max-w-20 sm:max-w-32 md:text-2xl md:max-w-36 lg:text-sm lg:max-w-24">{readmore}</h2>
    </div>
  );
};

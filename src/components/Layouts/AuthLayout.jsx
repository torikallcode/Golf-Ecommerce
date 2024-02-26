import React from "react";
import { Home } from "../organisme/Home";
import { CarouselFeatured } from "../organisme/CarouselFeatured";
import { SelectFiture } from "../Fragments/SelectFiture";
import { Categories } from "../organisme/Categories";
import { Navbar } from "../organisme/Navbar/Navbar";
import { Discount } from "../organisme/Discount";
import { ShopCollection } from "../organisme/ShopCollection";
import { LatestArticle } from "../../utils/isian.jsx/LatestArticle";
import { LastArticleCard } from "../Fragments/Card/LastArticleCard";
import { HeadLA } from "../Fragments/HeadLA";

export const AuthLayout = () => {
  const products = [
    {
      id: 1,
      Image: "/img/fitur1.svg",
      price: "$24.99",
      title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 2,
      Image: "/img/fitur2.svg",
      price: "$24.99",
      title: "G/FORE - Mens Left Glove Snow 2023",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 3,
      Image: "/img/fitur3.svg",
      price: "$24.99",
      title: "Utility Rover-R Double Strap Bag All Black - 2023",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 4,
      Image: "/img/fitur4.svg",
      price: "$24.99",
      title: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 5,
      Image: "/img/kategori31.svg",
      price: "$24.99",
      title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 6,
      Image: "/img/kategori2.svg",
      price: "$24.99",
      title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
    {
      id: 7,
      Image: "/img/kategori5.svg",
      price: "$24.99",
      title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
    },
  ];

  const kategori = [
    { id: 1, image: "/img/kategori.svg", Text: "Golf Clubs" },
    { id: 2, image: "/img/kategori2.svg", Text: "Golf Balls" },
    { id: 3, image: "/img/kategori3.svg", Text: "Golf Bags" },
    { id: 4, image: "/img/kategori4.svg", Text: "Clothing & Rainwear" },
    { id: 5, image: "/img/kategori5.svg", Text: "Footwear" },
    { id: 6, image: "/img/kategori6.svg", Text: "Accessories" },
  ];

  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Home />
      <div className="px-8 pt-8 flex flex-col xl:max-w-[80rem] bigger:max-w-[120rem]  mx-auto mb-10 lg:mb-20">
        <SelectFiture classname="mb-8" />
        <CarouselFeatured products={products} classname="mb-[72px] lg:mb-32" />
        <Categories kategori={kategori} />
      </div>
      <Discount classname="mb-10" />
      <div className="px-8 xl:max-w-[80rem] bigger:max-w-[120rem] flex flex-col mx-auto w-full mb-20">
        <h1 className="text-slate-800 text-4xl text-center lg:text-left mb-4 font-medium lg:mb-12">
          Shop Collection
        </h1>
        <ShopCollection />
      </div>
      <div className="px-8 xl:max-w-[80rem] bigger:max-w-[120rem] mx-auto w-full">
        <HeadLA classname="mb-10"></HeadLA>
        <div className="grid grid-cols-1 w-full lg:grid-cols-3 content-center justify-items-center gap-x-6">
          {LatestArticle.map((item) => (
            <LastArticleCard image={item.Image} key={item.id} title={item.title} readmore={item.readmore} classname="w-full"></LastArticleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

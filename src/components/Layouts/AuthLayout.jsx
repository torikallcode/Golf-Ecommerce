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
import { JoinSection } from "../organisme/JoinSection";
import { MedsosSection } from "../Fragments/MedsosSection";
import { IsianProduct } from "../../utils/isian.jsx/IsianProduct";
import { isianKategori } from "../../utils/isian.jsx/isianKategori";
import { IsianGaleri } from "../../utils/isian.jsx/IsianGaleri";
import { Image } from "../Elements/Gambar/Image";
import { Footer } from "../organisme/Footer/Footer";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Home />
      <div className="px-8 pt-8 flex flex-col xl:max-w-[80rem] bigger:max-w-[120rem] mx-auto mb-10 lg:mb-20">
        <SelectFiture classname="mb-8" />
        <CarouselFeatured
          products={IsianProduct}
          classname="mb-[72px] lg:mb-32"
        />
        <Categories kategori={isianKategori} />
      </div>
      <Discount classname="mb-10" />
      <div className="px-8 xl:max-w-[80rem] bigger:max-w-[120rem] flex flex-col mx-auto w-full mb-20">
        <h1 className="text-slate-800 text-4xl text-center lg:text-left mb-4 font-medium lg:mb-12">
          Shop Collection
        </h1>
        <ShopCollection />
      </div>
      <div className="px-8 xl:max-w-[80rem] bigger:max-w-[120rem] mx-auto w-full mb-10 lg:mb-20">
        <HeadLA classname="mb-10"></HeadLA>
        <div className="grid grid-cols-1 w-full lg:grid-cols-3 content-center justify-items-center gap-x-6">
          {LatestArticle.map((item) => (
            <LastArticleCard
              image={item.Image}
              key={item.id}
              title={item.title}
              readmore={item.readmore}
              classname="w-full"
            ></LastArticleCard>
          ))}
        </div>
      </div>
      <JoinSection></JoinSection>
      <MedsosSection></MedsosSection>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {IsianGaleri.map((item) => (
          <Image key={item.id} src={item.image} classname="w-full object-cover"></Image>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

import React from "react";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col flex-1 px-5">
      <div className="flex overflow-hidden relative flex-col items-start pt-4 pr-20 pb-12 pl-4 w-full text-center uppercase whitespace-nowrap aspect-[0.75] leading-[100%] max-md:pr-5">
        <img loading="lazy" src={product.image} alt={product.description} className="object-cover absolute inset-0 size-full" />
        {product.tags.map((tag, index) => (
          <div key={index} className="relative justify-center px-3.5 py-1 bg-white rounded aspect-[2.96] text-neutral-900">
            {tag}
          </div>
        ))}
      </div>
      <img loading="lazy" src={product.thumbnail} alt="" className="mt-3 aspect-[5.56] w-[88px]" />
      <div className="mt-1 font-semibold leading-7 text-neutral-900">{product.title}</div>
      <div className="flex gap-3 justify-between mt-1 text-sm leading-5 whitespace-nowrap">
        <div className="font-semibold text-neutral-900">{product.price}</div>
        {product.originalPrice && <div className="text-zinc-500">{product.originalPrice}</div>}
      </div>
    </div>
  );
}

function ProductShowcase() {
  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f42b54bd709031c324af30c8793fd55ff060b3ac731821f1c512f92efbdffed",
      description: "Shark - Men's cabretta white golf glove",
      tags: ["HOT"],
      thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
      title: "Shark - Men's cabretta white golf glove",
      price: "$19.00",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7c2ee61d3a074b9fc672c1a71b0dad5aaa373ec1d8bc4bcd6d6d5c1918f8db6",
      description: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      tags: ["HOT", "-50%"],
      thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
      title: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
      price: "$24.99",
      originalPrice: "$40.00",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/768ffc405e4a312863c02a4cfa8fe63d725a8dbd28a64719f2979be92a2adcf7",
      description: "G/FORE - Mens Left Glove Snow 2023",
      tags: ["HOT"],
      thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
      title: "G/FORE - Mens Left Glove Snow 2023",
      price: "$30.00",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a2a022fc39d92d6ecb2bd11dd92089ec6b25cba64aa27c7017b55018f72b418",
      description: "Utility Rover-R Double Strap Bag All Black - 2023",
      tags: ["HOT"],
      thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
      title: "Utility Rover-R Double Strap Bag All Black - 2023",
      price: "$209.99",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0f13467b516a49fab32d7badadce4954126401088c88cf7a4ab0ede14548ecf",
      description: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23",
      tags: ["HOT", "-50%"],
      thumbnail: "https://cdn.builder.io/api/v1/image/assets/TEMP91ee13fa60a089929cfb3c84d88c4c7e44993d53054e7d2e3c0f8ca3250815",
      title: "Air Jordan 1 Low G Black/Black/Iron Grey - SS23",
      price: "$111.99",
      originalPrice: "$200.00",
    },
  ];

  return (
    <section className="flex gap-5 justify-between text-base max-md:flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
}

export default ProductShowcase;
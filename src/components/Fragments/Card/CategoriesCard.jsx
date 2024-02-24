import { Image } from "../../Elements/Gambar/Image"

export const CategoriesCard = ({ image, Text }) => {
  return (
    <div className="aspect-[8/9] sm:aspect-[5/6] lg:aspect-[1/1] grid grid-cols-1 content-between">
      <Image src={image} classname="aspect-[8/7] object-cover w-full"></Image>
      <h1 className="text-center text-xl font-medium sm:text-3xl lg:text-xl">{Text}</h1>
    </div>
  )
}
import { ProductCard } from "../Fragments/Card/ProductCard"
import { CarouselDy } from "../Fragments/Carousel/CarouselDy"
import { SelectFiture } from "../Fragments/SelectFiture"

export const Featured = ({ classname, items }) => {
  return (<div className={`${classname} flex flex-col gap-y-8`}>
    <SelectFiture></SelectFiture>
    <div className=" gap-5 ">
      {items.map((item) => (
        <ProductCard
          image={item.Image}
          key={item.id}
          rating={item.rating}
          title={item.title}
          price={item.price}
        >
        </ProductCard>
      ))}
    </div>
  </div>
  )
}
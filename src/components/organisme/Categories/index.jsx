import { CategoriesCard } from "../../Fragments/Card/CategoriesCard"

export const Categories = ({ kategori, classname }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${classname}`}>
      <h1 className="text-4xl font-medium max-w-[184px] lg:max-w-sm text-center mx-auto mb-6">Shop by Categories</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-6 gap-y-6 lg:gap-y-10 content-center w-full">
        {kategori.map((item) => (
          <CategoriesCard key={item.id} image={item.image} Text={item.Text}></CategoriesCard>
        ))}
      </div>
    </div>
  )
}
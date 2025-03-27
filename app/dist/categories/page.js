import CategoryItem from "@/app/components/categoryItem";
import categoriesData from "@/app/data/categories";

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {
          categoriesData.map(category=><CategoryItem key={category.id} category={category}/>)
        }
      </div>


    </div>
  )
}

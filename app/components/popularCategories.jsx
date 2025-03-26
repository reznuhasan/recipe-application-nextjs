import Link from "next/link";
import categoriesData from "../data/categories";
import recipes from "../data/recipes";
import CategoryItem from "./categoryItem";

export default function PopularCategories() {
    categoriesData.map(category=>{
        const totalRecipes=recipes.filter(recipe=>recipe.category_id===category.id)
        category.recipe=totalRecipes.length;
    })
    const sortedCategories=categoriesData.sort((a,b)=>b.recipe-a.recipe)
    const topCategory=sortedCategories.slice(0,6);
  return (
    <div className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <Link href={"/dist/categories"}>View All</Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
       {
        topCategory.map(category=>
            <Link href={`/category/${category.id}`} key={category.id}>
            <CategoryItem  category={category}></CategoryItem>
            </Link>
        )
       }
      </div>
    </div>
  )
}

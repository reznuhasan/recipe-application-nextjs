import LatestItem from "@/app/components/latestItem";
import recipes from "@/app/data/recipes";
import Link from "next/link";

export default function LatestRecipes() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Desserts <span className="text-gray-500 text-2xl font-normal">(98 Recipes)</span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here
            is a recipe I created after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map(recipe=>
        <Link href={`/dist/recipes/${recipe.title}`} key={recipe.title}>
        <LatestItem value={recipe}/>
        </Link>
        )}
      </div>
    </div>
  )
}

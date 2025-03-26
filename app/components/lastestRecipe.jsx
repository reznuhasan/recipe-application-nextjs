import Link from "next/link";
import categoriesData from "../data/categories";
import recipes from "../data/recipes"
import LatestItem from "./latestItem";

export default function LastestRecipe() {
    const recipesData = recipes.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
    recipesData.map(recipe=>{
        const recipeValue=categoriesData.find(category=>category.id===recipe.category_id)
        // console.log("recipe",recipeValue?.name)
        recipe.category=recipeValue?.name
    })
    const values=recipesData.slice(0,4);
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {values.map(value=>
                <Link key={value.title} href={`/dist/recipes/${value.title}`}>
                <LatestItem  value={value}></LatestItem>
                </Link>
                
                )}
            </div>
        </div>
    )
}

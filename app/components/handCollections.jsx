import recipes from "../data/recipes"
import HandRecipe from "./handRecipe";

export default function HandCollections() {
    const recipeData=recipes.slice(0,2);
    return (
        <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
            <div className="grid md:grid-cols-2 gap-8">
            {
                recipeData.map(recipe=><HandRecipe key={recipe.title} recipe={recipe}></HandRecipe>)
            }
            </div>

        </div>
    )
}

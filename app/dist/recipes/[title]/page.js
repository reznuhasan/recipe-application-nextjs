import recipes from "@/app/data/recipes";

export default function SingleCategory({params}) {


  // Use bracket notation to access params with a hyphen
  const category = recipes.find(recipe => recipe.title === params['title']);

  return (
    <div>
      params is {category ? category.name : "Category not found"}
    </div>
  );
}

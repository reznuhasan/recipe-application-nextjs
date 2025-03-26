import recipes from "@/app/data/recipes";

export default function SingleCategory({params}) {


  // Use bracket notation to access params with a hyphen
  const category = recipes.find(recipe => recipe.category_id === params['category-id']);

  return (
    <div>
      params is {category ? category.name : "Category not found"}
    </div>
  );
}

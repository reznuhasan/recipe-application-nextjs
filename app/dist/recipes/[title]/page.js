import recipes from "@/app/data/recipes";
import Image from "next/image";

export default function SingleCategory({ params }) {

console.log(decodeURIComponent(params['title']))
  // Use bracket notation to access params with a hyphen
  const categoryData = recipes.filter(recipe => decodeURIComponent(recipe.title) === decodeURIComponent(params['title']));
  const category=categoryData[0]
  return (
    <div className="container mx-auto px-4 py-20">
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">A full guide for a better and smarter cooking</h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/avater.png"
            alt="Author"
            width={80}
            height={10}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">{category?.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{category?.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{category?.published_date}</span>
        </div>

      </article>
    </div>
  );
}

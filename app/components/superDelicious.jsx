import Link from "next/link";
import recipes from "../data/recipes"
import SuperItems from "./superItems";

export default function SuperDelicious() {
    const sortingRecipes=recipes.sort((a,b)=>b.rating.average_rating-a.rating.average_rating)
    const items=sortingRecipes.slice(0,3);
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {
            items.map(item=>
            <Link key={item.category_id} href={`/dist/recipes/${item.title}`}>
            <SuperItems key={item.category_id} item={item}/>
            </Link>
        )
        }
       
       
      </div>
    </section>
  )
}

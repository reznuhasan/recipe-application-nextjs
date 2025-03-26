import Link from "next/link";

export default function PopularCategories() {
  return (
    <div className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <Link href={"/dist/categories"}>View All</Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        
      </div>
    </div>
  )
}

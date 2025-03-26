import Image from "next/image";
import ViewButton from "./viewButton";

export default function HandRecipe({ recipe }) {
    const { thumbnail, title } = recipe;
    return (
        <div
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
            <Image
                src={`/thumbs/${thumbnail}`}
                alt={title}
                width={300}
                height={90}
                className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 class="text-xl font-semibold mb-2">{title}</h3>
                <ViewButton path={`/dist/recipes/${title}`}
                >View Collection</ViewButton>           
            </div>
        </div>
    )
}

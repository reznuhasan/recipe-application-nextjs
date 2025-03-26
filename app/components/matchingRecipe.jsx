import Image from "next/image";

export default function MatchingRecipe({ recipe }) {
    const { thumbnail, title } = recipe;
    return (
        <div>
            <Image
                src={`/thumbs/${thumbnail}`}
                alt={title}
                width={300}
                height={40}
                className="w-full h-60 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">{title}</h3>

        </div>
    )
}

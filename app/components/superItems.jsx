import Image from "next/image"
import Rating from "./rating"

export default function SuperItems({ item }) {
    const { cooking_time, rating, thumbnail, title } = item
    // const ratings=Array.fill(rating)
    return (
        <div>
            <Image
                src={`/thumbs/${thumbnail}`}  // Ensure the thumbnail is inside the 'public' folder
                alt={title}
                width={200}
                height={50}
                className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
                <Rating />
            </div>
            <p className="text-gray-600">{cooking_time}</p>
        </div>
    )
}

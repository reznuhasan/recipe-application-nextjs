import Image from "next/image"

export default function LatestItem({ value }) {
    const {thumbnail,title,category}=value;
    
    return (
        <div>
            <Image
                src={`/thumbs/${thumbnail}`}  // Ensure the thumbnail is inside the 'public' folder
                alt={title}
                width={200}
                height={50}
                className="w-full h-[300px] object-cover rounded-lg"
            />
             <h3 class="text-lg font-semibold mb-2">{title}</h3>
             <p class="text-gray-600">{category}</p>
        </div>
    )
}

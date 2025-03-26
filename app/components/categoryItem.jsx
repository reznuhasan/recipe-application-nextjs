import Image from "next/image";

export default function CategoryItem({ category }) {
    const { name, image } = category;
    return (
        <div className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                <Image
                    src={`${image}`}  
                    alt={name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">{name}</p>

        </div>
    )
}

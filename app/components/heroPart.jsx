import Image from 'next/image';
import recipes from '../data/recipes';
import ViewButton from './viewButton';

export default async function HeroPart() {
   const objectData=recipes[0];
   const {thumbnail,title,description,category_id}=objectData;

    return (
        <div className="mb-16 bg-orange-50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    {thumbnail && (
                        <Image
                            src={`/thumbs/${thumbnail}`}  // Ensure the thumbnail is inside the 'public' folder
                            alt={title}
                            width={300}
                            height={90}
                            className="w-full h-[450px] object-cover rounded-lg"
                        />
                    )}
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-4">{description}</p>
                     <ViewButton path={`/recipes/${category_id}`}
                        >View Recipe</ViewButton> 
                </div>
            </div>
        </div>
    );
}

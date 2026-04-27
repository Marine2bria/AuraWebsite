import Image from "next/image";
import Link from "next/link"

type Appartement = {
    id: string;
    name: string;
    description: string;
    prix: number;
    image: string;
}

export default function AppartementCard({id, name, description, prix, image}: Appartement) {
    return (
        <div className = "bg-white ml-15 rounded-2xl p-5 shadow-md hover:scale-105 w-5/6 h-140 text-start">
            <h1 className="font-bold font-sans text-4xl text-gray-450 text-center">
                {name}
            </h1>
            <Image
                src={image}
                alt={name}
                width={320}
                height={192}
                className="w-full h-80 object-cover p-3 rounded-2xl"
            />
            <h3 className="text-gray-400 h-25 p-3">
                {description}
            </h3>
            <div className="flex w-full justify-between p-3">
                <Link href={id} className="hover:text-gray-400 bg-blue-350 rounded items-start">
                    Reserver
                </Link>
                <h1 className="text-gray-450 font-2xl text-end items-end font-bold">
                    {prix}€
                </h1>
            </div>
        </div>
    )
}
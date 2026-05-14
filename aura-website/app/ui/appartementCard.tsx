import Image from "next/image";
import Link from "next/link"

export type Appartement = {
    id: string;
    name: string;
    description: string;
    prix: number;
    image: string;
    voyageurs:number;
    position:number;
}

type Position = {
    lt:number;
    lg:number;
}

type Size = {
    size:"sm" | "md" | "lg";
}

type Props = {
    appart:Appartement;
    size:Size;
}
export default function AppartementCard({id, name, description, prix, image, voyageurs,position}: Appartement) {
    return (
        <div className = "card hover:scale-105 w-full h-70 text-start">
            <h1 className="title-lg text-center p-1">
                {name}
            </h1>
            {/*<div className= "grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">*/}
            <div className={"flex pl-3 pr-3"}>
                    <div className="relative w-1/3 h-50 rounded-2xl overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>
                <div className={"lg:ml-6 ml-3 mt-3 text-black w-2/3 mr-2"}>
                    <h3 className ="text-muted w-full h-30">
                        {description}
                    </h3>
                    <div className="flex flex-row gap-2">
                        <h3 className="tag">
                            {voyageurs} voyageurs
                        </h3>
                        <h3 className="tag">
                             1 chambre
                        </h3>
                    </div>
                    <div className="flex w-full justify-between ">
                        <Link href={id} className="btn-secondary items-start">
                            Reserver
                        </Link>
                        <h1 className="text-price p-2">
                            {prix}€
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
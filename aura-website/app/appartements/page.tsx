import AppartementCard from "@/app/ui/appartementCard";
import SearchBar from "@/app/ui/searchBar";
import Map from "@/app/ui/map";
export default function reservation()
{
    return (
        <main className="flex h-screen bg-background pt-17 text-white">
            <div className="flex flex-col ml-2 w-full md:w-1/2 lg:w-2/3">
                <SearchBar calendarTop={false}/>
                <div
                    id="Appartment List"
                    className=" w-full overflow-y-auto "
                    >
                    <div className="grid grid-cols-1 gap-7 p-5">
                        <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement 1"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"} voyageurs={2} position={2}/>
                        <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement 2"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"} voyageurs={5} position={2}/>
                        <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement 3"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"} voyageurs={1} position={2}/>
                        <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement 4"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"} voyageurs={3} position={2}/>
                    </div>
                </div>
            </div>
            {/* CARTE */}
            <div className="hidden sm:block lg:block md:1/2 lg:w-1/3 h-screen sticky top-0">
                <Map></Map>
            </div>
        </main>
        )
}
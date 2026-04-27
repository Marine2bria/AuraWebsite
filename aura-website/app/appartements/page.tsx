import AppartementCard from "@/app/ui/appartementCard";
export default function reservation()
{
    return (
        <main className="flex h-full bg-blue-100 pt-20 text-black">
            <div
                id="Appartement List"
                className="w-full lg:w-3/5 sm:w-1/2 overflow-y-auto h-screen mt-2"
                >
                <div className="grid grid-cols-1 gap-7">
                    <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"}/>
                    <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"}/>
                    <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"}/>
                    <AppartementCard id="5GqFsduF1" name={"Nom de l'appartement"} description={"bel appartement luxueux au coeur de la ville de Bastia."} prix={170} image={"/corse-bastia-hd.jpg"}/>
                </div>
            </div>
            {/* CARTE */}
            <div className="hidden sm:block lg:block sm:w-1/2 lg:w-2/5 h-screen sticky top-0">
                <div className="h-7/8 w-full flex items-center justify-center p-10">
                    <iframe
                        src="https://www.google.com/maps?q=bastia&output=embed"
                        className="w-full h-full border-0 rounded-2xl"
                    ></iframe>
                </div>
            </div>
        </main>
        )
}
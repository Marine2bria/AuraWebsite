import Link from "next/link";
export function Header(){
    return (
        <header className="fixed top-0 left-0 w-full h-20 backdrop-blur-md bg-zinc-700/40 z-50 font-sans flex items-center justify-between px-6">
            <Link
                className="text-white"
                href="/"
            >
                <h1 className="text-2xl font-bold">
                    Aura Conciergerie
                </h1>
                <h2 className="text-sm">
                    Haute-Corse
                </h2>
            </Link>
            <div className="flex items-center gap-6 text-white">
                <Link
                    className="hover:text-gray-300 transition"
                    href="/appartements"
                >
                    Voyageur
                </Link>

                <Link
                    className="hover:text-gray-300 transition"
                    href="/proprietaire"
                >
                    Propriétaire
                </Link>

                <Link
                    className="hover:text-gray-300 transition"
                    href="/contact"
                >
                    Contact
                </Link>
            </div>
        </header>
    )
}

export function Bienvenue() {
    return (
        <div className="w-full h-10 backdrop-blur-md bg-zinc-700/40 z-50 font-sans">
            <h1 className="text-3xl text-center">
                Bienvenue sur Aura Conciégerie !
            </h1>
        </div>
    )
}
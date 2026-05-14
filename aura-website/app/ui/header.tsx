import Link from "next/link";
export function Header(){
    return (
        <header className="header fixed top-0">
            <Link
                className="title-md"
                href="/"
            >
                <h1 className="text-2xl font-bold">
                    Aura Conciergerie
                </h1>
                <h2 className="title-md text-sm">
                    Haute-Corse
                </h2>
            </Link>
            <div className="flex items-center gap-6">
                <Link
                    className="hover:text-text-muted transition text-muted text-gray-400"
                    href="/appartements"
                >
                    Voyageur
                </Link>

                <Link
                    className="hover:text-text-muted text-gray-400 transition text-muted"
                    href="/proprietaire"
                >
                    Propriétaire
                </Link>

                <Link
                    className="hover:text-text-muted text-gray-400 transition text-muted"
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
        <div className="header justify-center">
            <h1 className="title-lg text-center">
                Bienvenue sur Aura Conciégerie !
            </h1>
        </div>
    )
}
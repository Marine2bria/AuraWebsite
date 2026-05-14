"use client";

import {Appartement} from "@/app/ui/appartementCard";
import Image from "next/image";
import Map from "./map";
import {useState} from "react";

export default function AppartementPage() {
    const app: Appartement = {
        id: "",
        name: "Nom de l'appartement",
        description:
            "Magnifique appartement situé en Haute-Corse avec vue sur la mer, proche des plages et du centre-ville. Idéal pour des vacances en famille ou entre amis.",
        prix: 150,
        image: "/corse-bastia-hd.jpg",
        voyageurs: 4,
        position: 2,
    };

    const [openServices, setOpenServices] = useState(false);

    return (
        <main className="section mx-auto flex max-w-7xl flex-col gap-10">

            {/* HERO */}
            <section className="flex gap-5">

                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <h1 className="title-xl">
                            {app.name}
                    </h1>
                </div>

                {/* GALLERY */}
                <div className="grid gap-4 md:grid-cols-[2fr_1fr]">

                    {/* IMAGE PRINCIPALE */}
                    <div className="card card-hover overflow-hidden">

                        <div className="relative h-[260px] md:h-[520px] w-full">

                            <Image
                                src={app.image}
                                alt={app.name}
                                fill
                                priority
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* IMAGES SECONDAIRES */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">

                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className="card card-hover overflow-hidden"
                            >
                                <div className="relative h-[120px] md:h-[252px] w-full">

                                    <Image
                                        src={app.image}
                                        alt={app.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="grid gap-8 lg:grid-cols-[1.8fr_0.9fr]">

                {/* LEFT */}
                <div className="flex flex-col gap-8">

                    {/* DESCRIPTION */}
                    <div className="card p-8">

                        <h2 className="title-lg mb-6 p-3 mt-3 ml-3">
                            À propos de ce logement
                        </h2>

                        <p className="text-base text-lg leading-8 ml-3">
                            {app.description}
                        </p>
                    </div>

                    {/* SERVICES */}
                    <div className="card overflow-hidden">

                        {/* HEADER */}
                        <button
                            type="button"
                            onClick={() => setOpenServices(!openServices)}
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                p-8
                                transition
                                hover:bg-backgroundLight/40"
                        >
                            <h2 className="title-lg">
                                Ce que propose ce logement
                            </h2>

                            <span
                                className={`
                                    text-2xl
                                    transition-transform
                                    duration-300
                                    ${openServices ? "rotate-180" : ""}
                                `}
                            >
                            ⌄
                            </span>
                        </button>

                        {/* CONTENT */}
                        {openServices && <div
                            className={"grid transition-all duration-300 ease-in-out"}>
                            <div className="overflow-hidden">

                                <div className="grid gap-4 px-8 pb-8 sm:grid-cols-2">

                                    {[
                                        "Wi-Fi",
                                        "Climatisation",
                                        "Cuisine équipée",
                                        "Parking gratuit",
                                        "Vue mer",
                                        "Piscine",
                                    ].map((service) => (
                                        <div
                                            key={service}
                                            className="input flex items-center gap-3"
                                        >
                        <span className="text-xl">
                            ✓
                        </span>

                                            <span className="text-base">
                            {service}
                        </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>}
                    </div>

                    {/* MAP */}
                    <div className="card overflow-hidden p-4">

                        <div className="mb-4 flex items-center justify-between">

                            <h2 className="title-lg">
                                Localisation
                            </h2>

                            <span className="text-muted">
                                Haute-Corse
                            </span>
                        </div>

                        <div className="h-[400px] overflow-hidden rounded-2xl">
                            <Map />
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <aside className="sticky top-28 h-fit">

                    <div className="card flex flex-col gap-6 p-6">

                        <div className="flex items-end justify-between">

                            <div className="flex items-end gap-2">

                                <span className="text-4xl font-bold text-primary ml-3">
                                    {app.prix}€
                                </span>

                                <span className="text-muted mb-1">
                                    / nuit
                                </span>
                            </div>

                            <div className="tag">
                                ⭐ 4.9
                            </div>
                        </div>

                        {/* INFOS */}
                        <div className="flex flex-col gap-4">

                            <div className="input flex items-center justify-between">
                                <span className="text-muted">
                                    Voyageurs
                                </span>

                                <span className="font-semibold">
                                    {app.voyageurs}
                                </span>
                            </div>

                            <div className="input flex items-center justify-between">
                                <span className="text-muted">
                                    Arrivée
                                </span>

                                <span className="font-semibold">
                                    Flexible
                                </span>
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="btn-primary w-full py-4 text-lg">
                            Réserver maintenant
                        </button>

                        <p className="text-small text-center">
                            Aucun paiement débité pour le moment.
                        </p>
                    </div>
                </aside>

            </section>
        </main>
    );
}

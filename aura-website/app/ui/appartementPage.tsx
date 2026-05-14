"use client";

import { Appartement } from "@/app/ui/appartementCard";
import Image from "next/image";
import Map from "./map";
import { useState } from "react";
import { ChevronDown, MapPin, Users, Calendar, Star } from "lucide-react";

const SERVICES = [
  "Wi-Fi",
  "Climatisation",
  "Cuisine équipée",
  "Parking gratuit",
  "Vue mer",
  "Piscine",
];

export default function AppartementPage() {
  const app: Appartement = {
    id: "",
    name: "Appartement vue mer en Haute-Corse",
    description:
      "Magnifique appartement situé en Haute-Corse avec vue sur la mer, proche des plages et du centre-ville. Idéal pour des vacances en famille ou entre amis.",
    prix: 150,
    image: "/corse-bastia-hd.jpg",
    voyageurs: 4,
    position: 2,
  };

  const [openServices, setOpenServices] = useState(false);

  return (
    <main className="bg-white">
      {/* HERO IMAGE */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={app.image}
          alt={app.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* HEADER */}
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-4xl font-bold text-text mb-3">{app.name}</h1>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-text">4.9</span>
                </div>
                <span>·</span>
                <span>12 avis</span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>Haute-Corse</span>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-xl font-semibold text-text mb-4">
                À propos du logement
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                {app.description}
              </p>
            </div>

            {/* QUICK INFO */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div>
                <div className="text-xs uppercase text-text-muted font-semibold mb-1">
                  Voyageurs
                </div>
                <div className="text-lg font-semibold text-text">
                  {app.voyageurs}
                </div>
              </div>
              <div>
                <div className="text-xs uppercase text-text-muted font-semibold mb-1">
                  Chambres
                </div>
                <div className="text-lg font-semibold text-text">2</div>
              </div>
              <div>
                <div className="text-xs uppercase text-text-muted font-semibold mb-1">
                  Salle de bain
                </div>
                <div className="text-lg font-semibold text-text">1</div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenServices(!openServices)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition"
              >
                <h2 className="text-lg font-semibold text-text">
                  Ce que propose ce logement
                </h2>
                <ChevronDown
                  size={20}
                  className={`text-text-muted transition-transform duration-300 ${
                    openServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openServices && (
                <div className="grid grid-cols-2 gap-6 px-6 py-6 border-t border-gray-200 bg-gray-50">
                  {SERVICES.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <div className="text-action mt-0.5 flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-text">{service}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MAP */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-text">Localisation</h2>
              </div>
              <div className="h-96 w-full">
                <Map />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-lg p-6 bg-white">
              {/* PRICE */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-text">{app.prix}</span>
                  <span className="text-text-muted">€ / nuit</span>
                </div>
              </div>

              {/* INFO */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Arrivée</span>
                  <span className="text-sm font-semibold text-text">Flexible</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Départ</span>
                  <span className="text-sm font-semibold text-text">Flexible</span>
                </div>
              </div>

              {/* CTA */}
              <button className="btn-primary w-full py-3 mb-3">
                Réserver maintenant
              </button>

              <p className="text-xs text-center text-text-muted">
                Aucun paiement débité pour le moment.
              </p>

              {/* REPORT */}
              <button className="w-full mt-6 py-2 text-sm text-text-muted hover:text-text transition">
                Signaler ce logement
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

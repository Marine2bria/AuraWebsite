"use client";

import { Appartement } from "@/app/ui/appartementCard";
import Image from "next/image";
import Map from "./map";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SERVICES = [
  "Wi-Fi",
  "Climatisation",
  "Cuisine équipée",
  "Parking gratuit",
  "Vue mer",
  "Piscine",
];

const SECONDARY_IMAGES_COUNT = 2;

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
      {/* HERO & GALLERY */}
      <section className="space-y-6">
        {/* TITLE */}
        <h1 className="title-xl">{app.name}</h1>

        {/* GALLERY */}
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          {/* MAIN IMAGE */}
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

          {/* SECONDARY IMAGES */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {Array.from({ length: SECONDARY_IMAGES_COUNT }).map((_, i) => (
              <div key={i} className="card card-hover overflow-hidden">
                <div className="relative h-[120px] md:h-[252px] w-full">
                  <Image
                    src={app.image}
                    alt={`${app.name} - photo ${i + 2}`}
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
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* DESCRIPTION CARD */}
          <DescriptionCard description={app.description} />

          {/* SERVICES CARD */}
          <ServicesCard
            services={SERVICES}
            isOpen={openServices}
            onToggle={() => setOpenServices(!openServices)}
          />

          {/* MAP CARD */}
          <MapCard location="Haute-Corse" />
        </div>

        {/* RIGHT SIDEBAR */}
        <PricingCard
          price={app.prix}
          rating={4.9}
          travelers={app.voyageurs}
        />
      </section>
    </main>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

interface DescriptionCardProps {
  description: string;
}

function DescriptionCard({ description }: DescriptionCardProps) {
  return (
    <div className="card p-8">
      <h2 className="title-lg mb-6">À propos de ce logement</h2>
      <p className="text-base text-lg leading-8">{description}</p>
    </div>
  );
}

interface ServicesCardProps {
  services: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function ServicesCard({ services, isOpen, onToggle }: ServicesCardProps) {
  return (
    <div className="card overflow-hidden">
      {/* HEADER */}
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-8 transition hover:bg-backgroundLight/40"
      >
        <h2 className="title-lg">Ce que propose ce logement</h2>
        <ChevronDown
          size={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* CONTENT */}
      {isOpen && (
        <div className="grid transition-all duration-300 ease-in-out overflow-hidden border-t border-white/10">
          <div className="grid gap-4 px-8 py-8 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceItem key={service} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface ServiceItemProps {
  service: string;
}

function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="input flex items-center gap-3">
      <span className="text-xl text-action">✓</span>
      <span className="text-base">{service}</span>
    </div>
  );
}

interface MapCardProps {
  location: string;
}

function MapCard({ location }: MapCardProps) {
  return (
    <div className="card overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="title-lg">Localisation</h2>
          <span className="text-muted text-sm font-medium">{location}</span>
        </div>
        <div className="h-[400px] overflow-hidden rounded-2xl">
          <Map />
        </div>
      </div>
    </div>
  );
}

interface PricingCardProps {
  price: number;
  rating: number;
  travelers: number;
}

function PricingCard({ price, rating, travelers }: PricingCardProps) {
  return (
    <aside className="sticky top-28 h-fit">
      <div className="card flex flex-col gap-6 p-6">
        {/* PRICE & RATING */}
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-primary">{price}</span>
              <span className="text-muted mb-1">€/nuit</span>
            </div>
            <div className="tag">⭐ {rating}</div>
          </div>
        </div>

        {/* INFO ITEMS */}
        <div className="space-y-3">
          <InfoItem label="Voyageurs" value={travelers.toString()} />
          <InfoItem label="Arrivée" value="Flexible" />
        </div>

        {/* CTA */}
        <button className="btn-primary w-full py-4 text-lg font-semibold">
          Réserver maintenant
        </button>

        {/* DISCLAIMER */}
        <p className="text-small text-center">
          Aucun paiement débité pour le moment.
        </p>
      </div>
    </aside>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="input flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-text">{value}</span>
    </div>
  );
}

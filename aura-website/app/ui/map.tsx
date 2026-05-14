"use client";

import "leaflet/dist/leaflet.css";

import L,{icon} from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


const bigIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [40, 65], // largeur, hauteur
    iconAnchor: [20, 65],
});
export enum city {
    Bastia,
    StFlorent,
    Miomo,
    Oletta,
    Farinole,
    Furiani,

}
const places: {[id: number]: LatLngExpression} =
    {
        0: [42.700593, 9.448767],
        1: [42.681668, 9.304723],
        2: [42.742709, 9.460761],
        3:[42.631083, 9.355951],
        4:[42.728832, 9.361028],
        5:[42.655768, 9.435858],
    }
export default function Map() {
    const position: LatLngExpression = places[city.StFlorent];

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom
            className="h-full w-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[42.676566, 9.302075]}
                    // icon={selected ? bigIcon : }
            >
                <Popup>Appartement ici</Popup>
            </Marker>
            <Marker position={[42.683373, 9.306427]}
                    icon={bigIcon}
            >
                <Popup>Appartement ici</Popup>
            </Marker>
            <Marker position={position}>
                <Popup>Appartement ici</Popup>
            </Marker>
        </MapContainer>
    );
}
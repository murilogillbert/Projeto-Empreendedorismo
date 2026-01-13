import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { Search } from "lucide-react"

// Fix for default marker icon in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
    iconUrl: icon as unknown as string,
    shadowUrl: iconShadow as unknown as string,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MOCK_RESTAURANTS = [
    { id: 1, name: "Restaurante Sabor Caseiro", distance: "0.5km", lat: -23.55052, lng: -46.633309 },
    { id: 2, name: "Pizza Hut Express", distance: "1.2km", lat: -23.551, lng: -46.634 },
    { id: 3, name: "Sushi Bar Top", distance: "2.5km", lat: -23.552, lng: -46.632 },
]

export default function Home() {
    const [selectedRestaurant, setSelectedRestaurant] = useState<string>("")

    return (
        <div className="flex flex-col h-full">
            {/* Search/Filter Area */}
            <div className="p-4 bg-background shadow-sm z-10">
                <div className="relative">
                    <label htmlFor="restaurant-select" className="text-sm font-medium mb-1 block text-muted-foreground">
                        Encontre um restaurante próximo
                    </label>
                    <div className="relative">
                        <select
                            id="restaurant-select"
                            className="w-full p-3 border rounded-lg bg-input text-foreground appearance-none shadow-sm focus:ring-2 focus:ring-primary focus:border-primary pr-10"
                            value={selectedRestaurant}
                            onChange={(e) => setSelectedRestaurant(e.target.value)}
                        >
                            <option value="" disabled>Selecione um local...</option>
                            {MOCK_RESTAURANTS.map((rest) => (
                                <option key={rest.id} value={rest.id}>
                                    {rest.name} - {rest.distance}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-grow w-full h-[calc(100vh-180px)] relative z-0">
                <MapContainer center={[-23.55052, -46.633309]} zoom={15} scrollWheelZoom={true} className="w-full h-full">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {MOCK_RESTAURANTS.map((rest) => (
                        <Marker key={rest.id} position={[rest.lat, rest.lng]}>
                            <Popup>
                                <strong>{rest.name}</strong><br />
                                {rest.distance}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Restaurant {
    id: string;
    name: string;
    lat: number;
    lng: number;
    type: string;
    description: string;
    rating: string;
    image: string;
}

const MOCK_RESTAURANTS: Restaurant[] = [
    {
        id: '1',
        name: 'The Artisan Hearth',
        lat: -23.5505,
        lng: -46.6333,
        type: 'Italian • Fine Dining',
        description: 'Traditional wood-fired pizzas and handmade pasta in a cozy artisanal setting.',
        rating: '4.8 (120+)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsnBJqli6N8I332KQIMooCB5_06xTJvdffATCDbSqT5RSBNoBFWcEGIS5aZG1kXsp9NfmUlr94Pg9Bt0dRANel2bXucNe56Ka5KpobjdjTXfv9RQfzLTOHtsdljzNyUt1ek_anWUasZRbYTHQxBbwncx9JmUtqrg9K00hgI31EGaLNW-LprbkzPv_ThC6_P0n7H-PzcP_uH3qmKZQX9YcbmcEBE82Wf61L0bU5MoKRkdt1P2CWIhvOeBB3Is06OB3vWYs60rNIuk1H'
    },
    {
        id: '2',
        name: 'Sushi Zen',
        lat: -23.5520,
        lng: -46.6350,
        type: 'Japanese • Sushi Bar',
        description: 'Premium omakase experience featuring fresh seasonal catches from the Tsukiji market.',
        rating: '4.9 (85+)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvMnKPf2ie6xCv94DC9PTgwD_9ryUA_LNg2IV7vcG3dNSXUhQjhC85bYWXchJiwpmhVmisms6E-bn-POVH7kcZA7pquovdyUWIKI9jHIFQZxWzAX_pelx3rrliBK9EYTJkpWMfCDPH5uFN7fqzi3ji3gJQZY0LfK8tq72f37z2n-tIFwSWwPEeKv1JNStU91UT8TLLivdHlnAY9lXVHx1RDl6AUe885REB2YqlQ0AUyfU0_a3K1pKPSGb2_n57rynaGMWVPV-QkrLc'
    },
    {
        id: '3',
        name: 'Morning Bakery',
        lat: -23.5480,
        lng: -46.6310,
        type: 'French • Bakery',
        description: 'Authentic sourdough breads and buttery croissants baked daily using traditional methods.',
        rating: '4.7 (200+)',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAaz6BoDpigbw_GodhVA7ughUEOuA23Qcqxh9rgpWyvAFlx7RpzIDrkaCCDcIwJAF2bai2lEBqQzstFAJQFrLuLK2Wv3HUHzQplTRII4swkzFuP4RFK4bUg55FIgk_3d3VY7SqsFwUHJVz4b6pjHZF6FbF4sklB1lOR0KIF8Ymyk9ka-IAfKxfa638XnonNYqP2ah3_tVZzBNK0oaIStqzU0V2C9KZY2CD1RFOmxmXSaPF8il_z82UPB7i9xn9m7N5oHrMjAupIujI'
    },
];

const LocationMarker = () => {
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, map.getZoom());
        });
    }, [map]);

    return null;
};

export const DynamicMap: React.FC = () => {
    const [selectedRes, setSelectedRes] = useState<Restaurant | null>(null);
    const center: L.LatLngExpression = [-23.55052, -46.633308];

    return (
        <div className="h-full w-full relative">
            <MapContainer
                center={center}
                zoom={15}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />

                {MOCK_RESTAURANTS.map((res) => (
                    <Marker
                        key={res.id}
                        position={[res.lat, res.lng]}
                        eventHandlers={{
                            click: () => setSelectedRes(res),
                        }}
                    />
                ))}
            </MapContainer>

            {/* Restaurant Info Modal */}
            {selectedRes && (
                <div className="absolute inset-x-0 bottom-0 top-0 z-[1000] flex items-end justify-center p-4">
                    {/* Backdrop Overlay (closes when clicked) */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setSelectedRes(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative w-full max-w-[400px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
                        <button
                            onClick={() => setSelectedRes(null)}
                            className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <div
                            className="w-full h-48 bg-cover bg-center"
                            style={{ backgroundImage: `url("${selectedRes.image}")` }}
                        ></div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-black text-charcoal dark:text-white leading-tight">{selectedRes.name}</h3>
                                    <p className="text-mocha dark:text-primary font-bold text-xs uppercase tracking-widest mt-1">{selectedRes.type}</p>
                                </div>
                                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                                    <span className="material-symbols-outlined text-primary text-base fill-1">star</span>
                                    <span className="text-primary font-black text-xs">{selectedRes.rating}</span>
                                </div>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                {selectedRes.description}
                            </p>

                            <div className="flex gap-3">
                                <Link
                                    to="/menu"
                                    className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
                                >
                                    <span className="text-sm">View Menu</span>
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </Link>
                                <button className="size-14 border-2 border-gray-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center text-mocha dark:text-gray-400">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

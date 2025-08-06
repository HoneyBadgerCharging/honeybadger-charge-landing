import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Navigation, 
  Filter,
  Zap,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  Loader2
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in React Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom green marker for HoneyBadger chargers
const HoneyBadgerIcon = L.divIcon({
  html: `
    <div style="background: hsl(122, 39%, 49%); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    </div>
  `,
  className: "custom-div-icon",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// Sample charger data
const chargerLocations = [
  {
    id: 1,
    name: "Downtown Plaza Charging Hub",
    address: "123 Main St, San Francisco, CA 94105",
    lat: 37.7749,
    lng: -122.4194,
    available: 4,
    total: 6,
    type: "Level 3 - DC Fast",
    power: "150 kW",
    price: "$0.35/kWh",
    rating: 4.8,
    distance: "0.3 mi"
  },
  {
    id: 2,
    name: "Tech Campus Supercharger",
    address: "456 Innovation Blvd, San Francisco, CA 94107",
    lat: 37.7849,
    lng: -122.4094,
    available: 8,
    total: 12,
    type: "Level 3 - DC Fast",
    power: "250 kW",
    price: "$0.32/kWh",
    rating: 4.9,
    distance: "0.8 mi"
  },
  {
    id: 3,
    name: "Riverside Mall Station",
    address: "789 River Rd, San Francisco, CA 94108",
    lat: 37.7649,
    lng: -122.4294,
    available: 2,
    total: 4,
    type: "Level 2",
    power: "22 kW",
    price: "$0.28/kWh",
    rating: 4.5,
    distance: "1.2 mi"
  },
  {
    id: 4,
    name: "Green Office Park",
    address: "321 Eco Way, San Francisco, CA 94109",
    lat: 37.7949,
    lng: -122.4394,
    available: 6,
    total: 8,
    type: "Level 2",
    power: "22 kW",
    price: "$0.25/kWh",
    rating: 4.7,
    distance: "1.5 mi"
  },
  {
    id: 5,
    name: "Airport Express Charging",
    address: "555 Terminal Dr, San Francisco, CA 94110",
    lat: 37.7549,
    lng: -122.4494,
    available: 10,
    total: 20,
    type: "Level 3 - DC Fast",
    power: "350 kW",
    price: "$0.40/kWh",
    rating: 4.6,
    distance: "2.1 mi"
  }
];

const FindCharger = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharger, setSelectedCharger] = useState<typeof chargerLocations[0] | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "fast" | "level2">("all");

  // Get user location
  const getUserLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
          // Default to San Francisco
          setUserLocation([37.7749, -122.4194]);
        }
      );
    }
  };

  useEffect(() => {
    // Set default location to San Francisco
    setUserLocation([37.7749, -122.4194]);
  }, []);

  const filteredChargers = chargerLocations.filter(charger => {
    const matchesSearch = charger.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          charger.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || 
                         (filterType === "fast" && charger.type.includes("Level 3")) ||
                         (filterType === "level2" && charger.type === "Level 2");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 relative">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="absolute left-6 top-6 text-white hover:bg-white/20"
          >
            ← Back to Home
          </Button>
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 mr-3" />
            <h1 className="text-4xl font-bold">HoneyBadger EV Charging Network</h1>
          </div>
          <p className="text-center text-xl opacity-90">
            Find your nearest HoneyBadger EV charger and start charging in minutes
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by location, city, or charger name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-lg"
            />
          </div>
          <Button
            onClick={getUserLocation}
            disabled={isLocating}
            className="bg-primary hover:bg-primary/90 px-6 py-6"
          >
            {isLocating ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Navigation className="w-5 h-5 mr-2" />
            )}
            Use My Location
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={filterType === "all" ? "default" : "outline"}
            onClick={() => setFilterType("all")}
            className="flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            All Chargers
          </Button>
          <Button
            variant={filterType === "fast" ? "default" : "outline"}
            onClick={() => setFilterType("fast")}
          >
            <Zap className="w-4 h-4 mr-2" />
            DC Fast Charging
          </Button>
          <Button
            variant={filterType === "level2" ? "default" : "outline"}
            onClick={() => setFilterType("level2")}
          >
            Level 2 Charging
          </Button>
        </div>

        {/* Map and List Container */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="h-[600px] relative">
                {userLocation && (
                  <MapContainer
                    center={userLocation}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* User location marker */}
                    <Marker position={userLocation}>
                      <Popup>
                        <div className="text-center">
                          <strong>Your Location</strong>
                        </div>
                      </Popup>
                    </Marker>

                    {/* Charger markers */}
                    {filteredChargers.map((charger) => (
                      <Marker
                        key={charger.id}
                        position={[charger.lat, charger.lng]}
                        icon={HoneyBadgerIcon}
                        eventHandlers={{
                          click: () => setSelectedCharger(charger),
                        }}
                      >
                        <Popup>
                          <div className="p-2">
                            <h3 className="font-semibold">{charger.name}</h3>
                            <p className="text-sm text-muted-foreground">{charger.address}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant={charger.available > 0 ? "default" : "destructive"}>
                                {charger.available}/{charger.total} Available
                              </Badge>
                              <Badge variant="outline">{charger.type}</Badge>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
              </div>
            </Card>
          </div>

          {/* Charger List */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            <div className="sticky top-0 bg-background pb-2">
              <h2 className="text-xl font-semibold">
                Nearby Chargers ({filteredChargers.length})
              </h2>
            </div>
            
            {filteredChargers.map((charger) => (
              <Card
                key={charger.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCharger?.id === charger.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCharger(charger)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{charger.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {charger.address}
                      </p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {charger.distance}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge 
                      variant={charger.available > 0 ? "default" : "destructive"}
                      className={charger.available > 0 ? "bg-green-600" : ""}
                    >
                      {charger.available}/{charger.total} Available
                    </Badge>
                    <Badge variant="secondary">{charger.power}</Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {charger.price}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                        {charger.rating}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <p className="text-sm text-muted-foreground">Charging Stations</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">50+</div>
              <p className="text-sm text-muted-foreground">Cities Covered</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">24/7</div>
              <p className="text-sm text-muted-foreground">Available</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindCharger;

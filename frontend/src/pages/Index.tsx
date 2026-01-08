import { Search } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { RestaurantCard } from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { restaurants } from "@/data/restaurants";

const Index = () => {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative gradient-hero py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent animate-pulse delay-500" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
              Discover{" "}
              <span className="text-gradient">Delicious</span>
              <br />
              Restaurants
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore menus from the best local restaurants and order your favorite dishes
            </p>
            <div className="relative max-w-md mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-14 text-lg rounded-2xl bg-card shadow-elevated border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Popular Restaurants
            </h2>
            <span className="text-muted-foreground">
              {filteredRestaurants.length} places
            </span>
          </div>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <div key={restaurant.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <RestaurantCard restaurant={restaurant} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No restaurants found matching "{search}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 FoodieHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

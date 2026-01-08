import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { MenuItemCard } from "@/components/MenuItemCard";
import { OrderDialog } from "@/components/OrderDialog";
import { Button } from "@/components/ui/button";
import { restaurants, type MenuItem } from "@/data/restaurants";

export default function RestaurantMenu() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Restaurant Not Found
          </h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4" />
              Back to Restaurants
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setOrderDialogOpen(true);
  };

  // Group menu items by category
  const categories = [...new Set(restaurant.menu.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Restaurant Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
              {restaurant.name}
            </h1>
            <p className="text-primary-foreground/80 mb-4">
              {restaurant.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-foreground/20 rounded-full backdrop-blur-sm">
                {restaurant.cuisine}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-warm-amber text-warm-amber" />
                {restaurant.rating}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {restaurant.deliveryTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Menu
          </h2>

          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category}
              </h3>
              <div className="grid gap-4">
                {restaurant.menu
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <MenuItemCard key={item.id} item={item} onOrder={handleOrder} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <OrderDialog
        open={orderDialogOpen}
        onOpenChange={setOrderDialogOpen}
        item={selectedItem}
        vendorName={restaurant.name}
      />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 FoodieHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

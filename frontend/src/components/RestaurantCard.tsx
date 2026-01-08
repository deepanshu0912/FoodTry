import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Restaurant } from "@/data/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

export function RestaurantCard({ restaurant, index }: RestaurantCardProps) {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
              {restaurant.cuisine}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {restaurant.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 text-warm-amber">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

export function Header() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-warm rounded-xl flex items-center justify-center shadow-warm group-hover:shadow-elevated transition-shadow">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            FoodieHub
          </span>
        </Link>

        {/* Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Restaurants = Primary CTA */}
          <Link
            to="/"
            className={`px-5 py-2.5 rounded-xl font-semibold transition
              ${
                isHome
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-primary text-primary-foreground shadow-warm hover:opacity-90"
              }`}
          >
            🍔 Restaurants
          </Link>

          {/* Services = Secondary CTA */}
          <Link
            to="/services"
            className={`px-5 py-2.5 rounded-xl border-2 font-semibold transition flex items-center gap-2
              ${
                isServices
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
          >
            🛠 Services
            <span className="ml-1 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
              New
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

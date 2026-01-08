import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/data/restaurants";

interface MenuItemCardProps {
  item: MenuItem;
  onOrder: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onOrder }: MenuItemCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row">
      <div className="sm:w-32 h-32 sm:h-auto flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-lg font-semibold text-foreground">
              {item.name}
            </h4>
            <span className="text-primary font-bold text-lg">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
          <span className="inline-block mt-2 px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
            {item.category}
          </span>
        </div>
        <div className="mt-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onOrder(item)}
            className="w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            Add to Order
          </Button>
        </div>
      </div>
    </div>
  );
}

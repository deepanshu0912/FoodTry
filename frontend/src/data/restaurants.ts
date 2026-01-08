export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  description: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    description: "Authentic Italian cuisine with handmade pasta and wood-fired pizzas",
    menu: [
      { id: "1-1", name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 14.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", category: "Pizza" },
      { id: "1-2", name: "Spaghetti Carbonara", description: "Creamy egg sauce, pancetta, parmesan", price: 16.99, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop", category: "Pasta" },
      { id: "1-3", name: "Tiramisu", description: "Classic Italian dessert with espresso", price: 8.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", category: "Dessert" },
      { id: "1-4", name: "Bruschetta", description: "Toasted bread with tomatoes and garlic", price: 7.99, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop", category: "Appetizer" },
    ]
  },
  {
    id: "2",
    name: "Tokyo Garden",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=600&h=400&fit=crop",
    description: "Fresh sushi and traditional Japanese dishes prepared by master chefs",
    menu: [
      { id: "2-1", name: "Dragon Roll", description: "Eel, avocado, cucumber with special sauce", price: 18.99, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop", category: "Sushi" },
      { id: "2-2", name: "Chicken Ramen", description: "Rich broth, chashu pork, soft egg", price: 15.99, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop", category: "Noodles" },
      { id: "2-3", name: "Gyoza", description: "Pan-fried dumplings with pork filling", price: 9.99, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop", category: "Appetizer" },
      { id: "2-4", name: "Mochi Ice Cream", description: "Assorted flavors of Japanese rice cake", price: 6.99, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", category: "Dessert" },
    ]
  },
  {
    id: "3",
    name: "El Mariachi",
    cuisine: "Mexican",
    rating: 4.7,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1653245964289-9bf98e1cf744?w=600&h=400&fit=crop",
    description: "Vibrant Mexican flavors with fresh ingredients and homemade salsas",
    menu: [
      { id: "3-1", name: "Tacos Al Pastor", description: "Marinated pork with pineapple, cilantro", price: 12.99, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop", category: "Tacos" },
      { id: "3-2", name: "Burrito Supreme", description: "Stuffed with beans, rice, meat, cheese", price: 13.99, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop", category: "Burritos" },
      { id: "3-3", name: "Guacamole & Chips", description: "Fresh avocado with lime and tomatoes", price: 8.99, image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&h=300&fit=crop", category: "Appetizer" },
      { id: "3-4", name: "Churros", description: "Cinnamon sugar with chocolate sauce", price: 7.99, image: "https://images.unsplash.com/photo-1624371414361-e670edf4898b?w=400&h=300&fit=crop", category: "Dessert" },
    ]
  },
  {
    id: "4",
    name: "The Burger Joint",
    cuisine: "American",
    rating: 4.6,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
    description: "Gourmet burgers made with premium beef and artisan buns",
    menu: [
      { id: "4-1", name: "Classic Cheeseburger", description: "Angus beef, cheddar, lettuce, tomato", price: 14.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", category: "Burgers" },
      { id: "4-2", name: "Loaded Fries", description: "Cheese, bacon, jalapeños, sour cream", price: 9.99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", category: "Sides" },
      { id: "4-3", name: "Onion Rings", description: "Beer-battered with ranch dipping sauce", price: 7.99, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop", category: "Sides" },
      { id: "4-4", name: "Milkshake", description: "Vanilla, chocolate, or strawberry", price: 6.99, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop", category: "Drinks" },
    ]
  },
  {
    id: "5",
    name: "Spice Palace",
    cuisine: "Indian",
    rating: 4.8,
    deliveryTime: "35-45 min",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&h=400&fit=crop",
    description: "Aromatic Indian spices and traditional recipes from various regions",
    menu: [
      { id: "5-1", name: "Butter Chicken", description: "Creamy tomato curry with tender chicken", price: 17.99, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop", category: "Curry" },
      { id: "5-2", name: "Garlic Naan", description: "Fresh baked bread with garlic butter", price: 4.99, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop", category: "Bread" },
      { id: "5-3", name: "Samosa", description: "Crispy pastry with spiced potatoes", price: 6.99, image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&h=300&fit=crop", category: "Appetizer" },
      { id: "5-4", name: "Mango Lassi", description: "Sweet yogurt drink with fresh mango", price: 5.99, image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop", category: "Drinks" },
    ]
  },
  {
    id: "6",
    name: "Mediterranean Breeze",
    cuisine: "Mediterranean",
    rating: 4.7,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    description: "Healthy Mediterranean cuisine with fresh ingredients and olive oil",
    menu: [
      { id: "6-1", name: "Falafel Plate", description: "Crispy chickpea balls with hummus, salad", price: 13.99, image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=400&h=300&fit=crop", category: "Main" },
      { id: "6-2", name: "Greek Salad", description: "Feta, olives, cucumber, tomatoes", price: 11.99, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop", category: "Salad" },
      { id: "6-3", name: "Hummus & Pita", description: "Creamy chickpea dip with warm bread", price: 8.99, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop", category: "Appetizer" },
      { id: "6-4", name: "Baklava", description: "Layered pastry with honey and nuts", price: 7.99, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop", category: "Dessert" },
    ]
  }
];

export const services = [
  { id: "s1", name: "Catering Service", description: "Professional catering for events of all sizes", price: "From $299" },
  { id: "s2", name: "Private Chef", description: "Personal chef experience at your home", price: "From $199/hr" },
  { id: "s3", name: "Meal Prep", description: "Weekly meal preparation and delivery", price: "From $149/week" },
  { id: "s4", name: "Cooking Classes", description: "Learn from professional chefs online", price: "From $49/class" },
];

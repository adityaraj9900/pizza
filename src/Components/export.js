import cheese from "../assets/images/cheese.jpg";
import delicious from "../assets/images/delicious.jpg";
import peproni from "../assets/images/peproni.jpg";
import rustica from "../assets/images/rustica.jpg";
import tomato from "../assets/images/tomato.jpg";
import vege from "../assets/images/vege.jpg";

export const pizzas = [
  {
    id: 1,
    image: cheese,
    title: "Paneer Tikka Royale",
    description: "Tandoor-kissed paneer, bell peppers & onions on tikka masala sauce",
    price: "₹349",
    rating: 4.8,
    reviews: 1240,
    badge: "Fan Fav",
    badgeColor: "bg-gold-500 text-black",
    category: "veg",
    isHot: true,
  },
  {
    id: 2,
    image: vege,
    title: "Tandoori Veggie Supreme",
    description: "Seven garden veggies, tandoori seasoning, mint chutney base",
    price: "₹299",
    rating: 4.7,
    reviews: 890,
    badge: "Pure Veg",
    badgeColor: "bg-green-600 text-white",
    category: "veg",
    isHot: false,
  },
  {
    id: 3,
    image: tomato,
    title: "Margherita Deluxe",
    description: "San Marzano tomatoes, fresh basil, buffalo mozzarella — perfected",
    price: "₹249",
    rating: 4.6,
    reviews: 2100,
    badge: "Classic",
    badgeColor: "bg-blue-600 text-white",
    category: "classic",
    isHot: false,
  },
  {
    id: 4,
    image: delicious,
    title: "Butter Chicken Blast",
    description: "Creamy butter chicken, fragrant rosemary, three-cheese melt",
    price: "₹419",
    rating: 4.9,
    reviews: 3200,
    badge: "Best Seller",
    badgeColor: "bg-flame-500 text-white",
    category: "nonveg",
    isHot: true,
  },
  {
    id: 5,
    image: peproni,
    title: "Chicken Tikka Masala",
    description: "Spiced tikka chicken, bold masala sauce, fresh coriander drizzle",
    price: "₹399",
    rating: 4.8,
    reviews: 1870,
    badge: "Spicy",
    badgeColor: "bg-red-600 text-white",
    category: "nonveg",
    isHot: true,
  },
  {
    id: 6,
    image: rustica,
    title: "Rustica Harvest",
    description: "Slow-roasted tomatoes, kalamata olives, sun-dried herbs, balsamic glaze",
    price: "₹328",
    rating: 4.7,
    reviews: 760,
    badge: "New",
    badgeColor: "bg-purple-600 text-white",
    category: "classic",
    isHot: false,
  },
];

export const menuCategories = [
  { key: "all",    label: "All Pizzas" },
  { key: "veg",    label: "🌱 Veg" },
  { key: "nonveg", label: "🍗 Non-Veg" },
  { key: "classic",label: "🍕 Classic" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    city: "Mumbai",
    text: "The Paneer Tikka Royale is absolutely divine! The flavors are bold and authentic. PizzaRaj has completely changed how I think about pizza in India.",
    rating: 5,
    initials: "PS",
    color: "#E63312",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    city: "Delhi",
    text: "I've tried every pizza chain out there — PizzaRaj's Butter Chicken Blast is on a completely different level. Order it. Trust me.",
    rating: 5,
    initials: "AM",
    color: "#F5A623",
  },
  {
    id: 3,
    name: "Sneha Patel",
    city: "Bangalore",
    text: "Fast delivery, piping hot, incredible taste. The Chicken Tikka Masala pizza is my weekly ritual now. PizzaRaj for life!",
    rating: 5,
    initials: "SP",
    color: "#E63312",
  },
];

export const faqs = [
  {
    q: "What makes PizzaRaj different from other pizza chains?",
    a: "We blend authentic Indian spice profiles with world-class pizza craftsmanship. Every pizza is made fresh, baked in signature wood-fired ovens for that unmistakable char and crunch you won't find anywhere else.",
  },
  {
    q: "What are your delivery hours?",
    a: "We deliver 10:00 AM – 11:30 PM, 7 days a week. Every order arrives within 30 minutes or your next order gets 20% off — guaranteed.",
  },
  {
    q: "Do you have gluten-free or vegan options?",
    a: "Absolutely! Gluten-free crust is available on any pizza, and we offer vegan cheese. Our entire Veg range is certified 100% plant-based with clear dietary labeling.",
  },
  {
    q: "How can I track my order?",
    a: "After placing your order you'll receive a real-time tracking link via SMS and email with live GPS updates of your delivery partner.",
  },
  {
    q: "Do you cater for events and bulk orders?",
    a: "Yes! We love feeding crowds. Contact us at least 48 hours in advance for 10+ pizzas and we'll set you up with special event pricing and premium packaging.",
  },
];

export const stats = [
  { value: "50K+", label: "Happy Customers", icon: "👥" },
  { value: "200+", label: "Cities Covered",   icon: "🏙️" },
  { value: "15+",  label: "Years of Flavor",  icon: "🍕" },
  { value: "4.9★", label: "App Rating",       icon: "⭐" },
];

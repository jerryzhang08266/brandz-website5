import { useState } from 'react'
import { Menu, X, ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import markSmithyLogo from './assets/marksmithy_logo_final.png'
import heroImage from './assets/hero_image_final.png'
import officeStationeryImage from './assets/office_stationery_final.png'
import tech3cImage from './assets/tech_3c_final.png'
import creativeCulturalImage from './assets/creative_cultural_final.png'
import beverageProductsImage from './assets/beverage_products_final.png'
import apparelProductsImage from './assets/apparel_products_final.png'
import diningTablewareImage from './assets/dining_tableware_final.png'
import ecoProductsImage from './assets/eco_products_final.png'
import creativeGiftsImage from './assets/creative_gifts_final.png'
import travelSafetyImage from './assets/travel_safety_final.png'

const productCategories = [
  {
    title: "Office & Stationery",
    description: "Professional office supplies with premium brand quality",
    image: officeStationeryImage,
    brands: ["Moleskine", "Parker", "Staedtler", "3M", "Pilot"],
    items: ["Custom Pens", "Notebooks", "File Folders", "Sticky Notes", "Desk Accessories", "USB Drives"]
  },
  {
    title: "Tech & 3C Products", 
    description: "Cutting-edge technology accessories for modern businesses",
    image: tech3cImage,
    brands: ["Anker", "Logitech", "JBL", "Samsung", "Xiaomi"],
    items: ["Power Banks", "Wireless Mice", "Bluetooth Headphones", "Phone Cases", "USB Hubs", "Wireless Chargers"]
  },
  {
    title: "Creative & Cultural",
    description: "Artistic and cultural items that inspire creativity",
    image: creativeCulturalImage,
    brands: ["Starbucks", "Yeti", "Contigo", "Thermos", "Nike"],
    items: ["Custom Mugs", "Canvas Bags", "T-Shirts", "Art Supplies", "Cultural Gifts", "Creative Tools"]
  },
  {
    title: "Beverage Products",
    description: "Premium drinkware for every occasion",
    image: beverageProductsImage,
    brands: ["Hydro Flask", "S'well", "Contigo", "Yeti", "Thermos"],
    items: ["Thermal Bottles", "Coffee Cups", "Tea Sets", "Water Bottles", "Travel Mugs", "Drink Accessories"]
  },
  {
    title: "Apparel & Fashion",
    description: "Stylish clothing and accessories for brand representation",
    image: apparelProductsImage,
    brands: ["Uniqlo", "H&M", "Adidas", "Under Armour", "Polo Ralph Lauren"],
    items: ["Custom T-Shirts", "Polo Shirts", "Hoodies", "Caps", "Socks", "Jackets"]
  },
  {
    title: "Dining & Tableware",
    description: "Elegant dining solutions for corporate events",
    image: diningTablewareImage,
    brands: ["Tupperware", "Lock&Lock", "Zojirushi", "Tiger", "Thermos"],
    items: ["Lunch Boxes", "Cutlery Sets", "Serving Trays", "Food Containers", "Dining Accessories", "Kitchen Tools"]
  },
  {
    title: "Eco-Friendly Products",
    description: "Sustainable solutions for environmentally conscious brands",
    image: ecoProductsImage,
    brands: ["Patagonia", "Baggu", "Klean Kanteen", "Bamboo", "Organic Cotton"],
    items: ["Reusable Bags", "Bamboo Products", "Eco Masks", "Recycled Items", "Sustainable Gifts", "Green Accessories"]
  },
  {
    title: "Creative Gifts & Awards",
    description: "Unique gifts and recognition items for special occasions",
    image: creativeGiftsImage,
    brands: ["Swarovski", "Waterford", "Tiffany & Co.", "Montblanc", "Cross"],
    items: ["Custom Puzzles", "Award Trophies", "Gift Boxes", "Commemorative Items", "Luxury Gifts", "Recognition Awards"]
  },
  {
    title: "Travel & Safety",
    description: "Essential travel and safety equipment for professionals",
    image: travelSafetyImage,
    brands: ["Samsonite", "Travelpro", "3M", "Honeywell", "MSA"],
    items: ["Custom Luggage", "Travel Accessories", "Safety Vests", "Emergency Kits", "Conference Materials", "ID Badges"]
  }
]

const features = [
  {
    icon: <Globe className="w-8 h-8 marksmithy-text" />,
    title: "Global Top Brands",
    description: "Exclusively featuring premium brands. Retail quality guaranteed."
  },
  {
    icon: <CheckCircle className="w-8 h-8 marksmithy-text" />,
    title: "Complete Event Solutions", 
    description: "Smart AI recommendations for complete gift packages based on your event type and budget. One-stop solution."
  },
  {
    icon: <ArrowRight className="w-8 h-8 marksmithy-text" />,
    title: "Express Delivery",
    description: "10-piece minimum orders with guaranteed 7-day worldwide delivery. Distributed fulfillment centers globally."
  },
  {
    icon: <Shield className="w-8 h-8 marksmithy-text" />,
    title: "Transparent Pricing",
    description: "Simple and clear: Retail price + 10%. No hidden fees, no complex pricing tiers. What you see is what you pay."
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "Marketing Director",
    content: "MarkSmithy has transformed how we handle our promotional merchandise. The quality is exceptional and the process is seamless.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Global Solutions",
    role: "Procurement Manager",
    content: "Outstanding service and competitive pricing. MarkSmithy is now our go-to partner for all branded merchandise needs.",
    rating: 5
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center py-2">
              <img src={markSmithyLogo} alt="MarkSmithy" className="h-20 w-auto max-w-none object-contain" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <nav className="hidden md:flex space-x-8">
                  <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                  <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
                  <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
                  <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                </nav>
                <Button className="hidden md:block marksmithy-primary">
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-foreground block px-3 py-2 text-base font-medium">Home</a>
              <a href="#products" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">Products</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">How It Works</a>
              <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium">About</a>
              <div className="px-3 py-2">
                <Button className="marksmithy-primary w-full">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-muted to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Premium Brand Custom Merchandise For Enterprise Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your corporate identity with premium branded merchandise from global top brands. Professional quality, transparent pricing, express delivery worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="marksmithy-primary px-8 py-3 text-lg">
                  Join Our Exclusive Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="marksmithy-border marksmithy-text hover:marksmithy-bg-light px-8 py-3 text-lg">
                  View Product Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={heroImage} alt="MarkSmithy Premium Products" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MarkSmithy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core advantages that set us apart in the custom merchandise industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Premium Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of high-quality branded merchandise for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  
                  {/* Brand badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.brands.map((brand, brandIndex) => (
                      <span key={brandIndex} className="px-2 py-1 marksmithy-bg-light marksmithy-text text-xs font-medium rounded-full">
                        {brand}
                      </span>
                    ))}
                  </div>
                  
                  {/* Product items */}
                  <div className="text-sm text-muted-foreground">
                    {category.items.join(" • ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 marksmithy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-200">Premium Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <div className="text-red-200">Enterprise Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80+</div>
              <div className="text-red-200">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-red-200">Days Global Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading enterprises worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r marksmithy-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Join our exclusive membership program and experience premium branded merchandise with transparent pricing, global top brands, and express delivery.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Join Our Exclusive Membership
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img src={markSmithyLogo} alt="MarkSmithy" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400 mb-6 max-w-md">
                Premium branded merchandise platform connecting enterprises with global top brands. 
                Transparent pricing, express delivery, exceptional quality.
              </p>
              <div className="flex space-x-4">
                <Users className="w-6 h-6 text-gray-400" />
                <Globe className="w-6 h-6 text-gray-400" />
                <Shield className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Office & Stationery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tech & 3C Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apparel & Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Creative Gifts</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarkSmithy. All rights reserved. Premium branded merchandise platform.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/common/ProductCard";
import {
  Sprout,
  Leaf,
  Heart,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Fresh Organic Produce",
      subtitle: "Direct from our farm to your table",
      description:
        "Experience the purity of nature with our chemical-free, organically grown vegetables and fruits.",
      image:
        "https://miaoda-site-img.s3cdn.medo.dev/images/78363e9e-4033-418e-b0d9-b3209030b9f1.jpg",
      ctaText: "Shop Fresh Produce",
      ctaLink: "/products?category=fresh",
      color: "from-emerald-600/90 to-green-700/90",
    },
    {
      id: 2,
      title: "Sustainable Farming",
      subtitle: "Nurturing the earth",
      description:
        "Our eco-friendly practices ensure healthy soil, clean water, and biodiversity for future generations.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      ctaText: "Learn About Our Farm",
      ctaLink: "/about",
      color: "from-amber-600/90 to-orange-700/90",
    },
    {
      id: 3,
      title: "Farm Fresh Dairy",
      subtitle: "Pure & Natural",
      description:
        "Grass-fed dairy products from happy cows grazing on organic pastures.",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      ctaText: "View Dairy Products",
      ctaLink: "/products?category=dairy",
      color: "from-blue-600/90 to-cyan-700/90",
    },
    {
      id: 4,
      title: "Seasonal Harvest",
      subtitle: "Freshly picked just for you",
      description:
        "Enjoy seasonal varieties at their peak flavor and nutritional value.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      ctaText: "View Seasonal Offers",
      ctaLink: "/products?seasonal=true",
      color: "from-purple-600/90 to-violet-700/90",
    },
  ];

  useEffect(() => {
    const products = productsData as Product[];
    setFeaturedProducts(products.slice(0, 4));
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description:
        "All our products are grown using organic farming methods without harmful chemicals.",
    },
    {
      icon: Heart,
      title: "Sustainable",
      description:
        "We practice sustainable farming to protect the environment for future generations.",
    },
    {
      icon: Sprout,
      title: "Fresh Produce",
      description:
        "Farm-fresh products delivered with care, maintaining quality and nutrition.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Supporting local communities and promoting healthy living through organic farming.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Modern Hero Slider */}
      <section className="relative w-full h-[400px] xl:h-[500px] overflow-hidden">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-linear"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform:
                    index === currentSlide ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}
              />

              {/* Content */}
              <div className="container relative h-full mx-auto px-4 xl:px-8">
                <div className="h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                      <Sprout className="w-4 h-4" />
                      <span>{slide.subtitle}</span>
                    </div>
                    <h1 className="text-4xl xl:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8">
                      {slide.description}
                    </p>
                    <Link to={slide.ctaLink}>
                      <Button
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        {slide.ctaText}
                        <ArrowRight className="ml-2 w-2 h-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
        </div>

        {/* Arrow Navigation */}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-5000 ease-linear"
            style={{
              width: isAutoPlaying ? "100%" : "0%",
              animation: isAutoPlaying ? "progress 5s linear" : "none",
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 xl:py-24 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 xl:px-8 relative z-10">
          {/* Header with animated underline */}
          <div className="text-center mb-16 xl:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-8 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm xl:text-base font-medium text-primary tracking-wider uppercase">
                Our Advantages
              </span>
            </div>

            <h2 className="text-3xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why{" "}
              <span className="relative inline-block">
                Choose Us
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></span>
              </span>
            </h2>

            <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are committed to providing the highest quality organic produce
              through
              <span className="font-semibold text-primary/80">
                {" "}
                sustainable farming practices
              </span>
              and innovative agricultural techniques.
            </p>
          </div>

          {/* Features grid with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <Card className="relative border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-16 h-16 rotate-45 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                  </div>

                  <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                    {/* Icon with gradient background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur group-hover:blur-xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-8 h-8 text-primary group-hover:text-primary/90 transition-colors" />
                      </div>
                      {/* Floating number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Read more link */}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Stats banner at bottom */}
          <div className="mt-16 xl:mt-20 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "100%", label: "Organic Certified" },
                  { value: "500+", label: "Happy Customers" },
                  { value: "50+", label: "Farm Products" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl xl:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-12 xl:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of premium organic crops and vegetables,
              grown with care and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - New Addition */}
      <section className="w-full py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl xl:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl xl:text-5xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Organic Certified
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl xl:text-5xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-sm text-muted-foreground">Farm Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl xl:text-5xl font-bold text-primary mb-2">
                60+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full py-16 xl:py-24 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Community Says</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of families who trust us for their daily nutrition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Sarah Johnson",
                role: "Local Restaurant Chef",
                content:
                  "The quality of produce from this farm is exceptional. The flavor and freshness are unmatched. Our customers can taste the difference!",
                rating: 5,
                image: "👩‍🍳",
              },
              {
                name: "Michael Chen",
                role: "Family of 4, Weekly Subscriber",
                content:
                  "We've been getting our weekly vegetable box for 2 years now. The variety and quality keep getting better. Our kids actually eat their vegetables now!",
                rating: 5,
                image: "👨‍👩‍👧‍👦",
              },
              {
                name: "Elena Rodriguez",
                role: "Nutritionist",
                content:
                  "As a nutritionist, I recommend their produce to all my clients. The nutrient density is noticeably higher than conventional produce.",
                rating: 5,
                image: "👩‍⚕️",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <span className="text-xs">★</span>
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-8 border-t">
            {[
              { label: "USDA Organic", icon: "🌱" },
              { label: "Non-GMO Project", icon: "🧬" },
              { label: "Certified Sustainable", icon: "♻️" },
              { label: "Local First", icon: "🏡" },
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{badge.icon}</div>
                <span className="text-sm font-medium text-muted-foreground">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Farming Practices Section */}
      <section className="w-full py-16 xl:py-24 bg-muted/30">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Farming Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in farming that nourishes both people and the planet.
              Our practices are rooted in sustainability and respect for nature.
            </p>
          </div>

          <div className="space-y-12">
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
    {[
      {
        title: "Soil Health",
        icon: Leaf,
        description: "Regenerative agriculture practices",
        color: "bg-emerald-500"
      },
      {
        title: "Water",
        icon: "💧",
        description: "Conservation techniques",
        color: "bg-blue-500"
      },
      {
        title: "Biodiversity",
        icon: Sprout,
        description: "Ecosystem protection",
        color: "bg-purple-500"
      }
    ].map((tab, index) => (
      <button
        key={index}
        className="flex flex-col items-center p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
      >
        <div className={`w-12 h-12 rounded-xl ${tab.color} flex items-center justify-center mb-4`}>
          {typeof tab.icon === 'string' ? (
            <span className="text-2xl text-white">💧</span>
          ) : (
            <tab.icon className="w-6 h-6 text-white" />
          )}
        </div>
        <h3 className="font-bold text-lg text-foreground mb-2">{tab.title}</h3>
        <p className="text-sm text-muted-foreground text-center">{tab.description}</p>
      </button>
    ))}
  </div>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Soil Regeneration",
        icon: Leaf,
        description: "Building healthy soil through natural processes",
        benefits: [
          { icon: "🌱", text: "Improved soil structure" },
          { icon: "🔄", text: "Carbon sequestration" },
          { icon: "🪱", text: "Increased earthworms" },
          { icon: "💪", text: "Better crop resilience" }
        ]
      },
      {
        title: "Smart Irrigation",
        icon: "💧",
        description: "Efficient water management systems",
        benefits: [
          { icon: "💧", text: "70% less water usage" },
          { icon: "🌞", text: "Solar-powered systems" },
          { icon: "📊", text: "Smart monitoring" },
          { icon: "🌱", text: "Root-level hydration" }
        ]
      },
      {
        title: "Eco-Habitat",
        icon: Sprout,
        description: "Supporting local wildlife and pollinators",
        benefits: [
          { icon: "🐝", text: "Native bee habitats" },
          { icon: "🦋", text: "Butterfly gardens" },
          { icon: "🐦", text: "Bird nesting areas" },
          { icon: "🦉", text: "Natural pest control" }
        ]
      }
    ].map((practice, index) => (
      <div key={index} className="group">
        <Card className="h-full border hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-4 pb-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {typeof practice.icon === 'string' ? (
                    <span className="text-2xl">💧</span>
                  ) : (
                    <practice.icon className="w-7 h-7 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{practice.description}</p>
                </div>
              </div>
            </div>
            
            {/* Benefits List */}
            <div className="p-8 pt-6">
              <div className="space-y-4">
                {practice.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="text-xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
           
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
</div>

          {/* Process Timeline */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-12">
              From Seed to Harvest
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden lg:block"></div>

              <div className="space-y-12 lg:space-y-0">
                {[
                  {
                    step: "Seed Selection",
                    desc: "Choosing non-GMO, heirloom seeds for best flavor and nutrition",
                  },
                  {
                    step: "Soil Preparation",
                    desc: "Enriching soil with organic compost and natural amendments",
                  },
                  {
                    step: "Planting",
                    desc: "Timing planting with moon cycles and seasonal patterns",
                  },
                  {
                    step: "Natural Care",
                    desc: "Using companion planting and beneficial insects for pest control",
                  },
                  {
                    step: "Harvest",
                    desc: "Hand-picked at peak ripeness for maximum flavor",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative lg:flex ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center`}
                  >
                    <div className="lg:w-1/2">
                      <div
                        className={`lg:p-6 p-4 ${
                          index % 2 === 0
                            ? "lg:text-right lg:pr-12"
                            : "lg:text-left lg:pl-12"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <h4 className="text-xl font-bold">{item.step}</h4>
                        </div>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden lg:block"></div>

                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Farm Visit Section */}
   {/* Farm Visit Section - Fixed Responsiveness */}
<section className="w-full py-12 md:py-16 xl:py-24 bg-gradient-to-br from-emerald-50 to-green-50">
  <div className="container mx-auto px-4 sm:px-6 xl:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-6">
          <Users className="w-4 h-4" />
          <span>Visit Us</span>
        </div>

        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
          Experience Farm Life{" "}
          <span className="text-emerald-600">Firsthand</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
          Come see where your food comes from! Join us for farm tours,
          workshops, and seasonal events that connect you with nature and
          sustainable farming.
        </p>

        <div className="space-y-6 mb-8">
          {[
            {
              icon: "🚜",
              title: "Farm Tours",
              desc: "Guided tours every Saturday at 10 AM & 2 PM",
            },
            {
              icon: "👨‍🌾",
              title: "Workshops",
              desc: "Learn organic gardening, composting, and preservation",
            },
            {
              icon: "🎉",
              title: "Seasonal Events",
              desc: "Harvest festivals, pumpkin patches, and farm-to-table dinners",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div className="min-w-0">
                <h4 className="font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/visit">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
            >
              Plan Your Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto"
            >
              View Events Calendar
            </Button>
          </Link>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative mb-8 lg:mb-0">
        {/* Image Grid Layout */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
  <div className="space-y-3 sm:space-y-4">
    <img
      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      alt="Vegetable harvest"
      className="rounded-2xl shadow-lg h-48 sm:h-56 w-full object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      alt="Fresh tomatoes"
      className="rounded-2xl shadow-lg h-40 sm:h-48 w-full object-cover"
    />
  </div>
  <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
    <img
      src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      alt="Apple picking"
      className="rounded-2xl shadow-lg h-40 sm:h-48 w-full object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      alt="Berries harvest"
      className="rounded-2xl shadow-lg h-48 sm:h-56 w-full object-cover"
    />
  </div>
</div>

        {/* Location info */}
        
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Experience Organic Goodness?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-50">
              Get in touch with us to learn more about our products and farming
              practices.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group bg-white text-green-700 hover:bg-green-50 px-10 py-6 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Add CSS Animation for Progress Bar */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;

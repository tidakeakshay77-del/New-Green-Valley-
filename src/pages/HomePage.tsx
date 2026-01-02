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
      <section className="w-full py-16 xl:py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
  {/* Background decorative elements - farm theme */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/20 via-emerald-400/20 to-green-500/20"></div>
    <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-green-500/5 blur-3xl"></div>
    <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl"></div>
    {/* Subtle leaf patterns */}
    <div className="absolute top-20 right-10 w-32 h-32 opacity-5">
      <svg viewBox="0 0 100 100" fill="currentColor" className="text-green-600">
        <path d="M50,10 C70,10 85,30 85,50 C85,70 70,90 50,90 C30,90 15,70 15,50 C15,30 30,10 50,10 Z" />
      </svg>
    </div>
  </div>

  <div className="container mx-auto px-4 xl:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
      
      {/* Left Column - Image/Visual */}
      <div className="relative group">
        {/* Main image container with decorative frames */}
        <div className="relative">
          {/* Outer decorative border */}
          <div className="absolute -inset-4 bg-gradient-to-br from-green-400/10 via-emerald-500/10 to-green-600/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-900/10">
            <div className="aspect-square bg-gradient-to-br from-green-100 via-emerald-50 to-green-50">
              {/* You can replace this with an actual image */}
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Placeholder farm illustration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-300/20"></div>
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Tidke Green Valley</h3>
                  <p className="text-green-600">Since 1960</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform"></div>
        </div>

        {/* Floating badge */}
        
      </div>

      {/* Right Column - Welcome Message */}
      <div className="space-y-8">
        {/* Header with animated underline */}
        <div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-8 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm xl:text-base font-medium text-green-600 tracking-wider uppercase">
              Welcome to Our Farm
            </span>
          </div>

          <h2 className="text-3xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
            Welcome to{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Tidke Green Valley Farm
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></span>
            </span>
          </h2>

          {/* Welcome text */}
          <div className="space-y-6">
            <p className="text-lg xl:text-xl text-muted-foreground leading-relaxed">
              Nestled in the heart of nature's bounty,  <span className="font-semibold text-green-700">Tidke Green Valley Farm</span> has been cultivating organic excellence since 1995. Our farm is a testament to sustainable agriculture and a deep respect for the earth.
            </p>
            
            <p className="text-base xl:text-lg text-muted-foreground leading-relaxed">
              We believe in growing food the way nature intended—without chemicals, full of flavor, and packed with nutrients. Every vegetable, fruit, and herb from our farm tells a story of care, dedication, and love for the land.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🌱", text: "100% Organic & Chemical-Free" },
                { icon: "🌍", text: "Sustainable Farming Practices" },
                { icon: "👨‍🌾", text: "Family-Owned & Operated" },
                { icon: "🚜", text: "Farm-to-Table Freshness" },
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span>{highlight.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 transform">
              Visit Our Farm
            </button>

<Link  to={'/about'}>
  <button className="px-8 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 transform">
    Our Story
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>

    {/* Farm values section below */}
    <div className="mt-20 pt-12 border-t border-green-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Our Mission",
            description: "To provide fresh, organic produce while preserving the environment for future generations.",
            icon: "🎯"
          },
          {
            title: "Our Vision",
            description: "A world where everyone has access to healthy, chemical-free food from trusted local sources.",
            icon: "👁️"
          },
          {
            title: "Our Values",
            description: "Sustainability, transparency, and respect for nature guide everything we do at our farm.",
            icon: "❤️"
          }
        ].map((value, index) => (
          <div key={index} className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">{value.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
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

import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/common/ProductCard';
import { Search } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Product } from '@/types';

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'all' | 'crop' | 'vegetable'>('all');

  const products = productsData as Product[];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (activeTab !== 'all' && product.category !== activeTab) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDescription = product.description.toLowerCase().includes(query);
        const matchesSeason = product.season.toLowerCase().includes(query);
        if (!matchesName && !matchesDescription && !matchesSeason) {
          return false;
        }
      }

      // Availability filter
      if (availabilityFilter !== 'all' && product.availability !== availabilityFilter) {
        return false;
      }

      return true;
    });
  }, [products, activeTab, searchQuery, availabilityFilter]);

  const cropCount = products.filter((p) => p.category === 'crop').length;
  const vegetableCount = products.filter((p) => p.category === 'vegetable').length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 xl:py-16 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl xl:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-base xl:text-lg text-muted-foreground">
              Explore our wide range of organic crops and vegetables, grown with care and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col xl:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
              <SelectTrigger className="w-full xl:w-[200px]">
                <SelectValue placeholder="Filter by availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="seasonal">Seasonal</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'all' | 'crop' | 'vegetable')}>
            <TabsList className="grid w-full xl:w-[400px] grid-cols-3 mb-8">
              <TabsTrigger value="all">
                All ({products.length})
              </TabsTrigger>
              <TabsTrigger value="crop">
                Crops ({cropCount})
              </TabsTrigger>
              <TabsTrigger value="vegetable">
                Vegetables ({vegetableCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="crop" className="mt-0">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No crops found matching your criteria.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="vegetable" className="mt-0">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No vegetables found matching your criteria.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

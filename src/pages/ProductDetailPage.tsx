import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Leaf, Clock, CheckCircle2 } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Product } from '@/types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const products = productsData as Product[];
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-primary text-primary-foreground';
      case 'seasonal':
        return 'bg-secondary text-secondary-foreground';
      case 'out-of-stock':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'Available Now';
      case 'seasonal':
        return 'Seasonal';
      case 'out-of-stock':
        return 'Out of Stock';
      default:
        return availability;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <section className="w-full py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4 xl:px-8">
          <Link to="/products">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <Badge className={getAvailabilityColor(product.availability)}>
                  {getAvailabilityText(product.availability)}
                </Badge>
              </div>
              <h1 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-base xl:text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <Separator className="my-6" />

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Growing Season</h3>
                    <p className="text-sm text-muted-foreground">{product.season}</p>
                  </div>
                </div>

                {product.harvestTime && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Harvest Time</h3>
                      <p className="text-sm text-muted-foreground">{product.harvestTime}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Farming Method</h3>
                    <p className="text-sm text-muted-foreground">{product.farmingMethod}</p>
                  </div>
                </div>
              </div>

              {product.benefits && product.benefits.length > 0 && (
                <>
                  <Separator className="my-6" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Health Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full py-12 xl:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xl:px-8">
          <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Our Organic Products?
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  100% Organic
                </h3>
                <p className="text-sm text-muted-foreground">
                  Grown without synthetic pesticides, herbicides, or chemical fertilizers. 
                  Only natural and organic methods are used.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Sustainable Practices
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our farming methods protect the environment, conserve water, and maintain 
                  soil health for future generations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Farm Fresh
                </h3>
                <p className="text-sm text-muted-foreground">
                  Harvested at peak ripeness and delivered fresh, ensuring maximum nutrition 
                  and flavor in every product.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-white text-gray-700 shadow-md';
      case 'seasonal':
        return 'bg-white text-gray-700 shadow-md';
      case 'out-of-stock':
        return 'bg-gray-100 text-gray-500 shadow-md';
      default:
        return 'bg-white text-gray-700 shadow-md';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'AVAILABLE';
      case 'seasonal':
        return 'SEASONAL';
      case 'out-of-stock':
        return 'OUT OF STOCK';
      default:
        return availability.toUpperCase();
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50 hover:border hover:border-gray-200 rounded-3xl">
      <div className="relative p-2 pb-0">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute top-3 right-3">
          <Badge className={`${getAvailabilityColor(product.availability)} rounded-full px-1 py-1 text-xs font-sm`}>
            {getAvailabilityText(product.availability)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-2">
        <h3 className="text-xl font-serif font-bold text-green-800  mb-3 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow ">
          {product.description}
        </p>

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Leaf className="w-5 h-5 text-green-600 shrink-0" />
            <span className="text-xs text-green-600 font-medium">{ 'Traditional'}</span>
          </div>
          <Link to={`/products/${product.id}`} className="group">
            <Button 
              variant="ghost" 
              className="flex items-center gap-1 text-sm font-bold text-primary hover:text-accent transition-colors hover:text-orange-400"
            >
              <span>View Details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
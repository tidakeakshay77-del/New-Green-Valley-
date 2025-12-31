import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import galleryData from '@/data/gallery.json';
import type { GalleryImage } from '@/types';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const images = galleryData as GalleryImage[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 xl:py-16 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl xl:text-5xl font-bold text-foreground mb-4">
              Farm Gallery
            </h1>
            <p className="text-base xl:text-lg text-muted-foreground">
              Take a visual journey through our organic farm and see where your food comes from.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer border-border transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <span className="text-2xl">✕</span>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <p className="mt-4 text-center text-muted-foreground">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

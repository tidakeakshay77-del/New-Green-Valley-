import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, Target, Heart, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Sprout,
      title: 'Organic Farming',
      description: 'We use only natural methods and organic inputs to grow our crops, ensuring chemical-free produce.',
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Every product is carefully cultivated and monitored to meet the highest quality standards.',
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Our farming practices protect the environment and promote biodiversity for future generations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to excellence in every aspect, from seed selection to harvest and delivery.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 xl:py-20 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl xl:text-5xl font-bold text-foreground mb-6">
              About Green Valley Farm
            </h1>
            <p className="text-base xl:text-xl text-muted-foreground">
              A legacy of organic farming, sustainable practices, and commitment to healthy living.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <div className="order-2 xl:order-1">
              <h2 className="text-2xl xl:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                Green Valley Farm’s journey began in 1960, in a small village where farming was not a business, but a way of life. Our grandparents worked the land with simple tools, strong hands, and deep respect for nature. Farming was done according to the seasons, guided by traditional knowledge passed down through generations.
                </p>
                <p>
                In those early days, the farm relied on natural methods—using cow manure, compost, crop rotation, and rainfall—to nourish the soil. There were no chemicals, only patience, hard work, and trust in the land. The fields provided food not just for our family, but for the entire village.</p>
                <p>
                As years passed, the responsibility of the farm moved from one generation to the next. Our parents continued the tradition, preserving the values of honest farming while slowly adapting to changing times. Even as modern agriculture grew around us, we stayed committed to natural and sustainable practices, believing that healthy soil is the foundation of healthy crops. </p>
              <p>oday, Green Valley Farm proudly carries forward this legacy. We combine our traditional village farming wisdom with modern organic techniques to grow a wide variety of fresh, chemical-free vegetables and crops. Every seed we plant reflects over six decades of experience, care, and dedication.</p>
              </div>
            </div>
            <div className="order-1 xl:order-2">
              <div className="relative aspect-square xl:aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://manierseeds.com/yukleme/blog/tum-ciftcilerimizin-14-mayis-dunya-ciftciler-gununu-kutlariz-1-0.jpg"
                  alt="Green Valley Farm landscape"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Methods Section */}
      <section className="w-full py-12 xl:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground mb-4">
              Our Farming Methods
            </h2>
            <p className="text-base xl:text-lg text-muted-foreground">
              We employ sustainable and organic farming practices that respect nature and produce 
              the highest quality crops.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Natural Composting
                </h3>
                <p className="text-sm text-muted-foreground">
                  We create nutrient-rich compost from organic waste, enriching our soil naturally 
                  without chemical fertilizers. This improves soil structure and promotes healthy 
                  microbial activity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Crop Rotation
                </h3>
                <p className="text-sm text-muted-foreground">
                  By rotating different crops seasonally, we maintain soil fertility, reduce pest 
                  problems, and prevent soil erosion. This traditional practice ensures long-term 
                  land productivity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Integrated Pest Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use natural pest control methods including beneficial insects, companion 
                  planting, and organic pesticides only when necessary, protecting both crops 
                  and the environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Water Conservation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Efficient irrigation systems and rainwater harvesting help us conserve water 
                  while ensuring our crops receive adequate moisture for optimal growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Biodiversity
                </h3>
                <p className="text-sm text-muted-foreground">
                  We maintain diverse ecosystems on our farm, including native plants and wildlife 
                  habitats, which support natural pollination and pest control.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Soil Health
                </h3>
                <p className="text-sm text-muted-foreground">
                  Regular soil testing and organic amendments ensure our soil remains healthy and 
                  productive, providing essential nutrients to our crops naturally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl xl:text-4xl font-bold text-foreground mb-4">
              Our Values & Philosophy
            </h2>
            <p className="text-base xl:text-lg text-muted-foreground">
              The principles that guide everything we do at Green Valley Farm.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 xl:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl xl:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-base xl:text-lg opacity-90">
              To cultivate the finest organic produce while preserving the environment, supporting 
              local communities, and promoting healthy living. We strive to be stewards of the land, 
              ensuring that future generations can enjoy the benefits of sustainable agriculture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Show success message (no actual submission)
    toast({
      title: 'Message Received!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9373775020', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 xl:py-16 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl xl:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-base xl:text-lg text-muted-foreground">
              Have questions about our products or farming practices? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 xl:py-20 bg-background">
        <div className="container mx-auto px-4 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            {/* Contact Info */}
            <div className="xl:col-span-1 space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Arun Tidke<br />
                        Erandgaon, Amravati<br />
                        Maharashtra State, India - 444701 
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +91 93737 75020
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Sat: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        tidake.akshay66@gmail.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full"
                size="lg"
                variant="default"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 12345 67890"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 xl:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xl:px-8">
          <h2 className="text-2xl xl:text-3xl font-bold text-foreground mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="relative w-full h-[400px] xl:h-[500px] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6274.4615376536885!2d77.8606510058411!3d20.758203957854843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a9004fe1e0f5%3A0xdb567f36a51d2e10!2sArun%20Tidke%20Farm!5e0!3m2!1sen!2sin!4v1766472559368!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tidke Green Valley Farm Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

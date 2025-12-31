import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 xl:px-8 py-8 xl:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                <Sprout className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">
                  Green Valley Farm
                </span>
                <span className="text-xs text-muted-foreground">
                  Organic & Sustainable
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Growing organic crops and vegetables with sustainable farming practices for a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-foreground">Our Products</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">Crops</p>
              <p className="text-sm text-muted-foreground">Vegetables</p>
              <p className="text-sm text-muted-foreground">Organic Produce</p>
              <p className="text-sm text-muted-foreground">Seasonal Items</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Green Valley Farm, Erandgaion, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">
                  +91 93737 75020
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">
                  tidake.akshay@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center xl:text-left">
              © {currentYear} Green Valley Farm. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

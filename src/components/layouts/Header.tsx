import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sprout } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="flex h-16 xl:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 xl:gap-3 group">
            <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
              <Sprout className="w-5 h-5 xl:w-6 xl:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base xl:text-lg font-bold text-foreground">
                Tidke Green Valley Farm
              </span>
              <span className="text-xs text-muted-foreground hidden xl:block">
                Organic & Sustainable
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? 'default' : 'ghost'}
                  className="text-sm font-medium transition-colors"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <Sprout className="w-6 h-6 text-primary" />
                  <span className="font-bold text-lg">Green Valley Farm</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={isActive(link.path) ? 'default' : 'ghost'}
                        className="w-full justify-start text-base"
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

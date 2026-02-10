import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '../../utils/scrollToSection';

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Products', href: 'products' },
  { label: 'Why Choose Us', href: 'why-choose' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Contact', href: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl sm:text-2xl font-bold text-gold hover:text-gold/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black rounded"
          >
            Spice Lux
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-cream hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black rounded"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-cream hover:text-gold hover:bg-gold/10"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-black border-gold/20">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="text-2xl font-bold text-gold mb-4">Spice Lux</div>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-left px-4 py-3 text-base font-medium text-cream hover:text-gold hover:bg-gold/10 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

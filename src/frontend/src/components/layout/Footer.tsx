import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'spice-lux'
  );

  return (
    <footer className="bg-black border-t border-gold/20 text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Spice Lux</h3>
            <p className="text-sm text-cream/80">
              Premium Indian spices for discerning palates. Export quality, handpicked, hygienically packed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-gold transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-cream hover:text-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-cream/70">
          <p className="mb-4 sm:mb-0">© {currentYear} Spice Lux. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red fill-red" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

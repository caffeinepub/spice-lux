import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipToContent } from '../shared/SkipToContent';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

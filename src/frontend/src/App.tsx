import { SiteLayout } from './components/layout/SiteLayout';
import { HomeSection } from './components/sections/HomeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <SiteLayout>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteLayout>
  );
}

import { Section } from '../shared/Section';
import { BrandButton } from '../shared/BrandButton';
import { Reveal } from '../shared/Reveal';
import { openWhatsApp } from '../../utils/whatsapp';
import { scrollToSection } from '../../utils/scrollToSection';

const features = [
  {
    icon: '/assets/generated/icon-export-quality.dim_128x128.png',
    title: 'Export Quality',
    alt: 'Export Quality - Premium international standards',
  },
  {
    icon: '/assets/generated/icon-handpicked.dim_128x128.png',
    title: 'Handpicked',
    alt: 'Handpicked - Carefully selected premium spices',
  },
  {
    icon: '/assets/generated/icon-hygienically-packed.dim_128x128.png',
    title: 'Hygienically Packed',
    alt: 'Hygienically Packed - Safe and clean packaging',
  },
];

export function HomeSection() {
  return (
    <Section id="home" className="relative min-h-[90vh] flex items-center bg-black">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/spice-lux-hero.dim_1600x900.png"
          alt="Premium spices in luxury setting"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
              Spice Lux – <span className="text-gold">Luxury You Can Taste</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg sm:text-xl text-cream/90 mb-10 max-w-2xl mx-auto">
              Premium Indian spices sourced from the finest farms. Experience the difference of true quality.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <BrandButton variant="gold" onClick={() => openWhatsApp()}>
                Order Now
              </BrandButton>
              <BrandButton variant="primary" onClick={() => openWhatsApp('bulk enquiry')}>
                Bulk Enquiry
              </BrandButton>
              <BrandButton variant="outline" onClick={() => scrollToSection('contact')}>
                Contact Us
              </BrandButton>
            </div>
          </Reveal>

          {/* Feature Icons */}
          <Reveal delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <img src={feature.icon} alt={feature.alt} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-gold font-semibold text-lg">{feature.title}</h3>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

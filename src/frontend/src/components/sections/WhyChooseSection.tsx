import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { Award, Leaf, Package, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: 'Farm-Direct Sourcing',
    description: 'We work directly with premium farms to ensure the highest quality and freshness.',
  },
  {
    icon: Award,
    title: 'Quality Testing & Grading',
    description: 'Every batch undergoes rigorous testing to meet our exacting standards.',
  },
  {
    icon: Package,
    title: 'Export-Standard Packaging',
    description: 'Hygienically packed to preserve aroma, flavor, and essential oils.',
  },
  {
    icon: Clock,
    title: 'Long Shelf Life',
    description: 'Our careful processing and packaging ensure maximum freshness and longevity.',
  },
];

export function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-cream">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Why Choose <span className="text-red">Spice Lux</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-center text-black/70 text-lg mb-12 max-w-2xl mx-auto">
          We're committed to delivering excellence in every aspect of our business.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Reveal key={reason.title} delay={300 + index * 100}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red/10 rounded-full group-hover:bg-red/20 transition-colors">
                  <Icon className="w-8 h-8 text-red" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                <p className="text-black/70">{reason.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

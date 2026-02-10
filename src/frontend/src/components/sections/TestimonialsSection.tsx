import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { BrandCard } from '../shared/BrandCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Home Chef',
    content:
      'The quality of Spice Lux cardamom is unmatched. The aroma fills my entire kitchen, and my desserts have never tasted better!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Restaurant Owner',
    content:
      'We switched to Spice Lux for our restaurant, and our customers immediately noticed the difference. The black pepper has incredible depth of flavor.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Wholesale Buyer',
    content:
      'Reliable, consistent quality and excellent service. Spice Lux has become our trusted partner for premium spices.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-black">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 text-center">
          What Our <span className="text-gold">Customers Say</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-center text-cream/80 text-lg mb-12 max-w-2xl mx-auto">
          Don't just take our word for it – hear from those who experience Spice Lux quality every day.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={300 + index * 150}>
            <BrandCard hover={false} className="h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-cream/90 mb-6 flex-1 italic">"{testimonial.content}"</p>

                <div className="border-t border-gold/20 pt-4">
                  <p className="text-gold font-semibold">{testimonial.name}</p>
                  <p className="text-cream/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </BrandCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

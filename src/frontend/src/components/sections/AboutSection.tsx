import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';

export function AboutSection() {
  return (
    <Section id="about" className="bg-cream">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            About <span className="text-red">Spice Lux</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-6 text-lg text-black/80 leading-relaxed">
            <p>
              At Spice Lux, we believe that exceptional cuisine begins with exceptional ingredients. Our journey
              started with a simple mission: to bring the finest Indian spices from premium farms directly to your
              kitchen.
            </p>

            <p>
              We source our cardamom and black pepper from carefully selected farms known for their commitment to
              quality and sustainable practices. Each batch undergoes rigorous quality control to ensure that only
              the most aromatic, pure, and flavorful spices reach our customers.
            </p>

            <p>
              Our dedication to excellence extends beyond sourcing. From the moment our spices are harvested to the
              time they arrive at your doorstep, we maintain the highest standards of hygiene and packaging. This
              ensures that the natural oils, aroma, and potency of our spices remain intact, delivering an
              unparalleled culinary experience.
            </p>

            <p className="text-red font-semibold">
              Spice Lux – Where tradition meets luxury, and quality is never compromised.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

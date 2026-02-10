import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { ProductCard } from '../products/ProductCard';

const products = [
  {
    name: 'Green Cardamom',
    image: '/assets/generated/product-cardamom.dim_800x600.png',
    description:
      'Handpicked from premium farms, Spice Lux Green Cardamom delivers an intense aroma, vibrant color, and rich essential oils—perfect for both culinary and medicinal use.',
    grades: ['Premium Grade A', 'Export Quality', 'Bold 8mm+'],
    weights: ['50g', '100g', '250g', '500g', '1kg', 'Bulk Orders'],
  },
  {
    name: 'Black Pepper',
    image: '/assets/generated/product-black-pepper.dim_800x600.png',
    description:
      'Sourced from the finest pepper vines, Spice Lux Black Pepper offers bold heat, high piperine content, and long-lasting freshness.',
    grades: ['Premium Whole', 'Export Quality', 'High Piperine'],
    weights: ['50g', '100g', '250g', '500g', '1kg', 'Bulk Orders'],
  },
];

export function ProductsSection() {
  return (
    <Section id="products" className="bg-black">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 text-center">
          Our Premium <span className="text-gold">Products</span>
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-center text-cream/80 text-lg mb-12 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium spices, each chosen for its exceptional quality and
          flavor.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Reveal key={product.name} delay={300 + index * 200}>
            <ProductCard {...product} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

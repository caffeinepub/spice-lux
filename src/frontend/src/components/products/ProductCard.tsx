import { BrandCard } from '../shared/BrandCard';
import { BrandButton } from '../shared/BrandButton';
import { openWhatsApp } from '../../utils/whatsapp';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  grades: string[];
  weights: string[];
}

export function ProductCard({ name, image, description, grades, weights }: ProductCardProps) {
  return (
    <BrandCard className="group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${name} - Premium quality spice`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gold">{name}</h3>

        <p className="text-cream/90 leading-relaxed">{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-gold mb-2">Available Grades:</h4>
          <div className="flex flex-wrap gap-2">
            {grades.map((grade) => (
              <span
                key={grade}
                className="px-3 py-1 text-xs bg-gold/10 border border-gold/30 text-gold rounded-sm"
              >
                {grade}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold mb-2">Available Weights:</h4>
          <div className="flex flex-wrap gap-2">
            {weights.map((weight) => (
              <span
                key={weight}
                className="px-3 py-1 text-xs bg-cream/10 border border-cream/30 text-cream rounded-sm"
              >
                {weight}
              </span>
            ))}
          </div>
        </div>

        <BrandButton
          variant="gold"
          className="w-full mt-4"
          onClick={() => openWhatsApp(`enquiry about ${name}`)}
        >
          Enquire Now
        </BrandButton>
      </div>
    </BrandCard>
  );
}

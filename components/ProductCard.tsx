import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface ProductCardProps {
  href: string;
  image: string;
  title: string;
  author: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export function ProductCard({
  href,
  image,
  title,
  author,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
}: ProductCardProps) {
  return (
    <Link href={href} className="block">
      <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">
              -{badge}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">{author}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {rating} ({reviews})
            </span>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-emerald-700">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Lihat Detail
          </button>
        </div>
      </div>
    </Link>
  );
}
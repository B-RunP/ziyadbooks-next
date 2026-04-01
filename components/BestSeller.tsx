import { Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import type { ProductItem } from '@/lib/api/products';

interface BestSellerProps {
  products: ProductItem[];
}

export function BestSeller({ products }: BestSellerProps) {
  const bestSellers = products.slice(0, 4);

  return (
    <section id="bestseller" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Best Seller
              </h2>
              <p className="text-gray-600">4 produk unggulan pilihan</p>
            </div>
          </div>
        </div>

        {bestSellers.length === 0 ? (
          <div className="text-gray-500">Data best seller belum tersedia.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((book, index) => (
              <div
                key={book.id}
                className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-100"
              >
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-lg">
                    #{index + 1}
                  </span>
                </div>

                <div className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={book.image_url}
                      alt={book.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {book.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 5
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                          }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      5.0
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xl font-bold text-emerald-700">
                      {book.final_price_formatted || book.price_formatted}
                    </span>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      {book.sisastok_label} stok
                    </span>
                  </div>

                  {book.diskon && book.diskon !== '0' && (
                    <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                      Diskon {book.diskon}%
                    </div>
                  )}

                  {book.preorder && (
                    <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      Pre Order
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
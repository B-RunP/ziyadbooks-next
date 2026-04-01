import { Tag, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import type { ProductItem } from '@/lib/api/products';

interface PromoBannerProps {
  products: ProductItem[];
}

export function PromoBanner({ products }: PromoBannerProps) {
  const featuredBooks = products.slice(0, 2);

  return (
    <section id="promo" className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 rounded-full text-white font-semibold">
              <Tag className="w-5 h-5" />
              Promo Terbatas
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Diskon Spesial Buku Islami
              <span className="block text-amber-400">Hingga 40% OFF!</span>
            </h2>

            <p className="text-lg text-emerald-50">
              Dapatkan diskon besar-besaran untuk koleksi buku islami pilihan.
              Kesempatan terbatas, buruan pesan sekarang!
            </p>

            <div className="flex items-center gap-3 text-emerald-50">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Promo berakhir dalam:</span>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="font-bold">2</span>
                  <span className="text-xs ml-1">Hari</span>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="font-bold">15</span>
                  <span className="text-xs ml-1">Jam</span>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
                  <span className="font-bold">32</span>
                  <span className="text-xs ml-1">Menit</span>
                </div>
              </div>
            </div>

            <button className="group px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 flex items-center gap-2">
              Belanja Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Featured Books */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {featuredBooks.map((book, index) => (
                <div key={book.id} className={`bg-white rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 ${index === 1 ? 'mt-8' : ''}`}>
                  <ImageWithFallback
                    src={book.image_url}
                    alt={book.name}
                    className="w-full h-48 object-cover rounded-xl mb-3"
                  />
                  <div className="text-center">
                    <div className="text-sm text-gray-500 line-through">
                      {book.price_formatted}
                    </div>
                    <div className="text-xl font-bold text-emerald-700">
                      {book.final_price_formatted}
                    </div>
                    <div className="inline-block px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded mt-1">
                      {book.diskon} OFF
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

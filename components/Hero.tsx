import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import type { ProductItem } from '@/lib/api/products';

interface HeroProps {
  products: ProductItem[];
}

export function Hero({ products }: HeroProps) {
  const heroProducts = products.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
              ✨ Koleksi Buku Islami Terpercaya
            </div>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Temukan Buku Islami Terbaik untuk Menemani{' '}
              <span className="text-emerald-700">Perjalanan Ilmu</span> Anda
            </h1>

            <p className="max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
              Koleksi pilihan Al-Qur&apos;an, Hadits, dan buku islami berkualitas
              dari penerbit terpercaya untuk memperdalam ilmu agama Anda
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
              <button className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base">
                Jelajahi Sekarang
              </button>

              <button className="rounded-lg border-2 border-emerald-700 px-6 py-3 text-sm font-medium text-emerald-700 transition-all duration-200 hover:bg-emerald-50 sm:px-8 sm:py-4 sm:text-base">
                Lihat Kategori
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-emerald-100">
                <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                  10,000+
                </div>
                <div className="text-sm text-gray-600">Buku Tersedia</div>
              </div>

              <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-emerald-100">
                <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                  50,000+
                </div>
                <div className="text-sm text-gray-600">Pembaca Setia</div>
              </div>

              <div className="col-span-2 rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-emerald-100 sm:col-span-1">
                <div className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Books */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
              {heroProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={index === 1 ? 'sm:pt-8' : ''}
                >
                  <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="bg-gray-50">
                      <ImageWithFallback
                        src={product.image_url}
                        alt={product.name}
                        className="h-56 w-full object-cover sm:h-64 md:h-72"
                      />
                    </div>

                    <div className="p-4 sm:p-5">
                      <h2 className="line-clamp-3 text-base font-semibold leading-relaxed text-emerald-700 sm:text-lg">
                        {product.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-amber-400 opacity-20 blur-2xl sm:-right-4 sm:-top-4 sm:h-24 sm:w-24" />
            <div className="absolute -bottom-2 -left-2 h-24 w-24 rounded-full bg-emerald-400 opacity-20 blur-2xl sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
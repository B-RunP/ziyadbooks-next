import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import type { ProductItem } from '@/lib/api/products';

interface ProductGridProps {
  products: ProductItem[];
  currentPage: number;
  lastPage: number;
  total: number;
}

export function ProductGrid({
  products,
  currentPage,
  lastPage,
  total,
}: ProductGridProps) {
  const pageGroupSize = 5;

  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, lastPage);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const prevGroupPage = startPage - 1;
  const nextGroupPage = endPage + 1;

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Produk</h2>
            <p className="mt-2 text-gray-600">
              Total {total} produk • Halaman {currentPage} dari {lastPage}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => {
            const payload = encodeURIComponent(JSON.stringify(item));

            return (
              <ProductCard
                key={item.id}
                href={`/produk/${item.slug}?data=${payload}&page=${currentPage}&index=${index}`}
                image={item.image_url}
                title={item.name}
                author={item.preorder ? 'Pre Order' : 'Ready Stock'}
                price={item.final_price_formatted || item.price_formatted}
                originalPrice={
                  item.final_price !== item.price ? item.price_formatted : undefined
                }
                rating={5}
                reviews={item.sisastok_label ?? 0}
                badge={item.diskon && item.diskon !== '0' ? `${item.diskon}%` : undefined}
              />
            );
          })}
        </div>

        {/* Pagination */}
        {lastPage > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {/* Prev */}
            <Link
              href={`/?page=${Math.max(1, currentPage - 1)}`}
              aria-disabled={currentPage === 1}
              className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition ${currentPage === 1
                ? 'pointer-events-none border-gray-200 bg-gray-100 text-gray-400'
                : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-600 hover:text-emerald-700'
                }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>

            {startPage > 1 && (
              <>
                <Link
                  href="/?page=1"
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700"
                >
                  1
                </Link>

                {startPage > 2 && (
                  <Link
                    href={`/?page=${prevGroupPage}`}
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700"
                  >
                    ...
                  </Link>
                )}
              </>
            )}

            {pageNumbers.map((page) => (
              <Link
                key={page}
                href={`/?page=${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition ${page === currentPage
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-600 hover:text-emerald-700'
                  }`}
              >
                {page}
              </Link>
            ))}

            {endPage < lastPage && (
              <>
                {endPage < lastPage - 1 && (
                  <Link
                    href={`/?page=${nextGroupPage}`}
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700"
                  >
                    ...
                  </Link>
                )}

                <Link
                  href={`/?page=${lastPage}`}
                  className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700"
                >
                  {lastPage}
                </Link>
              </>
            )}

            <Link
              href={`/?page=${Math.min(lastPage, currentPage + 1)}`}
              aria-disabled={currentPage === lastPage}
              className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition ${currentPage === lastPage
                ? 'pointer-events-none border-gray-200 bg-gray-100 text-gray-400'
                : 'border-gray-300 bg-white text-gray-700 hover:border-emerald-600 hover:text-emerald-700'
                }`}
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
export const dynamic = 'force-dynamic';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { ProductGrid } from '@/components/ProductGrid';
import { BestSeller } from '@/components/BestSeller';
import { PromoBanner } from '@/components/PromoBanner';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { getProducts } from '@/lib/api/products';

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function App({ searchParams }: HomePageProps) {
  const params = await searchParams;

  const parsedPage = Number(params.page ?? '1');
  const page = Number.isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;

  const productPagination = await getProducts(page, 8);
  const products = Array.isArray(productPagination?.data)
    ? productPagination.data
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero products={products.slice(0, 2)} />
      <Categories />
      <ProductGrid
        products={products}
        currentPage={productPagination.current_page}
        lastPage={productPagination.last_page}
        total={productPagination.total}
      />
      <BestSeller products={products} />
      <PromoBanner products={products} />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
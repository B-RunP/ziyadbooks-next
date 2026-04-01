import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';

interface ProductDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        data?: string;
        page?: string;
        index?: string;
    }>;
}

export default async function ProductDetailPage({
    params,
    searchParams,
}: ProductDetailPageProps) {
    const { slug } = await params;
    const { data, page, index } = await searchParams;

    if (!data) {
        notFound();
    }

    let product: any = null;

    try {
        product = JSON.parse(decodeURIComponent(data));
    } catch {
        notFound();
    }

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white py-34">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <div className="mb-3 text-sm text-gray-500">
                            Page {page ?? '-'} • Index {index ?? '-'} • {slug}
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-amber-400 text-amber-400"
                                />
                            ))}
                            <span className="text-sm text-gray-600">
                                Stok: {product.sisastok_label}
                            </span>
                        </div>

                        <div className="mb-6">
                            <div className="text-3xl font-bold text-emerald-700">
                                {product.final_price_formatted || product.price_formatted}
                            </div>

                            {product.final_price !== product.price && (
                                <div className="text-gray-400 line-through mt-1">
                                    {product.price_formatted}
                                </div>
                            )}
                        </div>

                        <div className="space-y-3 text-gray-700">
                            <p><span className="font-semibold">Slug:</span> {product.slug}</p>
                            <p><span className="font-semibold">Berat:</span> {product.weight} gram</p>
                            <p><span className="font-semibold">Stok:</span> {product.sisastok_label}</p>
                            <p>
                                <span className="font-semibold">Status:</span>{' '}
                                {product.preorder ? 'Pre Order' : 'Ready Stock'}
                            </p>
                            <p>
                                <span className="font-semibold">Diskon:</span>{' '}
                                {product.diskon && product.diskon !== '0'
                                    ? `${product.diskon}%`
                                    : 'Tidak ada'}
                            </p>
                            {product.mulai && (
                                <p><span className="font-semibold">Mulai:</span> {product.mulai}</p>
                            )}
                            {product.selesai && (
                                <p><span className="font-semibold">Selesai:</span> {product.selesai}</p>
                            )}
                        </div>

                        <button className="mt-8 px-6 py-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition">
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
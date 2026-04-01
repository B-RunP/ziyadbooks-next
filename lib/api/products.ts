import { apiClient } from '@/lib/api/client';

export interface ProductItem {
    id: number;
    name: string;
    slug: string;
    price: number;
    price_formatted: string;
    image: string;
    diskon: string;
    weight: number;
    type: number;
    preorder: boolean;
    mulai: string | null;
    selesai: string | null;
    sisastok: number;
    sisastok_label: number;
    jenispotongan: string | null;
    potongan: number | null;
    image_url: string;
    final_price: number;
    final_price_formatted: string;
    video_available: boolean;
    video: string | null;
}

export interface ProductPagination {
    current_page: number;
    data: ProductItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    next_page_url: string | null;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface ProductApiResponse {
    status: boolean;
    message: string;
    code: number;
    data: ProductPagination;
}

export async function getProducts(page = 1, limit = 8): Promise<ProductPagination> {
    const response = await apiClient.get<ProductApiResponse>(
        `/ecommerce/auth/products/all/category?page=${page}&limit=${limit}`
    );

    return response.data.data;
}
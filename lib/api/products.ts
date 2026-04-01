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

export async function getProducts(
    page = 1,
    limit = 8
): Promise<ProductPagination> {
    try {
        console.log('BASE_URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
        console.log('TOKEN ADA:', !!process.env.ZIYAD_BEARER_TOKEN);
        console.log('REQUEST URL:', `/ecommerce/auth/products/all/category?page=${page}&limit=${limit}`);

        const response = await apiClient.get<ProductApiResponse>(
            `/ecommerce/auth/products/all/category?page=${page}&limit=${limit}`
        );

        console.log('RESPONSE STATUS:', response.status);
        console.log('RESPONSE DATA:', JSON.stringify(response.data, null, 2));

        if (!response?.data?.data) {
            throw new Error('Response data kosong atau format tidak sesuai');
        }

        return response.data.data;
    } catch (error: any) {
        console.error('GET PRODUCTS ERROR');
        console.error('MESSAGE:', error?.message);
        console.error('STATUS:', error?.response?.status);
        console.error('RESPONSE:', JSON.stringify(error?.response?.data, null, 2));

        return {
            current_page: 1,
            data: [],
            first_page_url: '',
            from: 0,
            last_page: 1,
            next_page_url: null,
            per_page: limit,
            prev_page_url: null,
            to: 0,
            total: 0,
        };
    }
}
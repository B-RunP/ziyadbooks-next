import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BEARER_TOKEN = process.env.ZIYAD_BEARER_TOKEN;

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
    },
});
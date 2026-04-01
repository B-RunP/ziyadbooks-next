# Migrasi React + Vite ke Next.js 16

## Yang sudah diubah
- Entry point Vite diganti menjadi `app/layout.tsx` dan `app/page.tsx`
- CSS global dipindah ke `app/globals.css`
- Alias import diubah ke pola Next.js `@/*`
- Konfigurasi Vite dihapus dan diganti `next.config.ts`
- Project diarahkan ke **App Router**
- Output diset ke `export` agar cocok untuk kebutuhan landing page / static site
- `Navbar` diperbaiki agar listener scroll tidak dibuat ulang di setiap render
- Komponen interaktif diberi `'use client'`

## Struktur penting
- `app/page.tsx` = halaman utama
- `app/layout.tsx` = root layout Next.js
- `components/*` = komponen presentasional
- `app/globals.css` = gabungan style Tailwind + theme

## Menjalankan project
```bash
npm install
npm run dev
```

## Build production
```bash
npm run build
```

Output static akan berada di folder `build/`.

## Catatan
- Karena project asal berupa SPA statis, konfigurasi memakai `output: 'export'`.
- File `components/ui/*` tetap dibawa supaya komponen shadcn yang sudah ada tidak hilang.
- Bila nanti ingin menambah API routes, auth server, atau SSR dinamis, hapus `output: 'export'` lalu sesuaikan deployment.

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.82c0 4.52-3.13 8.77-8 9.93-4.87-1.16-8-5.41-8-9.93V8.18l8-4zM11 7v2h2V7h-2zm0 4v6h2v-6h-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Ziyadbooks</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Platform terpercaya untuk buku-buku islami berkualitas. Mendekatkan
              ilmu agama untuk semua kalangan.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Link Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#kategori"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Kategori Buku
                </a>
              </li>
              <li>
                <a
                  href="#bestseller"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Best Seller
                </a>
              </li>
              <li>
                <a
                  href="#promo"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Promo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6">Layanan Pelanggan</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Cara Pemesanan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Kebijakan Pengembalian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Jl. Raya Islamiyah No. 123
                  <br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">ziyadbooks@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                Jam Operasional:
              </p>
              <p className="text-sm text-emerald-400 font-medium">
                Senin - Jumat: 08:00 - 20:00
                <br />
                Sabtu - Minggu: 09:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ziyadbooks. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

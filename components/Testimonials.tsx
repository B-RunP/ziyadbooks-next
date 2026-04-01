import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Putri Nur Aini Mahfudz',
      role: 'Ibu dari 2 Anak',
      avatar:
        'https://ui-avatars.com/api/?name=Putri+Nur+Aini+Mahfudz&background=059669&color=fff&size=100',
      rating: 5,
      comment:
        'Anak saya jadi lebih semangat membaca sejak dibelikan buku-buku dari Ziyadbooks. Gambarnya menarik, warnanya cerah, dan isi ceritanya juga mudah dipahami untuk anak-anak.',
    },
    {
      name: 'Dewi Lestari',
      role: 'Guru TK',
      avatar:
        'https://ui-avatars.com/api/?name=Dewi+Lestari&background=059669&color=fff&size=100',
      rating: 5,
      comment:
        'Koleksi buku anak islami di sini sangat cocok untuk kegiatan belajar di kelas. Ceritanya ringan, mendidik, dan membantu anak mengenal nilai-nilai islami sejak dini.',
    },
    {
      name: 'Brian Purnama',
      role: 'Ayah',
      avatar:
        'https://ui-avatars.com/api/?name=Brian+Purnama&background=059669&color=fff&size=100',
      rating: 5,
      comment:
        'Saya senang karena bukunya bukan hanya bagus secara tampilan, tapi juga bermanfaat untuk membangun kebiasaan membaca anak di rumah. Anak saya bahkan minta dibacakan berulang-ulang.',
    },
    {
      name: 'Muhammad Al-Fatih',
      role: 'Orang Tua Murid',
      avatar:
        'https://ui-avatars.com/api/?name=Muhammad+Al-Fatih&background=059669&color=fff&size=100',
      rating: 5,
      comment:
        'Buku-buku anak yang saya pesan kualitas cetaknya bagus, bahasanya sederhana, dan ilustrasinya sangat disukai anak. Cocok sekali untuk hadiah maupun koleksi belajar di rumah.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Apa Kata Orang Tua dan Pengajar?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Buku anak yang baik bukan hanya menarik dilihat, tetapi juga
            menyenangkan untuk dibaca dan bermanfaat untuk tumbuh kembang anak
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute right-4 top-4 opacity-10">
                <Quote className="h-12 w-12 text-emerald-700" />
              </div>

              <div className="mb-4 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="leading-relaxed text-gray-700">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold text-emerald-700">
              50,000+
            </div>
            <div className="text-gray-600">Keluarga Puas</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-emerald-700">
              4.9/5.0
            </div>
            <div className="text-gray-600">Rating Pelanggan</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-emerald-700">
              10,000+
            </div>
            <div className="text-gray-600">Buku Anak Terjual</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-emerald-700">
              100%
            </div>
            <div className="text-gray-600">Konten Ramah Anak</div>
          </div>
        </div>
      </div>
    </section>
  );
}
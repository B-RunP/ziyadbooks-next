import { Shield, Truck, BookCheck, Award } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Buku Original & Berkualitas',
      description:
        'Semua buku dijamin original dari penerbit resmi dan berkualitas tinggi',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Truck,
      title: 'Pengiriman Cepat',
      description:
        'Pengiriman ke seluruh Indonesia dengan kemasan aman dan tracking realtime',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: BookCheck,
      title: 'Kurasi Terbaik',
      description:
        'Buku-buku pilihan yang telah dikurasi oleh tim ahli untuk kualitas terjamin',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Trusted Publisher',
      description:
        'Bekerja sama dengan penerbit islami terpercaya dan berpengalaman',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komitmen kami memberikan pengalaman terbaik dalam berbelanja buku
            islami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

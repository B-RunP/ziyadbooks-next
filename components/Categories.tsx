import { BookOpen, Layers, MessageCircle, Baby, Scale, Star } from 'lucide-react';

export function Categories() {
  const categories = [
    {
      icon: BookOpen,
      name: 'Al-Qur\'an',
      count: '250+ Buku',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Layers,
      name: 'Tafsir',
      count: '180+ Buku',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: MessageCircle,
      name: 'Hadits',
      count: '320+ Buku',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Baby,
      name: 'Anak Islami',
      count: '150+ Buku',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Scale,
      name: 'Fiqih',
      count: '200+ Buku',
      color: 'from-emerald-600 to-emerald-700',
    },
    {
      icon: Star,
      name: 'Sirah',
      count: '120+ Buku',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="kategori" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jelajahi Kategori
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan buku islami sesuai kebutuhan ilmu agama Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="group bg-white border-2 border-gray-100 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Clock, Users, Shield, Zap } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Clock,
      title: "24 Jam Siaga",
      description: "Layanan darurat kapan saja Anda membutuhkan"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Teknisi berpengalaman dan bersertifikat"
    },
    {
      icon: Shield,
      title: "Bergaransi",
      description: "Jaminan kualitas layanan dan kepuasan"
    },
    {
      icon: Zap,
      title: "Respon Cepat",
      description: "Tim siap datang dalam 30 menit"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-300 via-orange-300 to-orange-400 text-white">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 text-black leading-tight">
            <span className="block sm:inline">Mengapa Memilih</span>
            <span className="block text-blue-600">Jasa Sedot WC Mandala Kami?</span>
          </h2>
          <p className="text-lg sm:text-xl text-black max-w-3xl mx-auto font-medium leading-relaxed">
            <span className="font-bold text-blue-600">Sedot WC Jakarta Terbaik</span> dengan pengalaman 9+ tahun melayani masyarakat Jakarta. 
            Komitmen kualitas, harga terjangkau, dan kepuasan pelanggan 100%
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-900 font-medium">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

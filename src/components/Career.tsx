import { Users, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Career() {
  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement paths',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Impactful Projects',
      description: 'Work on cutting-edge solutions that make a difference',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="career" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649443992089-8bf1fc3c42f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjI4NTU2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Website Development"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Join India's #1 Web Development Team
            </h2>
            <p className="text-xl text-gray-600">
              Be part of a dynamic team that's building the best websites in India. We're always looking for talented developers, designers, and digital marketers who are passionate about creating exceptional web experiences.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  <Icon size={32} />
                </div>
                <h3 className={`text-2xl bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-3`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl" />
          <div className="relative bg-white rounded-3xl p-12 m-1 text-center">
            <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Explore exciting career opportunities at HiveRift and be part of our mission to transform businesses worldwide.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
              Explore HiveRift Careers
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
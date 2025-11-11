import { Award, Zap, IndianRupee, Headphones } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      number: '1',
      title: 'Best Website Quality in India',
      description: 'We create pixel-perfect, responsive websites using the latest technologies. Every website we build is optimized for performance, SEO, and user experience to ensure your business stands out.',
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '2',
      title: 'Lightning Fast Delivery',
      description: 'Get your professional website live in record time. Our streamlined development process ensures quick turnaround without compromising on quality, so you can start growing your online presence immediately.',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '3',
      title: 'Affordable Pricing for Indian Businesses',
      description: 'Premium quality at prices that make sense for Indian businesses. We offer flexible packages and payment plans designed to fit your budget while delivering exceptional value.',
      icon: IndianRupee,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      number: '4',
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock support to keep your website running smoothly. Our dedicated team is always available to help with updates, troubleshooting, and ensuring your site performs at its best.',
      icon: Headphones,
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Why We're India's #1 Choice
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by 500+ businesses across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 bg-gradient-to-br ${reason.gradient} rounded-2xl text-white flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    <div className={`text-6xl bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent opacity-20`}>
                      {reason.number}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent mb-3`}>
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

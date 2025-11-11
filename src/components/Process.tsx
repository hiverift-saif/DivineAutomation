import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Requirement Discussion',
      description: 'We understand your business goals, target audience, and website requirements. Share your vision and we will help shape it into reality.',
      icon: MessageSquare,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our designers create stunning mockups and prototypes. You review and approve the design before we start development.',
      icon: Lightbulb,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Our expert developers build your website using the latest technologies. Rigorous testing ensures everything works perfectly across all devices.',
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your website and make it live! Plus, we provide ongoing support and maintenance to keep your site running smoothly.',
      icon: Rocket,
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Website Development Process
          </h2>
          <p className="text-xl text-gray-600">
            Simple, transparent, and efficient - from concept to launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-purple-200 to-pink-200 -z-10" />
                )}
                
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative space-y-4">
                    <div className={`text-7xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-20`}>
                      {step.number}
                    </div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white`}>
                      <Icon size={32} />
                    </div>
                    
                    <h3 className={`text-2xl bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Info */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-4">
            ⏱️ Average delivery time: <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">7-14 days</span>
          </p>
          <p className="text-gray-500">
            Get your professional website live faster than you think!
          </p>
        </div>
      </div>
    </section>
  );
}
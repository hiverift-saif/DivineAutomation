import { Building2, LineChart, Radio, Package, GraduationCap, Zap, Heart, Cpu, Shield, Pill, Factory, Landmark, ShoppingBag, Plane } from 'lucide-react';

export function Industries() {
  const industries = [
    { name: 'Banking', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Capital Markets', icon: LineChart, color: 'from-purple-500 to-pink-500' },
    { name: 'Communications, Media, and Information Services', icon: Radio, color: 'from-orange-500 to-red-500' },
    { name: 'Consumer Packaged Goods and Distribution', icon: Package, color: 'from-green-500 to-teal-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-indigo-500 to-blue-500' },
    { name: 'Energy, Resources, and Utilities', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'High Tech', icon: Cpu, color: 'from-cyan-500 to-blue-500' },
    { name: 'Insurance', icon: Shield, color: 'from-purple-500 to-indigo-500' },
    { name: 'Life Sciences', icon: Pill, color: 'from-teal-500 to-green-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-gray-500 to-slate-500' },
    { name: 'Public Services', icon: Landmark, color: 'from-blue-600 to-purple-600' },
    { name: 'Retail', icon: ShoppingBag, color: 'from-pink-500 to-rose-500' },
    { name: 'Travel and Logistics', icon: Plane, color: 'from-sky-500 to-blue-500' },
  ];

  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm mb-4">
            &Industries
          </span>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            From Your Industry to Innovation
          </h2>
          <p className="text-xl text-gray-600">
            See the Transformation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-white`}>
                    <Icon size={28} />
                  </div>
                  
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Industry</span>
                    <h3 className="text-lg text-gray-800 mt-1">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

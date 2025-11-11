import { Globe, ShoppingCart, Smartphone, Search, Palette, Code, Rocket, RefreshCw, ArrowRight, Phone, MessageCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Business Website Development',
      description: 'Professional corporate websites that establish your brand credibility and attract customers. Perfect for service businesses, consultancies, and B2B companies.',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'E-Commerce Website Development',
      description: 'Powerful online stores with secure payment gateways, inventory management, and seamless shopping experience. Start selling online and grow your revenue.',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Responsive Mobile-First Design',
      description: 'Websites that look stunning on all devices - mobile, tablet, and desktop. 70% of users browse on mobile, so we ensure your site works perfectly everywhere.',
      icon: Smartphone,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'SEO Optimized Websites',
      description: 'Get found on Google! Every website we build is optimized for search engines with proper structure, fast loading, and SEO best practices built-in.',
      icon: Search,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Custom UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert visitors into customers. We create unique designs tailored to your brand and target audience.',
      icon: Palette,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Custom Web Applications',
      description: 'Complex web applications for specific business needs - CRM, booking systems, portals, and more. Built with modern technologies for scalability.',
      icon: Code,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Landing Page Development',
      description: 'High-converting landing pages for your marketing campaigns. Optimized for lead generation and sales with compelling design and clear call-to-actions.',
      icon: Rocket,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Website Redesign & Migration',
      description: 'Modernize your outdated website or migrate to a better platform. We help you upgrade while preserving your SEO rankings and existing content.',
      icon: RefreshCw,
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="our-services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm mb-4">
            Our Web Development Services
          </span>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Complete Website Solutions
          </h2>
          <p className="text-xl text-gray-600">
            From simple landing pages to complex e-commerce platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}>
                    <Icon size={32} />
                  </div>
                  
                  <h3 className={`text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  
                  <button className={`flex items-center gap-2 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text group-hover:gap-4 transition-all`}>
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Ready to Launch Your Website?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free consultation and quote for your project
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:8814930229"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Phone size={20} />
                  Call Now: 8814930229
                </a>
                <a 
                  href="https://wa.me/918814930229?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20website%20development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 hover:scale-105 transition-all"
                >
                  <MessageCircle size={20} />
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
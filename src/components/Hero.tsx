import { ArrowDown, Calendar, Scroll, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-teal-500 to-green-500 opacity-10 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🇮🇳 India's No. 1 Web Development Company
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Transform Your Business with Professional Websites
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              We create stunning, high-performance websites that drive growth and convert visitors into customers. Experience world-class web development right here in India.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:8814930229"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Phone size={20} />
                Call: 8814930229
              </a>
              <a 
                href="https://wa.me/918814930229?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20website%20development"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                GET FREE QUOTE
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-500 animate-bounce">
              <Scroll size={20} />
              <span className="text-sm">SCROLL TO DISCOVER</span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl rotate-6 opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2Mjc3NjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web Development and Digital Marketing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Target, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about-us" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            India's Leading Web Development Experts
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjI4NTM3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social Media Marketing"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              HiveRift is India's premier web development company, specializing in creating powerful, modern websites that help businesses thrive in the digital world. With years of expertise and hundreds of successful projects, we've established ourselves as the go-to choice for businesses across India.
            </p>
            <p className="text-lg text-gray-700">
              From stunning landing pages to complex e-commerce platforms, we build websites that not only look incredible but also drive real business results. Our team of expert developers uses cutting-edge technologies to deliver solutions that are fast, secure, and scalable.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl" />
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 m-1">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl text-white flex-shrink-0">
                <Target size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  To empower every Indian business with world-class websites that compete globally. We believe that exceptional web development should be accessible to all businesses, helping them grow their online presence and reach new heights of success.
                </p>
                <button className="flex items-center gap-2 text-purple-600 hover:gap-4 transition-all">
                  Read More
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
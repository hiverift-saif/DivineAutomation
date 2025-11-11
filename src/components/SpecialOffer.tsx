import { Check, Phone, Calendar, Rocket, Globe, Mail, Search, BarChart, Settings, Share2, MessageCircle, Video } from 'lucide-react';

export function SpecialOffer() {
  const websiteFeatures = [
    { icon: Rocket, text: 'Fast Hosting' },
    { icon: Settings, text: '1 Year Maintenance' },
    { icon: Share2, text: 'Social Media Page Integration' },
    { icon: MessageCircle, text: 'WhatsApp Button Integration' },
    { icon: Search, text: 'Google Indexing' },
    { icon: BarChart, text: 'Monthly Traffic Analysis Report' },
    { icon: Globe, text: 'Admin Panel' },
    { icon: Search, text: 'SEO Optimization' },
    { icon: Mail, text: '5 Business Email Addresses FREE' },
  ];

  const socialMediaFeatures = [
    { icon: Share2, text: '20 Crafted Posts' },
    { icon: Video, text: '5 Eye-Catching Reels' },
    { icon: Rocket, text: 'Expertly Curated Content' },
    { icon: BarChart, text: 'Strategic Posting Schedule' },
    { icon: Globe, text: 'Expand Online Presence' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-100 to-pink-100 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm mb-6 animate-pulse">
            🔥 LIMITED TIME OFFER - GET STARTED TODAY!
          </div>
          <h2 className="text-4xl lg:text-6xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get Your Business Online
          </h2>
          <p className="text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Domain + Hosting + Website at Just ₹7,999/-
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Website Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-sm" />
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 m-1 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    🌐 COMPLETE WEBSITE PACKAGE
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    ₹7,999
                  </span>
                  <span className="text-gray-500 text-xl">/-</span>
                </div>
                <p className="text-gray-600">
                  Everything you need to launch your business online!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {websiteFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-gray-700 pt-1">{feature.text}</span>
                    </div>
                  );
                })}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 pt-1">And much more!</span>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:8814930229"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now: +91 8814930229
                </a>
                <a 
                  href="https://calendly.com/ravi182036/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-xl hover:bg-orange-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Schedule Meeting
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-sm" />
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 m-1 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    📱 SOCIAL MEDIA MANAGEMENT
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ₹6,500
                  </span>
                  <span className="text-gray-500 text-xl">/-</span>
                </div>
                <p className="text-gray-600">
                  Elevate your digital presence with expert content!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {socialMediaFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-gray-700 pt-1">{feature.text}</span>
                    </div>
                  );
                })}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 pt-1">Creative Reels Production</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 pt-1">Connect with Your Audience</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white flex-shrink-0">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700 pt-1">Drive Traffic & Engagement</span>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:8814930229"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Contact: +91 8814930229
                </a>
                <a 
                  href="https://hiverift.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Globe size={20} />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl" />
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 m-1 text-center">
            <h3 className="text-3xl lg:text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
              As a marketing and design company, we're committed to helping you expand your business.
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              HiveRift - Empowering Your Digital Presence!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:8814930229"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call: +91 8814930229
              </a>
              <a 
                href="https://hiverift.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <Globe size={20} />
                Visit: hiverift.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Target, Eye, Building2, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface AboutPageProps {
  setCurrentPage?: (page: string) => void;
}

export function AboutPage({ setCurrentPage }: AboutPageProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYzMTE3OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="About Divine Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">About Divine Automation</h1>
          <p className="text-xl">Excellence in Industrial Automation Since 2004</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Our Story</Badge>
              <h2 className="text-blue-900 mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Company Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Divine Automation Pvt. Ltd. was founded in 2004 by Mr. Dwaipayan Mandal, 
                an IIT Kharagpur alumnus (B-Tech Hons. ECE 1985), to deliver innovative 
                automation solutions meeting international quality standards.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team comprises experienced engineers with over four decades of expertise 
                in design, development, and commissioning of industrial automation systems. 
                We specialize in turnkey solutions that transform manufacturing processes 
                across diverse industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From conceptualization to installation and after-sales support, we provide 
                comprehensive automation services that enhance productivity, ensure quality, 
                and reduce operational costs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial Engineering"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Our Vision & Mission</Badge>
            <h2 className="text-blue-900 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Driving Innovation Forward</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-t-4 border-blue-900 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Target className="h-7 w-7 text-blue-900" />
                  </div>
                  <h3 className="text-blue-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To excel as one of the best turnkey automation project providers under one roof 
                  with international quality standards. We strive to deliver innovative solutions 
                  that exceed client expectations and drive industrial excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-900 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Eye className="h-7 w-7 text-blue-900" />
                  </div>
                  <h3 className="text-blue-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower industries through smart, efficient, and sustainable automation 
                  technologies. We envision a future where manufacturing excellence is achieved 
                  through cutting-edge automation and continuous innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Meet Our Team</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our strength lies in our team of highly qualified and experienced engineers who bring 
              decades of expertise in industrial automation, robotics, and process engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="mb-2 group-hover:text-blue-600 transition-colors">Leadership</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Led by IIT Kharagpur alumni with extensive industry experience
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="mb-2 group-hover:text-blue-600 transition-colors">Engineering Team</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Specialized engineers in automation, robotics, and controls
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="mb-2 group-hover:text-blue-600 transition-colors">Support Team</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated after-sales and technical support professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzYyNzY1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing Facility"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <Building2 className="h-7 w-7" />
                </div>
                <h2 className="text-white">Our Infrastructure</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Located at 20/4, Napco Gear Complex, Plot No. 19, Mathura Road, Faridabad (Haryana), 
                our state-of-the-art facility is equipped with advanced infrastructure to support 
                complete product development lifecycle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-white/90 leading-relaxed">Advanced R&D and design center with latest CAD/CAM tools</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-white/90 leading-relaxed">Precision machine assembly and integration workshop</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-white/90 leading-relaxed">Comprehensive testing and quality assurance facilities</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-white/90 leading-relaxed">Dedicated commissioning and training areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">By The Numbers</Badge>
            <h2 className="text-blue-900 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Key Highlights</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '40+', label: 'Years of Expertise' },
              { number: '500+', label: 'Projects Delivered' },
              { number: '100+', label: 'Satisfied Clients' },
              { number: '24/7', label: 'Technical Support' }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-2">
                <div className="text-blue-900 mb-2 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
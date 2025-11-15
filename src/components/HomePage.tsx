import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Cog, Factory, Zap, Award, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import marutiLogo from 'figma:asset/b7937979a42c9dd4faead853fda18f683d6357b0.png';
import tataLogo from 'figma:asset/eb5617c1fb8c4f18cf1db67cafb34a6e0fe3d26c.png';
import fanucLogo from 'figma:asset/d1a1e0e548ba83a4192bc5dfcc9e1e9a7018469b.png';
import subrosLogo from 'figma:asset/8b4c60871cf272830d208c201d93ceaef386532b.png';
import hindalcoLogo from 'figma:asset/abf0bdfd5c44da8e61acca9223acb92e7b1382f7.png';
import sunbeamLogo from 'figma:asset/2af6ed1003c8b5265960c7652e34d49de31f48e2.png';
import jbmLogo from 'figma:asset/b23eca0b74141dd22af41743b37230e2acfef5c5.png';
import caparoLogo from 'figma:asset/a10b0a2c5c63701bb34e298569cb1d48f0c72918.png';

interface HomePageProps {
  setCurrentPage?: (page: string) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      gradient: 'from-blue-900 via-blue-800 to-blue-700',
      title: 'Turnkey Automation Solutions Under One Roof',
      subtitle: 'Complete industrial automation from concept to commissioning'
    },
    {
      gradient: 'from-indigo-900 via-blue-900 to-cyan-800',
      title: '40+ Years of Industrial Expertise',
      subtitle: 'Specializing in Robotics, CNC & Process Automation'
    },
    {
      gradient: 'from-slate-900 via-blue-900 to-indigo-900',
      title: 'Innovation Meets Precision',
      subtitle: 'Delivering international quality standards across industries'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const clients = [
    'Maruti Suzuki', 'Tata Motors', 'Fanuc India', 'Subros Ltd.', 
    'Hindalco Industries', 'Sunbeam Auto', 'Jay Bharat Maruti', 'Caparo Maruti'
  ];

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
              {/* Decorative overlay pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Badge className="mb-4 bg-blue-600/90 backdrop-blur-sm border-none">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  Industry Leaders in Automation
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-2xl font-black leading-tight">{slide.title}</h1>
                <p className="text-2xl md:text-3xl mb-10 text-white/90 drop-shadow-lg font-normal leading-relaxed">{slide.subtitle}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentPage?.('services')}
                    className="bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setCurrentPage?.('contact')}
                    className="text-white border-2 border-white hover:bg-white hover:text-blue-900 shadow-xl backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white shadow-lg' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Company Short */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Trusted Since 2004
            </Badge>
            <h2 className="text-blue-900 mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">About Divine Automation</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Founded in 2004 by Mr. Dwaipayan Mandal (IIT Kharagpur, B-Tech Hons. ECE 1985), 
              Divine Automation Pvt. Ltd. specializes in turnkey industrial automation projects 
              with a team of highly qualified engineers experienced across multiple manufacturing industries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our expertise spans over four decades in robotics, CNC automation, special purpose machines, 
              and process engineering, delivering solutions that meet international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Our Services</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-black">Core Offerings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">Comprehensive automation solutions designed to transform your manufacturing excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: 'Turnkey Automation Projects', desc: 'Complete solutions from design to deployment', color: 'blue' },
              { icon: Cog, title: 'Robotics & PLC Integration', desc: 'Advanced robotic systems and controls', color: 'indigo' },
              { icon: Zap, title: 'Special Purpose Machines', desc: 'Custom-built machines for unique applications', color: 'violet' },
              { icon: Award, title: 'Process Engineering', desc: 'Workflow optimization and efficiency', color: 'purple' }
            ].map((offering, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center h-16 w-16 bg-gradient-to-br from-${offering.color}-100 to-${offering.color}-200 text-${offering.color}-900 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <offering.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 group-hover:text-blue-600 transition-colors">{offering.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{offering.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Industry Coverage</Badge>
            <h2 className="text-white mb-4 font-black">Industries We Serve</h2>
            <p className="text-white/80 max-w-2xl mx-auto font-normal">Delivering excellence across diverse manufacturing sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              'Steel Plants',
              'Automotive',
              'Precision Engineering',
              'Cable Manufacturing',
              'Signage & Electronics'
            ].map((industry, index) => (
              <div key={index} className="group p-8 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-1 shadow-xl">
                <p className="group-hover:scale-110 transition-transform duration-300">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Our Strengths</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-black">Why Choose Divine Automation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">Unmatched expertise and commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'IIT Alumni Leadership',
                description: 'Founded and led by IIT Kharagpur graduates with deep technical expertise and industry knowledge',
                icon: '🎓'
              },
              {
                title: 'Turnkey Solutions',
                description: 'Complete project execution from feasibility study to commissioning and after-sales support',
                icon: '🔧'
              },
              {
                title: '40+ Years Experience',
                description: 'Four decades of proven track record in delivering complex automation projects',
                icon: '⭐'
              },
              {
                title: 'International Standards',
                description: 'All solutions designed and delivered meeting global quality and safety standards',
                icon: '🌍'
              },
              {
                title: 'Custom Engineering',
                description: 'Tailored automation solutions designed specifically for your unique requirements',
                icon: '⚙️'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock technical support and maintenance services for uninterrupted operations',
                icon: '🛠️'
              }
            ].map((reason, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{reason.icon}</div>
                  <h3 className="mb-3 group-hover:text-blue-600 transition-colors font-bold">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Our Achievements</Badge>
            <h2 className="text-white mb-4">Numbers That Speak</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Measurable success across every project</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '500+', label: 'Projects Completed', sublabel: 'Across multiple industries' },
              { number: '100+', label: 'Happy Clients', sublabel: 'Long-term partnerships' },
              { number: '40+', label: 'Years Experience', sublabel: 'Industry expertise' },
              { number: '98%', label: 'Success Rate', sublabel: 'On-time delivery' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-500">{stat.number}</div>
                  <p className="text-lg mb-1">{stat.label}</p>
                  <p className="text-sm text-white/70">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Case Studies</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-black">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">Showcasing our expertise in action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Maruti Suzuki - Robotic Welding Cell',
                client: 'Maruti Suzuki',
                image: 'https://images.unsplash.com/photo-1735494035464-94fdd0f8e780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwd2VsZGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYzMTE3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                description: 'Complete robotic spot welding solution with automated loading system'
              },
              {
                title: 'Subros - HVAC Testing System',
                client: 'Subros Ltd.',
                image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Automated testing system with performance validation and data logging'
              },
              {
                title: 'Raunaq Auto - CNC Automation',
                client: 'Raunaq Auto',
                image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI4NTc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
                description: 'Multi-machine robotic loading system for continuous production'
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 hover:border-blue-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">{project.client}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 group-hover:text-blue-600 transition-colors font-bold">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">{project.description}</p>
                  <Button 
                    variant="link" 
                    className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700"
                    onClick={() => setCurrentPage?.('projects')}
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Client Feedback</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-black">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">Trusted by industry leaders across sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Divine Automation transformed our production line with their robotic welding solution. The quality and efficiency improvements have been remarkable.",
                author: "Production Manager",
                company: "Leading Automotive OEM",
                rating: 5
              },
              {
                quote: "Their technical expertise and commitment to quality are outstanding. The SPM they delivered exceeded our expectations in every way.",
                author: "Engineering Head",
                company: "Major Auto Component Manufacturer",
                rating: 5
              },
              {
                quote: "From concept to commissioning, Divine Automation demonstrated professionalism and technical excellence. Highly recommended for automation projects.",
                author: "Plant Director",
                company: "Industrial Equipment Company",
                rating: 5
              },
              {
                quote: "The testing systems developed by Divine Automation have been instrumental in achieving zero-defect manufacturing. Outstanding work!",
                author: "Quality Manager",
                company: "Precision Engineering Firm",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed font-normal">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-900 font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-gray-500 font-normal">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Technology Stack</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Our Technology Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Working with world-class automation technology providers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Fanuc Robotics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Fanuc_logo.svg/200px-Fanuc_logo.svg.png' },
              { name: 'ABB Robotics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/512px-ABB_logo.svg.png' },
              { name: 'Siemens PLC', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Siemens-Logo-700x394.png' },
              { name: 'Allen Bradley', logo: 'https://www.dbicontrol.co.uk/wp-content/uploads/2019/10/allen-bradley-vector-logo.png' },
              { name: 'Schneider Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Schneider-Electric-Logo.jpg' },
              { name: 'Mitsubishi', logo: 'https://download.logo.wine/logo/Mitsubishi_Electric/Mitsubishi_Electric-Logo.wine.png' },
              { name: 'Festo Pneumatics', logo: 'https://ajm.es/wp-content/uploads/2017/02/festo-pneumatic-logo-marcas-2017.png' },
              { name: 'Bosch Rexroth', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Logo_of_Bosch_Rexroth_AG.svg' },
              { name: 'Cognex Vision', logo: 'https://www.cognex.com/library/media/company/cognex-logo.jpg?sc_lang=ru-ru' },
              { name: 'Omron', logo: 'https://www.weighingreview.com/storage/companies_logos/1558642634_OMRON_logo_OL_CMYK_201607.jpg' },
              { name: 'Yaskawa', logo: 'https://www.evolectriconline.com/images/content/original-1645536471827.png' },
              { name: 'KUKA Robotics', logo: 'https://download.logo.wine/logo/KUKA/KUKA-Logo.wine.png' }
            ].map((partner, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="w-full h-16 flex items-center justify-center mb-3">
                  {partner.logo ? (
                    <ImageWithFallback
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-gray-400 text-xs">Logo</div>
                  )}
                </div>
                <p className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors duration-300 font-normal">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">Trusted Partners</Badge>
            <h2 className="text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent font-black">Our Valued Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-normal">Partnering with industry leaders to drive innovation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Maruti Suzuki', logo: marutiLogo },
              { name: 'Tata Motors', logo: tataLogo },
              { name: 'Fanuc India', logo: fanucLogo },
              { name: 'Subros Ltd.', logo: subrosLogo },
              { name: 'Hindalco Industries', logo: hindalcoLogo },
              { name: 'Sunbeam Auto', logo: sunbeamLogo },
              { name: 'Jay Bharat Maruti', logo: jbmLogo },
              { name: 'Caparo Maruti', logo: caparoLogo }
            ].map((client, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="text-gray-400 text-sm">Logo</div>
                  )}
                </div>
                <p className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors duration-300 font-normal">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">Get Started Today</Badge>
          <h2 className="text-white mb-6 font-black">Ready to Automate Your Industry?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
            Let's discuss how we can transform your manufacturing process with cutting-edge automation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => setCurrentPage?.('contact')}
              className="bg-white text-blue-900 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setCurrentPage?.('projects')}
              className="text-white border-2 border-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10 shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
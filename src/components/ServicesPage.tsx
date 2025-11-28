import { Lightbulb, PenTool, Settings, Cpu, Wind, TrendingUp, Bot } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface ServicesPageProps {
  setCurrentPage?: (page: string) => void;
}

export function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const services = [
    {
      icon: Lightbulb,
      title: 'Technical Feasibility Study',
      description: 'In-depth analysis and assessment to determine optimal automation solutions tailored to client requirements. We evaluate existing processes, identify bottlenecks, and propose cost-effective automation strategies.',
      features: [
        'Process analysis and optimization',
        'ROI calculation and cost-benefit analysis',
        'Technology selection and vendor evaluation',
        'Risk assessment and mitigation strategies'
      ]
    },
    {
      icon: PenTool,
      title: 'Conceptualization & System Design',
      description: 'End-to-end conceptualization of automation systems ensuring efficiency, accuracy, and scalability. Our design approach focuses on creating robust, maintainable, and future-proof solutions.',
      features: [
        ' 3D modeling and CAD design',
        'System architecture development',
        'Component selection and specification',
        'Detailed engineering drawings'
      ]
    },
    {
      icon: Bot,
      title: 'Robotic Automation',
      description: 'Complete robotic automation solutions for Mig, Tig, Spot Welding and Machine Tending Operations. We provide all accessories of Robotic Cell including supply, installation, and commissioning services.',
      features: [
        'Mig, Tig, and Spot Welding automation',
        'Machine tending operations',
        'Complete robotic cell accessories supply',
        'Installation and commissioning services'
      ]
    },
    {
      icon: Settings,
      title: 'SPM, CNC & PLC Integration',
      description: 'Design and commissioning of Special Purpose Machines, CNC automation, and PLC-based robotic systems. We deliver turnkey solutions from concept to commissioning.',
      features: [
        'Custom SPM design and fabrication',
        'CNC machine integration and automation',
        'PLC programming and SCADA development',
        'HMI design and implementation'
      ]
    },
    {
      icon: Wind,
      title: 'Pneumatic & Hydraulic Control Systems',
      description: 'Custom control systems for improved machine performance and reliability. We design efficient pneumatic and hydraulic circuits optimized for your specific applications.',
      features: [
        'Circuit design and optimization',
        'Component selection and sourcing',
        'System integration and testing',
        'Performance tuning and validation'
      ]
    },
    {
      icon: Cpu,
      title: 'System Engineering',
      description: 'Complete system engineering services covering electrical, mechanical, and software aspects of automation projects. We ensure seamless integration of all components.',
      features: [
        'Electrical panel design and wiring',
        'Mechanical system integration',
        'Software development and programming',
        'System commissioning and validation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Process Engineering',
      description: 'Workflow optimization and automation-driven productivity enhancement. We analyze and improve manufacturing processes to maximize efficiency and quality.',
      features: [
        'Process flow analysis and optimization',
        'Lean manufacturing implementation',
        'Quality control system integration',
        'Productivity improvement strategies'
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759621165667-da064b86fdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyODU4MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive automation solutions from concept to commissioning, 
            delivering excellence at every stage of your project
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="text-blue-900 mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="border-t pt-6">
                    <h4 className="text-sm text-blue-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-blue-900 mb-12">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and challenges' },
              { step: '02', title: 'Design & Planning', desc: 'Creating optimal automation solutions' },
              { step: '03', title: 'Implementation', desc: 'Building and integrating systems' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="h-20 w-20 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{phase.step}</span>
                </div>
                <h3 className="mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts help you achieve operational excellence through smart automation
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setCurrentPage && setCurrentPage('Consultation')}
              className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Consultation
            </Button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
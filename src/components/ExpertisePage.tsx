import { Bot, Gauge, TestTube, Component } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ExpertisePageProps {
  setCurrentPage?: (page: string) => void;
}

export function ExpertisePage({ setCurrentPage }: ExpertisePageProps) {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGNpcmN1aXR8ZW58MXx8fHwxNzYyODQ4NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Expertise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Our Expertise</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialized capabilities in robotic automation, testing systems, 
            and assembly line integration backed by decades of experience
          </p>
        </div>
      </section>

      {/* Expertise Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="robotics" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="robotics">Robotic Applications</TabsTrigger>
              <TabsTrigger value="hydraulic">Hydraulic & Pneumatic</TabsTrigger>
              <TabsTrigger value="testing">Testing Systems</TabsTrigger>
              <TabsTrigger value="assembly">Assembly Automation</TabsTrigger>
            </TabsList>

            {/* Robotic Applications */}
            <TabsContent value="robotics">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bot className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-blue-900">Robotic Applications</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Our robotic solutions encompass a wide range of applications from welding 
                  to material handling, designed to enhance precision and productivity.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Spot Welding by Robots',
                      desc: 'High-precision robotic spot welding systems for automotive and metal fabrication'
                    },
                    {
                      title: 'MIG/TIG Welding by Robots',
                      desc: 'Advanced welding automation with consistent quality and reduced cycle times'
                    },
                    {
                      title: 'Robotic Loading/Unloading',
                      desc: 'Automated CNC machine tending for continuous unmanned operation'
                    },
                    {
                      title: 'Complete Robotic Cells',
                      desc: 'Turnkey robotic cells with custom jigs, fixtures, and safety systems'
                    },
                    {
                      title: 'Arc Welding Systems',
                      desc: 'Precision arc welding with path planning and quality monitoring'
                    },
                    {
                      title: 'Pick & Place Robots',
                      desc: 'High-speed material handling and part sorting systems'
                    }
                  ].map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-900 pl-4">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Hydraulic & Pneumatic */}
            <TabsContent value="hydraulic">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Gauge className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-blue-900">Hydraulic & Pneumatic Automation</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Custom-designed hydraulic and pneumatic systems for reliable, efficient 
                  operation in demanding industrial environments.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Hydraulic Press Machines',
                      desc: 'High-force pressing systems with precise control and safety features'
                    },
                    {
                      title: 'Pneumatic Handling Robots',
                      desc: 'Fast, reliable pneumatic actuators for material handling applications'
                    },
                    {
                      title: 'Pneumatic Pick & Place Units',
                      desc: 'Efficient part transfer systems with adjustable speed and positioning'
                    },
                    {
                      title: 'Control Valve Systems',
                      desc: 'Advanced pneumatic and hydraulic control circuits'
                    },
                    {
                      title: 'Custom Actuator Solutions',
                      desc: 'Specialized cylinders and actuators for unique applications'
                    }
                  ].map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-900 pl-4">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Testing Systems */}
            <TabsContent value="testing">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TestTube className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-blue-900">Testing & Inspection Systems</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Comprehensive quality assurance solutions including leak testing, 
                  vision inspection, and performance validation systems.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Leak Testing Machines',
                      desc: 'Precision leak detection for fluid and gas systems with data logging'
                    },
                    {
                      title: 'Noise Testing Systems',
                      desc: 'Acoustic analysis and quality verification for mechanical assemblies'
                    },
                    {
                      title: 'Oil Quality Testing',
                      desc: 'Automated systems for lubricant analysis and contamination detection'
                    },
                    {
                      title: 'Vision-Based Inspection',
                      desc: 'Advanced camera systems for dimensional and defect inspection'
                    },
                    {
                      title: 'Piston Groove Checking',
                      desc: 'High-precision measurement using vision cameras and laser systems'
                    },
                    {
                      title: 'Force & Endurance Testing',
                      desc: 'Automated testing machines for component validation and life testing'
                    }
                  ].map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-900 pl-4">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Assembly Automation */}
            <TabsContent value="assembly">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Component className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-blue-900">Assembly Line Automation</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Error-proof assembly systems with integrated quality checks, 
                  ensuring zero-defect production and optimal efficiency.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Poka-Yoke Systems',
                      desc: 'Error-proofing mechanisms to prevent assembly mistakes and defects'
                    },
                    {
                      title: 'PIKA PIKA Systems',
                      desc: '5S visual management and organization for lean manufacturing'
                    },
                    {
                      title: 'Conveyor Integration',
                      desc: 'Automated material flow systems with synchronized workstations'
                    },
                    {
                      title: 'Robotic Assembly Cells',
                      desc: 'Flexible automation cells for multi-variant assembly operations'
                    },
                    {
                      title: 'Quality Gate Systems',
                      desc: 'Inline inspection and verification at critical assembly points'
                    },
                    {
                      title: 'Traceability Solutions',
                      desc: 'Barcode and RFID integration for complete part tracking'
                    }
                  ].map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-900 pl-4">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-blue-900 mb-12">Technology Partners & Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              'Fanuc Robotics',
              ' Yaskawa Robotics',
              'Mitsubishi PLC',
              ' Delta SCARA Robots.',
              'Schneider Electric',
              'SMC Pneumatics',
              'Bosch Rexroth',
              'Cognex Vision'
            ].map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
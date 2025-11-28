import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsPageProps {
  setCurrentPage?: (page: string) => void;
}

export function ProjectsPage({ setCurrentPage }: ProjectsPageProps) {
  const projects = [
    {
      client: 'SUNDAN LTD.',
      title: 'HVAC Testing System',
      category: 'Testing Machines',
      description: 'Complete automated testing system for HVAC units with performance validation, leak testing, and noise measurement capabilities.',
      technologies: ['PLC Control', 'SCADA', 'Data Logging', 'Pneumatic Systems']
    },
    {
      client: 'Subros Ltd.',
      title: 'Compressor Testing Machine',
      category: 'Testing Machines',
      description: 'Automated compressor testing with pressure, flow, and performance measurements. Includes safety interlocks and comprehensive reporting.',
      technologies: ['Hydraulic Systems', 'Pressure Sensors', 'Mitsubishi PLC', 'Safety Systems']
    },
    {
      client: 'Sunbeam Auto',
      title: 'Piston Groove Testing using Vision Camera',
      category: 'Vision Inspection',
      description: 'High-precision vision-based inspection system for piston groove measurement using advanced camera technology and image processing.',
      technologies: ['Machine Vision', 'Image Processing', 'PLC', 'Reject Mechanism']
    },
    {
      client: 'JBM & Caparo Maruti',
      title: 'Ertiga Car Assembly - Robotic Interfacing and Automation',
      category: 'Robotic Integration',
      description: 'Complete robotic interfacing and automation solution for Ertiga car assembly line, including robot programming, PLC integration, and production line synchronization.',
      technologies: ['Robotic Programming', 'PLC Integration', 'Line Automation', 'Safety Systems']
    },
    {
      client: 'JBM & Caparo Maruti',
      title: 'Alto 800 Car Assembly - Robotic Interfacing and Automation',
      category: 'Robotic Integration',
      description: 'Automated robotic system for Alto 800 assembly operations with seamless integration to existing production infrastructure and quality control systems.',
      technologies: ['Robot Interfacing', 'Assembly Automation', 'Quality Control', 'Production Tracking']
    },
    {
      client: 'Maruti Suzuki',
      title: 'Robotic Spot Welding Cell',
      category: 'Robotic Integration',
      description: 'Complete robotic spot welding for Maruti models including 800, Omni, Zen, Alto, WagonR, and EECO. Robot integration including wiring, sensors, and PLC programming. Supply of Mitsubishi PLC and interfacing of Fanuc Robots with Mitsubishi PLC.',
      technologies: ['Fanuc Robotics', 'Mitsubishi PLC', 'Spot Welding', 'Robot Interfacing', 'PLC Programming']
    },
    {
      client: 'Maruti Suzuki',
      title: 'EECO Robot Interfacing',
      category: 'Robotic Integration',
      description: 'Integration of robotic systems with existing production line for EECO model assembly, including PLC communication and synchronization.',
      technologies: ['PLC Integration', 'Robot Communication', 'Line Balancing', 'HMI']
    },
    {
      client: 'Raunaq Auto',
      title: 'Multi-CNC Robot Loading Automation',
      category: 'Robotic Integration',
      description: 'Automated robot loading system for multiple CNC machines with tool change management and part verification.',
      technologies: ['Multi-Machine Tending', 'Robot Programming', 'CNC Interface', 'Part Storage']
    },
    {
      client: 'Tata Motors',
      title: 'World Truck Project - 7 Fanuc Robots',
      category: 'Robotic Integration',
      description: 'Supply and integration of 7 Fanuc Robots with control panel for the World Truck Project. Complete turnkey robotic automation solution.',
      technologies: ['Fanuc Robotics', 'Control Panel', 'Robot Integration', 'Project Management']
    },
    {
      client: 'Hindalco Industries',
      title: 'Mitsubishi PLC & Ferrule Printing Systems',
      category: 'PLC Integration',
      description: 'Integration of Mitsubishi PLC for metal processing operations. Supply of cable ferrule printing machines and accessories imported from Japan.',
      technologies: ['Mitsubishi PLC', 'Ferrule Printing', 'Japan Equipment', 'System Integration']
    },
    {
      client: 'Sharjah, UAE',
      title: 'Automatic Brazing Machine for AC Condensers',
      category: 'SPM Manufacturing',
      description: 'Indigenously designed and manufactured automatic brazing machine for AC condensers. Uses a SCARA Robot to place copper U-tubes on the condenser. Machine exported to Sharjah, UAE.',
      technologies: ['SCARA Robot', 'Brazing Automation', 'Export Project', 'Custom Design']
    },
    {
      client: 'Ramco Industries',
      title: 'Automatic Tile Cutting & Robotic Arms',
      category: 'Robotic Integration',
      description: 'Supplied automatic tiles cutting machines to Rajasthan and Madras units. Provided in-house designed robotic arms with vacuum pads to segregate cut tiles in a stack.',
      technologies: ['Custom Robotics', 'Vacuum Systems', 'Tile Processing', 'Material Handling']
    },
    {
      client: 'Amtek Auto',
      title: 'Robotic Cells with Marposs & Laser Marking',
      category: 'Robotic Integration',
      description: 'Supplied two robotic cells with Marposs and in-house laser marking machine. Used to check quality of connecting rods of 4-wheelers, weigh them, and segregate based on quality and weight.',
      technologies: ['Marposs', 'Laser Marking', 'Quality Inspection', 'Weight Segregation', 'Robotic Cell']
    }
  ];

  const categories = ['All', 'Robotic Integration', 'Testing Machines', 'SPM Manufacturing', 'Assembly Automation', 'Vision Inspection'];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718824331840-399943ff5c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtZWNoYW5pc21zfGVufDF8fHx8MTc2MzExNzkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Showcasing our expertise through successful automation implementations 
            across diverse industries
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-8 bg-gray-50 sticky top-[120px] z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className="cursor-pointer whitespace-nowrap px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-2 flex justify-between items-start">
                    <span className="text-sm text-blue-900">{project.client}</span>
                    <Badge className="bg-blue-900">{project.category}</Badge>
                  </div>
                  <h3 className="text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Success Metrics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white mb-12">Project Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: '500+', label: 'Projects Completed' },
              { metric: '98%', label: 'On-Time Delivery' },
              { metric: '100%', label: 'Client Satisfaction' },
              { metric: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2">{stat.metric}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-blue-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your automation vision to life
          </p>
          <Button
            className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            onClick={() => setCurrentPage && setCurrentPage('Contact')}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
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
      client: 'Subros Ltd.',
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
      technologies: ['Hydraulic Systems', 'Pressure Sensors', 'LabVIEW', 'Safety Systems']
    },
    {
      client: 'Sunbeam Auto',
      title: 'Piston Groove Testing using Vision Camera',
      category: 'Vision Inspection',
      description: 'High-precision vision-based inspection system for piston groove measurement using advanced camera technology and image processing.',
      technologies: ['Machine Vision', 'Image Processing', 'PLC', 'Reject Mechanism']
    },
    {
      client: 'Maruti Suzuki',
      title: 'Robotic Spot Welding Cell',
      category: 'Robotic Integration',
      description: 'Complete robotic spot welding cell with Fanuc robots, custom fixtures, and automated part loading/unloading system.',
      technologies: ['Fanuc Robotics', 'Spot Welding', 'Safety Fencing', 'Part Tracking']
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
      title: 'Assembly Line Automation',
      category: 'Assembly Automation',
      description: 'Complete assembly line automation with poka-yoke systems, automated torque tools, and quality gate stations.',
      technologies: ['Conveyor Systems', 'Poka-Yoke', 'Torque Monitoring', 'Traceability']
    },
    {
      client: 'Hindalco Industries',
      title: 'Special Purpose Machine for Metal Processing',
      category: 'SPM Manufacturing',
      description: 'Custom-designed SPM for specialized metal processing operations with hydraulic control and automated material handling.',
      technologies: ['Hydraulic Systems', 'Custom Tooling', 'Safety Systems', 'Process Control']
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
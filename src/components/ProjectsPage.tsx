import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

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
      technologies: ['PLC Control', 'SCADA', 'Data Logging', 'Pneumatic Systems'],
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Subros Ltd.',
      title: 'Compressor Testing Machine',
      category: 'Testing Machines',
      description: 'Automated compressor testing with pressure, flow, and performance measurements. Includes safety interlocks and comprehensive reporting.',
      technologies: ['Hydraulic Systems', 'Pressure Sensors', 'LabVIEW', 'Safety Systems'],
      image: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI4NTc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Sunbeam Auto',
      title: 'Piston Groove Testing using Vision Camera',
      category: 'Vision Inspection',
      description: 'High-precision vision-based inspection system for piston groove measurement using advanced camera technology and image processing.',
      technologies: ['Machine Vision', 'Image Processing', 'PLC', 'Reject Mechanism'],
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyODQwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Maruti Suzuki',
      title: 'Robotic Spot Welding Cell',
      category: 'Robotic Integration',
      description: 'Complete robotic spot welding cell with Fanuc robots, custom fixtures, and automated part loading/unloading system.',
      technologies: ['Fanuc Robotics', 'Spot Welding', 'Safety Fencing', 'Part Tracking'],
      image: 'https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjB3ZWxkaW5nfGVufDF8fHx8MTc2Mjg1Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Maruti Suzuki',
      title: 'EECO Robot Interfacing',
      category: 'Robotic Integration',
      description: 'Integration of robotic systems with existing production line for EECO model assembly, including PLC communication and synchronization.',
      technologies: ['PLC Integration', 'Robot Communication', 'Line Balancing', 'HMI'],
      image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXNzZW1ibHklMjBsaW5lfGVufDF8fHx8MTc2Mjg1Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Raunaq Auto',
      title: 'Multi-CNC Robot Loading Automation',
      category: 'Robotic Integration',
      description: 'Automated robot loading system for multiple CNC machines with tool change management and part verification.',
      technologies: ['Multi-Machine Tending', 'Robot Programming', 'CNC Interface', 'Part Storage'],
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzYyNzY1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Tata Motors',
      title: 'Assembly Line Automation',
      category: 'Assembly Automation',
      description: 'Complete assembly line automation with poka-yoke systems, automated torque tools, and quality gate stations.',
      technologies: ['Conveyor Systems', 'Poka-Yoke', 'Torque Monitoring', 'Traceability'],
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyODQwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      client: 'Hindalco Industries',
      title: 'Special Purpose Machine for Metal Processing',
      category: 'SPM Manufacturing',
      description: 'Custom-designed SPM for specialized metal processing operations with hydraulic control and automated material handling.',
      technologies: ['Hydraulic Systems', 'Custom Tooling', 'Safety Systems', 'Process Control'],
      image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const categories = ['All', 'Robotic Integration', 'Testing Machines', 'SPM Manufacturing', 'Assembly Automation', 'Vision Inspection'];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1542621334-a254cf47733d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnR8ZW58MXx8fHwxNzYyNzQ1MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                <div className="relative h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-900">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-900">{project.client}</span>
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
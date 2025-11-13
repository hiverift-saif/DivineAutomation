import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import spmMachine1 from 'figma:asset/2665cbff48216330b5041f2b7b33ca3147d3d92c.png';
import spmMachine2 from 'figma:asset/dce28f2356e7253b338e64618ce6d269d8428b7f.png';
import spmMachine3 from 'figma:asset/3183a62d67c62201d962803170b6e27db9a43faf.png';
import testingMachine from 'figma:asset/72ffcbe0ef00b405fecd92d2bf213fda151c44b0.png';
import washingMachine from 'figma:asset/fbbec368824a518afb4a00aeefa976a82d38df81.png';
import controlPanel from 'figma:asset/b74b7d0eaa180d78acbe2c779455e1a400b58f94.png';
import automationPanel from 'figma:asset/7e05c796984544e040a9907c0d69206ee125e4c8.png';
import plcInstallation from 'figma:asset/aca93d8a7673cda7884eeb56a3e9fcd014ca8983.png';
import roboticCell from 'figma:asset/a092a76cc5c0377ef164e382d7b5bf60f5d43567.png';

interface GalleryPageProps {
  setCurrentPage?: (page: string) => void;
}

export function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const galleryImages = {
    factory: [
      {
        url: spmMachine1,
        title: 'SPM Machine with Control Panel',
        description: 'Custom-designed special purpose machine with integrated control system'
      },
      {
        url: spmMachine2,
        title: 'Hydraulic Press Machine',
        description: 'High-performance hydraulic press with automated controls'
      },
      {
        url: spmMachine3,
        title: 'Manufacturing Work Station',
        description: 'Precision manufacturing and assembly workstation'
      },
      {
        url: testingMachine,
        title: 'Automated Testing Machine',
        description: 'Advanced testing system with multi-panel control interface'
      },
      {
        url: washingMachine,
        title: 'Washing Drying & Oiling Machine',
        description: 'Industrial washing, drying and oiling system by Divine Automation'
      },
      {
        url: controlPanel,
        title: 'Digital Control System',
        description: 'Touch screen control panel with automated processing capability'
      },
      {
        url: automationPanel,
        title: 'Automated Control Cabinet',
        description: 'PLC-based control cabinet with HMI interface for process automation'
      },
      {
        url: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzYyNzY1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Manufacturing Facility',
        description: 'Our state-of-the-art manufacturing facility'
      },
      {
        url: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyODQwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Assembly Floor',
        description: 'Automated assembly and integration area'
      },
      {
        url: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Testing Department',
        description: 'Quality assurance and testing facility'
      },
      {
        url: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI4NTc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Machine Shop',
        description: 'CNC machining and fabrication area'
      }
    ],
    robotics: [
      {
        url: roboticCell,
        title: 'Industrial Robotic Work Cell',
        description: 'Automated robotic cell with precision pick and place operations'
      },
      {
        url: 'https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjB3ZWxkaW5nfGVufDF8fHx8MTc2Mjg1Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Robotic Welding Cell',
        description: 'Automated welding system with Fanuc robots'
      },
      {
        url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXNzZW1ibHklMjBsaW5lfGVufDF8fHx8MTc2Mjg1Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Assembly Line Robots',
        description: 'Robotic assembly and material handling'
      },
      {
        url: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyODQwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Pick & Place System',
        description: 'High-speed robotic pick and place operations'
      },
      {
        url: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI4NTc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'CNC Machine Tending',
        description: 'Automated CNC loading and unloading'
      }
    ],
    automation: [
      {
        url: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Control Panels',
        description: 'PLC and electrical control systems'
      },
      {
        url: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzYyNzY1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Conveyor Systems',
        description: 'Automated material handling conveyors'
      },
      {
        url: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXNzZW1ibHklMjBsaW5lfGVufDF8fHx8MTc2Mjg1Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Special Purpose Machines',
        description: 'Custom-designed automation equipment'
      },
      {
        url: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyODQwNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Testing Equipment',
        description: 'Automated testing and inspection systems'
      }
    ],
    events: [
      {
        url: plcInstallation,
        title: 'PLC System Installation',
        description: 'Engineers configuring industrial automation and control systems'
      },
      {
        url: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnR8ZW58MXx8fHwxNzYyNzY1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'AUTOMACH 2013',
        description: 'Participation in India\'s leading automation expo'
      },
      {
        url: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYyODUzNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Client Visit',
        description: 'Factory tour and demonstration for clients'
      },
      {
        url: 'https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjI4NTc4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Project Commissioning',
        description: 'On-site installation and commissioning'
      },
      {
        url: 'https://images.unsplash.com/photo-1727373203627-73457889fe0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3RpY3MlMjB3ZWxkaW5nfGVufDF8fHx8MTc2Mjg1Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Team Training',
        description: 'Technical training and skill development'
      }
    ]
  };

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1661922299318-e5d91e2092ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGdhbGxlcnl8ZW58MXx8fHwxNzYyODU4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A visual journey through our facilities, projects, and automation solutions
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="factory" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="factory">Factory & Facility</TabsTrigger>
              <TabsTrigger value="robotics">Robotic Systems</TabsTrigger>
              <TabsTrigger value="automation">Automation Equipment</TabsTrigger>
              <TabsTrigger value="events">Events & Training</TabsTrigger>
            </TabsList>

            {['factory', 'robotics', 'automation', 'events'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages[category as keyof typeof galleryImages].map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                    >
                      <div className="relative h-80">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white mb-2">{image.title}</h3>
                        <p className="text-white/90 text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Want to See More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a factory visit or request a demonstration of our automation solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Factory Visit
            </Button>
            <Button
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
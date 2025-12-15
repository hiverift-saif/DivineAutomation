import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import spmMachine1 from 'figma:asset/2665cbff48216330b5041f2b7b33ca3147d3d92c.png';
import spmMachine2 from 'figma:asset/dce28f2356e7253b338e64618ce6d269d8428b7f.png';
import spmMachine3 from 'figma:asset/3183a62d67c62201d962803170b6e27db9a43faf.png';
import testingMachine from 'figma:asset/72ffcbe0ef00b405fecd92d2bf213fda151c44b0.png';
import washingMachine from 'figma:asset/fbbec368824a518afb4a00aeefa976a82d38df81.png';
import controlPanel from 'figma:asset/b74b7d0eaa180d78acbe2c779455e1a400b58f94.png';
import automationPanel from 'figma:asset/7e05c796984544e040a9907c0d69206ee125e4c8.png';
import roboticCell from 'figma:asset/a092a76cc5c0377ef164e382d7b5bf60f5d43567.png';
import acKnobTester from 'figma:asset/a1bf2e7b1d5453b7520086d1ea22b6ba8ae07eb8.png';
import acKnobTester2 from '../assets/machine.jpeg';


interface GalleryPageProps {
  setCurrentPage?: (page: string) => void;
}

export function GalleryPage({ setCurrentPage }: GalleryPageProps) {
  const galleryImages = [
    {
      url: spmMachine1,
      title: 'SPM Machine with Control Panel',
      description: 'Custom-designed special purpose machine with integrated control system'
    },
    {
      url: spmMachine2,
      title: 'Hydraulic Leak Testing Machine',
      description: 'Hydraulic leak testing machine made for 4 wheeler cylinder heads leak testing'
    },
    {
      url: spmMachine3,
      title: 'Dual Leak Testing Machine',
      description: 'Dual leak testing machine for pistons of automobile using French ATEQ instrument'
    },
    {
      url: testingMachine,
      title: 'Compressor Washing & Noise Testing Machine',
      description: 'Machine made to run glycol through compressors to wash internal parts and check noise generated and plot graphs'
    },
    {
      url: washingMachine,
      title: 'Washing Drying & Oiling Machine',
      description: 'Washing, drying and oiling machine used for Conrods of automobile industry'
    },
    {
      url: controlPanel,
      title: 'Digital Control System',
      description: 'System to detect any dirt, crack, coolant inside the grooves of pistons used for automobiles'
    },
    {
      url: automationPanel,
      title: 'Automated Control Cabinet',
      description: 'PLC-based control cabinet with HMI interface for process automation'
    },
    {
      url: roboticCell,
      title: 'Industrial Robotic Spot Welding Cell',
      description: 'Automated robotic cell for precision spot welding operations'
    },
    {
      url: acKnobTester,
      title: 'AC Knob Torque Testing Machine - Subros',
      description: 'Machine to measure the torque required to move car AC knobs in different modes and plot a graph with automatic data recording using laser bar code reader'
    },
    //     {
    //   url: acKnobTester,
    //   title: 'AC Knob Torque Testing Machine - Subros',
    //   description: 'It is an automatic tile cutting machine which cuts zypsum type partition or ceiling boards into size using diamond cutter.'
    // }


    
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1705147217444-b770c692f8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMTc5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white"
                >
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-blue-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
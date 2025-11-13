import { Factory, Car, Cpu, Cable, Zap, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import marutiLogo from 'figma:asset/b7937979a42c9dd4faead853fda18f683d6357b0.png';
import tataLogo from 'figma:asset/eb5617c1fb8c4f18cf1db67cafb34a6e0fe3d26c.png';
import fanucLogo from 'figma:asset/d1a1e0e548ba83a4192bc5dfcc9e1e9a7018469b.png';
import subrosLogo from 'figma:asset/8b4c60871cf272830d208c201d93ceaef386532b.png';
import hindalcoLogo from 'figma:asset/abf0bdfd5c44da8e61acca9223acb92e7b1382f7.png';
import sunbeamLogo from 'figma:asset/2af6ed1003c8b5265960c7652e34d49de31f48e2.png';
import jbmLogo from 'figma:asset/b23eca0b74141dd22af41743b37230e2acfef5c5.png';
import caparoLogo from 'figma:asset/a10b0a2c5c63701bb34e298569cb1d48f0c72918.png';

interface ClientsPageProps {
  setCurrentPage?: (page: string) => void;
}

export function ClientsPage({ setCurrentPage }: ClientsPageProps) {
  const automotiveClients = [
    { name: 'Maruti Udyog Ltd.', logo: marutiLogo },
    { name: 'Tata Motors Ltd.', logo: tataLogo },
    { name: 'Jay Bharat Maruti Ltd.', logo: jbmLogo },
    { name: 'Caparo Maruti Ltd.', logo: caparoLogo },
    { name: 'Subros Ltd.', logo: subrosLogo },
    { name: 'Sunbeam Auto', logo: sunbeamLogo },
    { name: 'Satyam Auto Components' },
    { name: 'Raunaq Auto Components Ltd.' },
    { name: 'Amtek Ring Gear Ltd.' },
    { name: 'Gabriel India Ltd.' },
    { name: 'Munjal Showa Ltd.' },
    { name: 'Sona Koyo Steering Systems' },
    { name: 'Lumax Industries' },
    { name: 'Motherson Sumi Systems' }
  ];

  const engineeringClients = [
    { name: 'Hindalco Industries', logo: hindalcoLogo },
    { name: 'Jindal Steel & Power' },
    { name: 'SAIL (Steel Authority of India)' },
    { name: 'Napco Gear' },
    { name: 'Precision Engineering Works' },
    { name: 'TRW India' },
    { name: 'Rane Brake Lining' },
    { name: 'Ucal Fuel Systems' },
    { name: 'Machino Plastics' },
    { name: 'Indian Seamless Metal Tubes' }
  ];

  const electricalClients = [
    { name: 'Fanuc India Ltd.', logo: fanucLogo },
    { name: 'Siemens Ltd.' },
    { name: 'ABB India Ltd.' },
    { name: 'Havells India' },
    { name: 'Polycab Wires' },
    { name: 'KEI Industries' },
    { name: 'RR Kabel' },
    { name: 'Universal Cables' },
    { name: 'Finolex Cables' },
    { name: 'Gloster Cables' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 text-white overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MjgxNTUzOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Valued Clients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white mb-4">Our Valued Clients</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted by leading organizations across automotive, engineering, 
            and electrical industries
          </p>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-blue-900 mb-2">100+</div>
                <p className="text-gray-600">Satisfied Clients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-blue-900 mb-2">500+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-blue-900 mb-2">95%</div>
                <p className="text-gray-600">Client Retention Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients by Industry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="automotive" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="automotive">
                <Car className="h-4 w-4 mr-2" />
                Automotive Clients
              </TabsTrigger>
              <TabsTrigger value="engineering">
                <Building2 className="h-4 w-4 mr-2" />
                Engineering Clients
              </TabsTrigger>
              <TabsTrigger value="electrical">
                <Zap className="h-4 w-4 mr-2" />
                Electrical & Electronics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="automotive">
              <div className="mb-8">
                <h3 className="text-blue-900 mb-4">Automotive Industry Clients</h3>
                <p className="text-gray-700 mb-8">
                  We have successfully delivered automation solutions to leading automotive 
                  manufacturers and component suppliers, helping them achieve higher productivity, 
                  quality, and cost efficiency.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {automotiveClients.map((client, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-700 text-sm">{client.name}</p>
                      {client.logo && <img src={client.logo} alt={client.name} className="h-10 w-10 mx-auto mt-2" />}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="engineering">
              <div className="mb-8">
                <h3 className="text-blue-900 mb-4">Engineering & Manufacturing Clients</h3>
                <p className="text-gray-700 mb-8">
                  Our expertise extends to heavy engineering, steel plants, and precision 
                  engineering companies, providing robust automation solutions for demanding 
                  industrial environments.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {engineeringClients.map((client, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-700 text-sm">{client.name}</p>
                      {client.logo && <img src={client.logo} alt={client.name} className="h-10 w-10 mx-auto mt-2" />}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="electrical">
              <div className="mb-8">
                <h3 className="text-blue-900 mb-4">Electrical & Electronics Clients</h3>
                <p className="text-gray-700 mb-8">
                  We serve major players in the electrical and electronics sector, including 
                  cable manufacturers, automation companies, and electronic component manufacturers.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {electricalClients.map((client, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-700 text-sm">{client.name}</p>
                      {client.logo && <img src={client.logo} alt={client.name} className="h-10 w-10 mx-auto mt-2" />}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Divine Automation has been instrumental in transforming our manufacturing process. Their robotic welding cells have significantly improved our productivity and quality.",
                company: "Leading Automotive Manufacturer"
              },
              {
                quote: "The team's expertise in SPM design and automation is exceptional. They delivered a complete turnkey solution within our timeline and budget.",
                company: "Precision Engineering Company"
              },
              {
                quote: "Outstanding technical support and innovative solutions. Divine Automation understands our unique requirements and delivers customized automation systems.",
                company: "Major Auto Component Supplier"
              },
              {
                quote: "Their testing and inspection systems have helped us achieve zero-defect manufacturing. The ROI has been phenomenal.",
                company: "Industrial Equipment Manufacturer"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-blue-200">— {testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-blue-900 mb-4">Join Our Growing Client Family</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the difference that 40+ years of expertise can make to your operations
          </p>
          <Button 
            onClick={() => setCurrentPage?.('contact')}
            className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}